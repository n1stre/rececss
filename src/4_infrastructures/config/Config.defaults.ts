import {
  RawValues,
  Variants,
  Associations,
  RuleUnit,
} from "./Config.interfaces";
import { Sizing, Pallete } from "../utils";

const VARIANTS = {
  hover: "&:hover",
  hoverTarget: ".\\@:hover > &",
  focus: "&:focus",
  focusTarget: ".\\@:focus > &",
  jsActive: "&.js-active",
  jsActiveTarget: ".\\@.js-active > &",
  important: "&&",
};

export const variants: Variants = {
  border: { h: VARIANTS.hover, f: VARIANTS.focus },
  boxShadow: { h: VARIANTS.hover, f: VARIANTS.focus },
  borderWidth: { "!": VARIANTS.important },
  color: { h: VARIANTS.hover, f: VARIANTS.focus },
  backgroundColor: { h: VARIANTS.hover, f: VARIANTS.focus },
  display: { ht: VARIANTS.hoverTarget, jst: VARIANTS.jsActiveTarget },
  opacity: { h: VARIANTS.hover, ht: VARIANTS.hoverTarget },
  textDecoration: { h: VARIANTS.hover },
  transform: {
    h: VARIANTS.hover,
    ht: VARIANTS.hoverTarget,
    jst: VARIANTS.jsActiveTarget,
  },
};

