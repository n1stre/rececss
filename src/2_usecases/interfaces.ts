import { IRuleset } from "../1_entities/Ruleset";

export interface IAsset {
  name: string;
  contents: string;
}

export type TRulesetValues = Record<string, string>;

export type TSizeValues = Partial<{
  width: TRulesetValues;
  height: TRulesetValues;
}>;

export type TSpacingValues = Partial<{
  shorthand: TRulesetValues;
  edges: TRulesetValues;
}>;

export type TFontValues = Partial<{
  shorthand: TRulesetValues;
  family: TRulesetValues;
  size: TRulesetValues;
  lineHeight: TRulesetValues;
}>;

export type TBorderValues = Partial<{
  shorthand: TRulesetValues;
  radius: TRulesetValues;
}>;

export type TFlexGridValues = Partial<{
  cols: number;
  gutter: string;
  gutters: TRulesetValues;
}>;

export type TFlexValues = Partial<{
  shorthand: TRulesetValues;
  grow: TRulesetValues;
  shrink: TRulesetValues;
  basis: TRulesetValues;
  order: TRulesetValues;
  grid: TFlexGridValues;
}>;

export type TBackgroundValues = Partial<{
  shorthand: TRulesetValues;
  color: TRulesetValues;
}>;

export type TBoxValues = Partial<{
  box: TRulesetValues;
  text: TRulesetValues;
}>;

export type TConfigurableRulesetsValues = Partial<{
  size: TSizeValues;
  padding: TSpacingValues;
  margin: TSpacingValues;
  offset: TRulesetValues;
  font: TFontValues;
  flex: TFlexValues;
  border: TBorderValues;
  color: TRulesetValues;
  zIndex: TRulesetValues;
  background: TBackgroundValues;
  shadow: TBoxValues;
}>;

export interface IRulesetsFactory {
  createAll: (dto: TConfigurableRulesetsValues) => IRuleset.Instance[];
}
