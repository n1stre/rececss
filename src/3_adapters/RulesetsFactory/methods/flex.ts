import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addFlex(v?: {
    shorthand?: Record<string, string>;
    grow?: Record<string, string>;
    shrink?: Record<string, string>;
    basis?: Record<string, string>;
    order?: Record<string, string>;
  }) {
    self.addRulesetsFromNames(["flexAuto", "flexNone"]);
    self.addRulesetsFromValues(v?.shorthand, ["flex"]);
    self.addRulesetsFromValues(v?.grow, ["flexGrow"]);
    self.addRulesetsFromValues(v?.shrink, ["flexShrink"]);

    self.addRulesetsFromNames(["flexBasisAuto"]);
    self.addRulesetsFromValues(v?.basis, ["flexBasis"]);

    self.addRulesetsFromNames(["orderUnset"]);
    self.addRulesetsFromValues(v?.order, ["order"]);

    self.addRulesetsFromNames([
      "flexDirectionColumn",
      "flexDirectionColumnReverse",
      "flexDirectionRow",
      "flexDirectionRowReverse",
    ]);

    self.addRulesetsFromNames([
      "flexWrapNoWrap",
      "flexWrapWrap",
      "flexWrapWrapReverse",
      "flexWrapUnset",
    ]);

    self.addRulesetsFromNames([
      "justifyContentUnset",
      "justifyContentCenter",
      "justifyContentFlexEnd",
      "justifyContentFlexStart",
      "justifyContentSpaceAround",
      "justifyContentSpaceBetween",
    ]);

    self.addRulesetsFromNames([
      "alignContentCenter",
      "alignContentFlexEnd",
      "alignContentFlexStart",
      "alignContentStretch",
      "alignContentSpaceAround",
      "alignContentSpaceBetween",
    ]);

    self.addRulesetsFromNames([
      "alignItemsBaseline",
      "alignItemsСenter",
      "alignItemsFlexEnd",
      "alignItemsFlexStart",
      "alignItemsStretch",
    ]);

    return self.getResult();
  };
