import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addText() {
    self.addStatic(
      "verticalAlignSuper",
      "verticalAlignTop",
      "verticalAlignTextTop",
      "verticalAlignMiddle",
      "verticalAlignBaseline",
      "verticalAlignBottom",
      "verticalAlignTextBottom",
      "verticalAlignSub",
    );

    self.addStatic(
      "textAlignLeft",
      "textAlignCenter",
      "textAlignRight",
      "textAlignJustify",
    );

    self.addStatic(
      "textAlignLastAuto",
      "textAlignLastLeft",
      "textAlignLastCenter",
      "textAlignLastRight",
    );

    self.addStatic(
      "textDecorationNone",
      "textDecorationUnderline",
      "textDecorationOverline",
      "textDecorationLineThrough",
    );

    self.addStatic(
      "textEmphasisNone",
      "textEmphasisAccent",
      "textEmphasisDot",
      "textEmphasisCircle",
      "textEmphasisDisc",
      "textEmphasisBefore",
      "textEmphasisAfter",
    );

    self.addStatic(
      "textTransformNone",
      "textTransformCapitalize",
      "textTransformUppercase",
      "textTransformLowercase",
    );

    self.addStatic(
      "whiteSpaceNormal",
      "whiteSpacePre",
      "whiteSpaceNoWrap",
      "whiteSpacePreWrap",
      "whiteSpacePreLine",
    );

    return self;
  };
