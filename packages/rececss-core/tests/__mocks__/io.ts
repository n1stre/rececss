import { IInputOutput } from "../../src/3_adapters/interfaces";

const ioMock: IInputOutput = {
  getAssetsGenerationProps: jest.fn(() => ({})),
  getMediaQueries: jest.fn(() => ({})),
  outputAssets: jest.fn(),
  getRulesetsBuildProps: jest.fn(),
  getRulesetsValues: jest.fn(() => ({})),
  getRulesetsDefinitions: jest.fn(() => []),
};

export default ioMock;
