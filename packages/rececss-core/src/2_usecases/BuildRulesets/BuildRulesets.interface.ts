import RulesetsListBuilder, {
  IRulesetsListBuilder,
} from "../../1_entities/RulesetsListBuilder";

export interface Props extends IRulesetsListBuilder.DTO {}

export interface DTO {
  values: ValuesMap;
}

export type ClassnamesMap = IRulesetsListBuilder.ClassnamesMap;

export type DeclarationsMap = IRulesetsListBuilder.DeclarationsMap;

export type VariantsMap = IRulesetsListBuilder.VariantsMap;

export type RuleName = keyof IRulesetsListBuilder.CSSProperties;

export type ComputedRulesetCreator = (
  values: ValuesMap,
  builder: RulesetsListBuilder,
) => void;

export type ComputedRulesetCreators = Partial<
  Record<keyof ValuesMap, ComputedRulesetCreator>
>;

export type ValuesMap = Partial<DefaultValuesMap & CustomValuesMap>;

export type DefaultValuesMap = IRulesetsListBuilder.CSSProperties<
  Record<string, string>
>;

export type CustomValuesMap = {
  flexGrid: {
    cols: number;
    gutter?: string;
    gutters?: Record<string, string>;
  };
};
