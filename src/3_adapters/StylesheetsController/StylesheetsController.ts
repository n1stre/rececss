import Stylesheet from "../../1_entities/Stylesheet";
import GenerateStylesheetAssets from "../../2_usecases/GenerateStylesheetAssets";
import { IInputOutput, ICSSProcessor } from "../interfaces";
import RulesetsFactory from "../RulesetsFactory";

export default class StylesheetsController {
  private constructor(
    private io: IInputOutput,
    private cssProcessor: ICSSProcessor,
  ) {}

  static create(io: IInputOutput, cssProcessor: ICSSProcessor) {
    return new StylesheetsController(io, cssProcessor);
  }

  async generateAssets() {
    const usecase = GenerateStylesheetAssets.create(this.factories);
    const rawAssets = await usecase.exec(this.io.getStylesheetsAssetsInput());
    const assets = await this.cssProcessor.removeUnused(rawAssets);
    await this.io.outputAssets(assets);
  }

  private get factories() {
    // prettier-ignore
    return {
      RulesetsFactory: RulesetsFactory.create(this.io.getRulesetsBuilderInput()),
      StylesheetFactory: Stylesheet.createFactory(this.io.getStylesheetPropsInput()),
    };
  }
}
