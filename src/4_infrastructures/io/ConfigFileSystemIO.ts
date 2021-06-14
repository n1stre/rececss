import path from "path";
import { IInputOutput } from "../../3_adapters/interfaces";
import RulesetsFactory from "../../3_adapters/RulesetsFactory";
import { IConfig, IFileSystem } from "../interfaces";
import Config from "../config";

export default class ConfigFileSystemIO implements IInputOutput {
  private config: IConfig.Instance;

  private constructor(configFileName: string, private fs: IFileSystem) {
    try {
      const configPath = path.resolve(process.cwd(), configFileName);
      const config = Config.create(require(configPath));
      this.config = config;
    } catch (err) {
      if (err.code === "MODULE_NOT_FOUND") throw Error("Config not found");
      else throw err;
    }
  }

  static create(configFileName: string, fs: IFileSystem) {
    return new ConfigFileSystemIO(configFileName, fs);
  }

  getAssetsGenerationInput() {
    return {
      rulesets: this.getRulesets(),
      media: this.config.getMedia(),
      splitByMedia: this.config.shouldSplitOutputByMedia(),
    };
  }

  getRulesets() {
    const factoryDTO = this.getRulesetsFactoryInput();
    const rulesetsFactory = RulesetsFactory.create(factoryDTO);
    return rulesetsFactory.createAll(this.config.getRulesetsValues());
  }

  getRulesetsFactoryInput() {
    return {
      classnamesMap: this.config.getClassnames(),
      variantsMap: this.config.getRulesetsVariants(),
    };
  }

  getStylesheetProps() {
    return {
      filename: this.config.getOutputFilename(),
      extension: this.config.getOutputExtension(),
    };
  }

  getRulesetProps() {
    return {
      prefixSep: this.config.getMediaSeparator(),
      suffixSep: this.config.getVariantSeparator(),
    };
  }

  getAssetsGenerationProps() {
    return {
      rulesetProps: this.getRulesetProps(),
      stylesheetProps: this.getStylesheetProps(),
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
