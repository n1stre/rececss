import GenerateStylesheetAssets from "../../2_usecases/GenerateStylesheetAssets";
import { IInputOutput } from "../interfaces";
import { AllRulesetsFactory } from "../RulesetsFactory";
import RulesetsBuilder from "../RulesetsBuilder";

export default () => {
  return class StylesheetsController {
    constructor(private io: IInputOutput) {}

    async generateAssets() {
      const factory = AllRulesetsFactory.new(RulesetsBuilder.new());
      const usecase = GenerateStylesheetAssets.new(factory);
      const assets = await usecase.exec(this.io.getStylesheetsAssetsInput());
      await this.io.outputAssets(assets);
    }
  };
};
