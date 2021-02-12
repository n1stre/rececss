import { IRulesetDTO, IRuleset } from "./Ruleset.interface";

const buildRuleset = () => {
  return class Ruleset implements IRuleset {
    private dto: IRulesetDTO;

    constructor(dto: IRulesetDTO) {
      this.dto = { ...dto };
    }

    public rename(fn: (old: string) => string) {
      this.dto.classname = fn(this.dto.classname);
      return this;
    }

    public toString() {
      return `.${this.dto.classname} { ${this.dto.declarations} }`;
    }

    public toDTO() {
      return this.dto;
    }
  };
};

export default buildRuleset;
