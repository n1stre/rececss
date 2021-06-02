import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformScale(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.transformScale, ["transformScale"]);
    builder.mapSingleValuesToRulesets(values.transformScale, [
      "transformScaleX",
      "transformScaleY",
      "transformScaleZ",
    ]);
  };
