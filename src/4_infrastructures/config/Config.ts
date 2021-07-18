import * as IConfig from "./Config.interfaces";
import * as defaults from "./Config.defaults";
import { Units, DataTypes } from "../utils";

export default class Config implements IConfig.Instance {
  private constructor(private dto: IConfig.DTO, private props: IConfig.Props) {}

  private Units = Units.create({ unitsMap: defaults.units });

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
    const variantsMap = this.variants;
    const commonVariants = this.commonVariants;
    const associationsMap = this.associations;
    const result: IConfig.Variants = {};

    Object.keys(variantsMap).forEach((key: keyof IConfig.Variants) => {
      const variants = { ...commonVariants, ...variantsMap[key] };
      const association = associationsMap[key];
      result[key] = Object.assign({}, result[key], variants);

      if (association?.with) {
        const mapVariants = association?.variants || ((v: any) => v);
        const associatedVariants = mapVariants(variants || {});
        association.with.forEach((key: keyof IConfig.Variants) => {
          result[key] = Object.assign({}, result[key], associatedVariants);
        });
      }
    });

    return result;
  }

  getRulesetsValues() {
    const valuesMap = this.values;
    const commonValues = this.commonValues;
    const associationsMap = this.associations;
    const result: IConfig.Values = {};

    Object.keys(valuesMap).forEach((key: keyof IConfig.RawValues) => {
      const value = valuesMap[key];
      const current = this.parseRuleValue(value);
      const values = { ...commonValues, ...current };
      const association = associationsMap[key];
      result[key] = Object.assign({}, result[key], values) as any;

      if (association?.with) {
        const mapValues = association?.values || ((v: any) => v);
        const associatedValues = mapValues(values || {});
        association.with.forEach((key: keyof IConfig.RawValues) => {
          result[key] = Object.assign({}, result[key], associatedValues);
        });
      }
    });

    return result;
  }

  private parseRuleValue(rule?: any): Record<string, string> {
    if (!rule) return {};
    return Object.keys(rule).reduce((acc, key) => {
      let add: Record<string, string> = {};
      if (key[0] !== "$") add[key] = rule[key];
      else if (this.Units.isUnit(key)) add = this.Units.parse(rule[key], key);
      return { ...acc, ...add };
    }, {});
  }

  private get values() {
    const defaults = this.props.defaultValues || {};
    return DataTypes.isFunction(this.dto.values)
      ? this.dto.values({ defaults })
      : DataTypes.deepMerge(defaults, this.dto.values);
  }

  private get variants() {
    const defaults = this.props.defaultVariants || {};
    return DataTypes.isFunction(this.dto.variants)
      ? this.dto.variants({ defaults })
      : DataTypes.deepMerge(defaults, this.dto.variants || {});
  }

  private get associations() {
    const defaults = this.props.defaultAssociations || {};
    return DataTypes.isFunction(this.dto.associations)
      ? this.dto.associations({ defaults })
      : DataTypes.deepMerge(defaults, this.dto.associations || {});
  }

  private get commonValues() {
    return this.parseRuleValue(this.values.all);
  }

  private get commonVariants() {
    return this.variants.all || {};
  }
}
