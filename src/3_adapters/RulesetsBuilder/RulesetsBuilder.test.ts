import RulesetsBuilder from "./index";

describe("RulesetsBuilder", () => {
  it("should map values to rulesets", () => {
    const builder = RulesetsBuilder.create();
    builder.mapValuesToRulesets({ "2": "2px", "6rem": "6rem" }, ["width"]);
    builder.mapValuesToRulesets({ b: "block" }, ["display"]);
    builder.mapValuesToRulesets({ h: "hidden" }, ["visibility"]);
    builder.mapValuesToRulesets({ c: "center" }, ["alignContent"]);

    expect(() => {
      builder.mapValuesToRulesets(undefined, ["alignContent"]);
    }).not.toThrowError();

    expect(builder.getResultDTO()).toEqual([
      { classname: "w_2", declarations: "width: 2px;" },
      { classname: "w_6rem", declarations: "width: 6rem;" },
      { classname: "d_b", declarations: "display: block;" },
      { classname: "v_h", declarations: "visibility: hidden;" },
      { classname: "ac_c", declarations: "align-content: center;" },
    ]);
  });

  it("should retrieve proper variant", () => {
    const builderWithNoVariants = RulesetsBuilder.create();
    expect(builderWithNoVariants.getVariants("width")).toBe(undefined);

    const rulesetVariants = { width: { h: "&:hover" } };
    const builderWithVariants = RulesetsBuilder.create({ rulesetVariants });
    expect(builderWithVariants.getVariants("width")).toEqual({ h: "&:hover" });
  });

  it("should map values to rulesets with variants", () => {
    const hoverVariants = { h: "&:hover" };
    const focusVariants = { f: "&:focus" };
    const rulesetVariants = { color: hoverVariants, border: focusVariants };
    const builder = RulesetsBuilder.create({ rulesetVariants });

    builder.mapValuesToRulesets({ red: "red" }, ["color"]);
    builder.mapValuesToRulesets({ sm: "1px solid" }, ["border"]);

    expect(builder.getResultDTO()).toEqual([
      {
        classname: "c_red",
        declarations: "color: red;",
        classnameVariants: hoverVariants,
      },
      {
        classname: "bd_sm",
        declarations: "border: 1px solid;",
        classnameVariants: focusVariants,
      },
    ]);
  });

  it("should not interpolate empty declaration placeholders", () => {
    const builder = RulesetsBuilder.create();
    builder.mapValuesToRulesets({ red: "red", u: "" }, ["color"]);
    expect(builder.getResultDTO()).toEqual([
      { classname: "c_red", declarations: "color: red;" },
      { classname: "c_u", declarations: "color: $0;" },
    ]);
  });

  it("should map single values to rulesets", () => {
    const builder = RulesetsBuilder.create();
    builder.mapSingleValuesToRulesets(
      { a: "2px", b: "20px 20px", c: "20px", d: "10px 20px 40px", e: "2em" },
      ["paddingLeft"],
    );

    expect(() => {
      builder.mapSingleValuesToRulesets(undefined, ["padding"]);
    }).not.toThrowError();

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
