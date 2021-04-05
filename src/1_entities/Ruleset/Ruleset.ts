import { DTO, Factory, Instance, Props } from "./Ruleset.interface";

const defaultProps: Props = {
  prefixSep: ":",
  suffixSep: ":",
};

export default class Ruleset implements Instance {
  private constructor(private dto: DTO, private props: Props) {
    this.dto = { ...dto };
  }

  static createFactory(partialProps: Partial<Props> = {}): Factory {
    const props = { ...defaultProps, ...partialProps };
    return Object.freeze({ create: (dto: DTO) => new Ruleset(dto, props) });
  }

  static create(dto: DTO) {
    return new Ruleset(dto, defaultProps);
  }

  addClassnamePrefix(prefix: string) {
    this.dto.classnamePrefix = prefix;
    return this;
  }

  toPrefixedString(prefix: string) {
    return this.addClassnamePrefix(prefix).toString();
  }

  toString() {
    const selectors = this.getSelectors();
    return selectors && `${selectors} { ${this.declarations} }`;
  }

  toDTO() {
    return this.dto;
  }

  private getSelectors() {
    const base = this.getClassnameSelector();
    const states = this.getStateClassnames();
    return states ? base + ", " + states : base;
  }

  private getStateClassnames() {
    return Object.entries(this.dto.classnameStates || {})
      .map((entry) => this.getStateClassname(...entry))
      .join(", ");
  }

  private getStateClassname(stateSuffix: string, stateSelector: string) {
    const suffix = this.suffixSep + stateSuffix;
    const classname = this.getClassnameSelector(suffix);
    return stateSelector.replace("$0", classname);
  }

  private getClassnameSelector(suffix: string = "") {
    const rawClassname = this.classnamePrefix + this.dto.classname + suffix;
    const classname = "." + this.escapeClassname(rawClassname);
    return this.transformSelector(classname);
  }

  private escapeClassname(cn: string) {
    const chars = ["%", ":", ".", "@"];
    const reg = (char: string) => new RegExp(`\\${char}`, "g");
    return chars.reduce((cn, char) => cn.replace(reg(char), `\\${char}`), cn);
  }

  private transformSelector(cn: string) {
    return this.dto.selectorTransform
      ? this.dto.selectorTransform.replace("$0", cn)
      : cn;
  }

  private get declarations() {
    return this.dto.declarations || "";
  }

  private get classnamePrefix() {
    const { classnamePrefix } = this.dto;
    return classnamePrefix ? classnamePrefix + this.prefixSep : "";
  }

  private get prefixSep() {
    return this.props.prefixSep || defaultProps.prefixSep;
  }

  private get suffixSep() {
    return this.props.suffixSep || defaultProps.suffixSep;
  }
}
