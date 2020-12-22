import {
  CSSRulesetDTO,
  CSSUnit,
} from "@entities/CssRuleset/CssRuleset.interface";

export type LengthValue = {
  length: number;
  unit: CSSUnit;
};

export interface CssRulesetsInteractor {
  createSizeRulesets: (dto: LengthValue[]) => CSSRulesetDTO[];
  createPaddingRulesets: (dto: LengthValue[]) => CSSRulesetDTO[];
  createMarginRulesets: (dto: LengthValue[]) => CSSRulesetDTO[];
  createOffsetRulesets: (dto: LengthValue[]) => CSSRulesetDTO[];
  createZIndexRulesets: (dto: number[]) => CSSRulesetDTO[];
  createFontSizeRulesets: (dto: LengthValue[]) => CSSRulesetDTO[];
  createFontFamilyRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  createBorderRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  // createBorderRadiusRulesets: (dto: Record<CSSUnit, string>) => CSSRulesetDTO[];
  // createBackgroundRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  // createColorRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  // createStaticRulesets: (dto: Record<string, boolean>) => CSSRulesetDTO[];
}
