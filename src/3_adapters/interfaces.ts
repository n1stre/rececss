import { TConfigurableRulesetsValues } from "../2_usecases/interfaces";

export interface IInputOutput {
  getStylesheetsAssetsInput(): {
    values: TConfigurableRulesetsValues;
    media?: Record<string, string>;
    splitByMedia?: boolean;
  };
  outputAssets(assets: { name: string; contents: string }[]): Promise<void>;
}
