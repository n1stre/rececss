export function toPascalCase(string) {
  const [head, ...tail] = string.split("");
  return [head.toUpperCase(), ...tail].join("");
}

export function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

export function stringRepeat(string, times) {
  let result = "";
  for (let i = 1; i < times; i++) result += string;
  return result;
}

export function insertBetweenSubstrings(base, start, end, data) {
  if (base.indexOf(start) === -1 || base.indexOf(end) === -1) return base;
  const before = base.split(start)[0];
  const after = base.split(end)[1];
  return before + start + "\n" + data + "\n" + end + after;
}
