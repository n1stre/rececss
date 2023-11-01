import Ruleset from "../../1_entities/Ruleset";
import Stylesheet from "../../1_entities/Stylesheet";
import GenerateStylesheetAssets from "./index";

const rulesetProps = Ruleset.defaultProps;
const stylesheetProps = Stylesheet.defaultProps;
const rulesets = [
  { classname: "w_10%", declarations: "width: 10%;" },
  { classname: "fz_16", declarations: "font-size: 16px;" },
];

describe("GenerateUtilityStylesheet usecase", () => {
  it("should contain valid result", () => {
    const md = "only screen and (min-width: 768px)";
    const lg = "only screen and (min-width: 999px)";
    const props = { rulesetProps, stylesheetProps };
    const result = GenerateStylesheetAssets.create(props).exec({
      media: { md, lg },
      rulesets,
    });

    const contents = result[0].contents;
    const mdIdx = contents.indexOf("@media only screen and (min-width: 768px)");
    const lgIdx = contents.indexOf("@media only screen and (min-width: 999px)");
    expect(mdIdx).not.toBe(-1);
    expect(lgIdx).not.toBe(-1);

    const basePart = contents.slice(0, mdIdx);
    expect(basePart).toContain(`.w_10\\% { width: 10%; }\n`);
    expect(basePart).toContain(`.fz_16 { font-size: 16px; }\n`);

    const mdPart = contents.slice(mdIdx, lgIdx);
    expect(mdPart).toContain(`.md\\:w_10\\% { width: 10%; }\n`);
    expect(mdPart).toContain(`.md\\:fz_16 { font-size: 16px; }\n`);

    const lgPart = contents.slice(lgIdx, -1);
    expect(lgPart).toContain(`.lg\\:w_10\\% { width: 10%; }\n`);
    expect(lgPart).toContain(`.lg\\:fz_16 { font-size: 16px; }\n`);
  });

  it("should contain valid result splitted by media", () => {
    const md = "only screen and (min-width: 768px)";
    const lg = "only screen and (min-width: 999px)";
    const props = { rulesetProps, stylesheetProps, splitByMedia: true };
    const result = GenerateStylesheetAssets.create(props).exec({
      media: { md, lg },
      rulesets,
    });

    const baseResult = result[0];
    expect(baseResult.contents).toBe(
      [`.w_10\\% { width: 10%; }\n`, `.fz_16 { font-size: 16px; }\n`].join(""),
    );

    const mdResult = result[1];
    expect(mdResult.contents).toBe(
      [
        "@media only screen and (min-width: 768px) {\n",
        `.md\\:w_10\\% { width: 10%; }\n`,
        `.md\\:fz_16 { font-size: 16px; }\n`,
        "}\n",
      ].join(""),
    );

    const lgResult = result[2];
    expect(lgResult.contents).toBe(
      [
        "@media only screen and (min-width: 999px) {\n",
        `.lg\\:w_10\\% { width: 10%; }\n`,
        `.lg\\:fz_16 { font-size: 16px; }\n`,
        "}\n",
      ].join(""),
    );
  });
});
