import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addZIndex(v?: Record<string, string>) {
    self.addStatic("zIndexAuto");
    self.addValues(v, "zIndex");
    return self;
  };
