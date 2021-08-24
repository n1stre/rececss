import GenerateStylesheetAssets from "../../2_usecases/GenerateStylesheetAssets";
import { IInputOutput, ICSSProcessor } from "../interfaces";

export default class StylesheetsController {
  private constructor(
    private io: IInputOutput,
    private cssProcessor: ICSSProcessor,
  ) {}

  static create(io: IInputOutput, cssProcessor: ICSSProcessor) {
    return new StylesheetsController(io, cssProcessor);
  }

  async generateAssets() {
    const props = this.io.getAssetsGenerationProps();
    const usecase = GenerateStylesheetAssets.create(props);
    const rawAssets = await usecase.exec(this.io.getAssetsGenerationInput());
    const assets = await this.cssProcessor.removeUnused(rawAssets);
    await this.io.outputAssets(assets);
  }
}
