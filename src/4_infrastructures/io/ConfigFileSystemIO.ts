import path from "path";
import { IInputOutput } from "../../3_adapters/interfaces";
import { IConfig, IFileSystem } from "../interfaces";
import Config from "../config";

export default class ConfigFileSystemIO implements IInputOutput {
  private config: IConfig.Instance;

  constructor(configFileName: string, private fs: IFileSystem) {
    try {
      const configPath = path.resolve(process.cwd(), configFileName);
      const config = Config.create(require(configPath));
      this.config = config;
    } catch (err) {
      throw Error("Config does not exist");
    }
  }

  getRulesetsBuilderInput() {
    return {
      rulesetProps: this.getRulesetPropsInput(),
      classnames: this.config.getClassnames(),
      classnameStates: {},
    };
  }

  getStylesheetsAssetsInput() {
    return {
      values: this.config.getRulesetsValues(),
      media: this.config.getMedia(),
      splitByMedia: this.config.shouldSplitOutputByMedia(),
    };
  }

  getRulesetPropsInput() {
    return {
      prefixSep: this.config.getMediaSeparator(),
      suffixSep: this.config.getVariantSeparator(),
    };
  }

  getStylesheetPropsInput() {
    return {
      filename: this.config.getOutputFilename(),
      extension: this.config.getOutputExtension(),
    };
  }

  getCSSProccesorInput() {
    return {
      content: this.config.getPurgeContent(),
    };
  }

  outputAssets(assets: { name: string; contents: string }[]) {
    const files = assets.map((asset) => ({
      path: path.join(this.config.getOutputPath(), asset.name),
      contents: asset.contents,
    }));
    return this.fs.writeFiles(files);
  }
}
