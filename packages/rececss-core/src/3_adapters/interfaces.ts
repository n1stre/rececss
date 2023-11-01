import { IGenerateStylesheetAssets } from "../2_usecases/GenerateStylesheetAssets";
import { IBuildRulesets } from "../2_usecases/BuildRulesets";

export interface IInputOutput {
  getAssetsGenerationProps(): IGenerateStylesheetAssets.Props;
  getRulesetsBuildProps(): IBuildRulesets.Props;
  getRulesetsValues(): IBuildRulesets.DTO["values"];
  getMediaQueries: () => Record<string, string>;
  outputAssets(assets: { name: string; contents: string }[]): Promise<void>;
}

export interface ICSSProcessor {
  removeUnused: <T extends { contents: string }>(
    css: Array<T>,
  ) => Promise<Array<T>>;
}
