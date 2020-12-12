export default (d: {
  logWarning: (s: string) => void;
  isArray: (v: unknown) => boolean;
  isNumber: (v: unknown) => boolean;
  rangeInclusive: (start: number, stop: number, step: number) => number[];
}) => {
  return function makeConfigAdapter(c: Config): ConfigInstance {
    const utils = Object.freeze(d);
    const config = Object.freeze({ ...c });

    return Object.freeze({
      getPaddings: () => {
        return parseValuesByUnit({
          property: "padding",
          data: config.paddings,
          unitValidators: [isLengthUnit],
          valueValidators: [utils.isNumber, isNonNegative],
        });
      },
      // getMargins: () => {},
      // getOffsets: () => {},
      // getZIndexes: () => {},
      // getFontSizes: () => {},
      // getFontFamilies: () => {},
      // getBorders: () => {},
      // getBorderRadiuses: () => {},
      // getPalleteForBackground: () => {},
      // getPalleteForColor: () => {},
      // getMediaBreakpoints: () => {},
    });

    function parseValuesByUnit(params: {
      property: string;
      data: Record<string, unknown[]>;
      unitValidators?: ((s: string) => boolean)[];
      valueValidators?: ((v: unknown) => boolean)[];
    }) {
      if (!params.data) return null;

      const unitValidators = params.unitValidators || [];
      const valueValidators = params.valueValidators || [];
      const entries = Object.entries(params.data);
      const result = {};

      entries.forEach(([unit, values]) => {
        if (unitValidators.some((fn) => !fn(unit))) {
          return invalidUnitWarning(unit, params.property);
        }

        const unitValues = values
          .map((v) => (isRange(v) ? utils.rangeInclusive(v[0], v[1], v[2]) : v))
          .flat()
          .filter(makeValidateValue(valueValidators, unit, params.property))
          .sort((a, b) => Number(a) - Number(b));

        if (unitValues.length) {
          result[unit] = unitValues;
        }
      });

      return Object.keys(result).length ? result : null;
    }

    function makeValidateValue(
      validators: ((v: unknown) => boolean)[],
      unit: string,
      property: string,
    ) {
      return (value) => {
        const hasError = !!validators.some((fn) => !fn(value));
        const isValid = !hasError;
        if (hasError) invalidValueWarning(value, unit, property);
        return isValid;
      };
    }

    function isRange(v: unknown) {
      return (
        utils.isArray(v) &&
        utils.isNumber(v[0]) &&
        utils.isNumber(v[1]) &&
        utils.isNumber(v[2])
      );
    }

    function isLengthUnit(v) {
      return ["px", "em", "%"].includes(v);
    }

    function isNonNegative(v) {
      return v >= 0;
    }

    function invalidUnitWarning(unit, property) {
      return utils.logWarning(`Invalid unit for ${property}: ${unit}`);
    }

    function invalidValueWarning(value, unit, property) {
      return utils.logWarning(
        `Invalid value for ${property} in ${unit} unit: ${value}`,
      );
    }
  };
};
