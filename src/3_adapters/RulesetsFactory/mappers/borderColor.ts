import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorderColor(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.borderColor, [
      "borderColor",
      "borderTopColor",
      "borderBottomColor",
      "borderLeftColor",
      "borderRightColor",
    ]);
  };
