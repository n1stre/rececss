import path from "path";
import IO from "./ConfigFileSystemIO";
const writeFiles = jest.fn(() => Promise.resolve());
const realConfigPath = "./tests/__fixtures__/rececss.config.js";
const fakeConfigPath = "fake/path";

describe("ConfigFileSystemIO", () => {
  it("should throw an exception if config is missing", async () => {
    await expect(IO.create(fakeConfigPath, writeFiles)).rejects.toThrow(
      "Config not found",
    );
  });

  it("should return assets generation input", async () => {
    const io = await IO.create(realConfigPath, writeFiles);
    const input = io.getAssetsGenerationInput();
    expect.assertions(3);
    expect(input.rulesets.length).not.toBe(0);
    expect(input.splitByMedia).toBe(false);
    expect(input.media).toEqual({
      md: "only screen and (min-width: 768px)",
      lg: "only screen and (min-width: 1024px)",
    });
  });

  it("should return assets generation props", async () => {
    const io = await IO.create(realConfigPath, writeFiles);
    const input = io.getAssetsGenerationProps();
    expect(input).toEqual({
      stylesheetProps: { filename: "rececss", extension: "css" },
      rulesetProps: { prefixSep: ":", suffixSep: ":" },
    });
  });

  it("should return css processor input", async () => {
    const io = await IO.create(realConfigPath, writeFiles);
    const input = io.getCSSProccesorInput();
    expect(input).toEqual({ content: ["./website/pages/**/*.js"] });
  });

  it("should output assets by calling fs.writeFiles with proper filepaths", async () => {
    const io = await IO.create(realConfigPath, writeFiles);
    io.outputAssets([{ name: "some", contents: "contents" }]);
    expect(writeFiles).toHaveBeenCalledWith([
      { path: path.join("./website/styles", "some"), contents: "contents" },
    ]);
  });
});
