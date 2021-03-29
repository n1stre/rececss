import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addColor(v?: Record<string, string>) {
    self.mapToRulesets(v, "backgroundColor", "color");
    return self;
  };
