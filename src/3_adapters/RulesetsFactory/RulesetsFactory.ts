import {
  IRulesetsFactory,
  IUtilityRulesetsDTO,
} from "../../2_usecases/interfaces";
import RulesetsBuilder from "../RulesetsBuilder";
import * as I from "./RulesetsFactory.interface";
import createMappers from "./mappers";

export default class RulesetsFactory implements IRulesetsFactory {
  private constructor(private dto: I.DTO) {}
  private builder = RulesetsBuilder.create(this.dto);
  private mappers = createMappers(this.builder);

  static create(dto: I.DTO = {}) {
    return new RulesetsFactory(dto);
  }

  createAll(values: IUtilityRulesetsDTO) {
    Object.entries(values).forEach((entry) => {
      const key = entry[0] as keyof I.CSSPropertiesMap;
      const value = entry[1] as Record<string, string>;
      const mapper = this.mappers[key];
      if (mapper) return mapper(value);
      else return this.builder.mapValuesToRulesets(value, [key]);
    });

    this.createFilterCompound(values);

    return this.builder.getResult();
  }

  createFilterCompound(values: IUtilityRulesetsDTO) {
    if (
      values.filterBlur ||
      values.filterBrightness ||
      values.filterContrast ||
      values.filterDropShadow ||
      values.filterGrayscale ||
      values.filterHueRotate ||
      values.filterInvert ||
      values.filterOpacity ||
      values.filterSaturate ||
      values.filterSepia
    ) {
      this.builder.mapKeywordsToRulesets(["filterCompound"]);
    }
  }
}
