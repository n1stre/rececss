import ConfigFileSystemIO from "./ConfigFileSystemIO";

const fakeFS = { writeFiles: jest.fn(() => Promise.resolve()) };
const realConfigPath = "./tests/fixtures/rececss.config.js";
const fakeConfigPath = "fake/path";

describe("ConfigFileSystemIO", () => {
  it("should return assets input if config exists", () => {
    const config = new ConfigFileSystemIO(realConfigPath, fakeFS);
    const input = config.getStylesheetsAssetsInput();
    expect(input).toBeDefined();
  });

  it("should throw an exception if config is missing", () => {
    const init = () => new ConfigFileSystemIO(fakeConfigPath, fakeFS);
    expect(init).toThrow();
  });
});
