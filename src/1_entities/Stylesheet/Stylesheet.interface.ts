import { IRulesetDTO } from "../Ruleset/Ruleset.interface";

export interface IStylesheetDTO {
  rulesets: IStylesheetRulesetDTO[];
  media?: IStylesheetMediaDTO;
}

export interface IStylesheetProps {
  rulesetToString: (rs: IStylesheetRulesetDTO) => string;
  rulesetRename: (
    rs: IStylesheetRulesetDTO,
    fn: (name: string) => string,
  ) => IStylesheetRulesetDTO;
}

export interface IStylesheetRulesetDTO extends IRulesetDTO {}

export interface IStylesheetMediaDTO {
  name: string;
  query: string;
}

export interface IStylesheet {
  getRulesets: () => IStylesheetRulesetDTO[];
  addRulesets: (...data: IStylesheetRulesetDTO[]) => IStylesheet;
  getMedia: () => IStylesheetMediaDTO | undefined;
  setMedia: (media: IStylesheetMediaDTO) => IStylesheet;
  getContents: () => string;
  toDTO: () => IStylesheetDTO;
}
