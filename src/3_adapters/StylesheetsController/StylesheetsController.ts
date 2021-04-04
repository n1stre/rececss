import Stylesheet from "../../1_entities/Stylesheet";
import GenerateStylesheetAssets from "../../2_usecases/GenerateStylesheetAssets";
import { IInputOutput } from "../interfaces";
import RulesetsFactory from "../RulesetsFactory";

export default class StylesheetsController {
  private constructor(private io: IInputOutput) {}
  private StylesheetFactory = Stylesheet.createFactory(this.io.getStylesheetPropsInput()); // prettier-ignore
  private RulesetsFactory = RulesetsFactory.create(this.io.getRulesetsBuilderInput()); // prettier-ignore

  static create(io: IInputOutput) {
    return new StylesheetsController(io);
  }

  async generateAssets() {
    const { RulesetsFactory, StylesheetFactory } = this;
    const props = { RulesetsFactory, StylesheetFactory };
    const usecase = GenerateStylesheetAssets.create(props);
    const assets = await usecase.exec(this.io.getStylesheetsAssetsInput());

    await this.io.outputAssets(assets);
  }
}
