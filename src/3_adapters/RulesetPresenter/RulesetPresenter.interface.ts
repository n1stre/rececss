export type TRulesetNamesMap<T> = TSizeRulesetNames<T> &
  TPaddingRulesetNames<T> &
  TMarginRulesetNames<T> &
  TOffsetRulesetNames<T> &
  TPositionRulesetNames<T> &
  TFontRulesetNames<T> &
  TBorderRulesetNames<T> &
  TColorRulesetNames<T>;

type TSizeRulesetNames<T> = {
  widthAuto: T;
  heightAuto: T;
  width: T;
  height: T;
  minWidth: T;
  minHeight: T;
  maxWidth: T;
  maxHeight: T;
};

type TPaddingRulesetNames<T> = {
  padding: T;
  paddingTop: T;
  paddingBottom: T;
  paddingVertical: T;
  paddingLeft: T;
  paddingRight: T;
  paddingHorizontal: T;
};

type TMarginRulesetNames<T> = {
  margin: T;
  marginTop: T;
  marginBottom: T;
  marginVertical: T;
  marginLeft: T;
  marginRight: T;
  marginHorizontal: T;
};

type TOffsetRulesetNames<T> = {
  top: T;
  bottom: T;
  left: T;
  right: T;
  topLeft: T;
  topRight: T;
  bottomLeft: T;
  bottomRight: T;
};

type TPositionRulesetNames<T> = {
  positionStatic: T;
  positionRelative: T;
  positionAbsolute: T;
  positionFixed: T;
  zIndex: T;
};

type TFontRulesetNames<T> = {
  fontSize: T;
  fontFamily: T;
};

type TBorderRulesetNames<T> = {
  border: T;
  borderLeft: T;
  borderRight: T;
  borderTop: T;
  borderBottom: T;
  borderRadius: T;
};

type TColorRulesetNames<T> = {
  color: T;
  backgroundColor: T;
};
