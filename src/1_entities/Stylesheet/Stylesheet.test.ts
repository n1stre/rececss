import Stylesheet from "./index";

const defaultRulesets = [
  ".m_a { margin: auto; }",
  ".fullwidth { width: 100%; }",
];

describe("Stylesheet entity", () => {
  it("should have valid contents", () => {
    const style = Stylesheet.create({ rulesets: defaultRulesets });
    expect(style.toString()).toBe(
      ".m_a { margin: auto; }\n.fullwidth { width: 100%; }\n",
    );
  });

  it("should wrap contents in media query", () => {
    const media = { name: "max-md", query: "screen and (max-width: 700px)" };
    const style = Stylesheet.create({ rulesets: defaultRulesets, media });
    expect(style.toString()).toBe(
      "@media screen and (max-width: 700px) {\n.m_a { margin: auto; }\n.fullwidth { width: 100%; }\n}\n",
    );
  });
});
