import { IInputOutput } from "../interfaces";
import StylesheetsController from "./index";

const io: IInputOutput = {
  getRulesetPropsInput: jest.fn(() => ({})),
  getStylesheetPropsInput: jest.fn(() => ({})),
  getRulesetsBuilderInput: jest.fn(() => ({})),
  getStylesheetsAssetsInput: jest.fn(() => ({ values: {}, media: {} })),
  outputAssets: jest.fn(),
};

describe("StylesheetsController", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should generate assets without errors", async () => {
    const controller = StylesheetsController.new(io);
    const res = await controller.generateAssets();
    expect(io.getStylesheetsAssetsInput).toBeCalledTimes(1);
    expect(io.outputAssets).toBeCalledTimes(1);
  });
});
