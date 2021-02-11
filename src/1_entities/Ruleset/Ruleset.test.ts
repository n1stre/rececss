import { IRulesetDTO } from "./Ruleset.interface";
import Ruleset from "./index";

const defaultRuleset: IRulesetDTO = {
  classname: "myClass",
  declarations: "top: 0; bottom: 0;",
};

describe("Ruleset entity", () => {
  it("should be presented as a string", () => {
    const rs = Ruleset.make(defaultRuleset);
    expect(rs.toString()).toBe(".myClass { top: 0; bottom: 0; }");
  });

  it("should be renamed properly", () => {
    const rs = Ruleset.make(defaultRuleset).rename((old) => "prefix__" + old);
    expect(rs.toString()).toBe(".prefix__myClass { top: 0; bottom: 0; }");
  });
});
