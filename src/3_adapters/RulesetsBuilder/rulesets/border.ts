import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addBorder(v?: {
    shorthand?: Record<string, string>;
    radius?: Record<string, string>;
  }) {
    self.addValues(
      v?.shorthand,
      "border",
      "borderTop",
      "borderBottom",
      "borderLeft",
      "borderRight",
    );
    self.addValues(v?.radius, "borderRadius");
    return self;
  };
