import { TConfigurableRulesetsValues } from "../2_usecases/interfaces";
import { RulesetNamesMap } from "./RulesetsBuilder/RulesetsBuilder.interface";

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
    rulesetProps?: { prefixSep?: string; suffixSep?: string };
    classnames?: Partial<RulesetNamesMap>;
    classnameStates?: Record<string, string>;
  };
  getStylesheetsAssetsInput(): {
    values: TConfigurableRulesetsValues;
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
