import Range from "./Range";

describe("Range", () => {
  test("detects if is rangable array", () => {
    expect(Range.isRangeArray("")).toBe(false);
    expect(Range.isRangeArray(12)).toBe(false);
    expect(Range.isRangeArray([])).toBe(false);
    expect(Range.isRangeArray({})).toBe(false);
    expect(Range.isRangeArray([1])).toBe(false);
    expect(Range.isRangeArray([1, 2])).toBe(false);
    expect(Range.isRangeArray([0, 10, 1])).toBe(true);
  });

  //prettier-ignore
  test("basic range", () => {
    expect(Range.create(0, 10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(Range.create(0, 10, 1)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(Range.create(0, 1, 0.1)).toStrictEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
  });

  test("inclusive range", () => {
    const res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(Range.createInclusive(0, 10)).toStrictEqual(res);
    expect(Range.createInclusive(0, 10, 1)).toStrictEqual(res);
  });

  test("inclusive range from array", () => {
    const res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(Range.createInclusiveFromArray([0, 10, 1])).toStrictEqual(res);
    expect(Range.createInclusiveFromArray([1.2, 2, 0.2])).toStrictEqual([
      1.2, 1.4, 1.6, 1.8, 2,
    ]);
  });
});
