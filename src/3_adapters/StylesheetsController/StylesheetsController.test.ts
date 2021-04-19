import ioMock from "../../../tests/mocks/io";
import cssProcessor from "../../../tests/mocks/cssProcessor";
import StylesheetsController from "./index";

describe("StylesheetsController", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should generate assets without errors", async () => {
    const controller = StylesheetsController.create(ioMock, cssProcessor);
    const res = await controller.generateAssets();

    expect.assertions(3);

    expect(ioMock.getStylesheetsAssetsInput).toBeCalledTimes(1);
    expect(cssProcessor.removeUnused).toBeCalledTimes(1);
    expect(ioMock.outputAssets).toBeCalledTimes(1);
  });
});
