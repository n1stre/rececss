import {
  IStylesheetDTO,
  IStylesheet,
  IStylesheetMediaDTO,
  IStylesheetRulesetDTO,
  IStylesheetProps,
} from "./Stylesheet.interface";

const buildStylesheet = (props: IStylesheetProps) => {
  return class Stylesheet implements IStylesheet {
    private dto: IStylesheetDTO;

    constructor(dto: Partial<IStylesheetDTO>) {
      this.dto = { rulesets: [], media: undefined, ...dto };
    }

    getRulesets() {
      return this.dto.rulesets;
    }

    addRulesets(...data: IStylesheetRulesetDTO[]) {
      this.dto.rulesets = [...this.getRulesets(), ...data];
      return this;
    }

    getMedia() {
      return this.dto.media;
    }

    setMedia(media: IStylesheetMediaDTO) {
      this.dto.media = media;
      return this;
    }

    getContents() {
      const media = this.getMedia();
      if (media) return this.getMediaRulesetsString(media) + "\n";
      return this.getRulesetsString() + "\n";
    }

    toDTO() {
      return this.dto;
    }

    private getMediaRulesetsString(media: IStylesheetMediaDTO) {
      const renameFn = (n: string) => media.name + ":" + n;
      const rulesetsString = this.getRulesetsString(renameFn);
      const result = [`@media ${media.query} {`, rulesetsString, "}"];
      return result.join("\n");
    }

    private getRulesetsString(renameFn?: (n: string) => string) {
      return this.getRulesets().reduce((acc, rs) => {
        const renamed = renameFn ? props.rulesetRename(rs, renameFn) : rs;
        const newLine = (acc ? "\n" : "") + props.rulesetToString(renamed);
        return acc + newLine;
      }, "");
    }
  };
};

export default buildStylesheet;
