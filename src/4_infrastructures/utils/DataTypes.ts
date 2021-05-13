export default Object.freeze({
  isNumber,
  isArray,
  isObject,
  isFunction,
  deepMerge,
});

export function isNumber(v: unknown): v is number {
  return typeof v === "number" && !isNaN(v);
}

export function isArray(v: unknown): v is any[] {
  return Array.isArray(v);
}

export function isObject(v: any): v is object {
  return (
    Boolean(v) && typeof v === "object" && v.toString() === "[object Object]"
  );
}

export function isFunction(v: any): v is (...v: any[]) => any {
  return typeof v === "function";
}

export function deepMerge(...objects: Record<string, any>[]) {
  return objects.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      const accValue = acc[key];
      const value = obj[key];

      if (isArray(accValue) && isArray(value)) {
        acc[key] = accValue.concat(value);
      } else if (isObject(accValue) && isObject(value)) {
        acc[key] = deepMerge(accValue, value);
      } else {
        acc[key] = value;
      }
    });

    return acc;
  }, {});
}
