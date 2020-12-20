import CssRuleset from "@entities/CssRuleset";
import {
  CssRulesetsInteractor,
  LengthValue,
} from "./CssRulesetsInteractor.interface";

export default (deps: {
  classnamesMapper: Record<string, (v?: string | undefined) => string>;
}): CssRulesetsInteractor => {
  const cnm = deps.classnamesMapper;

  return Object.freeze({
    createSizeRulesets: (dto: LengthValue[]) => {
      const sizeRulesets = [
        CssRuleset.fromArgs(cnm.widthAuto(), ["width", "auto"]),
        CssRuleset.fromArgs(cnm.heightAuto(), ["height", "auto"]),
      ];

      dto.forEach((v) => {
        const value = v.length + v.unit;
        sizeRulesets.push(
          CssRuleset.fromArgs(cnm.width(value), ["width", value]),
          CssRuleset.fromArgs(cnm.height(value), ["height", value]),
        );
      });

      return sizeRulesets.map((rs) => rs.toDTO());
    },

    // createPaddingRulesets: (dto) => {},
    // createMarginRulesets: (dto) => {},
    // createOffsetRulesets: (dto) => {},
    // createZIndexRulesets: (dto) => {},
    // createFontSizeRulesets: (dto) => {},
    // createFontFamilyRulesets: (dto) => {},
    // createBorderRulesets: (dto) => {},
    // createBorderRadiusRulesets: (dto) => {},
    // createBackgroundRulesets: (dto) => {},
    // createColorRulesets: (dto) => {},
    // createStaticRulesets: (dto) => {},
  });
};
