import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default function createFilterRulesets(
  values: ConfigurableValues,
  builder: RulesetsBuilder,
) {
  for (let key in values.filter) {
    builder.addRulesetFromKeyword("filter", [key, values.filter[key]]);
  }

  builder.addRulesetFromKeyword("filterCompound");
}
