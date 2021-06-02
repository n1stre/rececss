import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapPadding(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.padding, ["padding"]);
    builder.mapSingleValuesToRulesets(values.padding, [
      "paddingTop",
      "paddingBottom",
      "paddingVertical",
      "paddingLeft",
      "paddingRight",
      "paddingHorizontal",
    ]);
  };
