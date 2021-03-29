import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addOffset(v?: Record<string, string>) {
    self.mapToRulesets(v, "top", "bottom", "left", "right");
    return self;
  };
