import * as IConfig from "./Config.interfaces";

export default (props: {
  isRangeable: (v: any) => boolean;
  rangeInclusive: (v: any) => number[];
}) =>
  class Config implements IConfig.Instance {
    constructor(private dto: IConfig.DTO) {}

    getRulesetsValues() {
      const { rules } = this.dto;

      return {
        size: {
          width: this.parseUnits(rules.width),
          height: this.parseUnits(rules.height),
        },
        padding: {
          shorthand: rules.padding?.shorthand,
          edges: this.parseUnits(rules.padding?.edges),
        },
        margin: {
          shorthand: rules.margin?.shorthand,
          edges: this.parseUnits(rules.margin?.edges),
        },
        offset: this.parseUnits(rules.offset),
        flex: {
          shorthand: this.parseUnits(rules.flex?.shorthand),
          basis: this.parseUnits(rules.flex?.basis),
          grow: this.parseUnits(rules.flex?.grow),
          shrink: this.parseUnits(rules.flex?.shrink),
          order: this.parseUnits(rules.flex?.order),
          grid: rules.flex?.grid,
        },
        font: {
          shorthand: rules.font?.shorthand,
          size: this.parseUnits(rules.font?.size),
          family: rules.font?.family,
          lineHeight: this.parseUnits(rules.font?.lineHeight),
        },
        border: {
          shorthand: rules.border?.shorthand,
          radius: this.parseUnits(rules.border?.radius),
        },
        background: {
          shorthand: rules.background?.shorthand,
          color: rules.background?.color,
        },
        color: rules.color,
      };
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
      return props.isRangeable(value) ? props.rangeInclusive(value) : value;
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
  };
