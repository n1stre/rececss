import CSSRulesetGroup from "./index";

describe("CSSRulesetGroup", () => {
  it("should be initialized with rulesets", () => {
    const rsg = CSSRulesetGroup.make(
      ["widthAuto", { width: "auto" }],
      ["heightAuto", { height: "auto" }],
    );

    expect(rsg.toRulesetsDTO()).toEqual([
      { selector: "widthAuto", declarations: { width: "auto" } },
      { selector: "heightAuto", declarations: { height: "auto" } },
    ]);
  });

  it("should append new ruleset items", () => {
    const rsg = CSSRulesetGroup.make(["widthAuto", { width: "auto" }]);
    rsg.addItems(
      ["heightAuto", { height: "auto" }],
      ["width100", { width: "100px" }],
    );
    expect(rsg.toRulesetsDTO()).toEqual([
      { selector: "widthAuto", declarations: { width: "auto" } },
      { selector: "heightAuto", declarations: { height: "auto" } },
      { selector: "width100", declarations: { width: "100px" } },
    ]);
  });

  it("should append ruleset items from array of values", () => {
    const rsg = CSSRulesetGroup.make(["widthAuto", { width: "auto" }]);

    rsg.addItemsFromValues(
      ["10px", "20px", "2em"],
      (val) => [`width_${val}`, { width: val }],
      (val) => [`height_${val}`, { height: val }],
    );

    expect(rsg.toRulesetsDTO()).toEqual([
      { selector: "widthAuto", declarations: { width: "auto" } },
      { selector: "width_10px", declarations: { width: "10px" } },
      { selector: "height_10px", declarations: { height: "10px" } },
      { selector: "width_20px", declarations: { width: "20px" } },
      { selector: "height_20px", declarations: { height: "20px" } },
      { selector: "width_2em", declarations: { width: "2em" } },
      { selector: "height_2em", declarations: { height: "2em" } },
    ]);
  });

  it("should append ruleset items from map object", () => {
    const rsg = CSSRulesetGroup.make(["widthAuto", { width: "auto" }]);

    rsg.addItemsFromMap(
      {
        success: "green",
        warning: "yellow",
        danger: "red",
      },
      (item) => [`clr_${item.name}`, { color: item.value }],
      (item) => [`bg_${item.name}`, { background: item.value }],
    );

    expect(rsg.toRulesetsDTO()).toEqual([
      { selector: "widthAuto", declarations: { width: "auto" } },
      { selector: "clr_success", declarations: { color: "green" } },
      { selector: "bg_success", declarations: { background: "green" } },
      { selector: "clr_warning", declarations: { color: "yellow" } },
      { selector: "bg_warning", declarations: { background: "yellow" } },
      { selector: "clr_danger", declarations: { color: "red" } },
      { selector: "bg_danger", declarations: { background: "red" } },
    ]);
  });
});
