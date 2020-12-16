export type CSSProperty = string;
export type CSSUnit = string;

export type CSSDeclarationDTO = {
  propery: CSSProperty;
  value: string | number;
};

export type CSSRulesetDTO = {
  selector: string;
  declarations: CSSDeclarationDTO[];
};

export interface CSSRulesetInstance {
  getSelector: () => string;
  setSelector: (s: string) => CSSRulesetInstance;
  getDeclarations: () => CSSDeclarationDTO[];
  getDeclaration: (prop: string) => CSSDeclarationDTO[];
  addDeclaration: (declaration: CSSDeclarationDTO) => CSSRulesetInstance;
  toString: () => string;
  toDTO: () => CSSRulesetDTO;
}
