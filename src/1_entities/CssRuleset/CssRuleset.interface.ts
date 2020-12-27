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

export type CSSDeclarationsDTO = Record<CSSProperty, CSSValue>;
export type CSSDeclarationDTO = {
  prop: CSSProperty;
  value: CSSValue;
};
export type CSSRulesetDTO = {
  selector?: string | null;
  declarations?: CSSDeclarationsDTO;
};

export interface CSSRulesetInstance {
  getSelector: () => string | null;
  getDeclarations: () => CSSDeclarationsDTO;
  getDeclaration: (v: CSSProperty) => CSSDeclarationDTO | null;
  getDeclarationValue: (v: CSSProperty) => CSSValue | null;
  setSelector: (v: CSSProperty) => CSSRulesetInstance;
  setDeclarations: (v: CSSDeclarationsDTO) => CSSRulesetInstance;
  addDeclarations: (v: CSSDeclarationsDTO) => CSSRulesetInstance;
  removeDeclaration: (v: CSSProperty) => CSSRulesetInstance;
  toString: () => string;
  toDTO: () => CSSRulesetDTO;
}
