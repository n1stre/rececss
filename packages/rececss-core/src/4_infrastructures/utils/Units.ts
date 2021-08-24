import Range from "./Range";

type Props = {
  unitsMap: Record<string, string>;
};

export default class Units {
  private constructor(private props: Props) {}

  static create(props: Props) {
    return new Units(props);
  }

  isUnit(key: string) {
    return key in this.unitsMap;
  }

  parse(values: any, key: string) {
    if (!Array.isArray(values)) return {};
    const mapped = values.map((v) => this.parseUnitValueRanges(v)).flat();
    const sorted = mapped.sort((a, b) => a - b);
    const parsed = sorted.map((v) => this.appendUnit(v, this.unitsMap[key]));
    return this.mapParsedValuesToRecord(parsed);
  }

  private appendUnit(targetValue: number, unit: string) {
    let key = String(targetValue);
    let value = String(targetValue);
    if (value === "0") return { key: "0", value: "0" };
    if (unit && unit != "px") key += unit;
    if (unit) value += unit;
    return { key, value };
  }

  private mapParsedValuesToRecord(values: { key: string; value: string }[]) {
    const result: Record<string, string> = {};
    values.forEach((v) => (result[v.key] = v.value));
    return result;
  }

  private parseUnitValueRanges(value: any) {
    return Range.isRangeArray(value)
      ? Range.createInclusiveFromArray(value)
      : value;
  }

  private get unitsMap() {
    return this.props.unitsMap;
  }
}
