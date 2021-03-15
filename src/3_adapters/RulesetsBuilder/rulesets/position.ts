import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addPosition() {
    self.addStatic(
      "positionStatic",
      "positionRelative",
      "positionAbsolute",
      "positionFixed",
    );

    return self;
  };
