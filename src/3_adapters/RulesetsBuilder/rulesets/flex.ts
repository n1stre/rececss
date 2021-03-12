import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addFlex(v?: {
    shorthand?: Record<string, string>;
    grow?: Record<string, string>;
    shrink?: Record<string, string>;
    basis?: Record<string, string>;
    order?: Record<string, string>;
  }) {
    self.addValues(v?.shorthand, "flex");
    self.addValues(v?.grow, "flexGrow");
    self.addValues(v?.shrink, "flexShrink");

    self.addStatic("flexBasisAuto");
    self.addValues(v?.basis, "flexBasis");

    self.addStatic("orderUnset");
    self.addValues(v?.order, "order");

    self.addStatic(
      "flexDirectionColumn",
      "flexDirectionColumnReverse",
      "flexDirectionRow",
      "flexDirectionRowReverse",
    );

    self.addStatic(
      "flexWrapNoWrap",
      "flexWrapWrap",
      "flexWrapWrapReverse",
      "flexWrapUnset",
    );

    self.addStatic(
      "justifyContentUnset",
      "justifyContentCenter",
      "justifyContentFlexEnd",
      "justifyContentFlexStart",
      "justifyContentSpaceAround",
      "justifyContentSpaceBetween",
    );

    self.addStatic(
      "alignContentCenter",
      "alignContentFlexEnd",
      "alignContentFlexStart",
      "alignContentStretch",
      "alignContentSpaceAround",
      "alignContentSpaceBetween",
    );

    self.addStatic(
      "alignItemsBaseline",
      "alignItemsСenter",
      "alignItemsFlexEnd",
      "alignItemsFlexStart",
      "alignItemsStretch",
    );

    return self;
  };
