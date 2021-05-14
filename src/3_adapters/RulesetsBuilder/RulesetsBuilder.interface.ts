import { IRuleset } from "../../1_entities/Ruleset";
import {
  ICSSProperties,
  IUtilityRulesetsDTO,
} from "../../2_usecases/interfaces";

type ValueOf<T> = T[keyof T];

export type RulesetsValuesDTO = IUtilityRulesetsDTO;
export type RulesetsValues = ValueOf<IUtilityRulesetsDTO>;

export interface DTO {
  rulesetProps?: Partial<IRuleset.Props>;
  rulesetVariants?: Partial<ICSSProperties<Record<string, string>>>;
  classnamesMap?: Partial<ClassnamesMap>;
}

export type Placeholders = Array<string | undefined>;

export interface Instance {
  getClassname: (name: keyof ClassnamesMap, ...p: Placeholders) => string;
  getDeclaration: (name: keyof DeclarationsMap, ...p: Placeholders) => string;
  getResult: () => IRuleset.Instance[];
  getResultDTO: () => IRuleset.DTO[];
  mapValuesToRulesets: (
    values: Record<string, string> | undefined,
    rulesetNames: Array<keyof CSSPropertiesMap>,
  ) => void;
  mapSingleValuesToRulesets: (
    values: Record<string, string> | undefined,
    rulesetNames: Array<keyof CSSPropertiesMap>,
  ) => void;
  addRuleset: (dto: IRuleset.DTO) => void;
}

export interface CSSPropertiesMap<T = string> extends ICSSProperties<T> {}

export interface DeclarationsMap extends CSSPropertiesMap {
  flexRow: string;
  flexCol: string;
  flexRowChild: string;
  fontSizeWithLineHeight: string;
}

export interface ClassnamesMap extends CSSPropertiesMap {
  flexRow: string;
  flexCol: string;
  flexRowGuttered: string;
}

export type Classname = keyof ClassnamesMap;
export type Declaration = keyof DeclarationsMap;
