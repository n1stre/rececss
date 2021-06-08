import { IRulesetsFactory } from "../../3_adapters/RulesetsFactory";
import { Sizing, Pallete } from "../utils";

export interface Props {
  defaultRules: Rules;
}

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
      safelist?: Array<string | RegExp>;
      blocklist?: Array<string | RegExp>;
    };
  };
  sep?: {
    media?: string;
    variant?: string;
  };
  media?: Record<string, string>;
  classes?: Partial<IRulesetsFactory.ClassnamesMap>;
  rules: GetRules | Rules;
}

export interface Instance {
  getRulesetsValues: () => RulesetsValues;
  getMedia: () => Record<string, string>;
  getOutputPath: () => string;
  getOutputFilename: () => string | undefined;
  getOutputExtension: () => string | undefined;
  getClassnames: () => Classnames;
  getRulesetsVariants: () => Variants;
  getMediaSeparator: () => string | undefined;
  getVariantSeparator: () => string | undefined;
  getPurgeContent: () => string[];
  getPurgeSafelist: () => Array<string | RegExp>;
  getPurgeBlocklist: () => Array<string | RegExp>;
  shouldSplitOutputByMedia: () => boolean;
}

type ValueOf<T> = T[keyof T];

export type RulesetsValues = IRulesetsFactory.ConfigurableValues;

export type RulesetsValue = ValueOf<RulesetsValues>;

export type Classnames = Partial<IRulesetsFactory.ClassnamesMap>;

export type Variants = IRulesetsFactory.VariantsMap;

export type UnitRange = [number, number, number];

export type UnitValue = number | UnitRange;

export type RuleValue = string | boolean | UnitValue[] | Record<string, string>;

export type RuleUnits = Partial<Record<RuleUnit, UnitValue[]>>;

export type RuleMeta = {
  $extend?: boolean;
  $variants?: Record<string, string>;
};

export type BasicRuleValues = Record<string, RuleValue> & RuleUnits & RuleMeta;

export type CustomRuleValues = ValueOf<IRulesetsFactory.ComputedProperties> &
  RuleMeta;

export type RuleValues = BasicRuleValues | CustomRuleValues;

export type Rules = Partial<Record<keyof RulesetsValues, RuleValues>>;

export type RulesAssociations = Partial<Record<keyof Rules, RuleAssociation>>;

export type RuleAssociation = {
  with: Array<keyof Rules>;
  values?: (v: Record<string, string>) => Record<string, string>;
  variants?: (v: Record<string, string>) => Record<string, string>;
};

export type RuleData = {
  key: keyof Rules;
  values?: Record<string, string>;
  variants?: Record<string, string>;
};

export type ForEachRuleCallback = (k: keyof Rules, v: RuleValues) => void;

export type RuleUnit =
  | "$cm"
  | "$mm"
  | "$in"
  | "$pc"
  | "$pt"
  | "$px"
  | "$em"
  | "$ex"
  | "$ch"
  | "$rem"
  | "$vw"
  | "$vh"
  | "$vmin"
  | "$vmax"
  | "$percent"
  | "$pct"
  | "$number"
  | "$num"
  | "$deg"
  | "$grad"
  | "$rad"
  | "$turn";
