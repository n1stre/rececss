declare type CSSUnit = CSSAbsoluteUnit | CSSRelativeUnit;
declare type CSSAbsoluteUnit = "cm" | "mm" | "in" | "px" | "pt" | "pc";
declare type CSSRelativeUnit =
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "%";

declare type ConfigLengthUnitRange = [number, number, number]; // [min, max, step]
declare type ConfigLengthUnitValue = number | ConfigLengthUnitRange;
declare interface Config {
  paddings?: Partial<Record<CSSUnit, ConfigLengthUnitValue[]>>;
  margins?: Partial<Record<CSSUnit, ConfigLengthUnitValue[]>>;
  widths?: Partial<Record<CSSUnit, ConfigLengthUnitValue[]>>;
  heights?: Partial<Record<CSSUnit, ConfigLengthUnitValue[]>>;
}

declare interface ConfigInstance {
  getPaddings: () => Partial<Record<CSSUnit, number[]>> | null;
  // getMargins: () => Partial<Record<CSSUnit, number[]>>;
  // getOffsets: () => Record<CSSUnit, number[]>;
  // getZIndexes: () => Record<CSSUnit, number[]>;
  // getFontSizes: () => Record<CSSUnit, number[]>;
  // getFontFamilies: () => Record<string, string>;
  // getBorders: () => Record<string, number[]>;
  // getBorderRadiuses: () => Record<CSSUnit, number[]>;
  // getPalleteForBackground: () => Record<string, string>;
  // getPalleteForColor: () => Record<string, string>;
  // getMediaBreakpoints: () => Record<string, string>;
}
