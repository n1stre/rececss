import ioMock from "../../../tests/__mocks__/io";
import cssProcessor from "../../../tests/__mocks__/cssProcessor";
import StylesheetsController from "./index";

describe("StylesheetsController", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should generate assets without errors", async () => {
    const controller = StylesheetsController.create(ioMock, cssProcessor);
    const res = await controller.generateAssets();

    expect.assertions(4);

    expect(ioMock.getAssetsGenerationInput).toBeCalledTimes(1);
    expect(ioMock.getAssetsGenerationProps).toBeCalledTimes(1);
    expect(cssProcessor.removeUnused).toBeCalledTimes(1);
    expect(ioMock.outputAssets).toBeCalledTimes(1);
  });
});
