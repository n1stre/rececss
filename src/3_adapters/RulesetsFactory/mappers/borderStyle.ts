import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapBorderStyle(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, [
      "borderStyle",
      "borderTopStyle",
      "borderBottomStyle",
      "borderLeftStyle",
      "borderRightStyle",
    ]);
  };
