import Ruleset from "../../1_entities/Ruleset";
import Stylesheet from "../../1_entities/Stylesheet";
import { IRulesetsFactory } from "../interfaces";
import GenerateStylesheetAssets from "./index";

const RulesetsFactory: IRulesetsFactory = {
  createAll: jest.fn(() => [
    Ruleset.create({ classname: "w_10%", declarations: "width: 10%;" }),
    Ruleset.create({ classname: "fz_16", declarations: "font-size: 16px;" }),
  ]),
};

const basicUsecase = GenerateStylesheetAssets.create({
  RulesetsFactory,
  StylesheetFactory: Stylesheet,
});

describe("GenerateUtilityStylesheet usecase", () => {
  it("should use RulesetsFactory to create all rulesets", async () => {
    const values = {};
    await basicUsecase.exec({ values });
    expect(RulesetsFactory.createAll).toBeCalledWith(values);
  });

  it("should contain valid result", async () => {
    const md = "only screen and (min-width: 768px)";
    const lg = "only screen and (min-width: 999px)";

    const result = await basicUsecase.exec({
      media: { md, lg },
      values: {},
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

  it("should contain valid result splitted by media", async () => {
    const md = "only screen and (min-width: 768px)";
    const lg = "only screen and (min-width: 999px)";

    const result = await basicUsecase.exec({
      media: { md, lg },
      splitByMedia: true,
      values: {},
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
