import { IStylesheetDTO } from "./Stylesheet.interface";
import Stylesheet from "./index";

const defaultRulesets = [
  { classname: "m_a", declarations: "margin: auto;" },
  { classname: "fullwidth", declarations: "width: 100%;" },
];

describe("Stylesheet entity", () => {
  it("should have valid contents", () => {
    const style = Stylesheet.make({ rulesets: defaultRulesets });
    expect(style.getContents()).toBe(
      ".m_a { margin: auto; }\n.fullwidth { width: 100%; }\n",
    );
  });

  it("should wrap contents in media query", () => {
    const media = { name: "max-md", query: "screen and (max-width: 700px)" };
    const style = Stylesheet.make({ rulesets: defaultRulesets, media });
    expect(style.getContents()).toBe(
      "@media screen and (max-width: 700px) {\n.max-md\\:m_a { margin: auto; }\n.max-md\\:fullwidth { width: 100%; }\n}\n",
    );
  });
});
