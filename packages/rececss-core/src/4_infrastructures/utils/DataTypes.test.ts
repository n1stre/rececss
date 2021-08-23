import DataTypes from "./DataTypes";

describe("DataTypes", () => {
  test("is number", () => {
    expect(DataTypes.isNumber(12)).toBe(true);
    expect(DataTypes.isNumber(1.2)).toBe(true);
    expect(DataTypes.isNumber(true)).toBe(false);
    expect(DataTypes.isNumber("sdf")).toBe(false);
    expect(DataTypes.isNumber({})).toBe(false);
    expect(DataTypes.isNumber([])).toBe(false);
    expect(DataTypes.isNumber(function () {})).toBe(false);
    expect(DataTypes.isNumber(null)).toBe(false);
    expect(DataTypes.isNumber(undefined)).toBe(false);
  });

  test("is array", () => {
    expect(DataTypes.isArray(12)).toBe(false);
    expect(DataTypes.isArray(1.2)).toBe(false);
    expect(DataTypes.isArray(true)).toBe(false);
    expect(DataTypes.isArray("sdf")).toBe(false);
    expect(DataTypes.isArray({})).toBe(false);
    expect(DataTypes.isArray([])).toBe(true);
    expect(DataTypes.isArray(function () {})).toBe(false);
    expect(DataTypes.isArray(null)).toBe(false);
    expect(DataTypes.isArray(undefined)).toBe(false);
  });

  test("is object", () => {
    expect(DataTypes.isObject(12)).toBe(false);
    expect(DataTypes.isObject(1.2)).toBe(false);
    expect(DataTypes.isObject(true)).toBe(false);
    expect(DataTypes.isObject("sdf")).toBe(false);
    expect(DataTypes.isObject({})).toBe(true);
    expect(DataTypes.isObject([])).toBe(false);
    expect(DataTypes.isObject(function () {})).toBe(false);
    expect(DataTypes.isObject(null)).toBe(false);
    expect(DataTypes.isObject(undefined)).toBe(false);
  });

  test("is function", () => {
    expect(DataTypes.isFunction(12)).toBe(false);
    expect(DataTypes.isFunction(1.2)).toBe(false);
    expect(DataTypes.isFunction(true)).toBe(false);
    expect(DataTypes.isFunction("sdf")).toBe(false);
    expect(DataTypes.isFunction({})).toBe(false);
    expect(DataTypes.isFunction([])).toBe(false);
    expect(DataTypes.isFunction(function () {})).toBe(true);
    expect(DataTypes.isFunction(null)).toBe(false);
    expect(DataTypes.isFunction(undefined)).toBe(false);
  });

  test("deep merge", () => {
    const obj1 = { a: "a", c: "c1", $px: [[1, 10, 1], 25], $var: { a: "a" } };
    const obj2 = { b: "b", c: "c2", $px: [[1, 10, 2], 50], $var: { b: "b" } };
    expect(DataTypes.deepMerge(obj1, obj2)).toEqual({
      a: "a",
      b: "b",
      c: "c2",
      $px: [[1, 10, 1], 25, [1, 10, 2], 50],
      $var: { a: "a", b: "b" },
    });
  });
});
