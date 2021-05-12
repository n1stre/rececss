import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapInset(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["inset"]);
    builder.mapSingleValuesToRulesets(values, [
      "top",
      "bottom",
      "left",
      "right",
    ]);
  };
