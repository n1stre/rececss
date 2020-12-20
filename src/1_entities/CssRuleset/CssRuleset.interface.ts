export type CSSUnit = CSSAbsoluteUnit | CSSRelativeUnit;
export type CSSAbsoluteUnit = "cm" | "mm" | "in" | "px" | "pt" | "pc";
export type CSSRelativeUnit =
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "%";

export type CSSProperty = string;
type CSSValue = string | number;

export type CSSDeclarationDTO = [CSSProperty, CSSValue] | string[];
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
