import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorder(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, [
      "border",
      "borderTop",
      "borderBottom",
      "borderLeft",
      "borderRight",
    ]);
  };
