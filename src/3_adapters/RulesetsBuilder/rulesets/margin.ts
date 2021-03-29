import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addMargin(v?: {
    shorthand: Record<number, string>;
    edges: Record<number, string>;
  }) {
    self.mapToRulesets(v?.shorthand, "margin");
    self.mapToRulesets(
      v?.edges,
      "margin",
      "marginTop",
      "marginBottom",
      "marginVertical",
      "marginLeft",
      "marginRight",
      "marginHorizontal",
    );

    return self;
  };
