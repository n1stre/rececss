import ClassnamesMapperFixture from "@fixtures/ClassnamesMapperFixture";
import CssRuleset from "@entities/CssRuleset";
import CssRulesetsInteractor from "./index";

const cnm = ClassnamesMapperFixture;
const interactor = CssRulesetsInteractor.prebuild({
  classnamesMapper: cnm,
});

describe("CssRulesetsInteractor", () => {
  it("should create size rulesets", () => {
    function sizeSet(val: string) {
      return [
        CssRuleset.fromArgs(cnm.width(val), ["width", val]).toDTO(),
        CssRuleset.fromArgs(cnm.maxWidth(val), ["max-width", val]).toDTO(),
        CssRuleset.fromArgs(cnm.minWidth(val), ["min-width", val]).toDTO(),
        CssRuleset.fromArgs(cnm.height(val), ["height", val]).toDTO(),
        CssRuleset.fromArgs(cnm.maxHeight(val), ["max-height", val]).toDTO(),
        CssRuleset.fromArgs(cnm.minHeight(val), ["min-height", val]).toDTO(),
      ];
    }

    expect(
      interactor.createSizeRulesets([
        { length: 10, unit: "px" },
        { length: 20, unit: "px" },
        { length: 1, unit: "em" },
        { length: 2, unit: "em" },
      ]),
    ).toEqual([
      CssRuleset.fromArgs(cnm.widthAuto(), ["width", "auto"]).toDTO(),
      CssRuleset.fromArgs(cnm.heightAuto(), ["height", "auto"]).toDTO(),
      ...sizeSet("10px"),
      ...sizeSet("20px"),
      ...sizeSet("1em"),
      ...sizeSet("2em"),
    ]);
  });

  it("should create padding rulesets", () => {
    function paddingSet(val: string) {
      // prettier-ignore
      return [
        CssRuleset.fromArgs(cnm.padding(val), ["padding", val]).toDTO(),
        CssRuleset.fromArgs(cnm.paddingTop(val), ["padding-top", val]).toDTO(),
        CssRuleset.fromArgs(cnm.paddingBottom(val), ["padding-bottom", val]).toDTO(),
        CssRuleset.fromArgs(cnm.paddingVertical(val), ["padding-top", val], ["padding-bottom", val]).toDTO(),
        CssRuleset.fromArgs(cnm.paddingLeft(val), ["padding-left", val]).toDTO(),
        CssRuleset.fromArgs(cnm.paddingRight(val), ["padding-right", val]).toDTO(),
        CssRuleset.fromArgs(cnm.paddingHorizontal(val), ["padding-left", val], ["padding-right", val]).toDTO(),
      ]
    }

    expect(
      interactor.createPaddingRulesets([
        { length: 5, unit: "px" },
        { length: 10, unit: "px" },
        { length: 20, unit: "em" },
      ]),
    ).toEqual([
      ...paddingSet("5px"),
      ...paddingSet("10px"),
      ...paddingSet("20em"),
    ]);
  });

  it("should create margin rulesets", () => {
    function marginSet(val: string) {
      // prettier-ignore
      return [
        CssRuleset.fromArgs(cnm.margin(val), ["margin", val]).toDTO(),
        CssRuleset.fromArgs(cnm.marginTop(val), ["margin-top", val]).toDTO(),
        CssRuleset.fromArgs(cnm.marginBottom(val), ["margin-bottom", val]).toDTO(),
        CssRuleset.fromArgs(cnm.marginVertical(val), ["margin-top", val], ["margin-bottom", val]).toDTO(),
        CssRuleset.fromArgs(cnm.marginLeft(val), ["margin-left", val]).toDTO(),
        CssRuleset.fromArgs(cnm.marginRight(val), ["margin-right", val]).toDTO(),
        CssRuleset.fromArgs(cnm.marginHorizontal(val), ["margin-left", val], ["margin-right", val]).toDTO(),
      ]
    }

    expect(
      interactor.createMarginRulesets([
        { length: -5, unit: "px" },
        { length: 10, unit: "px" },
        { length: 20, unit: "em" },
      ]),
    ).toEqual([
      ...marginSet("-5px"),
      ...marginSet("10px"),
      ...marginSet("20em"),
    ]);
  });

  it("should create offset rulesets", () => {
    function offsetSet(val: string) {
      // prettier-ignore
      return [
        CssRuleset.fromArgs(cnm.top(val), ["top", val]).toDTO(),
        CssRuleset.fromArgs(cnm.bottom(val), ["bottom", val]).toDTO(),
        CssRuleset.fromArgs(cnm.left(val), ["left", val]).toDTO(),
        CssRuleset.fromArgs(cnm.right(val), ["right", val]).toDTO(),
        CssRuleset.fromArgs(cnm.topLeft(val), ["top", val], ["left", val]).toDTO(),
        CssRuleset.fromArgs(cnm.topRight(val), ["top", val], ["right", val]).toDTO(),
        CssRuleset.fromArgs(cnm.bottomLeft(val), ["bottom", val], ["left", val]).toDTO(),
        CssRuleset.fromArgs(cnm.bottomRight(val), ["bottom", val], ["right", val]).toDTO(),
      ]
    }

    expect(
      interactor.createOffsetRulesets([
        { length: 10, unit: "px" },
        { length: 20, unit: "em" },
      ]),
    ).toEqual([...offsetSet("10px"), ...offsetSet("20em")]);
  });

  it("should create z-index rulesets", () => {
    expect(interactor.createZIndexRulesets([10, 20, 100, 999])).toEqual([
      CssRuleset.fromArgs(cnm.zIndex(10), ["z-index", 10]).toDTO(),
      CssRuleset.fromArgs(cnm.zIndex(20), ["z-index", 20]).toDTO(),
      CssRuleset.fromArgs(cnm.zIndex(100), ["z-index", 100]).toDTO(),
      CssRuleset.fromArgs(cnm.zIndex(999), ["z-index", 999]).toDTO(),
    ]);
  });

  it("should create font-size rulesets", () => {
    expect(
      interactor.createFontSizeRulesets([
        { length: 10, unit: "px" },
        { length: 20, unit: "px" },
        { length: 2, unit: "em" },
      ]),
    ).toEqual([
      CssRuleset.fromArgs(cnm.fontSize("10px"), ["font-size", "10px"]).toDTO(),
      CssRuleset.fromArgs(cnm.fontSize("20px"), ["font-size", "20px"]).toDTO(),
      CssRuleset.fromArgs(cnm.fontSize("2em"), ["font-size", "2em"]).toDTO(),
    ]);
  });

  it("should create font-family rulesets", () => {
    // prettier-ignore
    expect(
      interactor.createFontFamilyRulesets({
        primary: "Arial, sans-serif",
        secondary: "Helvetica, serif",
      }),
    ).toEqual([
      CssRuleset.fromArgs(cnm.fontFamily("primary"), ["font-family", "Arial, sans-serif"]).toDTO(),
      CssRuleset.fromArgs(cnm.fontFamily("secondary"), ["font-family", "Helvetica, serif"]).toDTO(),
    ]);
  });
});
