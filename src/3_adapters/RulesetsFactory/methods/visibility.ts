import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addVisibility() {
    self.addRulesetsFromNames([
      "visibilityVisible",
      "visibilityHidden",
      "visibilityCollapse",
    ]);

    return self.getResult();
  };
