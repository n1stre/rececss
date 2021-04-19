import RulesetsBuilder from "./index";

describe("RulesetsBuilder", () => {
  it("should add rulesets from names", () => {
    const builder = RulesetsBuilder.create({});
    builder.addRulesetsFromNames([
      "displayBlock",
      "visibilityHidden",
      "alignContentCenter",
    ]);

    expect(builder.getResultDTO()).toEqual([
      { classname: "d_b", declarations: "display: block;" },
      { classname: "v_h", declarations: "visibility: hidden;" },
      { classname: "ac_c", declarations: "align-content: center;" },
    ]);
  });

  it("should add rulesets from values and names", () => {
    const builder = RulesetsBuilder.create({});
    builder.addRulesetsFromValues({ "2": "2px", "6rem": "6rem" }, ["width"]);

    expect(builder.getResultDTO()).toEqual([
      { classname: "w_2", declarations: "width: 2px;" },
      { classname: "w_6rem", declarations: "width: 6rem;" },
    ]);
  });

  it("should add ruleset with injecteed states", () => {
    const classnameStates = { h: "$:hover" };
    const builder = RulesetsBuilder.create({ classnameStates });
    builder.addRulesetsFromValues({ "2": "2px" }, ["width"]);

    expect(builder.getResultDTO()).toEqual([
      { classname: "w_2", declarations: "width: 2px;", classnameStates },
    ]);
  });

  it("should add ruleset from dto", () => {
    const builder = RulesetsBuilder.create({});
    builder.addRuleset({ classname: "w_2", declarations: "width: 2px;" });
    builder.addRuleset({ classname: "w_6", declarations: "width: 6px;" });

    expect(builder.getResultDTO()).toEqual([
      { classname: "w_2", declarations: "width: 2px;" },
      { classname: "w_6", declarations: "width: 6px;" },
    ]);
  });
});
