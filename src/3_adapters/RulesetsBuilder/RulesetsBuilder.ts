import { IRulesetDTO } from "../../1_entities/Ruleset/Ruleset.interface";
import {
  IRulesetNamesMap,
  IRulesetsBuilder,
  IRulesetsBuilderFunctions,
} from "./RulesetsBuilder.interface";
import classNamesMap from "./RulesetsBuilder.classnames";
import declarationsMap from "./RulesetsBuilder.declarations";
import * as rulesets from "./rulesets";

type TRulesetName = keyof IRulesetNamesMap;
type TRulesetNames = TRulesetName[];
type TValues = Record<string, string>;

export default () => {
  return class RulesetsBuilder
    implements IRulesetsBuilder, IRulesetsBuilderFunctions {
    private result: IRulesetDTO[];
    private classNamesMap: IRulesetNamesMap;
    private declarationsMap = declarationsMap;

    constructor(classNames?: Partial<IRulesetNamesMap>) {
      this.classNamesMap = Object.assign(classNamesMap, classNames);
      this.result = [];
    }

    addSize = rulesets.makeAddSize(this);

    addMargin = rulesets.makeAddMargin(this);

    addPadding = rulesets.makeAddPadding(this);

    addOffset = rulesets.makeAddOffset(this);

    addFont = rulesets.makeAddFont(this);

    addFlex = rulesets.makeAddFlex(this);

    addBorder = rulesets.makeAddBorder(this);

    addColor = rulesets.makeAddColor(this);

    addText = rulesets.makeAddText(this);

    addZIndex = rulesets.makeAddZIndex(this);

    addDisplay = rulesets.makeAddDisplay(this);

    addPosition = rulesets.makeAddPosition(this);

    addOpacity = rulesets.makeAddOpacity(this);

    addOverflow = rulesets.makeAddOverflow(this);

    addVisibility = rulesets.makeAddVisibility(this);

    addList = rulesets.makeAddList(this);

    addCursor = rulesets.makeAddCursor(this);

    getResult() {
      return this.result;
    }

    addValues(values: TValues, ...rulesetNames: TRulesetNames) {
      if (!values) return;
      Object.entries(values).forEach((v) => this.pushRulesets(rulesetNames, v));
    }

    addStatic(...rulesetNames: TRulesetNames) {
      this.pushRulesets(rulesetNames);
    }

    private pushRulesets(rulesetNames: TRulesetNames, val?: [string, string]) {
      rulesetNames.forEach((name) => {
        const classname = this.getClassname(name, val?.[0]);
        const declarations = this.getDeclaration(name, val?.[1]);
        this.result.push({ classname, declarations });
      });
    }

    private getClassname(name: TRulesetName, value?: string) {
      return this.interpolateRulesetData(this.classNamesMap[name], value);
    }

    private getDeclaration(name: TRulesetName, value?: string) {
      return this.interpolateRulesetData(this.declarationsMap[name], value);
    }

    private interpolateRulesetData(data: string, value?: string) {
      return value ? data.replace(/\$0/g, value) : data;
    }
  };
};
