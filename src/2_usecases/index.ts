import Stylesheet from "../1_entities/Stylesheet";
import { IStylesheetAssetParams } from "./interfaces";

export default () => {
  return class StylesheetInteractor {
    constructor() {}
    generateSingleAsset(params: IStylesheetAssetParams) {}
    generateAssetsByMedia() {}
  };
};
