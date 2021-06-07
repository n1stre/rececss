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
    const common = this.commonVariants;
    const variants: IConfig.Variants = {};

    this.forEachRule((key, values) => {
      const prev = variants[key] || {};
      const current = values.$variants || {};
      const newVariants = { ...common, ...prev, ...current };

      variants[key] = newVariants;

      this.forEachRuleAssociation(key, ({ key, mapVariants }) => {
        variants[key] = mapVariants(newVariants);
      });
    });

    return variants;
  }

  getRulesetsValues() {
    const common = this.commonValues;
    const values: IConfig.RulesetsValues = {};

    this.forEachRule((key, ruleValue) => {
      const prev = values[key] || {};
      const current = this.parseRuleValue(ruleValue);
      const newValues = { ...common, ...prev, ...current } as any;

      values[key] = newValues;

      this.forEachRuleAssociation(key, ({ key, mapValues }) => {
        values[key] = mapValues(newValues) as any;
      });
    });

    return values;
  }

  private forEachRule(
    cb: (key: keyof IConfig.Rules, values: IConfig.RuleValues) => void,
    rules = this.rules,
  ) {
    const ruleKeys = Object.keys(rules) as Array<keyof IConfig.Rules>;
    ruleKeys.forEach((key) => cb(key, rules[key]));
  }

  private forEachRuleAssociation(
    key: keyof IConfig.Rules,
    cb: IConfig.RuleAssociationCallback,
  ) {
    const association = defaults.rulesAssociations[key];
    const mapValues = association?.values || ((v) => v);
    const mapVariants = association?.variants || ((v) => v);

    if (association) {
      association.with.forEach((key) => cb({ key, mapValues, mapVariants }));
    }
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

  private isValue(key: string) {
    return key[0] !== "$";
  }

  private get defaultRules() {
    return this.props.defaultRules || {};
  }

  private get commonValues() {
    return this.parseRuleValue(this.rules.all);
  }

  private get commonVariants() {
    return this.rules.all?.$variants || {};
  }
}
