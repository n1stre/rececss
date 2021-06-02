import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorder(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.border, [
      "border",
      "borderTop",
      "borderBottom",
      "borderLeft",
      "borderRight",
    ]);
  };
