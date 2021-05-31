import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformScale(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["transformScale"]);
    builder.mapSingleValuesToRulesets(values, [
      "transformScaleX",
      "transformScaleY",
      "transformScaleZ",
    ]);
  };
