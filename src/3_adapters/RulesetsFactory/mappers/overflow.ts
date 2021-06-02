import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapOverflow(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.overflow, [
      "overflow",
      "overflowX",
      "overflowY",
      "overflowInline",
      "overflowBlock",
    ]);
  };
