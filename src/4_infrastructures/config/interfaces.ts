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
    state?: string;
  };
  media?: Record<string, string>;
  classes?: Record<string, string>;
  states?: Record<string, string>;
  rules: Partial<{
    width: IConfigRuleNamedUnits;
    height: IConfigRuleNamedUnits;
    padding: Partial<{
      shorthand: Record<string, string>;
      edges: IConfigRuleNamedUnits;
    }>;
    margin: Partial<{
      shorthand: Record<string, string>;
      edges: IConfigRuleNamedUnits;
    }>;
    offset: IConfigRuleNamedUnits;
    flex: Partial<{
      shorthand: IConfigRuleNamedValues;
      basis: IConfigRuleNamedUnits;
      grow: IConfigRuleNamedValues;
      shrink: IConfigRuleNamedValues;
      order: IConfigRuleNamedValues;
      grid: {
        cols: number;
        gutter?: string;
        gutters?: Record<string, string>;
      };
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
    color: Record<string, string>;
    background: Partial<{
      shorthand: Record<string, string>;
      color: Record<string, string>;
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
  getClassnameStates: () => Record<string, string>;
  getMediaSeparator: () => string | undefined;
  getStatesSeparator: () => string | undefined;
  shouldSplitOutputByMedia: () => boolean;
}
