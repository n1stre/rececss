import {
  CSSRulesetDTO,
  CSSUnit,
} from "@entities/CssRuleset/CssRuleset.interface";

export interface CssRulesetsInteractor {
  createSizeRulesets: (dto: string[]) => CSSRulesetDTO[];
  createPaddingRulesets: (dto: Record<CSSUnit, number[]>) => CSSRulesetDTO[];
  createMarginRulesets: (dto: Record<CSSUnit, number[]>) => CSSRulesetDTO[];
  createOffsetRulesets: (dto: Record<CSSUnit, number[]>) => CSSRulesetDTO[];
  createZIndexRulesets: (dto: Record<CSSUnit, number[]>) => CSSRulesetDTO[];
  createFontSizeRulesets: (dto: Record<CSSUnit, number[]>) => CSSRulesetDTO[];
  createFontFamilyRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  createBorderRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  createBorderRadiusRulesets: (dto: Record<CSSUnit, string>) => CSSRulesetDTO[];
  createBackgroundRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  createColorRulesets: (dto: Record<string, string>) => CSSRulesetDTO[];
  createStaticRulesets: (dto: Record<string, boolean>) => CSSRulesetDTO[];
}
