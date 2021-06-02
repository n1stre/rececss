import { DTO, Instance, MediaDTO, Props } from "./Stylesheet.interface";

export default class Stylesheet implements Instance {
  private constructor(private dto: DTO, private props: Props) {
    this.dto = { ...dto };
  }

  static defaultProps: Props = {
    filename: "rececss",
    extension: "css",
  };

  static createFactory(partialProps: Partial<Props> = {}) {
    const props = { ...Stylesheet.defaultProps, ...partialProps };
    return Object.freeze({ create: (dto: DTO) => new Stylesheet(dto, props) });
  }

  static create(dto: DTO) {
    return new Stylesheet(dto, Stylesheet.defaultProps);
  }

  getRulesets() {
    return this.dto.rulesets;
  }

  getName() {
    const nameParts = [this.filename, this.mediaName, this.extension];
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
    return this.rulesetsString + "\n";
  }

  toDTO() {
    return this.dto;
  }

  private getMediaRulesetsString(media: MediaDTO) {
    const result = [`@media ${media.query} {`, this.rulesetsString, "}"];
    return result.join("\n");
  }

  private get rulesetsString() {
    return this.getRulesets().join("\n");
  }

  private get mediaName() {
    return this.getMedia()?.name;
  }

  private get filename() {
    return this.props.filename || Stylesheet.defaultProps.filename;
  }

  private get extension() {
    return this.props.extension || Stylesheet.defaultProps.extension;
  }
}
