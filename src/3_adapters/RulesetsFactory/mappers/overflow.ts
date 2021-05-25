import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapOverflow(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, [
      "overflow",
      "overflowX",
      "overflowY",
      "overflowInline",
      "overflowBlock",
    ]);
  };
