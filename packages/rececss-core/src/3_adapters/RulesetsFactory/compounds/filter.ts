import { RulesetsBuilder, ValuesMap } from "../RulesetsFactory.interface";

export default function createFilterRulesets(
  values: ValuesMap,
  builder: RulesetsBuilder,
) {
  for (let key in values.filter) {
    builder.addRulesetFromKeyword("filter", [key, values.filter[key]]);
  }

  builder.addRulesetFromKeyword("filterCompound");
}
