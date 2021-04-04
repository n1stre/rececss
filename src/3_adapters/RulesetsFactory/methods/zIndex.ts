import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addZIndex(v?: Record<string, string>) {
    self.addRulesetsFromNames(["zIndexAuto"]);
    self.addRulesetsFromValues(v, ["zIndex"]);
    return self.getResult();
  };
