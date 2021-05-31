import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformSkew(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["transformSkew"]);
    builder.mapSingleValuesToRulesets(values, [
      "transformSkewX",
      "transformSkewY",
    ]);
  };
