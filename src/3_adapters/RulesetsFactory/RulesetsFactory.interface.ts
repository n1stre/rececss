import { IRulesetsBuilder } from "../RulesetsBuilder";

export interface DTO extends IRulesetsBuilder.DTO {}

export interface RulesetsBuilder extends IRulesetsBuilder.Instance {}

export interface CSSPropertiesMap extends IRulesetsBuilder.CSSPropertiesMap {}

export type Mapper = (val?: Record<string, any>) => void;

export type Mappers = Partial<Record<keyof CSSPropertiesMap, Mapper>>;
