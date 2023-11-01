import { ComputedRulesetCreator } from "../BuildRulesets.interface";

const createFilterRulesets: ComputedRulesetCreator = (values, builder) => {
  for (let key in values.filter) {
    builder.addRulesetFromKeyword("filter", [key, values.filter[key]]);
  }

  builder.addRulesetFromKeyword("filterCompound");
};

export default createFilterRulesets;
