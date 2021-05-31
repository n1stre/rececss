import { IUtilityRulesetsDTO } from "../2_usecases/interfaces";
import { IRulesetsBuilder } from "./RulesetsBuilder";

export interface IInputOutput {
  getStylesheetPropsInput(): {
    filename?: string;
    extension?: string;
  };
  getRulesetsBuilderInput(): IRulesetsBuilder.DTO;
  getStylesheetsAssetsInput(): {
    values: IUtilityRulesetsDTO;
    media?: Record<string, string>;
    splitByMedia?: boolean;
  };
  outputAssets(assets: { name: string; contents: string }[]): Promise<void>;
}

export interface ICSSProcessor {
  removeUnused: <T extends { contents: string }>(
    css: Array<T>,
  ) => Promise<Array<T>>;
}
