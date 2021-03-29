import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addFlex(v?: {
    shorthand?: Record<string, string>;
    grow?: Record<string, string>;
    shrink?: Record<string, string>;
    basis?: Record<string, string>;
    order?: Record<string, string>;
  }) {
    self.mapToRulesets(v?.shorthand, "flex");
    self.mapToRulesets(v?.grow, "flexGrow");
    self.mapToRulesets(v?.shrink, "flexShrink");

    self.addRulesets("flexBasisAuto");
    self.mapToRulesets(v?.basis, "flexBasis");

    self.addRulesets("orderUnset");
    self.mapToRulesets(v?.order, "order");

    self.addRulesets(
      "flexDirectionColumn",
      "flexDirectionColumnReverse",
      "flexDirectionRow",
      "flexDirectionRowReverse",
    );

    self.addRulesets(
      "flexWrapNoWrap",
      "flexWrapWrap",
      "flexWrapWrapReverse",
      "flexWrapUnset",
    );

    self.addRulesets(
      "justifyContentUnset",
      "justifyContentCenter",
      "justifyContentFlexEnd",
      "justifyContentFlexStart",
      "justifyContentSpaceAround",
      "justifyContentSpaceBetween",
    );

    self.addRulesets(
      "alignContentCenter",
      "alignContentFlexEnd",
      "alignContentFlexStart",
      "alignContentStretch",
      "alignContentSpaceAround",
      "alignContentSpaceBetween",
    );

    self.addRulesets(
      "alignItemsBaseline",
      "alignItemsСenter",
      "alignItemsFlexEnd",
      "alignItemsFlexStart",
      "alignItemsStretch",
    );

    return self;
  };
