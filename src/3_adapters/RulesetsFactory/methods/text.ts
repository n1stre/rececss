import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addText() {
    self.addRulesetsFromNames([
      "verticalAlignSuper",
      "verticalAlignTop",
      "verticalAlignTextTop",
      "verticalAlignMiddle",
      "verticalAlignBaseline",
      "verticalAlignBottom",
      "verticalAlignTextBottom",
      "verticalAlignSub",
    ]);

    self.addRulesetsFromNames([
      "textAlignLeft",
      "textAlignCenter",
      "textAlignRight",
      "textAlignJustify",
    ]);

    self.addRulesetsFromNames([
      "textAlignLastAuto",
      "textAlignLastLeft",
      "textAlignLastCenter",
      "textAlignLastRight",
    ]);

    self.addRulesetsFromNames([
      "textDecorationNone",
      "textDecorationUnderline",
      "textDecorationOverline",
      "textDecorationLineThrough",
    ]);

    self.addRulesetsFromNames([
      "textEmphasisNone",
      "textEmphasisAccent",
      "textEmphasisDot",
      "textEmphasisCircle",
      "textEmphasisDisc",
      "textEmphasisBefore",
      "textEmphasisAfter",
    ]);

    self.addRulesetsFromNames([
      "textTransformNone",
      "textTransformCapitalize",
      "textTransformUppercase",
      "textTransformLowercase",
    ]);

    self.addRulesetsFromNames([
      "whiteSpaceNormal",
      "whiteSpacePre",
      "whiteSpaceNoWrap",
      "whiteSpacePreWrap",
      "whiteSpacePreLine",
    ]);

    return self.getResult();
  };
