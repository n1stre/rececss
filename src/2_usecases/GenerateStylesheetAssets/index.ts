import * as errors from "./GenerateStylesheetAssets.errors";
import buildGenerateStylesheetAssets from "./GenerateStylesheetAssets";

const UseCase = buildGenerateStylesheetAssets({
  basename: "rececss",
  extension: "css",
});

const GenerateStylesheetAssets = Object.freeze({
  build: buildGenerateStylesheetAssets,
  new: (...p: ConstructorParameters<typeof UseCase>) => new UseCase(...p),
});

export default GenerateStylesheetAssets;
