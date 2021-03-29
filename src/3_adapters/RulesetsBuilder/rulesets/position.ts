import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addPosition() {
    self.addRulesets(
      "positionStatic",
      "positionRelative",
      "positionAbsolute",
      "positionFixed",
    );

    return self;
  };
