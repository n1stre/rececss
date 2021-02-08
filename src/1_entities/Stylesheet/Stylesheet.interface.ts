import { IRulesetDTO } from "../Ruleset/Ruleset.interface";

export interface IStylesheetDTO {
  rulesets: IStylesheetRulesetDTO[];
  media: IStylesheetMediaDTO | null;
}

export interface IStylesheetRulesetDTO extends IRulesetDTO {}

export interface IStylesheetMediaDTO {
  name: string;
  query: string;
}

export interface IStylesheet {
  getRulesets: () => IStylesheetRulesetDTO[];
  setRulesets: (...data: IStylesheetRulesetDTO[]) => IStylesheet;
  getMedia: () => IStylesheetMediaDTO | null;
  setMedia: (media: IStylesheetMediaDTO) => IStylesheet;
  toString: () => string;
  toDTO: () => IStylesheetDTO;
}
