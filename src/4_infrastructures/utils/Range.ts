import { isArray, isNumber } from "./DataTypes";

export default Object.freeze({
  isRangeArray: isRangeArray,
  create: createRange,
  createInclusive: createInclusiveRange,
  createInclusiveFromArray: createInclusiveRangeFromArray,
});

function isRangeArray(v: any): v is Array<number> {
  return isArray(v) && isNumber(v[0]) && isNumber(v[1]) && isNumber(v[2]);
}

function createRange(start: number, stop: number, step = 1): number[] {
  return Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => parseFloat((x + y * step).toFixed(5)));
}

function createInclusiveRange(start: number, stop: number, step = 1): number[] {
  return createRange(start, stop + step, step);
}

function createInclusiveRangeFromArray(arr: number[]): number[] {
  return createInclusiveRange(arr[0], arr[1], arr[2]);
}
