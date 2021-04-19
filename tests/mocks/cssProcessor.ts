import { ICSSProcessor } from "../../src/3_adapters/interfaces";

const cssProcessor: ICSSProcessor = {
  removeUnused: jest.fn(async () => []),
};

export default cssProcessor;
