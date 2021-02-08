import { TRulesetNamesMap } from "../RulesetPresenter.interface";

const RulesetsEmmetClassnamesMap: TRulesetNamesMap<string> = {
  widthAuto: "w_a",
  heightAuto: "h_a",
  width: `w_$0;`,
  height: `h_$0;`,
  minWidth: `min-width: $0;`,
  minHeight: `min-height: $0;`,
  maxWidth: `max-width: $0;`,
  maxHeight: `max-height: $0;`,

  padding: `padding: $0;`,
  paddingTop: `padding-top: $0;`,
  paddingBottom: `padding-bottom: $0;`,
  paddingVertical: `padding-top: $0; padding-bottom: $0;`,
  paddingLeft: `padding-left: $0;`,
  paddingRight: `padding-right: $0;`,
  paddingHorizontal: `padding-left: $0; padding-right: $0;`,

  margin: `margin: $0;`,
  marginTop: `margin-top: $0;`,
  marginBottom: `margin-bottom: $0;`,
  marginVertical: `margin-top: $0; margin-bottom: $0;`,
  marginLeft: `margin-left: $0;`,
  marginRight: `margin-right: $0;`,
  marginHorizontal: `margin-left: $0; margin-right: $0;`,

  top: `top: $0;`,
  bottom: `bottom: $0;`,
  left: `left: $0;`,
  right: `right: $0;`,
  topLeft: `top: $0; left: $0`,
  topRight: `top: $0; right: $0`,
  bottomLeft: `bottom: $0; left: $0`,
  bottomRight: `bottom: $0; right: $0`,

  positionStatic: `position: static;`,
  positionRelative: `position: relative;`,
  positionAbsolute: `position: absolute;`,
  positionFixed: `position: fixed;`,
  zIndex: `z-index: $0;`,

  fontSize: `font-size: $0;`,
  fontFamily: `font-family: $0;`,

  border: `border: $0;`,
  borderLeft: `border-left: $0`,
  borderRight: `border-right: $0`,
  borderTop: `border-top: $0`,
  borderBottom: `border-bottom: $0`,
  borderRadius: `border-radius: $0`,

  color: `color: $0;`,
  backgroundColor: `background-color: $0;`,
};

export default RulesetsEmmetClassnamesMap;
