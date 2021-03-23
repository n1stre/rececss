import { IRulesetDTO } from "./Ruleset.interface";
import Ruleset from "./index";

describe("Ruleset entity", () => {
  it("should be presented as a string", () => {
    const rs = Ruleset.make({
      classname: "myClass",
      declarations: "top: 0; bottom: 0;",
    });

    expect(rs.toString()).toBe(".myClass { top: 0; bottom: 0; }");
  });

  it("should escape classname", () => {
    const rs = Ruleset.make({
      classname: "md:w_20.5%",
      declarations: "width: 20.5%;",
    });

    expect(rs.toString()).toBe(".md\\:w_20\\.5\\% { width: 20.5%; }");
  });

  it("should be renamed properly", () => {
    const rs = Ruleset.make({
      classname: "myClass",
      declarations: "top: 0; bottom: 0;",
    }).rename((old) => "prefix__" + old);

    expect(rs.toString()).toBe(".prefix__myClass { top: 0; bottom: 0; }");
  });
});
