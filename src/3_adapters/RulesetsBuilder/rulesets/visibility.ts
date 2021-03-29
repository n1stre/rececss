import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addVisibility() {
    self.addRulesets(
      "visibilityVisible",
      "visibilityHidden",
      "visibilityCollapse",
    );

    return self;
  };
