import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addMargin(v?: {
    shorthand?: Record<string, string>;
    edges?: Record<string, string>;
  }) {
    self.addRulesetsFromValues(v?.shorthand, ["margin"]);
    self.addRulesetsFromValues(v?.edges, [
      "margin",
      "marginTop",
      "marginBottom",
      "marginVertical",
      "marginLeft",
      "marginRight",
      "marginHorizontal",
    ]);

    return self.getResult();
  };
