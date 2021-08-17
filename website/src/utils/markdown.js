import { stringRepeat as repeat } from "./index";

export function createMarkdownCodeblock(value) {
  if (!value) return "";
  const stringValue = Array.isArray(value) ? JSON.stringify(value) : value;
  const result = "```" + stringValue + "```";
  return result;
}

export function createMarkdownTable(data, params) {
  if (!data) return "";

  let result = "";
  let colMaxLengths = [];

  const rows = Object.entries(data).map(([dataKey, dataValue]) => {
    let row = [];

    params.forEach((param, idx) => {
      const value = param.calcValue(dataKey, dataValue);
      if (!colMaxLengths[idx] || colMaxLengths[idx] < value.length) {
        colMaxLengths[idx] = value.length;
      }
      row.push(value);
    });

    return row;
  });

  colMaxLengths.forEach((length, idx) => {
    const heading = params[idx].head;
    if (colMaxLengths[idx] < heading.length) {
      colMaxLengths[idx] = heading.length;
    }
    result += "|" + heading + repeat(" ", length + 1 - heading.length);
  });

  result += "|\n";

  colMaxLengths.forEach((length) => {
    result += "|" + repeat("-", length + 1);
  });

  result += "|\n";

  rows.forEach((row) => {
    row.forEach((col, idx) => {
      result += "|" + col + repeat(" ", colMaxLengths[idx] + 1 - col.length);
    });

    result += "|\n";
  });

  return result;
}
