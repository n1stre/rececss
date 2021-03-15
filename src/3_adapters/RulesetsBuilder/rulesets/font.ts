import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addFont(v?: {
    shorthand?: Record<string, string>;
    family?: Record<string, string>;
    size?: Record<string, string>;
  }) {
    self.addValues(v?.shorthand, "font");
    self.addValues(v?.family, "fontFamily");
    self.addValues(v?.size, "fontSize");

    return self;
  };
