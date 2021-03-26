import { DTO, Instance, MediaDTO, Props } from "./Stylesheet.interface";

const defaultProps: Props = {
  filename: "rececss",
  extension: "css",
};

export default class Stylesheet implements Instance {
  private constructor(private dto: DTO, private props: Props) {
    this.dto = { ...dto };
  }

  static build(partialProps: Partial<Props> = {}) {
    const props = { ...defaultProps, ...partialProps };
    const create = (dto: DTO) => new Stylesheet(dto, props);
    return Object.freeze({ create });
  }

  static create(dto: DTO) {
    return new Stylesheet(dto, defaultProps);
  }

  getRulesets() {
    return this.dto.rulesets;
  }

  addRulesets(...data: string[]) {
    this.dto.rulesets = [...this.getRulesets(), ...data];
    return this;
  }

  getName() {
    const media = this.getMedia();
    const nameParts = [this.props.filename, media?.name, this.props.extension];
    return nameParts.filter(Boolean).join(".");
  }

  getMedia() {
    return this.dto.media;
  }

  setMedia(media: MediaDTO) {
    this.dto.media = media;
    return this;
  }

  toString() {
    const media = this.getMedia();
    if (media) return this.getMediaRulesetsString(media) + "\n";
    return this.getRulesetsString() + "\n";
  }

  toDTO() {
    return this.dto;
  }

  private getMediaRulesetsString(media: MediaDTO) {
    const rulesetsString = this.getRulesetsString();
    const result = [`@media ${media.query} {`, rulesetsString, "}"];
    return result.join("\n");
  }

  private getRulesetsString() {
    return this.getRulesets().join("\n");
  }
}
