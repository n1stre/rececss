import RulesetsListBuilder from "../../1_entities/RulesetsListBuilder";
import filter from "./computed/filter";
import flexGrid from "./computed/flexGrid";
import fontSize from "./computed/fontSize";
import transform from "./computed/transform";
import {
  Props,
  DTO,
  RuleName,
  ComputedRulesetCreators,
} from "./BuildRulesets.interface";

const computed: ComputedRulesetCreators = {
  filter,
  flexGrid,
  fontSize,
  transform,
};

export default class BuildRulesets {
  private constructor(private builder: RulesetsListBuilder) {}

  static create(props: Props) {
    return new BuildRulesets(RulesetsListBuilder.create(props));
  }

  exec(dto: DTO) {
    Object.entries(dto.values).forEach((entry) => {
      const ruleName = entry[0] as RuleName;
      const ruleValues = entry[1] as Record<string, string>;
      const rulesetCreator = computed[ruleName];
      if (rulesetCreator) return rulesetCreator(dto.values, this.builder);

      Object.entries(ruleValues).forEach((e) =>
        this.builder.addRulesetFromKeyword(ruleName, e),
      );
    });

    return this.builder.getResult();
  }
}
