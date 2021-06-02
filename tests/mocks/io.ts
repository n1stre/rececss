import { IInputOutput } from "../../src/3_adapters/interfaces";

const ioMock: IInputOutput = {
  getAssetsGenerationProps: jest.fn(() => ({})),
  getAssetsGenerationInput: jest.fn(() => ({ rulesets: [], media: {} })),
  outputAssets: jest.fn(),
};

export default ioMock;
