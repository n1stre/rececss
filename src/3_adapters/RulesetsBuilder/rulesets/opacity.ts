import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addOpacity() {
    self.addRulesets(
      "opacity0",
      "opacity01",
      "opacity02",
      "opacity03",
      "opacity04",
      "opacity05",
      "opacity06",
      "opacity07",
      "opacity08",
      "opacity09",
      "opacity1",
    );

    return self;
  };
