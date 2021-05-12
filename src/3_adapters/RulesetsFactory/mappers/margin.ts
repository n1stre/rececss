import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapMargin(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["margin"]);
    builder.mapSingleValuesToRulesets(values, [
      "marginTop",
      "marginBottom",
      "marginVertical",
      "marginLeft",
      "marginRight",
      "marginHorizontal",
    ]);
  };
