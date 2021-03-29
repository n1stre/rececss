import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addFont(v?: {
    shorthand?: Record<string, string>;
    family?: Record<string, string>;
    size?: Record<string, string>;
  }) {
    self.mapToRulesets(v?.shorthand, "font");
    self.mapToRulesets(v?.family, "fontFamily");
    self.mapToRulesets(v?.size, "fontSize");

    return self;
  };
