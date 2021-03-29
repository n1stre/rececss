import { IRuleset } from "../../1_entities/Ruleset";
import {
  IRulesetBuilderDTO,
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
    private result: IRuleset.DTO[];
    private classNamesMap: IRulesetNamesMap;
    private declarationsMap = declarationsMap;
    private pseudoClasses?: Record<string, string>;

    constructor(dto?: IRulesetBuilderDTO) {
      this.classNamesMap = Object.assign(classNamesMap, dto?.classNames);
      this.pseudoClasses = dto?.pseudoClasses;
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

    mapToRulesets(values: TValues, ...rulesetNames: TRulesetNames) {
      if (!values) return;
      Object.entries(values).forEach((v) => this.pushRulesets(rulesetNames, v));
    }

    addRulesets(...rulesetNames: TRulesetNames) {
      this.pushRulesets(rulesetNames);
    }

    private pushRulesets(rulesetNames: TRulesetNames, val?: [string, string]) {
      rulesetNames.forEach((name) => {
        const { pseudoClasses } = this;
        const classname = this.getClassname(name, val?.[0]);
        const declarations = this.getDeclaration(name, val?.[1]);
        this.result.push({ classname, declarations, pseudoClasses });
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
