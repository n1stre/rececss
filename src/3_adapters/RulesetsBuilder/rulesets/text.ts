import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addText() {
    self.addRulesets(
      "verticalAlignSuper",
      "verticalAlignTop",
      "verticalAlignTextTop",
      "verticalAlignMiddle",
      "verticalAlignBaseline",
      "verticalAlignBottom",
      "verticalAlignTextBottom",
      "verticalAlignSub",
    );

    self.addRulesets(
      "textAlignLeft",
      "textAlignCenter",
      "textAlignRight",
      "textAlignJustify",
    );

    self.addRulesets(
      "textAlignLastAuto",
      "textAlignLastLeft",
      "textAlignLastCenter",
      "textAlignLastRight",
    );

    self.addRulesets(
      "textDecorationNone",
      "textDecorationUnderline",
      "textDecorationOverline",
      "textDecorationLineThrough",
    );

    self.addRulesets(
      "textEmphasisNone",
      "textEmphasisAccent",
      "textEmphasisDot",
      "textEmphasisCircle",
      "textEmphasisDisc",
      "textEmphasisBefore",
      "textEmphasisAfter",
    );

    self.addRulesets(
      "textTransformNone",
      "textTransformCapitalize",
      "textTransformUppercase",
      "textTransformLowercase",
    );

    self.addRulesets(
      "whiteSpaceNormal",
      "whiteSpacePre",
      "whiteSpaceNoWrap",
      "whiteSpacePreWrap",
      "whiteSpacePreLine",
    );

    return self;
  };
