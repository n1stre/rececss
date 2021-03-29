import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addZIndex(v?: Record<string, string>) {
    self.addRulesets("zIndexAuto");
    self.mapToRulesets(v, "zIndex");
    return self;
  };
