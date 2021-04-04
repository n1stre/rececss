import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addBorder(v?: {
    shorthand?: Record<string, string>;
    radius?: Record<string, string>;
  }) {
    self.addRulesetsFromValues(v?.shorthand, [
      "border",
      "borderTop",
      "borderBottom",
      "borderLeft",
      "borderRight",
    ]);
    self.addRulesetsFromValues(v?.radius, ["borderRadius"]);
    return self.getResult();
  };
