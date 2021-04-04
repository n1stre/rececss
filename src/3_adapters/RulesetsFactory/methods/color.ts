import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addColor(v?: Record<string, string>) {
    self.addRulesetsFromValues(v, ["backgroundColor", "color"]);
    return self.getResult();
  };
