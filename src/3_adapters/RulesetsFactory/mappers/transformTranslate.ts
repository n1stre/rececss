import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformTranslate(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.transformTranslate, [
      "transformTranslate",
    ]);
    builder.mapSingleValuesToRulesets(values.transformTranslate, [
      "transformTranslateX",
      "transformTranslateY",
      "transformTranslateZ",
    ]);
  };
