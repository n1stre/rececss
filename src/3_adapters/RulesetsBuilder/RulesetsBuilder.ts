import Ruleset, { IRuleset } from "../../1_entities/Ruleset";
import {
  DTO,
  RulesetNamesMap,
  Instance,
  Classname,
  Declaration,
} from "./RulesetsBuilder.interface";
import classNamesMap from "./RulesetsBuilder.classnames";
import declarationsMap from "./RulesetsBuilder.declarations";

type TRulesetName = keyof RulesetNamesMap;
type TRulesetNames = TRulesetName[];
type TValues = Record<string, string>;

export default class RulesetsBuilder implements Instance {
  private result: IRuleset.Instance[];
  private constructor(private dto?: DTO) {
    this.result = [];
  }

  static create(dto?: DTO) {
    return new RulesetsBuilder(dto);
  }

  getResult() {
    const result = this.result;
    this.result = [];
    return result;
  }

  getResultDTO() {
    return this.getResult().map((ruleset) => ruleset.toDTO());
  }

  addRulesetsFromValues(values: TValues, rulesetNames: TRulesetNames) {
    if (!values) return;
    Object.entries(values).forEach((v) =>
      this.addRulesetsFromNames(rulesetNames, v),
    );
  }

  addRulesetsFromNames(rulesetNames: TRulesetNames, val?: [string, string]) {
    rulesetNames.forEach((name) => {
      const classname = this.getClassname(name, val?.[0]);
      const declarations = this.getDeclaration(name, val?.[1]);
      this.addRulesetWithStates({ classname, declarations });
    });
  }

  addRulesetWithStates(dto: IRuleset.DTO) {
    dto.classnameStates = this.classnameStates;
    this.addRuleset(dto);
  }

  addRuleset(dto: IRuleset.DTO) {
    const ruleset = this.RulesetFactory.create(dto);
    this.result.push(ruleset);
  }

  getClassname(name: Classname, value?: string) {
    return this.interpolateRulesetData(this.classnamesMap[name], value);
  }

  getDeclaration(name: Declaration, value?: string) {
    return this.interpolateRulesetData(declarationsMap[name], value);
  }

  private get RulesetFactory() {
    return Ruleset.createFactory(this.dto?.rulesetProps);
  }

  private get classnamesMap() {
    return Object.assign({}, classNamesMap, this.dto?.classnamesMap);
  }

  private get classnameStates() {
    return this.dto?.classnameStates;
  }

  private interpolateRulesetData(data: string, value?: string) {
    return value ? data.replace(/\$0/g, value) : data;
  }
}
