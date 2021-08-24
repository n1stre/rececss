import path from "path";
import IO from "./ConfigFileSystemIO";

const fakeFS = { writeFiles: jest.fn(() => Promise.resolve()) };
const realConfigPath = "./tests/__fixtures__/rececss.config.js";
const fakeConfigPath = "fake/path";

describe("ConfigFileSystemIO", () => {
  it("should throw an exception if config is missing", () => {
    const init = () => IO.create(fakeConfigPath, fakeFS);
    expect(init).toThrow();
  });

  it("should return assets generation input", () => {
    const io = IO.create(realConfigPath, fakeFS);
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
    const io = IO.create(realConfigPath, fakeFS);
    const input = io.getAssetsGenerationProps();
    expect(input).toEqual({
      stylesheetProps: { filename: "rececss", extension: "css" },
      rulesetProps: { prefixSep: ":", suffixSep: ":" },
    });
  });

  it("should return css processor input", () => {
    const io = IO.create(realConfigPath, fakeFS);
    const input = io.getCSSProccesorInput();
    expect(input).toEqual({ content: ["./website/pages/**/*.js"] });
  });

  it("should output assets by calling fs.writeFiles with proper filepaths", () => {
    const io = IO.create(realConfigPath, fakeFS);
    io.outputAssets([{ name: "some", contents: "contents" }]);
    expect(fakeFS.writeFiles).toHaveBeenCalledWith([
      { path: path.join("./website/styles", "some"), contents: "contents" },
    ]);
  });
});
