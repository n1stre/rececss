import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addDisplay() {
    self.addRulesetsFromNames([
      "displayNone",
      "displayInline",
      "displayBlock",
      "displayInlineBlock",
      "displayFlex",
      "displayInlineFlex",
      "displayTable",
      "displayGrid",
      "displayInlineGrid",
    ]);
    return self.getResult();
  };
