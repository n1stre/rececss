export const isNumber = (v: unknown): boolean => {
  return typeof v === "number" && !isNaN(v);
};

export const isArray = (v: unknown): boolean => {
  return Array.isArray(v);
};

export const range = (start: number, stop: number, step = 1): number[] => {
  return Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => parseFloat((x + y * step).toFixed(5)));
};

export const rangeInclusive = (
  start: number,
  stop: number,
  step = 1,
): number[] => {
  return range(start, stop + step, step);
};
