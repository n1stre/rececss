import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addPadding(v?: {
    shorthand?: Record<string, string>;
    edges?: Record<string, string>;
  }) {
    self.addRulesetsFromValues(v?.shorthand, ["padding"]);
    self.addRulesetsFromValues(v?.edges, [
      "padding",
      "paddingTop",
      "paddingBottom",
      "paddingVertical",
      "paddingLeft",
      "paddingRight",
      "paddingHorizontal",
    ]);

    return self.getResult();
  };
