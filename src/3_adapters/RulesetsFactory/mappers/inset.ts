import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapInset(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.inset, ["inset"]);
    builder.mapSingleValuesToRulesets(values.inset, [
      "top",
      "bottom",
      "left",
      "right",
    ]);
  };
