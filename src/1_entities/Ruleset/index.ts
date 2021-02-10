import { IRulesetDTO, IRuleset } from "./Ruleset.interface";
import buildRuleset from "./Ruleset";

const Ruleset = buildRuleset();

export default Object.freeze({
  prebuild: buildRuleset,
  make: (dto: IRulesetDTO): IRuleset => new Ruleset(dto),
});
