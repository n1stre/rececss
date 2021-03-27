import Ruleset, { IRuleset } from "../../1_entities/Ruleset";
import Stylesheet, { IStylesheet } from "../../1_entities/Stylesheet";
import { IRulesetsFactory, TConfigurableRulesetsValues } from "../interfaces";
import * as errors from "./GenerateStylesheetAssets.errors";

interface IProps {
  RulesetsFactory: IRulesetsFactory;
  stylesheetProps?: Partial<IStylesheet.Props>;
  rulesetProps?: Partial<IRuleset.Props>;
}

export default class GenerateStylesheetAssets {
  private constructor(private props: IProps) {}

  static create(props: IProps) {
    return new GenerateStylesheetAssets(props);
  }

  async exec(dto: {
    values: TConfigurableRulesetsValues;
    media?: Record<string, string>;
    splitByMedia?: boolean;
  }) {
    const baseRulesets = this.createRulesets(dto.values);
    const rulesets = baseRulesets.map((rs) => rs.toString());
    const stylesheet = this.createStylesheet({ rulesets });
    const stylesheets = [stylesheet];

    if (dto.media) {
      Object.entries(dto.media).forEach(([name, query]) => {
        const media = { name, query };
        const rulesets = baseRulesets.map((rs) => rs.toPrefixedString(name));
        stylesheets.push(this.createStylesheet({ rulesets, media }));
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

  private createRulesets(dto: TConfigurableRulesetsValues) {
    const dtos = this.props.RulesetsFactory.create(dto);
    return dtos.map((rs) => this.createRuleset(rs));
  }

  private createRuleset(dto: IRuleset.DTO) {
    return Ruleset.build(this.props.rulesetProps).create(dto);
  }

  private createStylesheet(dto: IStylesheet.DTO) {
    return Stylesheet.build(this.props.stylesheetProps).create(dto);
  }
}
