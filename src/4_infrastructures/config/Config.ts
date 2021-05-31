import * as IConfig from "./Config.interfaces";
import * as defaults from "./Config.defaults";
import { Sizing, Pallete, Range, DataTypes } from "../utils";

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

  getVariantSeparator() {
    return this.dto.sep?.variant;
  }

  getClassnames() {
    return this.dto.classes || {};
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

  getRulesetsVariants() {
    return Object.fromEntries(
      Object.entries(this.rules).map((e) => {
        const key = e[0];
        const variants = e[1].$variants;
        return [key, variants];
      }),
    );
  }

  getRulesetsValues() {
    return Object.fromEntries(
      Object.entries(this.rules).map((e) => {
        const key = e[0];
        const values = { ...this.globalValues, ...this.parseRuleValue(e[1]) };
        return [key, values];
      }),
    );
  }

  private parseRuleValue(rule?: any): Record<string, string> {
    if (!rule) return {};
    return Object.keys(rule).reduce((acc, key) => {
      const value = rule[key];
      let add: Record<string, string> = {};
      if (this.isValue(key)) add[key] = value;
      else if (this.isUnit(key)) add = this.parseUnitValue(value, key);
      return { ...acc, ...add };
    }, {});
  }

  private parseUnitValue(values: IConfig.RuleValue, key: IConfig.RuleUnit) {
    if (!Array.isArray(values)) return {};
    const mapped = values.map((v) => this.parseUnitValueRanges(v)).flat();
    const sorted = mapped.sort((a, b) => a - b);
    const parsed = sorted.map((v) => this.appendUnit(v, this.unitsMap[key]));
    return this.mapParsedValuesToRecord(parsed);
  }

  private appendUnit(targetValue: number, unit: string) {
    let key = String(targetValue);
    let value = String(targetValue);
    if (value === "0") return { key: "0", value: "0" };
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
    return Range.isRangeArray(value)
      ? Range.createInclusiveFromArray(value)
      : value;
  }

  private isValue(key: string) {
    return key[0] !== "$";
  }

  private isUnit(key: string): key is IConfig.RuleUnit {
    return key in this.unitsMap;
  }

  private get unitsMap() {
    return defaults.getUnits();
  }

  private get defaultRules() {
    return this.props.defaultRules || {};
  }

  private get globalValues() {
    return this.parseRuleValue(this.rules.all);
  }

  private get rules() {
    if (DataTypes.isFunction(this.dto.rules)) {
      const extend = this.markRuleAsExtendedFromDefault;
      const defaults = this.defaultRules;
      const rules = this.dto.rules({ Sizing, Pallete, extend, defaults });
      return this.extendMarkedRulesFromDefault(rules);
    }

    return DataTypes.deepMerge(this.defaultRules, this.dto.rules);
  }

  private extendMarkedRulesFromDefault = (
    rules: IConfig.Rules,
  ): IConfig.Rules => {
    return Object.fromEntries(
      Object.entries(rules).map((e) => {
        const key = e[0] as keyof IConfig.Rules;
        const value = e[1] as IConfig.RuleValues;
        const defaultValue = this.defaultRules[key] || {};
        if (!value.$extend) return e;
        return [key, DataTypes.deepMerge(defaultValue, value)];
      }),
    );
  };

  private markRuleAsExtendedFromDefault(rule: IConfig.RuleValues) {
    rule.$extend = true;
    return rule;
  }
}
