import Ruleset from "../Ruleset";
import { IStylesheetDTO } from "./Stylesheet.interface";
import buildStylesheet from "./Stylesheet";

const Stylesheet = buildStylesheet({
  rulesetToString: (rs) => Ruleset.make(rs).toString(),
  rulesetRename: (rs, fn) => Ruleset.make(rs).rename(fn).toDTO(),
});

export default Object.freeze({
  prebuild: buildStylesheet,
  make: (dto: IStylesheetDTO) => new Stylesheet(dto),
});
