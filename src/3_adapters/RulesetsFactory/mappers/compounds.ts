import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorder(values: ConfigurableValues) {
    if (
      values.filterBlur ||
      values.filterBrightness ||
      values.filterContrast ||
      values.filterDropShadow ||
      values.filterGrayscale ||
      values.filterHueRotate ||
      values.filterInvert ||
      values.filterOpacity ||
      values.filterSaturate ||
      values.filterSepia
    ) {
      builder.mapKeywordsToRulesets(["filterCompound"]);
    }

    if (
      values.transformTranslate ||
      values.transformTranslate3D ||
      values.transformTranslateX ||
      values.transformTranslateY ||
      values.transformTranslateZ ||
      values.transformRotate ||
      values.transformRotateX ||
      values.transformRotateY ||
      values.transformRotateZ ||
      values.transformScale ||
      values.transformScale3D ||
      values.transformScaleX ||
      values.transformScaleY ||
      values.transformScaleZ ||
      values.transformSkew ||
      values.transformSkewX ||
      values.transformSkewY ||
      values.transformPerspective
    ) {
      builder.mapKeywordsToRulesets([
        "transformCompound",
        "transformCompound3D",
      ]);
    }
  };
