import * as IConfig from "./Config.interfaces";

export default class Config implements IConfig.Instance {
  private constructor(private dto: IConfig.DTO, private props: IConfig.Props) {}

  static createFactory(props: IConfig.Props) {
    const create = (dto: IConfig.DTO) => Config.create(dto, props);
    return Object.freeze({ create });
  }

  static create(dto: IConfig.DTO, props: IConfig.Props) {
    return new Config(dto, props);
  }

  getMedia() {
    return this.dto.media || {};
  }

  getOutputPath() {
    return this.dto.output.path;
  }

  getOutputFilename() {
    return this.dto.output.filename;
  }

  getOutputExtension() {
    return this.dto.output.extension;
  }

  getMediaSeparator() {
    return this.dto.sep?.media;
  }

  getStatesSeparator() {
    return this.dto.sep?.state;
  }

  getClassnames() {
    return this.dto.classes || {};
  }

  getClassnameStates() {
    return this.dto.states || {};
  }

  shouldSplitOutputByMedia() {
    return Boolean(this.dto.output.splitByMedia);
  }

  getPurgeContent() {
    return this.dto.output.purge?.content || [];
  }

  getPurgeSafelist() {
    return this.dto.output.purge?.safelist || [];
  }

  getPurgeBlocklist() {
    return this.dto.output.purge?.blocklist || [];
  }

  getRulesetsValues() {
    return {
      size: this.getSize(),
      padding: this.getPadding(),
      margin: this.getMargin(),
      offset: this.parseUnits(this.dto.rules.offset),
      flex: this.getFlex(),
      font: this.getFont(),
      border: this.getBorder(),
      background: this.getBackground(),
      shadow: this.dto.rules.shadow,
      color: this.dto.rules.color,
    };
  }

  private getSize() {
    return {
      width: this.parseUnits(this.dto.rules.width),
      height: this.parseUnits(this.dto.rules.height),
    };
  }

  private getPadding() {
    return {
      shorthand: this.dto.rules.padding?.shorthand,
      edges: this.parseUnits(this.dto.rules.padding?.edges),
    };
  }

  private getMargin() {
    return {
      shorthand: this.dto.rules.margin?.shorthand,
      edges: this.parseUnits(this.dto.rules.margin?.edges),
    };
  }

  private getFlex() {
    return {
      shorthand: this.parseUnits(this.dto.rules.flex?.shorthand),
      basis: this.parseUnits(this.dto.rules.flex?.basis),
      grow: this.parseUnits(this.dto.rules.flex?.grow),
      shrink: this.parseUnits(this.dto.rules.flex?.shrink),
      order: this.parseUnits(this.dto.rules.flex?.order),
      grid: this.dto.rules.flex?.grid,
    };
  }

  private getFont() {
    return {
      shorthand: this.dto.rules.font?.shorthand,
      size: this.parseUnits(this.dto.rules.font?.size),
      family: this.dto.rules.font?.family,
      lineHeight: this.parseUnits(this.dto.rules.font?.lineHeight),
    };
  }

  private getBorder() {
    return {
      shorthand: this.dto.rules.border?.shorthand,
      radius: this.parseUnits(this.dto.rules.border?.radius),
    };
  }

  private getBackground() {
    return {
      shorthand: this.dto.rules.background?.shorthand,
      color: this.dto.rules.background?.color,
    };
  }

  private parseUnits(rule?: IConfig.Rule) {
    if (!rule) return {};
    return Object.keys(rule).reduce((acc, key) => {
      if (!this.isRuleUnit(key)) return { ...acc, [key]: rule[key] };
      return { ...acc, ...this.parseRuleUnit(rule, key) };
    }, {});
  }

  private parseRuleUnit(rule: IConfig.Rule, key: IConfig.RuleUnit) {
    const values = rule[key] || [];
    const mapped = values.map((v) => this.parseUnitValueRanges(v)).flat();
    const sorted = mapped.sort((a, b) => a - b);
    const parsed = sorted.map((v) => this.parseValue(v, this.unitsMap[key]));
    return this.mapParsedValuesToRecord(parsed);
  }

  private parseValue(targetValue: number, unit: string) {
    let key = String(targetValue);
    let value = String(targetValue);
    if (unit && unit != "px") key += unit;
    if (unit) value += unit;
    return { key, value };
  }

  private mapParsedValuesToRecord(values: { key: string; value: string }[]) {
    const result: Record<string, string> = {};
    values.forEach((v) => (result[v.key] = v.value));
    return result;
  }

  private parseUnitValueRanges(value: IConfig.UnitValue) {
    return this.props.isRangeable(value)
      ? this.props.rangeInclusive(value)
      : value;
  }

  private isRuleUnit(key: string): key is IConfig.RuleUnit {
    return key in this.unitsMap;
  }

  private get unitsMap() {
    return {
      $cm: "cm",
      $mm: "mm",
      $Q: "Q",
      $in: "in",
      $pc: "pc",
      $pt: "pt",
      $px: "px",
      $em: "em",
      $ex: "ex",
      $ch: "ch",
      $rem: "rem",
      $lh: "lh",
      $vw: "vw",
      $vh: "vh",
      $vmin: "vmin",
      $vmax: "vmax",
      $percent: "%",
      $pct: "%",
      $number: "",
      $num: "",
    };
  }
}
