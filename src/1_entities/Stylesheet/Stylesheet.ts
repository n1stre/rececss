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

    public getRulesets() {
      return this.dto.rulesets;
    }

    public addRulesets(...data: IStylesheetRulesetDTO[]) {
      this.dto.rulesets = [...this.getRulesets(), ...data];
      return this;
    }

    public getMedia() {
      return this.dto.media;
    }

    public setMedia(media: IStylesheetMediaDTO) {
      this.dto.media = media;
      return this;
    }

    public getContents() {
      const result: string[] = [];
      const media = this.getMedia();

      if (media) {
        const renameFn = (n: string) => media.name + ":" + n;
        result.push(`@media ${media.query} {`);
        result.push(...this.getStringifiedRulesets(renameFn));
        result.push("}");
      } else {
        result.push(...this.getStringifiedRulesets());
      }

      return result.join("\n") + "\n";
    }

    public toDTO() {
      return this.dto;
    }

    private getStringifiedRulesets(renameFn?: (n: string) => string) {
      return this.getRulesets().map((rs) => {
        const renamed = renameFn ? props.rulesetRename(rs, renameFn) : rs;
        const stringified = props.rulesetToString(renamed);
        return stringified;
      });
    }
  };
};

export default buildStylesheet;
