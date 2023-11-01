import path from "path";
import IO from "./ConfigFileSystemIO";

const configDto = require("../../../tests/__fixtures__/rececss.config");
const writeFiles = jest.fn(() => Promise.resolve());

describe("ConfigFileSystemIO", () => {
  it("should return media queries", () => {
    const io = IO.create(configDto, writeFiles);
    const mq = io.getMediaQueries();
    expect(mq).toEqual({
      md: "only screen and (min-width: 768px)",
      lg: "only screen and (min-width: 1024px)",
    });
  });

  it("should return assets generation props", () => {
    const io = IO.create(configDto, writeFiles);
    const input = io.getAssetsGenerationProps();
    expect(input).toEqual({
      splitByMedia: false,
      stylesheetProps: { filename: "rececss", extension: "css" },
      rulesetProps: { prefixSep: ":", suffixSep: ":" },
    });
  });

  it("should return ruleset definitions", () => {
    const io = IO.create(configDto, writeFiles);
    const defs = io.getRulesetsDefinitions();
    expect(defs).toEqual([
      { classname: "width-20px", declarations: "width: 20px;" },
    ]);
  });

  it("should return css processor input", () => {
    const io = IO.create(configDto, writeFiles);
    const input = io.getCSSProccesorInput();
    expect(input).toEqual({ content: ["./website/pages/**/*.js"] });
  });

  it("should output assets by calling fs.writeFiles with proper filepaths", () => {
    const io = IO.create(configDto, writeFiles);
    io.outputAssets([{ name: "some", contents: "contents" }]);
    expect(writeFiles).toHaveBeenCalledWith([
      { path: path.join("./website/styles", "some"), contents: "contents" },
    ]);
  });
});
