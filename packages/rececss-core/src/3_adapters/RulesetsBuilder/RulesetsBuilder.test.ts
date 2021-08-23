import RulesetsBuilder from "./index";
// import { DTO } from "./RulesetsBuilder.interface";

const basic = {
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
};

describe("RulesetsBuilder", () => {
  it("should add rulesets from keyword", () => {
    const builder = RulesetsBuilder.create(basic);

    builder.addRulesetFromKeyword("width", ["20", "20px"]);
    builder.addRulesetFromKeyword("display", ["b", "block"]);
    builder.addRulesetFromKeyword("visibility", ["h", "hidden"]);
    builder.addRulesetFromKeyword("alignContent", ["u", "unset"]);
    builder.addRulesetFromKeyword("color", ["red", "red"]);
    builder.addRulesetFromKeyword("border", ["thin", "1px solid"]);
    builder.addRulesetFromKeyword("paddingLeft", ["sm", "10px"]);

    expect(builder.getResult()).toEqual([
      { classname: "w_20", declarations: "width: 20px;" },
      { classname: "d_b", declarations: "display: block;" },
      { classname: "v_h", declarations: "visibility: hidden;" },
      { classname: "ac_u", declarations: "align-content: unset;" },
      {
        classname: "c_red",
        declarations: "color: red;",
        classnameVariants: { h: "&:hover" },
      },
      {
        classname: "bd_thin",
        declarations: "border: 1px solid;",
        classnameVariants: { f: "&:focus" },
      },
      { classname: "pl_sm", declarations: "padding-left: 10px;" },
    ]);
  });

  it("should retrieve proper variant", () => {
    const builder = RulesetsBuilder.create(basic);

    expect(builder.getVariants("width")).toEqual(undefined);
    expect(builder.getVariants("color")).toEqual({ h: "&:hover" });
  });

  it("should not interpolate empty declaration placeholders", () => {
    const builder = RulesetsBuilder.create(basic);

    builder.addRulesetFromKeyword("width", ["20", "20px"]);
    builder.addRulesetFromKeyword("width", ["u", ""]);
    expect(builder.getResult()).toEqual([
      { classname: "w_20", declarations: "width: 20px;" },
      { classname: "w_u", declarations: "width: $0;" },
    ]);
  });

  it("should add ruleset from dto", () => {
    const builder = RulesetsBuilder.create(basic);

    builder.addRulesetFromDTO({
      classname: "w_2",
      declarations: "width: 2px;",
    });

    builder.addRulesetFromDTO({
      classname: "w_6",
      declarations: "width: 6px;",
    });

    expect(builder.getResult()).toEqual([
      { classname: "w_2", declarations: "width: 2px;" },
      { classname: "w_6", declarations: "width: 6px;" },
    ]);
  });
});
