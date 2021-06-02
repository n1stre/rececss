import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformRotate(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.transformRotate, ["transformRotate"]);
    builder.mapSingleValuesToRulesets(values.transformRotate, [
      "transformRotateX",
      "transformRotateY",
      "transformRotateZ",
    ]);
  };
