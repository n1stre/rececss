import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorderStyle(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.borderStyle, [
      "borderStyle",
      "borderTopStyle",
      "borderBottomStyle",
      "borderLeftStyle",
      "borderRightStyle",
    ]);
  };
