import CSSRuleset from "./index";

const basic = {
  selector: ".cn",
  declarations: [
    { property: "width", value: "20px" },
    { property: "background", value: "red" },
  ],
};

describe("CSSRuleset", () => {
  it("should read selector", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.getSelector()).toBe(".cn");
  });

  it("should read declarations", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.getDeclarations()).toEqual([
      { property: "width", value: "20px" },
      { property: "background", value: "red" },
    ]);
  });

  it("should update selector", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.setSelector(".newcn").getSelector()).toBe(".newcn");
  });

  it("should read property value", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.getDeclarationValue("width")).toBe("20px");
    expect(rs.getDeclarationValue("background")).toBe("red");
  });

  it("should return empty value for unspecified declaration", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.getDeclarationValue("color")).toBe(null);
  });

  it("should add declaration", () => {
    const rs = CSSRuleset.make(basic);
    const d = { property: "color", value: "blue" };
    expect(rs.getDeclarationValue("color")).toBe(null);
    expect(rs.addDeclaration(d).getDeclarationValue("color")).toBe("blue");
  });

  it("should remove declaration", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.removeDeclaration("width").getDeclarationValue("width")).toBe(
      null,
    );
  });

  it("should find declaration by property", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.getDeclaration("width")).toEqual({
      property: "width",
      value: "20px",
    });
  });

  it("should be represented as CSS string", () => {
    const rs = CSSRuleset.make(basic);
    expect(rs.toString()).toBe(".cn { width: 20px; background: red; }");
  });
});
