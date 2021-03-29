import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addBorder(v?: {
    shorthand?: Record<string, string>;
    radius?: Record<string, string>;
  }) {
    self.mapToRulesets(
      v?.shorthand,
      "border",
      "borderTop",
      "borderBottom",
      "borderLeft",
      "borderRight",
    );
    self.mapToRulesets(v?.radius, "borderRadius");
    return self;
  };
