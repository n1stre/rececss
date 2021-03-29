import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addOverflow() {
    self.addRulesets(
      "overflowVisible",
      "overflowHidden",
      "overflowScroll",
      "overflowAuto",
      "overflowXVisible",
      "overflowXHidden",
      "overflowXScroll",
      "overflowXAuto",
      "overflowYVisible",
      "overflowYHidden",
      "overflowYScroll",
      "overflowYAuto",
    );

    return self;
  };
