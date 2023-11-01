import { Units, DataTypes } from "../utils";
import * as IConfig from "./Config.interfaces";
import unitsMap from "./defaults/units";

const units = Units.create({ unitsMap });

export default class Config {
  private constructor(
    private dto: IConfig.DTO,
    private props: IConfig.Props,
  ) {}

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
    return this.dto.separator?.media;
  }

  getVariantSeparator() {
    return this.dto.separator?.variant;
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

  getRulesetsClassnames() {
    return Object.assign({}, this.defaults.classnames, this.dto.classnames);
  }

  getRulesetsDeclarations() {
    return this.defaults.declarations || {};
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
      if (key[0] !== "$") return { ...acc, [key]: rule[key] };
      if (units.isUnit(key)) return { ...acc, ...units.parse(rule[key], key) };
      return acc;
    }, {});
  }

  private get values() {
    const defaults = this.defaults.values || {};
    return DataTypes.isFunction(this.dto.values)
      ? this.dto.values({ defaults })
      : DataTypes.deepMerge(defaults, this.dto.values || {});
  }

  private get variants() {
    const defaults = this.defaults.variants || {};
    return DataTypes.isFunction(this.dto.variants)
      ? this.dto.variants({ defaults })
      : DataTypes.deepMerge(defaults, this.dto.variants || {});
  }

  private get associations() {
    const defaults = this.defaults.associations || {};
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

  private get defaults() {
    return this.props.defaults;
  }
}
