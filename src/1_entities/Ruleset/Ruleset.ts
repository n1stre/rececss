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
      const cn = this.escapeClassname(this.dto.classname);
      return `.${cn} { ${this.dto.declarations} }`;
    }

    public toDTO() {
      return this.dto;
    }

    private escapeClassname(cn: string) {
      return cn
        .replace(/\%/g, "\\%")
        .replace(/\:/g, "\\:")
        .replace(/\./g, "\\.");
    }
  };
};

export default buildRuleset;
