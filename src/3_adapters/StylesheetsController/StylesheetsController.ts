import GenerateStylesheetAssets from "../../2_usecases/GenerateStylesheetAssets";
import { IInputOutput } from "../interfaces";
import { AllRulesetsFactory } from "../RulesetsFactory";
import RulesetsBuilder from "../RulesetsBuilder";

export default () => {
  return class StylesheetsController {
    constructor(private io: IInputOutput) {}

    async generateAssets() {
      const builder = RulesetsBuilder.new(this.io.getRulesetsBuilderInput());
      const assets = await GenerateStylesheetAssets.create({
        RulesetsFactory: AllRulesetsFactory.new(builder),
        rulesetProps: this.io.getRulesetPropsInput(),
        stylesheetProps: this.io.getStylesheetPropsInput(),
      }).exec(this.io.getStylesheetsAssetsInput());

      await this.io.outputAssets(assets);
    }
  };
};