export const values: RawValues = {
  width: {
    ...Sizing.EightPx.pxToRem(),
    ...Sizing.Fractions.decimalToPct(),
    $pct: [[0, 100, 5]],
    $px: [[0, 10, 1], [10, 100, 5], [100, 1000, 50], 540, 720, 960, 1140, 1320],
  },
  height: {
    ...Sizing.EightPx.pxToRem(),
    ...Sizing.Fractions.decimalToPct(),
    $px: [
      [0, 10, 1],
      [10, 100, 5],
      [100, 1000, 50],
    ],
    $pct: [[0, 100, 5]],
    $vh: [50, 100],
  },
  padding: {
    ...Sizing.EightPx.pxToRem(),
    a: "auto",
    n: "0",
    $px: [
      [0, 100, 5],
      [100, 1000, 50],
    ],
  },
  margin: {
    ...Sizing.EightPx.pxToRem(),
    "0a": "0 auto",
    a: "auto",
    n: "0",
    $px: [
      [0, 100, 5],
      [100, 1000, 50],
    ],
  },
  inset: {
    ...Sizing.EightPx.pxToRem(),
    $px: [[0, 100, 5]],
  },
  flex: {
    n: "none",
    a: "auto",
    ...Sizing.Fractions.map((v) => v),
    "00a": "0 0 auto",
    "01a": "0 1 auto",
    "10a": "1 0 auto",
    "11a": "1 1 auto",
    $num: [[1, 10, 1]],
  },
  flexBasis: {
    ...Sizing.Fractions.decimalToPct(),
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
    ...Sizing.EightPx.pxToRem(),
  },
  color: {
    ...Pallete.BrowserDefaults.toDTO(),
  },
  border: {
    ...Pallete.BrowserDefaults.map((v) => `1px solid ${v}`),
    n: "none",
  },
  borderColor: {
    ...Pallete.BrowserDefaults.toDTO(),
    i: "initial",
    t: "transparent",
  },
  borderWidth: {
    $px: [[0, 10, 1]],
    n: "0",
  },
  borderRadius: {
    ...Sizing.EightPx.toPx(),
  },
  background: {},
  backgroundColor: {
    ...Pallete.BrowserDefaults.toDTO(),
    i: "initial",
    t: "transparent",
  },
  textShadow: {
    n: "none",
    ...Sizing.EightPx.map((v) => `0 ${v}px ${v + 8}px rgba(0, 0, 0, 0.1)`),
  },
  boxShadow: {
    ...Sizing.EightPx.map((v) => `0 ${v}px ${v + 8}px rgba(0, 0, 0, 0.1)`),
    n: "none",
  },
  opacity: {
    $num: [[0, 1, 0.1]],
  },
  zIndex: {
    $num: [-1, 10, 1],
  },
  transform: {},
  transformTranslate: {
    $pct: [[0, 100, 5]],
    $px: [
      [0, 100, 5],
      [100, 500, 50],
    ],
  },
  transformRotate: {
    $deg: [
      [0, 360, 5],
      [-360, 0, 5],
    ],
  },
  transformScale: {
    $num: [[0, 3, 0.1]],
  },
  filterBlur: {
    $px: [[0, 10, 1]],
  },
  filterBrightness: {
    a: "1",
    $num: [[0, 2, 0.05]],
  },
  filterContrast: {
    a: "1",
    $num: [[0, 2, 0.05]],
  },
  filterGrayscale: {
    a: "0",
    $num: [[0, 1, 0.05]],
  },
  filterHueRotate: {
    a: "0",
    $deg: [
      [0, 360, 5],
      [-360, 0, 5],
    ],
  },
  filterInvert: {
    a: "0",
    $num: [[0, 1, 0.05]],
  },
  filterOpacity: {
    a: "1",
    $num: [[0, 1, 0.05]],
  },
  filterSaturate: {
    a: "1",
    $num: [[0, 5, 0.25]],
  },
  filterSepia: {
    a: "0",
    $num: [[0, 1, 0.05]],
  },
  all: {
    u: "unset",
    inh: "inherit",
    ini: "initial",
    rv: "revert",
  },
  alignContent: {
    c: "center",
    s: "start",
    e: "end",
    fs: "flex-start",
    fe: "flex-end",
    n: "normal",
    b: "baseline",
    fb: "first baseline",
    lb: "last baseline",
    sb: "space-between",
    sa: "space-around",
    se: "space-evenly",
    str: "stretch",
    sc: "safe center",
    usc: "unsafe center",
  },
  alignItems: {
    c: "center",
    s: "start",
    e: "end",
    fs: "flex-start",
    fe: "flex-end",
    n: "normal",
    b: "baseline",
    fb: "first baseline",
    lb: "last baseline",
    str: "stretch",
    sc: "safe center",
    usc: "unsafe center",
  },
  alignSelf: {
    a: "auto",
    n: "normal",
    c: "center",
    s: "start",
    e: "end",
    ss: "self-start",
    se: "self-end",
    fs: "flex-start",
    fe: "flex-end",
    b: "baseline",
    fb: "first baseline",
    lb: "last baseline",
    str: "stretch",
    sc: "safe center",
    usc: "unsafe center",
  },
  animationDirection: {
    n: "normal",
    r: "reverse",
    a: "alternate",
    ar: "alternate-reverse",
  },
  animationFillMode: {
    n: "none",
    fw: "forwards",
    bw: "backwards",
    b: "both",
  },
  animationIterationCount: {
    i: "infinite",
  },
  animationPlayState: {
    r: "running",
    p: "paused",
  },
  animationTimingFunction: {
    e: "ease",
    ei: "ease-in",
    eo: "ease-out",
    eio: "ease-in-out",
    l: "linear",
    ss: "step-start",
    se: "step-end",
  },
  appearance: {
    n: "none",
    a: "auto",
    mlb: "menulist-button",
    tf: "textfield",
    b: "button",
    sf: "searchfield",
    ta: "textarea",
    pshb: "push-button",
    sh: "slider-horizontal",
    ch: "checkbox",
    r: "radio",
    sqb: "square-button",
    ml: "menulist",
    lb: "listbox",
    m: "meter",
    pb: "progress-bar",
  },
  backdropFilter: {
    n: "none",
  },
  backfaceVisibility: {
    v: "visible",
    h: "hidden",
  },
  backgroundAttachment: {
    s: "scroll",
    f: "fixed",
    l: "local",
  },
  backgroundBlendMode: {
    n: "normal",
    m: "multiply",
    s: "screen",
    o: "overlay",
    dn: "darken",
    ln: "lighten",
    cd: "color-dodge",
    cb: "color-burn",
    hl: "hard-light",
    sl: "soft-light",
    dif: "difference",
    exc: "exclusion",
    hue: "hue",
    sat: "saturation",
    c: "color",
    l: "luminosity",
  },
  backgroundClip: {
    bb: "border-box",
    pb: "padding-box",
    cb: "content-box",
    txt: "text",
  },
  backgroundOrigin: {
    bb: "border-box",
    pb: "padding-box",
    cb: "content-box",
  },
  backgroundPosition: {
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
  },
  backgroundRepeat: {
    rx: "repeat-x",
    ry: "repeat-y",
    r: "repeat",
    s: "space",
    rnd: "round",
    nr: "no-repeat",
  },
  backgroundSize: {
    cr: "cover",
    cn: "contain",
    a: "auto",
  },
  borderCollapse: {
    c: "collapse",
    s: "separate",
  },
  borderImageRepeat: {
    str: "stretch",
    r: "repeat",
    rnd: "round",
    s: "space",
  },
  borderStyle: {
    n: "none",
    h: "hidden",
    dt: "dotted",
    dsh: "dashed",
    s: "solid",
    dbl: "double",
    dtds: "dot-dash",
    dtdtds: "dot-dot-dash",
    w: "wave",
    g: "groove",
    r: "ridge",
    i: "inset",
    o: "outset",
  },
  boxSizing: {
    cb: "content-box",
    bb: "border-box",
  },
  breakAfter: {
    a: "auto",
    av: "avoid",
    alw: "always",
    all: "all",
    avp: "avoid-page",
    p: "page",
    l: "left",
    r: "right",
    rec: "recto",
    ver: "verso",
    avc: "avoid-column",
    c: "column",
    avr: "avoid-region",
    reg: "region",
  },
  breakBefore: {
    a: "auto",
    av: "avoid",
    alw: "always",
    all: "all",
    avp: "avoid-page",
    p: "page",
    l: "left",
    r: "right",
    rec: "recto",
    ver: "verso",
    avc: "avoid-column",
    c: "column",
    avr: "avoid-region",
    reg: "region",
  },
  breakInside: {
    a: "auto",
    av: "avoid",
    avp: "avoid-page",
    avc: "avoid-column",
    avr: "avoid-region",
  },
  captionSide: {
    t: "top",
    b: "bottom",
    bs: "block-start",
    be: "block-end",
    is: "inline-start",
    ie: "inline-end",
  },
  caretColor: {
    a: "auto",
    t: "transparent",
    cc: "currentcolor",
  },
  clear: {
    n: "none",
    l: "left",
    r: "right",
    b: "both",
    is: "inline-start",
    ie: "inline-end",
  },
  colorScheme: {
    n: "normal",
    l: "light",
    d: "dark",
    ld: "light dark",
  },
  columnCount: {
    a: "auto",
    "2": "2",
    "3": "3",
    "4": "4",
  },
  columnFill: {
    a: "auto",
    b: "balance",
    ba: "balance-all",
  },
  columnGap: {
    n: "normal",
  },
  columnRuleStyle: {
    n: "none",
    h: "hidden",
    d: "dotted",
    dsh: "dashed",
    s: "solid",
    dbl: "double",
    g: "groove",
    r: "ridge",
    i: "inset",
    o: "outset",
  },
  columnRuleWidth: {
    tn: "thin",
    md: "medium",
    tck: "thick",
  },
  columnSpan: {
    n: "none",
    all: "all",
  },
  columnWidth: {
    a: "auto",
  },
  contain: {
    n: "none",
    str: "strict",
    c: "content",
    sz: "size",
    l: "layout",
    st: "style",
    p: "paint",
  },
  contentVisibility: {
    v: "visible",
    h: "hidden",
    a: "auto",
  },
  content: {
    nl: "normal",
    n: "none",
    oq: "open-quote",
    cq: "close-quote",
    noq: "no-open-quote",
    ncq: "no-close-quote",
  },
  counterIncrement: {
    n: "none",
  },
  counterReset: {
    n: "none",
  },
  counterSet: {
    n: "none",
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
  direction: {
    ltr: "ltr",
    rtl: "rtl",
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
  emptyCells: {
    s: "show",
    h: "hide",
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
  float: {
    l: "left",
    r: "right",
    n: "none",
    is: "inline-start",
    ie: "inline-end",
  },
  fontKerning: {
    a: "auto",
    n: "none",
    nl: "normal",
  },
  fontOpticalSizing: {
    a: "auto",
    n: "none",
  },
  fontStyle: {
    n: "normal",
    i: "italic",
    o: "oblique",
  },
  fontStretch: {
    uc: "ultra-condensed",
    ec: "extra-condensed",
    c: "condensed",
    sc: "semi-condensed",
    n: "normal",
    se: "semi-expanded",
    e: "expanded",
    ee: "extra-expanded",
    ue: "ultra-expanded",
  },
  gridAutoColumns: {
    mic: "min-content",
    mac: "max-content",
    a: "auto",
  },
  gridAutoFlow: {
    r: "row",
    c: "column",
    d: "dense",
    rd: "row dense",
    cd: "column dense",
  },
  gridAutoRows: {
    mic: "min-content",
    mac: "max-content",
    a: "auto",
  },
  hyphens: {
    n: "none",
    m: "manual",
    a: "auto",
  },
  imageRendering: {
    a: "auto",
    ce: "crisp-edges",
    px: "pixelated",
  },
  isolation: {
    a: "auto",
    i: "isolate",
  },
  justifyContent: {
    c: "center",
    s: "start",
    e: "end",
    fs: "flex-start",
    fe: "flex-end",
    l: "left",
    r: "right",
    n: "normal",
    sb: "space-between ",
    se: "space-evenly ",
    str: "stretch",
    sc: "safe center",
    usc: "unsafe center",
  },
  justifyItems: {
    a: "auto",
    n: "normal",
    str: "stretch",
    c: "center",
    s: "start",
    e: "end",
    fs: "flex-start",
    fe: "flex-end",
    ss: "self-start",
    se: "self-end",
    l: "left",
    r: "right",
    b: "baseline",
    fb: "first baseline",
    lb: "last baseline",
    sc: "safe center",
    usc: "unsafe center",
    lr: "legacy right",
    ll: "legacy left",
    lc: "legacy center",
  },
  justifySelf: {
    a: "auto",
    n: "normal",
    str: "stretch",
    c: "center",
    s: "start",
    e: "end",
    fs: "flex-start",
    fe: "flex-end",
    ss: "self-start",
    se: "self-end",
    l: "left",
    r: "right",
    b: "baseline",
    fb: "first baseline",
    lb: "last baseline",
    sc: "safe center",
    usc: "unsafe center",
  },
  lineBreak: {
    a: "auto",
    l: "loose",
    n: "normal",
    s: "strict",
    aw: "anywhere",
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
  mixBlendMode: {
    n: "normal",
    m: "multiply",
    s: "screen",
    o: "overlay",
    dn: "darken",
    ln: "lighten",
    cd: "color-dodge",
    cb: "color-burn",
    hl: "hard-light",
    sl: "soft-light",
    dif: "difference",
    exc: "exclusion",
    h: "hue",
    sat: "saturation",
    c: "color",
    l: "luminosity",
  },
  objectFit: {
    f: "fill",
    cn: "contain",
    c: "cover",
    n: "none",
    sd: "scale-down",
  },
  objectPosition: {
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
  },
  outlineStyle: {
    a: "auto",
    n: "none",
    dt: "dotted",
    dsh: "dashed",
    s: "solid",
    dbl: "double",
    g: "groove",
    r: "ridge",
    i: "inset",
    o: "outset",
  },
  outlineWidth: {
    tn: "thin",
    md: "medium",
    tck: "thick",
  },
  overflow: {
    v: "visible",
    h: "hidden",
    s: "scroll",
    a: "auto",
  },
  overscrollBehavior: {
    a: "auto",
    c: "contain",
    n: "none",
    ac: "auto contain",
    cc: "contain contain",
    ca: "contain auto",
    aa: "auto auto",
  },
  perspectiveOrigin: {
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
  },
  pointerEvents: {
    a: "auto",
    n: "none",
    vp: "visiblePainted",
    vf: "visibleFill",
    vs: "visibleStroke",
    v: "visible",
    p: "painted",
    f: "fill",
    s: "stroke",
    all: "all",
  },
  position: {
    s: "static",
    r: "relative",
    a: "absolute",
    f: "fixed",
  },
  resize: {
    n: "none",
    b: "both",
    h: "horizontal",
    v: "vertical",
    bl: "block",
    i: "inline",
  },
  scrollBehavior: {
    a: "auto",
    s: "smooth",
  },
  scrollSnapType: {
    n: "none",
    x: "x",
    y: "y",
    bl: "block",
    i: "inline",
    b: "both",
    xm: "x mandatory",
    xp: "x proximity",
    ym: "y mandatory",
    yp: "y proximity",
    bm: "both mandatory",
    bp: "both proximity",
  },
  tableLayout: {
    a: "auto",
    f: "fixed",
  },
  textAlign: {
    l: "left",
    c: "center",
    r: "right",
    j: "justify",
    ja: "justify-all",
    s: "start",
    e: "end",
    mp: "match-parent",
  },
  textAlignLast: {
    a: "auto",
    l: "left",
    c: "center",
    j: "justify",
    r: "right",
    s: "start",
    e: "end",
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
  touchAction: {
    a: "auto",
    n: "none",
    px: "pan-x",
    pl: "pan-left",
    pr: "pan-right",
    py: "pan-y",
    pu: "pan-up",
    pd: "pan-down",
    pz: "pinch-zoom",
    m: "manipulation",
  },
  transition: {
    o: "opacity .2s ease",
    trf: "transform .2s ease",
  },
  transitionProperty: {
    o: "opacity",
    trf: "transform",
  },
  transitionTimingFunction: {
    l: "linear",
    e: "ease",
    ei: "ease-in",
    eo: "ease-out",
    eio: "ease-in-out",
    ss: "step-start",
    se: "step-end",
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
  whiteSpace: {
    n: "normal",
    p: "pre",
    nw: "no-wrap",
    pw: "pre-wrap",
    pl: "pre-line",
  },
};

export const units: Record<RuleUnit, string> = {
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
  $deg: "deg",
  $grad: "grad",
  $rad: "rad",
  $turn: "turn",
};

//prettier-ignore
export const rulesAssociations: Associations = {
  width: {
    with: ["maxWidth", "minWidth"],
  },
  height: {
    with: ["maxHeight", "minHeight"],
  },
  border: {
    with: ["borderTop", "borderBottom", "borderLeft", "borderRight"],
  },
  borderColor: {
    with: ["borderTopColor", "borderBottomColor", "borderLeftColor", "borderRightColor"],
  },
  borderRadius: {
    with: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
  },
  borderStyle: {
    with: ["borderTopStyle", "borderBottomStyle", "borderLeftStyle", "borderRightStyle"]
  },
  borderWidth: {
    with: ["borderTopWidth", "borderBottomWidth", "borderLeftWidth", "borderRightWidth"]
  },
  inset: {
    with: ["top", "bottom", "left", "right"],
    values: singleValues
  },
  margin: {
    with: ["marginTop", "marginBottom", "marginVertical", "marginLeft", "marginRight", "marginHorizontal"],
    values: singleValues
  },
  overflow: {
    with: ["overflowX", "overflowY", "overflowInline", "overflowBlock"]
  },
  overscrollBehavior: {
    with: ["overscrollBehaviorInline", "overscrollBehaviorBlock", "overscrollBehaviorX", "overscrollBehaviorY"],
    values: singleValues
  },
  padding: {
    with: ["paddingTop", "paddingBottom", "paddingVertical", "paddingLeft", "paddingRight", "paddingHorizontal"],
    values: singleValues
  },
  transform: {
    with: ["transformRotate", "transformScale", "transformSkew", "transformTranslate"],
    values: () => ({})
  },
  transformRotate: {
    with: ["transformRotateX", "transformRotateY", "transformRotateZ",],
  },
  transformScale: {
    with: ["transformScaleX", "transformScaleY", "transformScaleZ",],
    values: singleValues
  },
  transformSkew: {
    with: ["transformSkewX", "transformSkewY",],
    values: singleValues
  },
  transformTranslate: {
    with: ["transformTranslateX", "transformTranslateY", "transformTranslateZ",],
    values: singleValues
  }
};

function singleValues(values: Record<string, string>) {
  const filterSingleValue = ([_, v]: string[]) => v.split(" ").length === 1;
  const filteredEntries = Object.entries(values).filter(filterSingleValue);
  return Object.fromEntries(filteredEntries);
}
