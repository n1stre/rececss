import Ruleset, { IRuleset } from "../../1_entities/Ruleset";
import classNamesMap from "./RulesetsBuilder.classnames";
import declarationsMap from "./RulesetsBuilder.declarations";
import * as I from "./RulesetsBuilder.interface";

export default class RulesetsBuilder implements I.Instance {
  private result: IRuleset.Instance[];
  private constructor(private dto?: I.DTO) {
    this.result = [];
  }

  static create(dto?: I.DTO) {
    return new RulesetsBuilder(dto);
  }

  getResult() {
    return this.result;
  }

  getResultDTO() {
    return this.getResult().map((ruleset) => ruleset.toDTO());
  }

  mapValuesToRulesets(
    values: Record<string, string> | undefined,
    rulesetNames: Array<keyof I.CSSPropertiesMap>,
  ) {
    if (!values) return;
    Object.entries(values).forEach((val) =>
      rulesetNames.forEach((name) => {
        const classname = this.getClassname(name, val[0]);
        const declarations = this.getDeclaration(name, val[1]);
        const classnameVariants = this.getVariants(name);
        this.addRuleset({ classname, declarations, classnameVariants });
      }),
    );
  }

  mapSingleValuesToRulesets(
    values: Record<string, string> | undefined,
    rulesetNames: Array<keyof I.CSSPropertiesMap>,
  ) {
    if (!values) return;
    const filterSingleValue = ([_, v]: string[]) => v.split(" ").length === 1;
    const filteredEntries = Object.entries(values).filter(filterSingleValue);
    const filteredValues = Object.fromEntries(filteredEntries);
    return this.mapValuesToRulesets(filteredValues, rulesetNames);
  }

  addRuleset(dto: IRuleset.DTO) {
    const ruleset = this.RulesetFactory.create(dto);
    this.result.push(ruleset);
  }

  getClassname(name: I.Classname, ...values: I.Placeholders) {
    return this.interpolate(this.classnamesMap[name], values);
  }

  getDeclaration(name: I.Declaration, ...values: I.Placeholders) {
    return this.interpolate(declarationsMap[name], values);
  }

  getVariants(name: keyof I.CSSPropertiesMap) {
    return this.dto?.rulesetVariants?.[name];
  }

  private get RulesetFactory() {
    return Ruleset.createFactory(this.dto?.rulesetProps);
  }

  private get classnamesMap() {
    return Object.assign({}, classNamesMap, this.dto?.classnamesMap);
  }

  private interpolate(data: string, placeholders?: I.Placeholders) {
    if (!placeholders || !placeholders.length) return data;

    placeholders.forEach((value, idx) => {
      if (!value) return;
      data = data.replace(new RegExp(`\\$${idx}`, "g"), value);
    });

    return data;
  }
}
