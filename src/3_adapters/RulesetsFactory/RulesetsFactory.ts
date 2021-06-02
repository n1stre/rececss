import RulesetsBuilder from "../RulesetsBuilder";
import classnamesMap from "./RulesetsFactory.classnames";
import declarationsMap from "./RulesetsFactory.declarations";
import * as I from "./RulesetsFactory.interface";
import mapperCreators from "./mappers";

export default class RulesetsFactory {
  private constructor(private dto: I.DTO) {}

  private builder: I.RulesetsBuilder = RulesetsBuilder.create({
    classnamesMap: Object.assign({}, classnamesMap, this.dto.classnamesMap),
    declarationsMap,
    variantsMap: this.dto.variantsMap,
    commonVariants: this.dto.variantsMap.all,
  });

  static create(dto: I.DTO) {
    return new RulesetsFactory(dto);
  }

  createAll(values: I.ConfigurableValues) {
    Object.entries(values).forEach((entry) => {
      const key = entry[0] as keyof I.CSSProperties;
      const value = entry[1] as Record<string, string>;
      const mapper = mapperCreators[key]?.(this.builder);
      if (mapper) return mapper(values);
      else return this.builder.mapValuesToRulesets(value, [key]);
    });

    const compoundsMapper = mapperCreators.compounds?.(this.builder);
    if (compoundsMapper) compoundsMapper(values);

    return this.builder.getResult();
  }
}
