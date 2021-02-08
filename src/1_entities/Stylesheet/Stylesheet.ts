import {
  IStylesheetDTO,
  IStylesheet,
  IStylesheetMediaDTO,
  IStylesheetRulesetDTO,
} from "./Stylesheet.interface";

const buildStylesheet = () => {
  return class Stylesheet implements IStylesheet {
    private dto: IStylesheetDTO;
    private initial: IStylesheetDTO = {
      rulesets: [],
      media: null,
    };

    constructor(dto: Partial<IStylesheetDTO>) {
      this.dto = Object.assign(this.initial, dto);
    }

    public getRulesets() {
      return this.dto.rulesets;
    }

    public setRulesets(...data: IStylesheetRulesetDTO[]) {
      this.dto.rulesets = [...this.dto.rulesets, ...data];
      return this;
    }

    public getMedia() {
      return this.dto.media;
    }

    public setMedia(media: IStylesheetMediaDTO) {
      this.dto.media = media;
      return this;
    }

    public toDTO() {
      return this.dto;
    }
  };
};

export default buildStylesheet;
