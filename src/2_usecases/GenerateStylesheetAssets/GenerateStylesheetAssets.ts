import { IStylesheet } from "../../1_entities/Stylesheet";
import { IRulesetsFactory, IUtilityRulesetsDTO } from "../interfaces";
// import * as errors from "./GenerateStylesheetAssets.errors";

interface IProps {
  RulesetsFactory: IRulesetsFactory;
  StylesheetFactory: IStylesheet.Factory;
}

export default class GenerateStylesheetAssets {
  private constructor(private props: IProps) {}

  static create(props: IProps) {
    return new GenerateStylesheetAssets(props);
  }

  async exec(dto: {
    values: IUtilityRulesetsDTO;
    media?: Record<string, string>;
    splitByMedia?: boolean;
  }) {
    const { RulesetsFactory, StylesheetFactory } = this.props;
    const baseRulesets = RulesetsFactory.createAll(dto.values);
    const rulesets = baseRulesets.map((rs) => rs.toString());
    const stylesheet = StylesheetFactory.create({ rulesets });
    const stylesheets = [stylesheet];

    if (dto.media) {
      Object.entries(dto.media).forEach(([name, query]) => {
        const media = { name, query };
        const rulesets = baseRulesets.map((rs) => rs.toPrefixedString(name));
        stylesheets.push(StylesheetFactory.create({ rulesets, media }));
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
