import { IGenerateStylesheetAssets } from "../2_usecases/GenerateStylesheetAssets";

export interface IInputOutput {
  getAssetsGenerationProps(): IGenerateStylesheetAssets.Props;
  getAssetsGenerationInput(): IGenerateStylesheetAssets.DTO;
  outputAssets(assets: { name: string; contents: string }[]): Promise<void>;
}

export interface ICSSProcessor {
  removeUnused: <T extends { contents: string }>(
    css: Array<T>,
  ) => Promise<Array<T>>;
}
