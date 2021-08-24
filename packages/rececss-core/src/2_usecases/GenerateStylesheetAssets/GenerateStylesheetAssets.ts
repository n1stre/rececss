import Ruleset from "../../1_entities/Ruleset";
import Stylesheet from "../../1_entities/Stylesheet";
import { Props, DTO } from "./GenerateStylesheetAssets.interface";

export default class GenerateStylesheetAssets {
  private constructor(private props: Props) {}
  private Stylesheet = Stylesheet.createFactory(this.props.stylesheetProps);
  private Ruleset = Ruleset.createFactory(this.props.rulesetProps);

  static create(props: Props) {
    return new GenerateStylesheetAssets(props);
  }

  async exec(dto: DTO) {
    const { Stylesheet, Ruleset } = this;
    const baseRulesets = dto.rulesets.map((rs) => Ruleset.create(rs));
    const rulesets = baseRulesets.map((rs) => rs.toString());
    const stylesheet = Stylesheet.create({ rulesets });
    const stylesheets = [stylesheet];

    if (dto.media) {
      Object.entries(dto.media).forEach(([name, query]) => {
        const media = { name, query };
        const rulesets = baseRulesets.map((rs) => rs.toPrefixedString(name));
        stylesheets.push(Stylesheet.create({ rulesets, media }));
      });
    }

    if (dto.splitByMedia) {
      return stylesheets.map((s) => ({
        name: s.getName(),
        contents: s.toString(),
      }));
    }

    const name = stylesheet.getName();
    const contents = stylesheets.map((s) => s.toString()).join("\n");
    return [{ name, contents }];
  }
}
