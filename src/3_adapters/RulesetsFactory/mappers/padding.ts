import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapPadding(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["padding"]);
    builder.mapSingleValuesToRulesets(values, [
      "paddingTop",
      "paddingBottom",
      "paddingVertical",
      "paddingLeft",
      "paddingRight",
      "paddingHorizontal",
    ]);
  };
