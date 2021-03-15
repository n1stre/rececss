import {
  IConfig,
  IConfigDTO,
  IConfigRuleMixedUnitlessValues,
  IConfigRuleMixedValues,
  IConfigRuleUnitValue,
  IConfigRuleUnitRange,
} from "../interfaces";

class Config implements IConfig {
  constructor(private dto: IConfigDTO) {}

  getRulesetsValues() {
    return {
      size: { width: {}, height: {} },
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

  private parseMixedValues(values: IConfigRuleMixedValues) {}

  private parseMixedUnitlessValues(values: IConfigRuleMixedUnitlessValues) {}

  private parseUnitValues(values: IConfigRuleUnitValue[]) {
    return values
      .map((v) => this.parseUnitValue(v))
      .flat()
      .sort((a, b) => Number(a) - Number(b));
  }

  private parseUnitValue(value: IConfigRuleUnitValue) {
    return this.isRange(value) ? this.createRange(value) : value;
  }

  private createRange(range: IConfigRuleUnitRange) {
    return utils.rangeInclusive(range[0], range[1], range[2]);
  }

  private isRange(v: IConfigRuleUnitValue): v is IConfigRuleUnitRange {
    return (
      utils.isArray(v) &&
      utils.isNumber(v[0]) &&
      utils.isNumber(v[1]) &&
      utils.isNumber(v[2])
    );
  }
}

export default Config;
