import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformTranslate(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["transformTranslate"]);
    builder.mapSingleValuesToRulesets(values, [
      "transformTranslateX",
      "transformTranslateY",
      "transformTranslateZ",
    ]);
  };
