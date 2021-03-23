import { TConfigurableRulesetsValues } from "../../2_usecases/interfaces";

type IConfigRuleNamedValues = Record<string, string>;

export type IConfigRuleUnitRange = [number, number, number];

export type IConfigRuleUnitValue = number | IConfigRuleUnitRange;

export type IConfigRuleUnit =
  | "px"
  | "em"
  | "rem"
  | "vh"
  | "vw"
  | "ch"
  | "pt"
  | "%";

export type IConfigRuleUnitValues = Partial<
  Record<IConfigRuleUnit, IConfigRuleUnitValue[]>
>;

export type IConfigRuleMixedValues = Partial<{
  named: IConfigRuleNamedValues;
  units: IConfigRuleUnitValues;
}>;

export type IConfigRuleMixedUnitlessValues = Partial<{
  named: IConfigRuleNamedValues;
  units: IConfigRuleUnitValue[];
}>;

export interface IConfigDTO {
  output: {
    path: string;
    splitByMedia?: boolean;
  };
  media?: Record<string, string>;
  rules: Partial<{
    width: IConfigRuleMixedValues;
    height: IConfigRuleMixedValues;
    padding: Partial<{
      shorthand: IConfigRuleMixedValues;
      edges: IConfigRuleMixedValues;
    }>;
    margin: Partial<{
      shorthand: IConfigRuleMixedValues;
      edges: IConfigRuleMixedValues;
    }>;
    offset: IConfigRuleMixedValues;
    color: IConfigRuleNamedValues;
    flex: Partial<{
      shorthand: IConfigRuleMixedUnitlessValues;
      basis: IConfigRuleMixedValues;
      grow: IConfigRuleMixedUnitlessValues;
      shrink: IConfigRuleMixedUnitlessValues;
      order: IConfigRuleMixedUnitlessValues;
    }>;
    font: Partial<{
      shorthand: IConfigRuleNamedValues;
      size: IConfigRuleMixedValues;
      family: IConfigRuleNamedValues;
    }>;
    border: Partial<{
      shorthand: IConfigRuleNamedValues;
      radius: IConfigRuleMixedValues;
    }>;
  }>;
}

export interface IConfig {
  getRulesetsValues: () => TConfigurableRulesetsValues;
  getMedia: () => Record<string, string>;
  getOutputPath: () => string;
  shouldSplitOutputByMedia: () => boolean;
}
