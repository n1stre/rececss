export type CSSProperty = string;
type CSSUnit = string;
type CSSValue = string | number;

export type CSSDeclarationDTO = {
  property: CSSProperty;
  value: CSSValue;
};

export type CSSRulesetDTO = {
  selector?: string | null;
  declarations?: CSSDeclarationDTO[];
};

export interface CSSRulesetInstance {
  getSelector: () => string | null;
  getDeclarations: () => CSSDeclarationDTO[];
  getDeclaration: (prop: CSSProperty) => CSSDeclarationDTO | null;
  getDeclarationValue: (prop: CSSProperty) => CSSValue | null;
  setSelector: (s: CSSProperty) => CSSRulesetInstance;
  setDeclarations: (s: CSSDeclarationDTO[]) => CSSRulesetInstance;
  addDeclaration: (declaration: CSSDeclarationDTO) => CSSRulesetInstance;
  removeDeclaration: (prop: CSSProperty) => CSSRulesetInstance;
  toString: () => string;
  toDTO: () => CSSRulesetDTO;
}
