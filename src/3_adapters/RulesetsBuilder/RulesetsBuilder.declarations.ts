import { DeclarationsMap } from "./RulesetsBuilder.interface";

const RulesetsDeclarationsMap: DeclarationsMap = {
  widthAuto: "width: auto;",
  width: "width: $0;",
  minWidth: "min-width: $0;",
  maxWidth: "max-width: $0;",

  heightAuto: "height: auto;",
  height: "height: $0;",
  minHeight: "min-height: $0;",
  maxHeight: "max-height: $0;",

  padding: "padding: $0;",
  paddingTop: "padding-top: $0;",
  paddingBottom: "padding-bottom: $0;",
  paddingVertical: "padding-top: $0; padding-bottom: $0;",
  paddingLeft: "padding-left: $0;",
  paddingRight: "padding-right: $0;",
  paddingHorizontal: "padding-left: $0; padding-right: $0;",

  margin: "margin: $0;",
  marginTop: "margin-top: $0;",
  marginBottom: "margin-bottom: $0;",
  marginVertical: "margin-top: $0; margin-bottom: $0;",
  marginLeft: "margin-left: $0;",
  marginRight: "margin-right: $0;",
  marginHorizontal: "margin-left: $0; margin-right: $0;",

  top: "top: $0;",
  bottom: "bottom: $0;",
  left: "left: $0;",
  right: "right: $0;",

  zIndex: "z-index: $0;",
  zIndexAuto: "z-index: auto;",

  font: "font: $0;",
  fontSize: "font-size: $0;",
  fontFamily: "font-family: $0;",
  fontWeightNormal: "font-weight: normal;",
  fontWeightBold: "font-weight: bold;",
  fontWeightBolder: "font-weight: bolder;",
  fontWeightLighter: "font-weight: lighter;",
  fontWeight100: "font-weight: 100;",
  fontWeight200: "font-weight: 200;",
  fontWeight300: "font-weight: 300;",
  fontWeight400: "font-weight: 400;",
  fontWeight500: "font-weight: 500;",
  fontWeight600: "font-weight: 600;",
  fontWeight700: "font-weight: 700;",
  fontWeight800: "font-weight: 800;",
  fontWeight900: "font-weight: 900;",
  fontStyleNormal: "font-style: normal;",
  fontStyleItalic: "font-style: italic;",
  fontStyleOblique: "font-style: oblique;",

  border: "border: $0;",
  borderLeft: "border-left: $0;",
  borderRight: "border-right: $0;",
  borderTop: "border-top: $0;",
  borderBottom: "border-bottom: $0;",
  borderRadius: "border-radius: $0;",

  color: "color: $0;",

  positionStatic: "position: static;",
  positionRelative: "position: relative;",
  positionAbsolute: "position: absolute;",
  positionFixed: "position: fixed;",

  displayNone: "display: none;",
  displayInline: "display: inline;",
  displayBlock: "display: block;",
  displayInlineBlock: "display: inline-block;",
  displayFlex: "display: flex;",
  displayInlineFlex: "display: inline-flex;",
  displayTable: "display: table;",
  displayGrid: "display: grid;",
  displayInlineGrid: "display: inline-grid;",

  visibilityVisible: "visibility: visible;",
  visibilityHidden: "visibility: hidden;",
  visibilityCollapse: "visibility: collapse;",

  verticalAlignSuper: "vertical-align: super;",
  verticalAlignTop: "vertical-align: top;",
  verticalAlignTextTop: "vertical-align: text-top;",
  verticalAlignMiddle: "vertical-align: middle;",
  verticalAlignBaseline: "vertical-align: baseline;",
  verticalAlignBottom: "vertical-align: bottom;",
  verticalAlignTextBottom: "vertical-align: text-bottom;",
  verticalAlignSub: "vertical-align: sub;",

  textAlignLeft: "text-align: left;",
  textAlignCenter: "text-align: center;",
  textAlignRight: "text-align: right;",
  textAlignJustify: "text-align: justify;",

  textAlignLastAuto: "text-align-last: auto;",
  textAlignLastLeft: "text-align-last: left;",
  textAlignLastCenter: "text-align-last: center;",
  textAlignLastRight: "text-align-last: right;",

  textDecorationNone: "text-decoration: none;",
  textDecorationUnderline: "text-decoration: underline;",
  textDecorationOverline: "text-decoration: overline;",
  textDecorationLineThrough: "text-decoration: line-through;",

  textEmphasisNone: "text-emphasis: none;",
  textEmphasisAccent: "text-emphasis: accent;",
  textEmphasisDot: "text-emphasis: dot;",
  textEmphasisCircle: "text-emphasis: circle;",
  textEmphasisDisc: "text-emphasis: disc;",
  textEmphasisBefore: "text-emphasis: before;",
  textEmphasisAfter: "text-emphasis: after;",

  textTransformNone: "text-transform: none;",
  textTransformCapitalize: "text-transform: capitalize;",
  textTransformUppercase: "text-transform: uppercase;",
  textTransformLowercase: "text-transform: lowercase;",

  whiteSpaceNormal: "white-space: normal;",
  whiteSpacePre: "white-space: pre;",
  whiteSpaceNoWrap: "white-space: nowrap;",
  whiteSpacePreWrap: "white-space: pre-wrap;",
  whiteSpacePreLine: "white-space: pre-line;",

  lineHeight: "line-height: $0;",

  cursorAuto: "cursor: auto;",
  cursorDefault: "cursor: default;",
  cursorCrosshair: "cursor: crosshair;",
  cursorHand: "cursor: hand;",
  cursorHelp: "cursor: help;",
  cursorMove: "cursor: move;",
  cursorPointer: "cursor: pointer;",
  cursorText: "cursor: text;",

  flex: "flex: $0;",
  flexGrow: "flex-grow: $0;",
  flexShrink: "flex-shrink: $0;",
  flexBasis: "flex-basis: $0;",
  flexBasisAuto: "flex-basis: auto;",
  order: "order: $0;",
  orderUnset: "order: unset;",

  flexRow: "display: flex; margin-left: -$0; margin-right: -$0;",
  flexRowChild: "flex: 1 0 auto; padding-left: $0; padding-right: $0;",
  flexCol: "flex-basis: $0; max-width: $0;",

  flexDirectionColumn: "flex-direction: column;",
  flexDirectionColumnReverse: "flex-direction: column-reverse;",
  flexDirectionRow: "flex-direction: row;",
  flexDirectionRowReverse: "flex-direction: row-reverse;",

  flexWrapNoWrap: "flex-wrap: nowrap;",
  flexWrapWrap: "flex-wrap: wrap;",
  flexWrapWrapReverse: "flex-wrap: wrap-reverse;",
  flexWrapUnset: "flex-wrap: unset;",

  justifyContentUnset: "justify-content: unset;",
  justifyContentCenter: "justify-content: center;",
  justifyContentFlexEnd: "justify-content: flex-end;",
  justifyContentFlexStart: "justify-content: flex-start;",
  justifyContentSpaceAround: "justify-content: space-around;",
  justifyContentSpaceBetween: "justify-content: space-between;",

  alignContentCenter: "align-content: center;",
  alignContentFlexEnd: "align-content: flex-end;",
  alignContentFlexStart: "align-content: flex-start;",
  alignContentStretch: "align-content: stretch;",
  alignContentSpaceAround: "align-content: space-around;",
  alignContentSpaceBetween: "align-content: space-between;",

  alignItemsBaseline: "align-items: baseline;",
  alignItemsСenter: "align-items: center;",
  alignItemsFlexEnd: "align-items: flex-end;",
  alignItemsFlexStart: "align-items: flex-start;",
  alignItemsStretch: "align-items: stretch;",

  background: "background: $0;",
  backgroundColor: "background-color: $0;",
  backgroundPositionTop: "background-position: top;",
  backgroundPositionBottom: "background-position: bottom;",
  backgroundPositionLeft: "background-position: left;",
  backgroundPositionRight: "background-position: right;",
  backgroundPositionCenter: "background-position: center;",

  boxShadow: "box-shadow: $0;",
  boxShadowNone: "box-shadow: none;",
  textShadow: "text-shadow: $0;",
  textShadowNone: "text-shadow: none;",

  overflowVisible: "overflow: visible;",
  overflowHidden: "overflow: hidden;",
  overflowScroll: "overflow: scroll;",
  overflowAuto: "overflow: auto;",
  overflowXVisible: "overflow-x: visible;",
  overflowXHidden: "overflow-x: hidden;",
  overflowXScroll: "overflow-x: scroll;",
  overflowXAuto: "overflow-x: auto;",
  overflowYVisible: "overflow-y: visible;",
  overflowYHidden: "overflow-y: hidden;",
  overflowYScroll: "overflow-y: scroll;",
  overflowYAuto: "overflow-y: auto;",

  opacity0: "opacity: 0;",
  opacity01: "opacity: 0.1;",
  opacity02: "opacity: 0.2;",
  opacity03: "opacity: 0.3;",
  opacity04: "opacity: 0.4;",
  opacity05: "opacity: 0.5;",
  opacity06: "opacity: 0.6;",
  opacity07: "opacity: 0.7;",
  opacity08: "opacity: 0.8;",
  opacity09: "opacity: 0.9;",
  opacity1: "opacity: 1;",

  listStyleNone: "list-style: none;",
  listStylePositionInside: "list-style-position: inside;",
  listStylePositionOutside: "list-style-position: outside;",
  listStyleTypeNone: "list-style-type: none;",
  listStyleTypeDisc: "list-style-type: disc;",
  listStyleTypeCircle: "list-style-type: circle;",
  listStyleTypeSquare: "list-style-type: square;",
  listStyleTypeDecimal: "list-style-type: decimal;",
  listStyleTypeDecimalLeadingZero: "list-style-type: decimal-leading-zero;",
  listStyleTypeLowerRoman: "list-style-type: lower-roman;",
  listStyleTypeUpperRoman: "list-style-type: upper-roman;",
  listStyleImageNone: "list-style-image: none;",
};

export default RulesetsDeclarationsMap;
