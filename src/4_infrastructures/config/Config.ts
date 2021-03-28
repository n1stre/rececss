import {
  IConfig,
  IConfigDTO,
  IConfigRuleNamedValues,
  IConfigRuleNamedUnits,
  IConfigRuleValue,
  IConfigRuleUnit,
  IConfigRuleUnitValues,
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
          width: this.parseData(rules.width),
          height: this.parseData(rules.height),
        },
        padding: {
          shorthand: this.parseData(rules.padding?.shorthand),
          edges: this.parseData(rules.padding?.edges),
        },
        margin: {
          shorthand: this.parseData(rules.margin?.shorthand),
          edges: this.parseData(rules.margin?.edges),
        },
        offset: this.parseData(rules.offset),
        flex: {
          shorthand: this.parseData(rules.flex?.shorthand),
          basis: this.parseData(rules.flex?.basis),
          grow: this.parseData(rules.flex?.grow),
          shrink: this.parseData(rules.flex?.shrink),
          order: this.parseData(rules.flex?.order),
        },
        font: {
          shorthand: rules.font?.shorthand,
          size: this.parseData(rules.font?.size),
          family: rules.font?.family,
        },
        border: {
          shorthand: rules.border?.shorthand,
          radius: this.parseData(rules.border?.radius),
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

    getPseudoClassSeparator() {
      return this.dto.sep?.pseudoClass;
    }

    getClassnames() {
      return this.dto.classes || {};
    }

    getPseudoClasses() {
      return this.dto.pseudoClasses || {};
    }

    shouldSplitOutputByMedia() {
      return Boolean(this.dto.output.splitByMedia);
    }

    private parseData(data?: IConfigRuleNamedUnits & IConfigRuleNamedValues) {
      if (!data) return {};
      const parsedNamed = data.named || {};
      const parsedUnits = this.parseUnits(data.units);
      const parsedValues = this.parseValues(data.values);
      return { ...parsedNamed, ...parsedUnits, ...parsedValues };
    }

    private parseUnits(units?: IConfigRuleUnitValues) {
      if (!units) return {};
      return Object.keys(units).reduce((acc, unit: IConfigRuleUnit) => {
        const unitValues = units[unit] || [];
        const parsedValues = this.parseValues(unitValues, unit);
        return { ...acc, ...parsedValues };
      }, {});
    }

    private parseValues(values?: IConfigRuleValue[], unit?: IConfigRuleUnit) {
      if (!values) return {};
      const mapped = values.map((v) => this.parseUnitValueRanges(v)).flat();
      const sorted = mapped.sort((a, b) => a - b);
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

    private parseUnitValueRanges(value: IConfigRuleValue) {
      return props.isRangeable(value) ? props.rangeInclusive(value) : value;
    }
  };
