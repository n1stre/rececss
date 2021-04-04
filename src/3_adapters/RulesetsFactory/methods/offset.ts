import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addOffset(v?: Record<string, string>) {
    self.addRulesetsFromValues(v, ["top", "bottom", "left", "right"]);
    return self.getResult();
  };
