import Ruleset from "./index";

describe("Ruleset entity", () => {
  it("should be presented as a string", () => {
    const rs = Ruleset.create({
      classname: "myClass",
      declarations: "top: 0; bottom: 0;",
    });

    expect(rs.toString()).toBe(".myClass { top: 0; bottom: 0; }");
  });

  it("should escape classname", () => {
    const rs = Ruleset.create({
      classname: "md:w_20.5%",
      declarations: "width: 20.5%;",
    });

    expect(rs.toString()).toBe(".md\\:w_20\\.5\\% { width: 20.5%; }");
  });

  it("should attach pseudo classes", () => {
    const rs = Ruleset.create({
      classname: "t_0",
      declarations: "top: 0;",
      pseudoClasses: { h: "$0:hover", ja: "$0.js-active" },
    });

    expect(rs.toString()).toBe(
      ".t_0, .t_0\\:h:hover, .t_0\\:ja.js-active { top: 0; }",
    );
  });

  it("should add prefix to classname", () => {
    const rs = Ruleset.build({ prefixSep: "__" }).create({
      classname: "t_0",
      declarations: "top: 0;",
    });
    rs.addClassnamePrefix("prefix");
    expect(rs.toString()).toBe(".prefix__t_0 { top: 0; }");
  });
});
