import { IRulesetsFactory } from "../interfaces";
import GenerateStylesheetAssets from "./index";

const Usecase = GenerateStylesheetAssets.build({
  basename: "rececss",
  extension: "css",
});

const factory: IRulesetsFactory = {
  create: jest.fn(() => [
    { classname: "w_10", declarations: "width: 10px;" },
    { classname: "fz_16", declarations: "font-size: 16px;" },
  ]),
};
const basicUsecase = new Usecase(factory);

describe("GenerateUtilityStylesheet usecase", () => {
  it("should craete rulesets properly", async () => {
    const values = {
      size: {},
      margin: {},
      padding: {},
      offset: {},
      font: {},
      flex: {},
      border: {},
      color: {},
      zIndex: {},
    };

    await basicUsecase.exec({ values });
    expect(factory.create).toBeCalledWith(values);
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
    expect(basePart).toContain(`.w_10 { width: 10px; }\n`);
    expect(basePart).toContain(`.fz_16 { font-size: 16px; }\n`);

    const mdPart = contents.slice(mdIdx, lgIdx);
    expect(mdPart).toContain(`.md\:w_10 { width: 10px; }\n`);
    expect(mdPart).toContain(`.md\:fz_16 { font-size: 16px; }\n`);

    const lgPart = contents.slice(lgIdx, -1);
    expect(lgPart).toContain(`.lg\:w_10 { width: 10px; }\n`);
    expect(lgPart).toContain(`.lg\:fz_16 { font-size: 16px; }\n`);
  });
});
