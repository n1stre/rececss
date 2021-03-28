import { TConfigurableRulesetsValues } from "../../2_usecases/interfaces";

export type IConfigRuleRange = [number, number, number];

export type IConfigRuleValue = number | IConfigRuleRange;

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
  Record<IConfigRuleUnit, IConfigRuleValue[]>
>;

export type IConfigRuleNamedUnits = Partial<{
  named: Record<string, string>;
  units: IConfigRuleUnitValues;
}>;

export type IConfigRuleNamedValues = Partial<{
  named: Record<string, string>;
  values: IConfigRuleValue[];
}>;

export interface IConfigDTO {
  output: {
    path: string;
    filename?: string;
    extension?: string;
    splitByMedia?: boolean;
  };
  sep?: {
    media?: string;
    pseudoClass?: string;
  };
  media?: Record<string, string>;
  classes?: Record<string, string>;
  pseudoClasses?: Record<string, string>;
  rules: Partial<{
    width: IConfigRuleNamedUnits;
    height: IConfigRuleNamedUnits;
    padding: Partial<{
      shorthand: IConfigRuleNamedUnits;
      edges: IConfigRuleNamedUnits;
    }>;
    margin: Partial<{
      shorthand: IConfigRuleNamedUnits;
      edges: IConfigRuleNamedUnits;
    }>;
    offset: IConfigRuleNamedUnits;
    color: Record<string, string>;
    flex: Partial<{
      shorthand: IConfigRuleNamedValues;
      basis: IConfigRuleNamedUnits;
      grow: IConfigRuleNamedValues;
      shrink: IConfigRuleNamedValues;
      order: IConfigRuleNamedValues;
    }>;
    font: Partial<{
      shorthand: Record<string, string>;
      size: IConfigRuleNamedUnits;
      family: Record<string, string>;
      lineHeight: IConfigRuleNamedUnits & IConfigRuleNamedValues;
    }>;
    border: Partial<{
      shorthand: Record<string, string>;
      radius: IConfigRuleNamedUnits;
    }>;
  }>;
}

export interface IConfig {
  getRulesetsValues: () => TConfigurableRulesetsValues;
  getMedia: () => Record<string, string>;
  getOutputPath: () => string;
  getOutputFilename: () => string | undefined;
  getOutputExtension: () => string | undefined;
  getClassnames: () => Record<string, string>;
  getPseudoClasses: () => Record<string, string>;
  getMediaSeparator: () => string | undefined;
  getPseudoClassSeparator: () => string | undefined;
  shouldSplitOutputByMedia: () => boolean;
}
