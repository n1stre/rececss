import { IRuleset } from "../../1_entities/Ruleset";
import { IBuildRulesets } from "../../2_usecases/BuildRulesets";

export interface Props {
  defaults: {
    values?: RawValues;
    variants?: Variants;
    associations?: Associations;
    classnames?: Classnames;
    declarations?: Declarations;
  };
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
  separator?: {
    media?: string;
    variant?: string;
  };
  media?: Record<string, string>;
  classnames?: Classnames;
  values: CreatorFn<RawValues> | RawValues;
  variants?: CreatorFn<Variants> | Variants;
  associations?: CreatorFn<Associations> | Associations;
  definitions?: IRuleset.DTO[];
}

type ValueOf<T> = T[keyof T];

export type UnitRange = [number, number, number];
export type UnitValue = number | UnitRange;

export type RuleUnits = Partial<Record<RuleUnit, UnitValue[]>>;
export type RuleName = keyof IBuildRulesets.ValuesMap;
export type RuleValue = string | boolean | UnitValue[] | Record<string, string>;

export type BasicRuleValues = Record<string, RuleValue> & RuleUnits;
export type CustomRuleValues = ValueOf<IBuildRulesets.CustomValuesMap>;

export type RawValues = Partial<
  Record<RuleName, BasicRuleValues | CustomRuleValues>
>;

export type Values = IBuildRulesets.ValuesMap;
export type Variants = IBuildRulesets.VariantsMap;
export type Classnames = IBuildRulesets.ClassnamesMap;
export type Declarations = IBuildRulesets.DeclarationsMap;
export type Associations = Partial<Record<RuleName, Association>>;

export type Association = {
  with: Array<RuleName>;
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
