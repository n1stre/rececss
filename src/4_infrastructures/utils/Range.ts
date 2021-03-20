export default Object.freeze({
  isRangeable,
  create: createRange,
  createInclusive: createRangeInclusive,
});

function isNumber(v: unknown): boolean {
  return typeof v === "number" && !isNaN(v);
}

function isArray(v: unknown): boolean {
  return Array.isArray(v);
}

function isRangeable(v: any) {
  return isArray(v) && isNumber(v[0]) && isNumber(v[1]) && isNumber(v[2]);
}

function createRange(start: number, stop: number, step = 1): number[] {
  return Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => parseFloat((x + y * step).toFixed(5)));
}

function createRangeInclusive(start: number, stop: number, step = 1): number[] {
  return createRange(start, stop + step, step);
}
