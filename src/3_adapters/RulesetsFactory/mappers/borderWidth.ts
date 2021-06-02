import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorderWidth(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.borderWidth, [
      "borderWidth",
      "borderTopWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderRightWidth",
    ]);
  };
