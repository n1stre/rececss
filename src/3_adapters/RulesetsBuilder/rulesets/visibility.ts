import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addVisibility() {
    self.addStatic(
      "visibilityVisible",
      "visibilityHidden",
      "visibilityCollapse",
    );

    return self;
  };
