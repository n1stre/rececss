import { Associations } from "../Config.interfaces";

//prettier-ignore
const rulesAssociations: Associations = {
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

export default rulesAssociations;
