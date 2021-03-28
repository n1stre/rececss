import { TConfigurableRulesetsValues } from "../2_usecases/interfaces";
import { IRulesetNamesMap } from "./RulesetsBuilder/RulesetsBuilder.interface";

export interface IInputOutput {
  getRulesetPropsInput(): {
    prefixSep?: string;
    suffixSep?: string;
  };
  getStylesheetPropsInput(): {
    filename?: string;
    extension?: string;
  };
  getRulesetsBuilderInput(): {
    classNames?: Partial<IRulesetNamesMap>;
    pseudoClasses?: Record<string, string>;
  };
  getStylesheetsAssetsInput(): {
    values: TConfigurableRulesetsValues;
    media?: Record<string, string>;
    splitByMedia?: boolean;
  };
  outputAssets(assets: { name: string; contents: string }[]): Promise<void>;
}
