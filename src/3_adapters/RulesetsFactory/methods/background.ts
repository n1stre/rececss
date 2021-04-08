import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function addBorder(v?: {
    shorthand?: Record<string, string>;
    color?: Record<string, string>;
  }) {
    builder.addRulesetsFromValues(v?.shorthand, ["background"]);
    builder.addRulesetsFromValues(v?.color, ["backgroundColor"]);
    builder.addRulesetsFromNames([
      "backgroundPositionBottom",
      "backgroundPositionTop",
      "backgroundPositionLeft",
      "backgroundPositionRight",
      "backgroundPositionCenter",
    ]);
    return builder.getResult();
  };
