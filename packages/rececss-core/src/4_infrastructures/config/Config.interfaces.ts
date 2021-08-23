import { IRulesetsFactory } from "../../3_adapters/RulesetsFactory";

export interface Props {
  defaultValues?: RawValues;
  defaultVariants?: Variants;
  defaultAssociations?: Associations;
}

export type CreatorFn<
  T extends RawValues | Variants | Classnames | Associations,
> = (params: { defaults: T }) => T;

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
  classes?: Classnames;
  values: CreatorFn<RawValues> | RawValues;
  variants?: CreatorFn<Variants> | Variants;
  associations?: CreatorFn<Associations> | Associations;
}

export interface Instance {
  getRulesetsValues: () => Values;
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

export type UnitRange = [number, number, number];
export type UnitValue = number | UnitRange;
export type RuleUnits = Partial<Record<RuleUnit, UnitValue[]>>;

export type RuleValue = string | boolean | UnitValue[] | Record<string, string>;
export type BasicRuleValues = Record<string, RuleValue> & RuleUnits;
export type CustomRuleValues = ValueOf<IRulesetsFactory.CustomValuesMap>;

export type RawValues = Partial<
  Record<keyof IRulesetsFactory.ValuesMap, BasicRuleValues | CustomRuleValues>
>;

export type Values = IRulesetsFactory.ValuesMap;
export type Variants = IRulesetsFactory.VariantsMap;
export type Classnames = Partial<IRulesetsFactory.ClassnamesMap>;

export type Associations = Partial<
  Record<keyof IRulesetsFactory.ValuesMap, Association>
>;

export type Association = {
  with: Array<keyof IRulesetsFactory.ValuesMap>;
  values?: (v: Record<string, string>) => Record<string, string>;
  variants?: (v: Record<string, string>) => Record<string, string>;
};

// export type ForEachRuleCallback = (k: keyof Rules, v: RuleValues) => void;

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
