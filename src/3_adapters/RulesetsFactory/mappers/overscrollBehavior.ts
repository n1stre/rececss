import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapOverscrollBehavior(values: ConfigurableValues) {
    builder.mapValuesToRulesets(values.overscrollBehavior, [
      "overscrollBehavior",
    ]);
    builder.mapSingleValuesToRulesets(values.overscrollBehavior, [
      "overscrollBehaviorInline",
      "overscrollBehaviorBlock",
      "overscrollBehaviorX",
      "overscrollBehaviorY",
    ]);
  };
