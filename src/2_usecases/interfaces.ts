import { IRuleset } from "../1_entities/Ruleset";

export interface IAsset {
  name: string;
  contents: string;
}

export interface IRulesetsFactory {
  createAll: (dto: IUtilityRulesetsDTO) => IRuleset.Instance[];
}

export type IUtilityRulesetsDTO = Partial<ICSSProperties> &
  Partial<ICustomProperties>;

export interface ICustomProperties {
  flexGrid: {
    cols: number;
    gutter?: string;
    gutters?: Record<string, string>;
  };
}

export interface ICSSProperties<T = Record<string, string>> {
  alignContent: T;
  alignItems: T;
  alignSelf: T;
  all: T;
  animation: T;
  animationDelay: T;
  animationDirection: T;
  animationDuration: T;
  animationFillMode: T;
  animationIterationCount: T;
  animationName: T;
  animationPlayState: T;
  animationTimingFunction: T;
  appearance: T;
  aspectRatio: T;
  backdropFilter: T;
  backfaceVisibility: T;
  background: T;
  backgroundAttachment: T;
  backgroundBlendMode: T;
  backgroundClip: T;
  backgroundColor: T;
  backgroundImage: T;
  backgroundOrigin: T;
  backgroundPosition: T;
  backgroundRepeat: T;
  backgroundSize: T;
  border: T;
  borderBottom: T;
  borderBottomColor: T;
  borderBottomLeftRadius: T;
  borderBottomRightRadius: T;
  borderBottomStyle: T;
  borderBottomWidth: T;
  borderCollapse: T;
  borderColor: T;
  borderImage: T;
  borderImageOutset: T;
  borderImageRepeat: T;
  borderImageSlice: T;
  borderImageSource: T;
  borderImageWidth: T;
  borderLeft: T;
  borderLeftColor: T;
  borderLeftStyle: T;
  borderLeftWidth: T;
  borderRadius: T;
  borderRight: T;
  borderRightColor: T;
  borderRightStyle: T;
  borderRightWidth: T;
  borderSpacing: T;
  borderStyle: T;
  borderTop: T;
  borderTopColor: T;
  borderTopLeftRadius: T;
  borderTopRightRadius: T;
  borderTopStyle: T;
  borderTopWidth: T;
  borderWidth: T;
  bottom: T;
  boxShadow: T;
  boxSizing: T;
  breakAfter: T;
  breakBefore: T;
  breakInside: T;
  captionSide: T;
  caretColor: T;
  clear: T;
  clipPath: T;
  colorScheme: T;
  color: T;
  columnCount: T;
  columnFill: T;
  columnGap: T;
  columnRule: T;
  columnRuleColor: T;
  columnRuleStyle: T;
  columnRuleWidth: T;
  columnSpan: T;
  columnWidth: T;
  columns: T;
  contain: T;
  contentVisibility: T;
  content: T;
  counterIncrement: T;
  counterReset: T;
  counterSet: T;
  cursor: T;
  direction: T;
  display: T;
  emptyCells: T;
  filter: T;
  flex: T;
  flexBasis: T;
  flexDirection: T;
  flexFlow: T;
  flexGrow: T;
  flexShrink: T;
  flexWrap: T;
  float: T;
  font: T;
  fontFamily: T;
  fontFeatureSettings: T;
  fontKerning: T;
  fontLanguageOverride: T;
  fontOpticalSizing: T;
  fontSize: T;
  fontSizeAdjust: T;
  fontStretch: T;
  fontStyle: T;
  fontSynthesis: T;
  fontVariant: T;
  fontVariantAlternates: T;
  fontVariantCaps: T;
  fontVariantEastAsian: T;
  fontVariantLigatures: T;
  fontVariantNumeric: T;
  fontVariantPosition: T;
  fontVariationSettings: T;
  fontWeight: T;
  forcedColorAdjust: T;
  gap: T;
  grid: T;
  gridArea: T;
  gridAutoColumns: T;
  gridAutoFlow: T;
  gridAutoRows: T;
  gridColumn: T;
  gridColumnEnd: T;
  gridColumnGap: T;
  gridColumnStart: T;
  gridGap: T;
  gridRow: T;
  gridRowEnd: T;
  gridRowGap: T;
  gridRowStart: T;
  gridTemplate: T;
  gridTemplateAreas: T;
  gridTemplateColumns: T;
  gridTemplateRows: T;
  height: T;
  hyphens: T;
  imageRendering: T;
  inlineSize: T;
  inset: T;
  isolation: T;
  justifyContent: T;
  justifyItems: T;
  justifySelf: T;
  left: T;
  letterSpacing: T;
  lineBreak: T;
  lineHeight: T;
  lineHeightStep: T;
  listStyle: T;
  listStyleImage: T;
  listStylePosition: T;
  listStyleType: T;
  margin: T;
  marginBottom: T;
  marginLeft: T;
  marginRight: T;
  marginTop: T;
  maskBorder: T;
  maskType: T;
  mask: T;
  maxHeight: T;
  maxWidth: T;
  minHeight: T;
  minWidth: T;
  mixBlendMode: T;
  objectFit: T;
  objectPosition: T;
  opacity: T;
  order: T;
  orphans: T;
  outline: T;
  outlineColor: T;
  outlineOffset: T;
  outlineStyle: T;
  outlineWidth: T;
  overflow: T;
  overflowAnchor: T;
  overflowBlock: T;
  overflowClipMargin: T;
  overflowInline: T;
  overflowWrap: T;
  overflowX: T;
  overflowY: T;
  overscrollBehaviorBlock: T;
  overscrollBehaviorInline: T;
  overscrollBehaviorX: T;
  overscrollBehaviorY: T;
  overscrollBehavior: T;
  padding: T;
  paddingBottom: T;
  paddingLeft: T;
  paddingRight: T;
  paddingTop: T;
  pageBreakAfter: T;
  pageBreakBefore: T;
  pageBreakInside: T;
  perspective: T;
  perspectiveOrigin: T;
  placeContent: T;
  placeItems: T;
  placeSelf: T;
  pointerEvents: T;
  position: T;
  quotes: T;
  resize: T;
  right: T;
  rowGap: T;
  scrollBehavior: T;
  scrollMarginBottom: T;
  scrollMarginInlineStart: T;
  scrollMarginInline: T;
  scrollMarginLeft: T;
  scrollMarginRight: T;
  scrollMarginTop: T;
  scrollPaddingBlockEnd: T;
  scrollPaddingBlockStart: T;
  scrollPaddingBottom: T;
  scrollPaddingInlineEnd: T;
  scrollPaddingInlineStart: T;
  scrollPaddingInline: T;
  scrollPaddingLeft: T;
  scrollPadding: T;
  scrollSnapType: T;
  shapeImageThreshold: T;
  shapeMargin: T;
  shapeOutside: T;
  tabSize: T;
  tableLayout: T;
  textAlign: T;
  textAlignLast: T;
  textDecoration: T;
  textDecorationColor: T;
  textDecorationLine: T;
  textDecorationStyle: T;
  textEmphasis: T;
  textEmphasisColor: T;
  textEmphasisPosition: T;
  textEmphasisStyle: T;
  textIndent: T;
  textJustify: T;
  textOrientation: T;
  textOverflow: T;
  textRendering: T;
  textShadow: T;
  textTransform: T;
  textUnderlinePosition: T;
  top: T;
  touchAction: T;
  transform: T;
  transformOrigin: T;
  transition: T;
  transitionDelay: T;
  transitionDuration: T;
  transitionProperty: T;
  transitionTimingFunction: T;
  userSelect: T;
  verticalAlign: T;
  visibility: T;
  whiteSpace: T;
  widows: T;
  width: T;
  willChange: T;
  wordBreak: T;
  wordSpacing: T;
  writingMode: T;
  zIndex: T;
}
