import { CssRulesetsInteractor } from "./CssRulesetsInteractor.interface";

export default (d: {}) => {
  return function makeCssRulesetsInteractor(params: {}): CssRulesetsInteractor {
    return Object.freeze({
      createSizeRulesets: (dto) => {},
      createPaddingRulesets: (dto) => {},
      createMarginRulesets: (dto) => {},
      createOffsetRulesets: (dto) => {},
      createZIndexRulesets: (dto) => {},
      createFontSizeRulesets: (dto) => {},
      createFontFamilyRulesets: (dto) => {},
      createBorderRulesets: (dto) => {},
      createBorderRadiusRulesets: (dto) => {},
      createBackgroundRulesets: (dto) => {},
      createColorRulesets: (dto) => {},
      createStaticRulesets: (dto) => {},
    });
  };
};
