import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addPadding(v?: {
    shorthand: Record<number, string>;
    edges: Record<number, string>;
  }) {
    self.addValues(v?.shorthand, "padding");
    self.addValues(
      v?.edges,
      "padding",
      "paddingTop",
      "paddingBottom",
      "paddingVertical",
      "paddingLeft",
      "paddingRight",
      "paddingHorizontal",
    );

    return self;
  };
