import {
  IConfig,
  IConfigDTO,
  IConfigRuleMixedUnitlessValues,
  IConfigRuleMixedValues,
  IConfigRuleUnitValue,
  IConfigRuleUnit,
} from "./interfaces";

export default (props: {
  isRangeable: (v: any) => boolean;
  rangeInclusive: (v: any) => number[];
}) =>
  class Config implements IConfig {
    constructor(private dto: IConfigDTO) {}

    getRulesetsValues() {
      const { rules } = this.dto;

      return {
        size: {
          width: this.parseValues(rules.width),
          height: this.parseValues(rules.height),
        },
        padding: {
          shorthand: this.parseValues(rules.padding?.shorthand),
          edges: this.parseValues(rules.padding?.edges),
        },
        margin: {
          shorthand: this.parseValues(rules.margin?.shorthand),
          edges: this.parseValues(rules.margin?.edges),
        },
        offset: this.parseValues(rules.offset),
        flex: {
          shorthand: this.parseValues(rules.flex?.shorthand),
          basis: this.parseValues(rules.flex?.basis),
          grow: this.parseValues(rules.flex?.grow),
          shrink: this.parseValues(rules.flex?.shrink),
          order: this.parseValues(rules.flex?.order),
        },
        font: {
          shorthand: rules.font?.shorthand,
          size: this.parseValues(rules.font?.size),
          family: rules.font?.family,
        },
        border: {
          shorthand: rules.border?.shorthand,
          radius: this.parseValues(rules.border?.radius),
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

    shouldSplitOutputByMedia() {
      return Boolean(this.dto.output.splitByMedia);
    }

    private parseValues(
      values?: IConfigRuleMixedValues | IConfigRuleMixedUnitlessValues,
    ) {
      if (!values) return {};

      const parsedNamed = values.named || {};
      const parsedUnits = Array.isArray(values.units)
        ? this.parseUnitValues(values.units)
        : this.parseUnits(values.units);

      return { ...parsedNamed, ...parsedUnits };
    }

    private parseUnits(
      units?: Partial<Record<IConfigRuleUnit, IConfigRuleUnitValue[]>>,
    ) {
      if (!units) return {};
      return Object.keys(units).reduce((acc, unit: IConfigRuleUnit) => {
        const unitValues = units[unit] || [];
        const parsedValues = this.parseUnitValues(unitValues, unit);
        return { ...acc, ...parsedValues };
      }, {});
    }

    private parseUnitValues(
      values?: IConfigRuleUnitValue[],
      unit?: IConfigRuleUnit,
    ) {
      if (!values) return {};
      const mapped = values.map((v) => this.parseUnitValueRanges(v)).flat();
      const sorted = mapped.sort((a, b) => Number(a) - Number(b));
      const parsed = sorted.map((v) => this.parseValue(v, unit));
      return this.mapParsedValuesToRecord(parsed);
    }

    private parseValue(targetValue: number, unit?: IConfigRuleUnit) {
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

    private parseUnitValueRanges(value: IConfigRuleUnitValue) {
      return props.isRangeable(value) ? props.rangeInclusive(value) : value;
    }
  };
