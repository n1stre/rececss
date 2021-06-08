import * as IConfig from "./Config.interfaces";
import * as defaults from "./Config.defaults";
import { Sizing, Pallete, DataTypes, Units } from "../utils";

export default class Config implements IConfig.Instance {
  private constructor(private dto: IConfig.DTO, private props: IConfig.Props) {}

  private Units = Units.create({ unitsMap: defaults.getUnits() });

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
    const result: IConfig.Variants = {};

    this.forEachRule((key, values) => {
      const current = values.$variants || {};
      const variants = { ...this.commonVariants, ...current };
      this.composeRuleData({ key, variants }).forEach((d) => {
        result[d.key] = Object.assign({}, result[d.key], d.variants);
      });
    });

    return result;
  }

  getRulesetsValues() {
    const result: IConfig.RulesetsValues = {};

    this.forEachRule((key, ruleValue) => {
      const current = this.parseRuleValue(ruleValue);
      const values = { ...this.commonValues, ...current };
      this.composeRuleData({ key, values }).forEach((d) => {
        result[d.key] = Object.assign({}, result[d.key], d.values) as any;
      });
    });

    return result;
  }

  private composeRuleData(data: IConfig.RuleData) {
    const association = defaults.rulesAssociations[data.key];
    const mapValues = association?.values || ((v) => v);
    const mapVariants = association?.variants || ((v) => v);
    const result: IConfig.RuleData[] = [data];

    if (association) {
      association.with.forEach((key) => {
        const values = mapValues(data.values || {});
        const variants = mapVariants(data.variants || {});
        result.push({ key, values, variants });
      });
    }

    return result;
  }

  private parseRuleValue(rule?: any): Record<string, string> {
    if (!rule) return {};
    return Object.keys(rule).reduce((acc, key) => {
      let add: Record<string, string> = {};
      if (this.isValue(key)) add[key] = rule[key];
      else if (this.Units.isUnit(key)) add = this.Units.parse(rule[key], key);
      return { ...acc, ...add };
    }, {});
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
    const extended: IConfig.Rules = {};

    this.forEachRule((key, value) => {
      if (!value.$extend) return (extended[key] = value);
      const defaultValue = this.defaultRules[key] || {};
      const resultValue = DataTypes.deepMerge(defaultValue, value);
      extended[key] = resultValue;
    }, rules);

    return extended;
  };

  private markRuleAsExtendedFromDefault(rule: IConfig.RuleValues) {
    rule.$extend = true;
    return rule;
  }

  private forEachRule(cb: IConfig.ForEachRuleCallback, rules = this.rules) {
    const ruleKeys = Object.keys(rules) as Array<keyof IConfig.Rules>;
    ruleKeys.forEach((key) => cb(key, rules[key]));
  }

  private isValue(key: string) {
    return key[0] !== "$";
  }

  private get defaultRules() {
    return this.props.defaultRules;
  }

  private get commonValues() {
    return this.parseRuleValue(this.rules.all);
  }

  private get commonVariants() {
    return this.rules.all?.$variants || {};
  }
}
