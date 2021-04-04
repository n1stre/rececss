import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addPosition() {
    self.addRulesetsFromNames([
      "positionStatic",
      "positionRelative",
      "positionAbsolute",
      "positionFixed",
    ]);

    return self.getResult();
  };
