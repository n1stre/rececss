import { IRulesetDTO } from "../1_entities/Ruleset/Ruleset.interface";

export interface IAsset {
  name: string;
  contents: string;
}

export interface IRulesetsValuesDTO {
  size: Record<string, string>;
  padding: Record<string, string>;
  margin: Record<string, string>;
  offset: Record<string, string>;
  fontSize: Record<string, string>;
  fontFamily: Record<string, string>;
  border: Record<string, string>;
  borderRadius: Record<string, string>;
  color: Record<string, string>;
  zIndex: Record<string, string>;
}

export interface IRulesetsBuilder {
  addComputed: (data?: Partial<IRulesetsValuesDTO>) => IRulesetsBuilder;
  addStatic: () => IRulesetsBuilder;
  getResult: () => IRulesetDTO[];
}
