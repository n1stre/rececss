import { ComputedRulesetCreator } from "../BuildRulesets.interface";

const createTransformRulesets: ComputedRulesetCreator = (values, builder) => {
  for (let key in values.transform) {
    builder.addRulesetFromKeyword("transform", [key, values.transform[key]]);
  }

  builder.addRulesetFromKeyword("transformCompound");
  builder.addRulesetFromKeyword("transformCompound3D");
};

export default createTransformRulesets;
