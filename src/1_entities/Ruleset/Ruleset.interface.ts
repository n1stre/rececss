export interface IRulesetDTO {
  classname: string;
  declarations: string;
}

export interface IRuleset {
  rename: (fn: (old: string) => string) => IRuleset;
  toString: () => string;
  toDTO: () => IRulesetDTO;
}
