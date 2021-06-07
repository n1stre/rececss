import RulesetsBuilder from "../RulesetsBuilder";
import classnamesMap from "./RulesetsFactory.classnames";
import declarationsMap from "./RulesetsFactory.declarations";
import compounds from "./compounds";
import * as I from "./RulesetsFactory.interface";

export default class RulesetsFactory {
  private constructor(private dto: I.DTO) {}

  private builder: I.RulesetsBuilder = RulesetsBuilder.create({
    classnamesMap: Object.assign({}, classnamesMap, this.dto.classnamesMap),
    declarationsMap,
    variantsMap: this.dto.variantsMap,
  });

  static create(dto: I.DTO) {
    return new RulesetsFactory(dto);
  }

  createAll(values: I.ConfigurableValues) {
    Object.entries(values).forEach((entry) => {
      const ruleName = entry[0] as keyof I.CSSProperties;
      const ruleValues = entry[1] as Record<string, string>;
      const compoundRule = compounds[ruleName];
      if (compoundRule) return compoundRule(values, this.builder);
      Object.entries(ruleValues).forEach((e) =>
        this.builder.addRulesetFromKeyword(ruleName, e),
      );
    });

    return this.builder.getResult();
  }
}
