export interface DTO<
  B extends Record<string, string>,
  C extends B,
  D extends B,
  V extends Partial<Record<keyof B, Variants>>,
> {
  classnamesMap: C;
  declarationsMap: D;
  variantsMap: V;
  commonVariants?: Variants;
}

export type Variants = Record<string, string>;
export type Placeholders = Array<string | undefined>;
