import { IInputOutput } from "../../src/3_adapters/interfaces";

const ioMock: IInputOutput = {
  getStylesheetPropsInput: jest.fn(() => ({})),
  getRulesetsBuilderInput: jest.fn(() => ({})),
  getStylesheetsAssetsInput: jest.fn(() => ({ values: {}, media: {} })),
  outputAssets: jest.fn(),
};

export default ioMock;
