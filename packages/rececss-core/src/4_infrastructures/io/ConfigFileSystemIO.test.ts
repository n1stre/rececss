import path from "path";
import IO from "./ConfigFileSystemIO";

const writeFiles = jest.fn(() => Promise.resolve());

const configDto = {
  output: {
    path: "./website/styles",
    filename: "rececss",
    extension: "css",
    splitByMedia: false,
    purge: { content: ["./website/pages/**/*.js"] },
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)",
  },
  sep: {
    media: ":",
    variant: ":",
  },
  values: {},
};

describe("ConfigFileSystemIO", () => {
  it("should return assets generation input", () => {
    const io = IO.create(configDto, writeFiles);
    const input = io.getAssetsGenerationInput();
    expect.assertions(3);
    expect(input.rulesets.length).not.toBe(0);
    expect(input.splitByMedia).toBe(false);
    expect(input.media).toEqual({
      md: "only screen and (min-width: 768px)",
      lg: "only screen and (min-width: 1024px)",
    });
  });

  it("should return assets generation props", () => {
    const io = IO.create(configDto, writeFiles);
    const input = io.getAssetsGenerationProps();
    expect(input).toEqual({
      stylesheetProps: { filename: "rececss", extension: "css" },
      rulesetProps: { prefixSep: ":", suffixSep: ":" },
    });
  });

  it("should return css processor input", () => {
    const io = IO.create(configDto, writeFiles);
    const input = io.getCSSProccesorInput();
    expect(input).toEqual({ content: ["./website/pages/**/*.js"] });
  });

  it("should output assets by calling fs.writeFiles with proper filepaths", async () => {
    const io = IO.create(configDto, writeFiles);
    io.outputAssets([{ name: "some", contents: "contents" }]);
    expect(writeFiles).toHaveBeenCalledWith([
      { path: path.join("./website/styles", "some"), contents: "contents" },
    ]);
  });
});
