export default (d: {
  onUnitError: (p: string, u: unknown) => void;
  onValueError: (p: string, v: unknown, unit?: string) => void;
  isArray: (v: unknown) => boolean;
  isNumber: (v: unknown) => boolean;
  rangeInclusive: (start: number, stop: number, step: number) => number[];
}) => {
  return function makeConfigAdapter(c: Config): ConfigInstance {
    const utils = Object.freeze(d);
    const config = Object.freeze({ ...c });

    return Object.freeze({
      getPaddings: () => {
        return parseUnitsValues({
          data: config.paddings,
          unitValidators: [oneOf("px", "em", "%")],
          valueValidators: [utils.isNumber, isNonNegative],
          onUnitError: (u) => utils.onUnitError("padding", u),
          onValueError: (v, u) => utils.onValueError("padding", v, u),
        });
      },

      // getMargins: () => {},
      // getOffsets: () => {},
      // getZIndexes: () => {
      //   return parseValues({
      //     data: config.zIndexes,
      //     validators: [utils.isNumber],
      //     onError: (value) => utils.onValueError("zIndex", { value }),
      //   });
      // },
      // getFontSizes: () => {},
      // getFontFamilies: () => {},
      // getBorders: () => {},
      // getBorderRadiuses: () => {},
      // getPalleteForBackground: () => {},
      // getPalleteForColor: () => {},
      // getMediaBreakpoints: () => {},
    });

    function parseUnitsValues(params: {
      data?: Partial<Record<string, any[]>>;
      unitValidators?: ((s: string) => boolean)[];
      valueValidators?: ((v: unknown) => boolean)[];
      onUnitError?: (u: unknown) => void;
      onValueError?: (v: unknown, u: string) => void;
    }) {
      if (!params.data) return null;

      const result: Record<string, any[]> = {};

      Object.entries(params.data).forEach(([unit, data]) => {
        if (!data) return;
        if (params.unitValidators?.some((fn) => !fn(unit))) {
          return params.onUnitError?.(unit);
        }

        const unitValues = parseValues({
          data,
          validators: params.valueValidators,
          onError: (v: any) => params.onValueError?.(v, unit),
        });

        if (unitValues.length) {
          result[unit] = unitValues;
        }
      });

      return Object.keys(result).length ? result : null;
    }

    function parseValues(params: {
      data: any[];
      validators?: ((v: unknown) => boolean)[];
      onError?: (v: unknown) => void;
    }) {
      return params.data
        .map((v) => (isRange(v) ? utils.rangeInclusive(v[0], v[1], v[2]) : v))
        .flat()
        .filter(makeValidateValue(params.validators, params.onError))
        .sort((a, b) => Number(a) - Number(b));
    }

    function makeValidateValue(
      validators?: ((v: unknown) => boolean)[],
      onError?: (v: unknown) => void,
    ) {
      return (value: any) => {
        const hasError = !!validators?.some((fn) => !fn(value));
        const isValid = !hasError;
        if (hasError) onError?.(value);
        return isValid;
      };
    }

    function isRange(v: any[]): v is number[] {
      return (
        utils.isArray(v) &&
        utils.isNumber(v[0]) &&
        utils.isNumber(v[1]) &&
        utils.isNumber(v[2])
      );
    }

    function oneOf(...args: any[]) {
      return (v: any) => args.includes(v);
    }

    function isNonNegative(v: number) {
      return v >= 0;
    }
  };
};
