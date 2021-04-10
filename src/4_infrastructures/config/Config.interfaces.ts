import { TConfigurableRulesetsValues } from "../../2_usecases/interfaces";

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

export type RuleUnits = Partial<Record<RuleUnit, UnitValue[]>>;

export type Rule = Record<string, string> & RuleUnits;

export interface DTO {
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
    width: Rule;
    height: Rule;
    padding: Partial<{
      shorthand: Rule;
      edges: Rule;
    }>;
    margin: Partial<{
      shorthand: Rule;
      edges: Rule;
    }>;
    offset: Rule;
    flex: Partial<{
      shorthand: Rule;
      basis: Rule;
      grow: Rule;
      shrink: Rule;
      order: Rule;
      grid: {
        cols: number;
        gutter?: string;
        gutters?: Record<string, string>;
      };
    }>;
    font: Partial<{
      shorthand: Rule;
      size: Rule;
      family: Rule;
      lineHeight: Rule;
    }>;
    border: Partial<{
      shorthand: Rule;
      radius: Rule;
    }>;
    color: Rule;
    background: Partial<{
      shorthand: Rule;
      color: Rule;
    }>;
    shadow: Partial<{
      box: Rule;
      text: Rule;
    }>;
  }>;
}

export interface Instance {
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
