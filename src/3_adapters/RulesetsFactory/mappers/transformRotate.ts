import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformRotate(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["transformRotate"]);
    builder.mapSingleValuesToRulesets(values, [
      "transformRotateX",
      "transformRotateY",
      "transformRotateZ",
    ]);
  };
