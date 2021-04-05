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
      classname: "md:w_20.5%:hover",
      declarations: "width: 20.5%;",
    });
    expect(rs.toString()).toBe(".md\\:w_20\\.5\\%\\:hover { width: 20.5%; }");
  });

  it("should attach class states", () => {
    const rs = Ruleset.create({
      classname: "t_0",
      classnameStates: { h: "$0:hover", ja: "$0.js-active" },
      declarations: "top: 0;",
    });

    expect(rs.toString()).toBe(
      ".t_0, .t_0\\:h:hover, .t_0\\:ja.js-active { top: 0; }",
    );
  });

  it("should add prefix to classname", () => {
    const factory = Ruleset.createFactory({ prefixSep: "__" });
    const rs = factory.create({
      classname: "t_0",
      declarations: "top: 0;",
    });

    rs.addClassnamePrefix("prefix");
    expect(rs.toString()).toBe(".prefix__t_0 { top: 0; }");
  });

  it("should be able to transform selector", () => {
    const rs = Ruleset.create({
      selectorTransform: ".row $0",
      classname: "col_1",
      declarations: "width: 50%;",
    });

    expect.assertions(2);

    expect(rs.toString()).toBe(".row .col_1 { width: 50%; }");
    expect(rs.addClassnamePrefix("md").toString()).toBe(
      ".row .md\\:col_1 { width: 50%; }",
    );
  });
});
