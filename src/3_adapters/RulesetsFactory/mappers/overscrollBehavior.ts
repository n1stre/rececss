import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapOverscrollBehavior(values: Record<string, string>) {
    builder.mapValuesToRulesets(values, ["overscrollBehavior"]);
    builder.mapSingleValuesToRulesets(values, [
      "overscrollBehaviorInline",
      "overscrollBehaviorBlock",
      "overscrollBehaviorX",
      "overscrollBehaviorY",
    ]);
  };
