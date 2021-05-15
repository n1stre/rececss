import {
  IUtilityRulesetsDTO,
  ICompoundProperties,
} from "../../2_usecases/interfaces";
import { Sizing, Pallete } from "../utils";

export interface Props {
  defaultRules: Rules;
}

export type UnitRange = [number, number, number];

export type UnitValue = number | UnitRange;

export type RuleUnit =
  | "$cm"
  | "$mm"
  | "$Q"
  | "$in"
  | "$pc"
  | "$pt"
  | "$px"
  | "$em"
  | "$ex"
  | "$ch"
  | "$rem"
  | "$lh"
  | "$vw"
  | "$vh"
  | "$vmin"
  | "$vmax"
  | "$percent"
  | "$pct"
  | "$number"
  | "$num";

type ValueOf<T> = T[keyof T];

export type RuleValue = string | boolean | UnitValue[] | Record<string, string>;
export type RuleUnits = Partial<Record<RuleUnit, UnitValue[]>>;
export type RuleData = {
  $extend?: boolean;
  $variants?: Record<string, string>;
};
export type RuleValues = Record<string, RuleValue> & RuleUnits & RuleData;
export type Rules = Partial<
  Record<keyof IUtilityRulesetsDTO, RuleValues | ValueOf<ICompoundProperties>>
>;

export type GetRules = (params: {
  Sizing: typeof Sizing;
  Pallete: typeof Pallete;
  defaults: Rules;
  extend: (rule: RuleValues) => RuleValues;
}) => Rules;

export interface DTO {
  output: {
    path: string;
    filename?: string;
    extension?: string;
    splitByMedia?: boolean;
    purge?: {
      content: string[];
      safelist: Array<string | RegExp>;
      blocklist: Array<string | RegExp>;
    };
  };
  sep?: {
    media?: string;
    variant?: string;
  };
  media?: Record<string, string>;
  classes?: Record<string, string>;
  rules: GetRules | Rules;
}

export interface Instance {
  getRulesetsValues: () => IUtilityRulesetsDTO;
  getMedia: () => Record<string, string>;
  getOutputPath: () => string;
  getOutputFilename: () => string | undefined;
  getOutputExtension: () => string | undefined;
  getClassnames: () => Record<string, string>;
  getRulesetsVariants: () => Record<string, string>;
  getMediaSeparator: () => string | undefined;
  getVariantSeparator: () => string | undefined;
  getPurgeContent: () => string[];
  getPurgeSafelist: () => Array<string | RegExp>;
  getPurgeBlocklist: () => Array<string | RegExp>;
  shouldSplitOutputByMedia: () => boolean;
}
