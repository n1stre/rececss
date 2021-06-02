import { IRuleset } from "../../1_entities/Ruleset";
import { IStylesheet } from "../../1_entities/Stylesheet";

export interface Props {
  rulesetProps?: Partial<IRuleset.Props>;
  stylesheetProps?: Partial<IStylesheet.Props>;
}

export interface DTO {
  rulesets: IRuleset.DTO[];
  media?: Record<string, string>;
  splitByMedia?: boolean;
}
