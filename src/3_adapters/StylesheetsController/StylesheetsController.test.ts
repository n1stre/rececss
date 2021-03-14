import { IInputOutput } from "../interfaces";
import StylesheetsController from "./index";

describe("StylesheetsController", () => {
  it("should generate assets without errors", async () => {
    const io: IInputOutput = {
      getStylesheetsAssetsInput: jest.fn(() => ({ values: {}, media: {} })),
      outputAssets: jest.fn(),
    };
    const controller = StylesheetsController.new(io);
    const res = await controller.generateAssets();

    expect(io.getStylesheetsAssetsInput).toBeCalledTimes(1);
    expect(io.outputAssets).toBeCalledTimes(1);
  });
});
