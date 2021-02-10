import { IRulesetDTO } from "../../1_entities/Ruleset/Ruleset.interface";
import { IRulesetsBuilder } from "../../2_usecases/interfaces";
import { IRulesetNamesMap } from "./RulesetsBuilder.interface";

export default () => {
  return class RulesetsBuilder implements IRulesetsBuilder {
    private result: IRulesetDTO[];

    constructor(
      private classNamesMap: IRulesetNamesMap<string>,
      private declarationsMap: IRulesetNamesMap<string>,
    ) {
      this.result = [];
    }

    addSize() {
      this.result.push();
    }

    addMargin(v: Record<string, string>) {
      this.result.push();
    }

    addPadding(v: Record<string, string>) {
      this.result.push();
    }

    addOffset(v: Record<string, string>) {
      this.result.push();
    }

    addZIndex(v: Record<string, string>) {
      this.result.push();
    }

    addFontSize(v: Record<string, string>) {
      this.result.push();
    }

    addFontFamily(v: Record<string, string>) {
      this.result.push();
    }

    addBorder(v: Record<string, string>) {
      this.result.push();
    }

    addBorderRadius(v: Record<string, string>) {
      this.result.push();
    }

    getResult() {
      return this.result;
    }
  };
};
