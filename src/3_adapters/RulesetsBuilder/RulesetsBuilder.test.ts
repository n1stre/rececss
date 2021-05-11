import RulesetsBuilder from "./index";

describe("RulesetsBuilder", () => {
  it("should map values to rulesets", () => {
    const builder = RulesetsBuilder.create({});
    builder.mapValuesToRulesets({ "2": "2px", "6rem": "6rem" }, ["width"]);
    builder.mapValuesToRulesets({ b: "block" }, ["display"]);
    builder.mapValuesToRulesets({ h: "hidden" }, ["visibility"]);
    builder.mapValuesToRulesets({ c: "center" }, ["alignContent"]);

    expect(builder.getResultDTO()).toEqual([
      { classname: "w_2", declarations: "width: 2px;" },
      { classname: "w_6rem", declarations: "width: 6rem;" },
      { classname: "d_b", declarations: "display: block;" },
      { classname: "v_h", declarations: "visibility: hidden;" },
      { classname: "ac_c", declarations: "align-content: center;" },
    ]);
  });

  it("should map single values to rulesets", () => {
    const builder = RulesetsBuilder.create({});
    builder.mapSingleValuesToRulesets(
      { a: "2px", b: "20px 20px", c: "20px", d: "10px 20px 40px", e: "2em" },
      ["paddingLeft"],
    );

    expect(builder.getResultDTO()).toEqual([
      { classname: "pl_a", declarations: "padding-left: 2px;" },
      { classname: "pl_c", declarations: "padding-left: 20px;" },
      { classname: "pl_e", declarations: "padding-left: 2em;" },
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
