import { DTO, Instance, Props } from "./Ruleset.interface";

const defaultProps: Props = {
  prefixSep: ":",
  suffixSep: ":",
};

export default class Ruleset implements Instance {
  private constructor(private dto: DTO, private props: Props) {
    this.dto = { ...dto };
  }

  static build(partialProps: Partial<Props> = {}) {
    const props = { ...defaultProps, ...partialProps };
    const create = (dto: DTO) => new Ruleset(dto, props);
    return Object.freeze({ create });
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
    const selector = this.getSelector();
    const declarations = this.getDeclarations();
    return selector && `${selector} { ${declarations} }`;
  }

  toDTO() {
    return this.dto;
  }

  private getDeclarations() {
    return this.dto.declarations;
  }

  private getSelector() {
    const base = this.getClassname();
    const pseudos = this.getPseudoClassnames();
    return pseudos ? base + ", " + pseudos : base;
  }

  private getClassnamePrefix() {
    const { prefixSep } = this.props;
    const { classnamePrefix } = this.dto;
    return classnamePrefix ? classnamePrefix + prefixSep : "";
  }

  private getClassname(suffix: string = "") {
    const prefix = this.getClassnamePrefix();
    const classname = prefix + this.dto.classname + suffix;
    return "." + this.escapeClassname(classname);
  }

  private getPseudoClassnames() {
    return Object.entries(this.dto.pseudoClasses || {})
      .map((entry) => this.getPseudoClassname(...entry))
      .join(", ");
  }

  private getPseudoClassname(pseudoSuffix: string, pseudoSelector: string) {
    const suffix = this.props.suffixSep + pseudoSuffix;
    const classname = this.getClassname(suffix);
    return pseudoSelector.replace("$0", classname);
  }

  private escapeClassname(cn: string) {
    return cn
      .replace(/\%/g, "\\%")
      .replace(/\:/g, "\\:")
      .replace(/\./g, "\\.")
      .replace(/\@/g, "\\@");
  }
}
