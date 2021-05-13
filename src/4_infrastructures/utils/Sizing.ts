export default class Sizing {
  private constructor(private dto: Record<string, number>) {}

  static create(dto: Record<string, number>) {
    return new Sizing(dto);
  }

  toDTO() {
    return this.dto;
  }

  toRem() {
    return this.map((v) => `${v}rem`);
  }

  toRemFromPx() {
    return this.map((v) => `${v / 16}rem`);
  }

  toPx() {
    return this.map((v) => `${v}px`);
  }

  toPct() {
    return this.map((v) => `${v}%`);
  }

  toPctFromDecimal() {
    return this.map((v) => `${v * 100}%`);
  }

  map(fn: (v: number) => any) {
    return this.mapEntries((entry) => [entry[0], fn(entry[1])]);
  }

  mapEntries(fn: (v: [string, number]) => [string, any]) {
    return Object.fromEntries(Object.entries(this.dto).map(fn));
  }

  static EightPx: Sizing;
  static GoldenRatioPx: Sizing;
  static Fractions: Sizing;
}

Sizing.EightPx = Sizing.create({
  "0": 0,
  "3xs": 1,
  "2xs": 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
  "4xl": 56,
  "5xl": 64,
  "6xl": 72,
  "7xl": 80,
  "8xl": 88,
  "9xl": 96,
});

Sizing.GoldenRatioPx = Sizing.create({
  "0": 0,
  "3xs": 2,
  "2xs": 4,
  xs: 6,
  sm: 10,
  md: 16,
  lg: 26,
  xl: 42,
  "2xl": 68,
  "3xl": 110,
  "4xl": 178,
  "5xl": 290,
  "6xl": 468,
  "7xl": 758,
  "8xl": 1230,
  "9xl": 1992,
});

Sizing.Fractions = Sizing.create({
  full: 1,
  half: 0.5,
  third: 0.33333,
  fourth: 0.25,
  fifth: 0.2,
  sixth: 0.16666,
  "1/2": 0.5,
  "1/3": 0.33333,
  "2/3": 0.66666,
  "1/4": 0.25,
  "3/4": 0.75,
  "1/5": 0.2,
  "2/5": 0.4,
  "3/5": 0.6,
  "4/5": 0.8,
  "1/6": 0.16666,
  "5/6": 0.83333,
  "1/8": 0.125,
  "3/8": 0.375,
  "5/8": 0.625,
  "7/8": 0.875,
  "1/9": 0.11111,
  "2/9": 0.22222,
  "4/9": 0.44444,
  "5/9": 0.55555,
  "7/9": 0.77777,
  "8/9": 0.88888,
  "1/10": 0.1,
  "1/12": 0.08333,
  "1/16": 0.0625,
  "1/32": 0.03125,
});
