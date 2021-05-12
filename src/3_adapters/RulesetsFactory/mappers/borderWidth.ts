import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorderWidth(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, [
      "borderWidth",
      "borderTopWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderRightWidth",
    ]);
  };
