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

export interface ConfigRange {
  min: number;
  max: number;
  step: number;
}

export interface Config {
  read: () => Config;
  getPaddings: () => Record<CSSUnit, number[]>;
  getMargins: () => Record<CSSUnit, number[]>;
  getOffsets: () => Record<CSSUnit, number[]>;
  getZIndexes: () => Record<CSSUnit, number[]>;
  getFontSizes: () => Record<CSSUnit, number[]>;
  getFontFamilies: () => Record<string, string>;
  getBorders: () => Record<string, number[]>;
  getBorderRadiuses: () => Record<CSSUnit, number[]>;
  getPalleteForBackground: () => Record<string, string>;
  getPalleteForColor: () => Record<string, string>;
  getMediaBreakpoints: () => Record<string, string>;
}
