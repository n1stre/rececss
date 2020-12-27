import buildCssRulesetGroup from "./CssRulesetGroup";

const makeCssRulesetGroup = buildCssRulesetGroup({});

const CssRulesetGroup = Object.freeze({
  prebuild: buildCssRulesetGroup,
  make: makeCssRulesetGroup,

  makeSizeGroup: (cn: any, values: string[]) => {
    return makeCssRulesetGroup(
      [cn.widthAuto(), { width: "auto" }],
      [cn.heightAuto(), { height: "auto" }],
    ).addItemsFromValues(
      values,
      (v) => [cn.width(v), { width: v }],
      (v) => [cn.height(v), { height: v }],
      (v) => [cn.minWidth(v), { "min-width": v }],
      (v) => [cn.minHeight(v), { "min-height": v }],
      (v) => [cn.maxWidth(v), { "max-width": v }],
      (v) => [cn.maxHeight(v), { "max-height": v }],
    );
  },

  makePaddingGroup: (cn: any, values: string[]) => {
    return makeCssRulesetGroup().addItemsFromValues(
      values,
      (v) => [cn.padding(v), { padding: v }],
      (v) => [cn.paddingTop(v), { "padding-top": v }],
      (v) => [cn.paddingBottom(v), { "padding-bottom": v }],
      (v) => [cn.paddingVertical(v), { "padding-top": v, "padding-bottom": v }],
      (v) => [cn.paddingLeft(v), { "padding-left": v }],
      (v) => [cn.paddingRight(v), { "padding-right": v }],
      (v) => [
        cn.paddingHorizontal(v),
        { "padding-left": v, "padding-right": v },
      ],
    );
  },

  makeMarginGroup: (cn: any, values: string[]) => {
    return makeCssRulesetGroup().addItemsFromValues(
      values,
      (v) => [cn.margin(v), { margin: v }],
      (v) => [cn.marginTop(v), { "margin-top": v }],
      (v) => [cn.marginBottom(v), { "margin-bottom": v }],
      (v) => [cn.marginVertical(v), { "margin-top": v, "margin-bottom": v }],
      (v) => [cn.marginLeft(v), { "margin-left": v }],
      (v) => [cn.marginRight(v), { "margin-right": v }],
      (v) => [cn.marginHorizontal(v), { "margin-left": v, "margin-right": v }],
    );
  },

  makeOffsetGroup: (cn: any, values: string[]) => {
    return makeCssRulesetGroup().addItemsFromValues(
      values,
      (v) => [cn.top(v), { top: v }],
      (v) => [cn.bottom(v), { bottom: v }],
      (v) => [cn.left(v), { left: v }],
      (v) => [cn.right(v), { right: v }],
      (v) => [cn.topLeft(v), { top: v, left: v }],
      (v) => [cn.topRight(v), { top: v, right: v }],
      (v) => [cn.bottomLeft(v), { bottom: v, left: v }],
      (v) => [cn.bottomRight(v), { bottom: v, right: v }],
    );
  },

  makeZIndexGroup: (cn: any, values: number[]) => {
    return makeCssRulesetGroup().addItemsFromValues(values, (v) => [
      cn.zIndex(v),
      { "z-index": v },
    ]);
  },

  makeFontGroup: (
    cn: any,
    sizes: string[],
    families: Record<string, string>,
  ) => {
    return makeCssRulesetGroup()
      .addItemsFromValues(sizes, (v) => [cn.fontSize(v), { "font-size": v }])
      .addItemsFromMap(families, (v) => [
        cn.fontFamily(v.name),
        { "font-family": v.value },
      ]);
  },

  makeBorderGroup: (
    cn: any,
    borders: Record<string, string>,
    radiuses: string[],
  ) => {
    return makeCssRulesetGroup()
      .addItemsFromMap(borders, (v) => [cn.border(v.name), { border: v.value }])
      .addItemsFromValues(radiuses, (v) => [
        cn.borderRadius(v),
        { "border-radius": v },
      ]);
  },

  makeColorGroup: (cn: any, colors: Record<string, string>) => {
    return makeCssRulesetGroup().addItemsFromMap(
      colors,
      (v) => [cn.color(v.name), { color: v.value }],
      (v) => [cn.background(v.name), { background: v.value }],
    );
  },
});

export default CssRulesetGroup;
