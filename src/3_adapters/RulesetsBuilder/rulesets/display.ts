import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addDisplay() {
    self.addRulesets(
      "displayNone",
      "displayInline",
      "displayBlock",
      "displayInlineBlock",
      "displayFlex",
      "displayInlineFlex",
      "displayTable",
      "displayGrid",
      "displayInlineGrid",
    );
    return self;
  };
