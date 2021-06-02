import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapMargin(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.margin, ["margin"]);
    builder.mapSingleValuesToRulesets(values.margin, [
      "marginTop",
      "marginBottom",
      "marginVertical",
      "marginLeft",
      "marginRight",
      "marginHorizontal",
    ]);
  };
