import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapTransformSkew(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.transformSkew, ["transformSkew"]);
    builder.mapSingleValuesToRulesets(values.transformSkew, [
      "transformSkewX",
      "transformSkewY",
    ]);
  };
