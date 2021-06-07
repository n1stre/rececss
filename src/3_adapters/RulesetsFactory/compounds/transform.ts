import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default function createTransformRulesets(
  values: ConfigurableValues,
  builder: RulesetsBuilder,
) {
  for (let key in values.transform) {
    builder.addRulesetFromKeyword("transform", [key, values.transform[key]]);
  }

  builder.addRulesetFromKeyword("transformCompound");
  builder.addRulesetFromKeyword("transformCompound3D");
}
