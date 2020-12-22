import CssRuleset from "@entities/CssRuleset";
import { CSSRulesetDTO } from "../../1_entities/CssRuleset/CssRuleset.interface";
import {
  CssRulesetsInteractor,
  LengthValue,
} from "./CssRulesetsInteractor.interface";

export default (deps: {
  classnamesMapper: Record<string, (v?: string | number) => string>;
}): CssRulesetsInteractor => {
  const cnm = deps.classnamesMapper;

  return Object.freeze({
    createSizeRulesets: (dto: LengthValue[]) => {
      const sizeRulesets = [
        CssRuleset.fromArgs(cnm.widthAuto(), ["width", "auto"]).toDTO(),
        CssRuleset.fromArgs(cnm.heightAuto(), ["height", "auto"]).toDTO(),
      ];

      dto.forEach((v) => {
        const val = v.length + v.unit;
        sizeRulesets.push(
          CssRuleset.fromArgs(cnm.width(val), ["width", val]).toDTO(),
          CssRuleset.fromArgs(cnm.maxWidth(val), ["max-width", val]).toDTO(),
          CssRuleset.fromArgs(cnm.minWidth(val), ["min-width", val]).toDTO(),
          CssRuleset.fromArgs(cnm.height(val), ["height", val]).toDTO(),
          CssRuleset.fromArgs(cnm.maxHeight(val), ["max-height", val]).toDTO(),
          CssRuleset.fromArgs(cnm.minHeight(val), ["min-height", val]).toDTO(),
        );
      });

      return sizeRulesets;
    },

    createPaddingRulesets: (dto: LengthValue[]) => {
      const paddingRulesets: CSSRulesetDTO[] = [];

      dto.forEach((v) => {
        const val = v.length + v.unit;

        // prettier-ignore
        paddingRulesets.push(
          CssRuleset.fromArgs(cnm.padding(val), ["padding", val]).toDTO(),
          CssRuleset.fromArgs(cnm.paddingTop(val), ["padding-top", val]).toDTO(),
          CssRuleset.fromArgs(cnm.paddingBottom(val), ["padding-bottom", val]).toDTO(),
          CssRuleset.fromArgs(cnm.paddingVertical(val), ["padding-top", val], ["padding-bottom", val]).toDTO(),
          CssRuleset.fromArgs(cnm.paddingLeft(val), ["padding-left", val]).toDTO(),
          CssRuleset.fromArgs(cnm.paddingRight(val), ["padding-right", val]).toDTO(),
          CssRuleset.fromArgs(cnm.paddingHorizontal(val), ["padding-left", val], ["padding-right", val]).toDTO(),
        );
      });

      return paddingRulesets;
    },

    createMarginRulesets: (dto: LengthValue[]) => {
      const marginRulesets: CSSRulesetDTO[] = [];

      dto.forEach((v) => {
        const val = v.length + v.unit;

        // prettier-ignore
        marginRulesets.push(
          CssRuleset.fromArgs(cnm.margin(val), ["margin", val]).toDTO(),
          CssRuleset.fromArgs(cnm.marginTop(val), ["margin-top", val]).toDTO(),
          CssRuleset.fromArgs(cnm.marginBottom(val), ["margin-bottom", val]).toDTO(),
          CssRuleset.fromArgs(cnm.marginVertical(val), ["margin-top", val], ["margin-bottom", val]).toDTO(),
          CssRuleset.fromArgs(cnm.marginLeft(val), ["margin-left", val]).toDTO(),
          CssRuleset.fromArgs(cnm.marginRight(val), ["margin-right", val]).toDTO(),
          CssRuleset.fromArgs(cnm.marginHorizontal(val), ["margin-left", val], ["margin-right", val]).toDTO(),
        );
      });

      return marginRulesets;
    },

    createOffsetRulesets: (dto: LengthValue[]) => {
      const offsetRulesets: CSSRulesetDTO[] = [];

      dto.forEach((v) => {
        const val = v.length + v.unit;

        // prettier-ignore
        offsetRulesets.push(
          CssRuleset.fromArgs(cnm.top(val), ["top", val]).toDTO(),
          CssRuleset.fromArgs(cnm.bottom(val), ["bottom", val]).toDTO(),
          CssRuleset.fromArgs(cnm.left(val), ["left", val]).toDTO(),
          CssRuleset.fromArgs(cnm.right(val), ["right", val]).toDTO(),
          CssRuleset.fromArgs(cnm.topLeft(val), ["top", val], ["left", val]).toDTO(),
          CssRuleset.fromArgs(cnm.topRight(val), ["top", val], ["right", val]).toDTO(),
          CssRuleset.fromArgs(cnm.bottomLeft(val), ["bottom", val], ["left", val]).toDTO(),
          CssRuleset.fromArgs(cnm.bottomRight(val), ["bottom", val], ["right", val]).toDTO(),
        );
      });

      return offsetRulesets;
    },

    createZIndexRulesets: (values: number[]) => {
      return values.map((val) => {
        return CssRuleset.fromArgs(cnm.zIndex(val), ["z-index", val]).toDTO();
      });
    },

    createFontSizeRulesets: (values: LengthValue[]) => {
      return values.map((v) => {
        const val = v.length + v.unit;
        const cn = cnm.fontSize(val);
        return CssRuleset.fromArgs(cn, ["font-size", val]).toDTO();
      });
    },

    createFontFamilyRulesets: (dto: Record<string, string>) => {
      const fontFamilyRulesets: CSSRulesetDTO[] = [];

      Object.entries(dto).forEach(([name, value]) => {
        const cn = cnm.fontFamily(name);
        const rs = CssRuleset.fromArgs(cn, ["font-family", value]).toDTO();
        fontFamilyRulesets.push(rs);
      });

      return fontFamilyRulesets;
    },

    createBorderRulesets: (dto: Record<string, string>) => {
      const borderRulesets: CSSRulesetDTO[] = [];

      return borderRulesets;
    },

    createBackgroundRulesets: (dto: Record<string, string>) => {
      const backgroundRulesets: CSSRulesetDTO[] = [];

      return backgroundRulesets;
    },

    createColorRulesets: (dto: Record<string, string>) => {
      const colorRulesets: CSSRulesetDTO[] = [];

      return colorRulesets;
    },

    // createBorderRadiusRulesets: (dto) => {},
    // createStaticRulesets: (dto) => {},
  });
};
