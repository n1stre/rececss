import RulesetsBuilder from "./index";
// import { DTO } from "./RulesetsBuilder.interface";

function createRulesetsBuilder(commonVariants?: Record<string, string>) {
  return RulesetsBuilder.create({
    classnamesMap: {
      width: "w_$0",
      display: "d_$0",
      visibility: "v_$0",
      alignContent: "ac_$0",
      color: "c_$0",
      border: "bd_$0",
      paddingLeft: "pl_$0",
    },
    declarationsMap: {
      width: "width: $0;",
      display: "display: $0;",
      visibility: "visibility: $0;",
      alignContent: "align-content: $0;",
      color: "color: $0;",
      border: "border: $0;",
      paddingLeft: "padding-left: $0;",
    },
    variantsMap: {
      width: undefined,
      color: { h: "&:hover" },
      border: { f: "&:focus" },
    },
    commonVariants,
  });
}

describe("RulesetsBuilder", () => {
  it("should map values to rulesets", () => {
    const builder = createRulesetsBuilder();
    builder.mapValuesToRulesets({ "2": "2px", "6rem": "6rem" }, ["width"]);
    builder.mapValuesToRulesets({ b: "block" }, ["display"]);
    builder.mapValuesToRulesets({ h: "hidden" }, ["visibility"]);
    builder.mapValuesToRulesets({ c: "center" }, ["alignContent"]);

    expect(() => {
      builder.mapValuesToRulesets(undefined, ["alignContent"]);
    }).not.toThrowError();

    expect(builder.getResult()).toEqual([
      { classname: "w_2", declarations: "width: 2px;" },
      { classname: "w_6rem", declarations: "width: 6rem;" },
      { classname: "d_b", declarations: "display: block;" },
      { classname: "v_h", declarations: "visibility: hidden;" },
      { classname: "ac_c", declarations: "align-content: center;" },
    ]);
  });

  it("should retrieve proper variant", () => {
    const builder = createRulesetsBuilder();
    expect(builder.getVariants("width")).toEqual(undefined);
    expect(builder.getVariants("color")).toEqual({ h: "&:hover" });
  });

  it("should map values to rulesets with variants", () => {
    const builder = createRulesetsBuilder();
    builder.mapValuesToRulesets({ red: "red" }, ["color"]);
    builder.mapValuesToRulesets({ sm: "1px solid" }, ["border"]);

    expect(builder.getResult()).toEqual([
      {
        classname: "c_red",
        declarations: "color: red;",
        classnameVariants: { h: "&:hover" },
      },
      {
        classname: "bd_sm",
        declarations: "border: 1px solid;",
        classnameVariants: { f: "&:focus" },
      },
    ]);
  });

  it("should not interpolate empty declaration placeholders", () => {
    const builder = createRulesetsBuilder();
    builder.mapValuesToRulesets({ 20: "20px", u: "" }, ["width"]);
    expect(builder.getResult()).toEqual([
      { classname: "w_20", declarations: "width: 20px;" },
      { classname: "w_u", declarations: "width: $0;" },
    ]);
  });

  it("should map single values to rulesets", () => {
    const builder = createRulesetsBuilder();

    builder.mapSingleValuesToRulesets(
      { a: "2px", b: "20px 20px", c: "20px", d: "10px 20px 40px", e: "2em" },
      ["paddingLeft"],
    );

    expect(() => {
      builder.mapSingleValuesToRulesets(undefined, ["paddingLeft"]);
    }).not.toThrowError();

    expect(builder.getResult()).toEqual([
      { classname: "pl_a", declarations: "padding-left: 2px;" },
      { classname: "pl_c", declarations: "padding-left: 20px;" },
      { classname: "pl_e", declarations: "padding-left: 2em;" },
    ]);
  });

  it("should add ruleset from dto", () => {
    const builder = createRulesetsBuilder();
    builder.addRuleset({ classname: "w_2", declarations: "width: 2px;" });
    builder.addRuleset({ classname: "w_6", declarations: "width: 6px;" });

    expect(builder.getResult()).toEqual([
      { classname: "w_2", declarations: "width: 2px;" },
      { classname: "w_6", declarations: "width: 6px;" },
    ]);
  });
});
