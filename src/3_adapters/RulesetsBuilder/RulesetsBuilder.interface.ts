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
  classnamesMap?: Partial<ClassnamesMap>;
  classnameStates?: Record<string, string>;
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

export interface CSSPropertiesMap<T = string> extends ICSSProperties<T> {
  flexRow: T;
  flexCol: T;
  paddingVertical: T;
  paddingHorizontal: T;
  marginVertical: T;
  marginHorizontal: T;
}

export interface DeclarationsMap extends CSSPropertiesMap {
  flexRowChild: string;
  fontSizeWithLineHeight: string;
}

export interface ClassnamesMap extends CSSPropertiesMap {
  flexRowGuttered: string;
}

export type Classname = keyof ClassnamesMap;
export type Declaration = keyof DeclarationsMap;
