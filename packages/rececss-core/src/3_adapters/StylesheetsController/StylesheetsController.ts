import GenerateStylesheetAssets from "../../2_usecases/GenerateStylesheetAssets";
import BuildRulesets from "../../2_usecases/BuildRulesets";
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
    const rulesetsProps = this.io.getRulesetsBuildProps();
    const rulesets = BuildRulesets.create(rulesetsProps).exec({
      values: this.io.getRulesetsValues(),
    });

    const assetsProps = this.io.getAssetsGenerationProps();
    const rawAssets = GenerateStylesheetAssets.create(assetsProps).exec({
      rulesets,
      media: this.io.getMediaQueries(),
    });

    const assets = await this.cssProcessor.removeUnused(rawAssets);
    await this.io.outputAssets(assets);
  }
}
