import { Rules, RuleUnit } from "./Config.interfaces";
import { Sizing, Pallete } from "../utils";

export const rules: Rules = {
  all: {
    u: "unset",
    n: "none",
    inh: "inherit",
    ini: "initial",
    rv: "revert",
    $variants: {},
  },
  width: {
    ...Sizing.EightPx.toRemFromPx(),
    ...Sizing.Fractions.toPctFromDecimal(),
    $pct: [[0, 100, 5]],
    $px: [
      [0, 10, 1],
      [10, 100, 5],
      [100, 1000, 50],
    ],
  },
  maxWidth: {
    ...Sizing.Fractions.toPctFromDecimal(),
  },
  minWidth: {
    ...Sizing.Fractions.toPctFromDecimal(),
  },
  height: {
    ...Sizing.EightPx.toRemFromPx(),
    ...Sizing.Fractions.toPctFromDecimal(),
    $pct: [[0, 100, 5]],
    $vh: [50, 100],
  },
  maxHeight: {
    ...Sizing.Fractions.toPctFromDecimal(),
  },
  minHeight: {
    ...Sizing.Fractions.toPctFromDecimal(),
  },
  padding: {
    ...Sizing.EightPx.toRemFromPx(),
    a: "auto",
    $px: [[0, 100, 5]],
  },
  margin: {
    ...Sizing.EightPx.toRemFromPx(),
    "0a": "0 auto",
    a: "auto",
    $px: [[0, 100, 5]],
  },
  inset: {
    ...Sizing.EightPx.toRemFromPx(),
    $px: [[0, 100, 5]],
  },
  flex: {
    n: "none",
    a: "auto",
    "00a": "0 0 auto",
    "01a": "0 1 auto",
    "10a": "1 0 auto",
    "11a": "1 1 auto",
    $num: [[1, 10, 1]],
  },
  flexBasis: {
    ...Sizing.Fractions.toPctFromDecimal(),
    a: "auto",
    $pct: [[0, 100, 5]],
  },
  flexGrow: {
    $num: [[1, 12, 1]],
  },
  flexShrink: {
    $num: [[1, 12, 1]],
  },
  order: {
    first: "-9999",
    last: "9999",
    $num: [[1, 12, 1]],
  },
  flexGrid: {
    cols: 12,
    gutter: "20px",
    gutters: {},
  },

  font: {
    primary: "italic bold .8em/1.2 Arial, sans-serif",
  },
  fontFamily: {
    primary: "Arial, serif",
    secondary: "Helvetica, sans-serif",
  },
  fontStyle: {
    n: "normal",
    i: "italic",
    o: "oblique",
  },
  fontWeight: {
    n: "normal",
    b: "bold",
    br: "bolder",
    lr: "lighter",
    $num: [[100, 900, 100]],
  },
  fontSize: {
    ...Sizing.EightPx.map((v) => `${v / 16}rem/${(v + 8) / 16}rem`),
  },
  lineHeight: {
    ...Sizing.EightPx.toRemFromPx(),
  },
  color: {
    ...Pallete.BrowserDefaults.toDTO(),
  },
  border: {
    n: "none",
    ...Pallete.BrowserDefaults.map((v) => `1px solid ${v}`),
  },
  borderColor: {
    ...Pallete.BrowserDefaults.toDTO(),
  },
  borderStyle: {
    n: "none",
    h: "hidden",
    dt: "dotted",
    ds: "dashed",
    s: "solid",
    db: "double",
    dtds: "dot-dash",
    dtdtds: "dot-dot-dash",
    w: "wave",
    g: "groove",
    r: "ridge",
    i: "inset",
    o: "outset",
  },
  borderRadius: {
    ...Sizing.EightPx.toPx(),
  },
  background: {},
  backgroundColor: {
    ...Pallete.BrowserDefaults.toDTO(),
  },
  backgroundPosition: {
    ...getPositions(),
  },
  textShadow: {
    n: "none",
    ...Sizing.EightPx.map((v) => `0 ${v}px ${v + 8}px rgba(0, 0, 0, 0.1)`),
  },
  boxShadow: {
    n: "none",
    ...Sizing.EightPx.map((v) => `0 ${v}px ${v + 8}px rgba(0, 0, 0, 0.1)`),
  },

  position: {
    s: "static",
    r: "relative",
    a: "absolute",
    f: "fixed",
  },
  display: {
    n: "none",
    i: "inline",
    b: "block",
    ib: "inline-block",
    f: "flex",
    if: "inline-flex",
    t: "table",
    g: "grid",
    ig: "inline-grid",
  },
  visibility: {
    v: "visible",
    h: "hidden",
    c: "collapse",
  },
  verticalAlign: {
    sup: "super",
    t: "top",
    tt: "text-top",
    m: "middle",
    bl: "baseline",
    b: "bottom",
    tb: "text-bottom",
    sub: "sub",
  },
  textAlign: {
    l: "left",
    c: "center",
    r: "right",
    j: "justify",
  },
  textAlignLast: {
    a: "auto",
    l: "left",
    c: "center",
    r: "right",
  },
  textDecoration: {
    n: "none",
    u: "underline",
    o: "overline",
    l: "line-through",
  },
  textEmphasis: {
    n: "none",
    ac: "accent",
    dt: "dot",
    c: "circle",
    ds: "disc",
    b: "before",
    a: "after",
  },
  textTransform: {
    n: "none",
    c: "capitalize",
    u: "uppercase",
    l: "lowercase",
  },
  whiteSpace: {
    n: "normal",
    p: "pre",
    nw: "no-wrap",
    pw: "pre-wrap",
    pl: "pre-line",
  },
  cursor: {
    a: "auto",
    d: "default",
    c: "crosshair",
    ha: "hand",
    he: "help",
    m: "move",
    p: "pointer",
    t: "text",
  },
  flexDirection: {
    c: "column",
    cr: "column-reverse",
    r: "row",
    rr: "row-reverse",
  },
  flexWrap: {
    n: "no-wrap",
    w: "wrap",
    we: "wrap-reverse",
  },
  justifyContent: {
    c: "center",
    fe: "flex-end",
    fs: "flex-start",
    sa: "space-around",
    sb: "space-between",
  },
  alignContent: {
    c: "center",
    fe: "flex-end",
    fs: "flex-start",
    s: "stretch",
    sa: "space-around",
    sb: "space-between",
  },
  alignItems: {
    b: "baseline",
    c: "center",
    fe: "flex-end",
    fs: "flex-start",
    s: "stretch",
  },
  overflow: {
    v: "visible",
    h: "hidden",
    s: "scroll",
    a: "auto",
  },
  overflowX: {
    v: "visible",
    h: "hidden",
    s: "scroll",
    a: "auto",
  },
  overflowY: {
    v: "visible",
    h: "hidden",
    s: "scroll",
    a: "auto",
  },
  opacity: {
    $num: [0, 1, 0.1],
  },
  listStyle: {
    n: "none",
  },
  listStylePosition: {
    i: "inside",
    o: "outside",
  },
  listStyleType: {
    n: "none",
    d: "disc",
    c: "circle",
    s: "square",
    dc: "decimal",
    dclz: "decimal-leading-zero",
    lr: "lower-roman",
    ur: "upper-roman",
  },
  listStyleImage: {
    n: "none",
  },
};

function getPositions() {
  return {
    t: "top",
    b: "bottom",
    c: "center",
    l: "left",
    r: "right",
    bl: "bottom left",
    br: "bottom right",
    tl: "top left",
    tr: "top right",
    lb: "left bottom",
    lt: "left top",
    rb: "right bottom",
    rt: "right top",
  };
}

export function getUnits(): Record<RuleUnit, string> {
  return {
    $cm: "cm",
    $mm: "mm",
    $in: "in",
    $pc: "pc",
    $pt: "pt",
    $px: "px",
    $em: "em",
    $ex: "ex",
    $ch: "ch",
    $rem: "rem",
    $vw: "vw",
    $vh: "vh",
    $vmin: "vmin",
    $vmax: "vmax",
    $percent: "%",
    $pct: "%",
    $number: "",
    $num: "",
  };
}
