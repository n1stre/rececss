import * as utils from "@shared/utils";
import buildConfigAdapter from "./index";

const makeConfigAdapter = buildConfigAdapter({
  logWarning: console.log,
  isArray: utils.isArray,
  isNumber: utils.isNumber,
  rangeInclusive: utils.rangeInclusive,
});

describe("ConfigAdapter", () => {
  describe("paddings", () => {
    it("returns null if not specified", () => {
      const adapter = makeConfigAdapter({});
      expect(adapter.getPaddings()).toBe(null);
    });

    it("should parse value", () => {
      const adapter = makeConfigAdapter({ paddings: { px: [5] } });
      expect(adapter.getPaddings()).toEqual({ px: [5] });
    });

    it("should parse value for multiple units", () => {
      const adapter = makeConfigAdapter({ paddings: { px: [5], em: [1] } });
      expect(adapter.getPaddings()).toEqual({ px: [5], em: [1] });
    });

    it("should parse values in asc order", () => {
      const adapter = makeConfigAdapter({ paddings: { px: [5, 1, 0, 2, 14] } });
      expect(adapter.getPaddings()).toEqual({ px: [0, 1, 2, 5, 14] });
    });

    it("should parse values from range", () => {
      const adapter = makeConfigAdapter({
        paddings: {
          px: [[0, 5, 1]],
          em: [[1, 2, 0.1]],
        },
      });
      expect(adapter.getPaddings()).toEqual({
        px: [0, 1, 2, 3, 4, 5],
        em: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2],
      });
    });

    it("should parse values from range and from numbers in asc order", () => {
      const adapter = makeConfigAdapter({
        paddings: { px: [10, [0, 6, 2], 5, 3] },
      });
      expect(adapter.getPaddings()).toEqual({ px: [0, 2, 3, 4, 5, 6, 10] });
    });

    it("ignores invalid units", () => {
      const adapterInvalid = makeConfigAdapter({
        // @ts-ignore
        paddings: { inv: [2] },
      });
      expect(adapterInvalid.getPaddings()).toBe(null);

      const adapterPartiallyValid = makeConfigAdapter({
        // @ts-ignore
        paddings: { inv: [2], px: [10] },
      });
      expect(adapterPartiallyValid.getPaddings()).toEqual({ px: [10] });
    });

    it("ignores non numeric values", () => {
      const adapterInvalid = makeConfigAdapter({
        // @ts-ignore
        paddings: { px: [2, "string", true, function () {}, undefined, 0, 1] },
      });
      expect(adapterInvalid.getPaddings()).toEqual({
        px: [0, 1, 2],
      });
    });

    it("ignores negative values", () => {
      const adapterInvalid = makeConfigAdapter({
        paddings: { px: [2, 1, 10, -4, 5, -7] },
      });
      expect(adapterInvalid.getPaddings()).toEqual({
        px: [1, 2, 5, 10],
      });
    });
  });
});
