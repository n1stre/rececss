import path from "path";
import { IInputOutput } from "../../3_adapters/interfaces";
import RulesetsFactory from "../../3_adapters/RulesetsFactory";
import { IConfig } from "../interfaces";
import Config from "../config";

type Config = IConfig.Instance;
type File = { path: string; contents: string };
type WriteFilesFn = (files: File[]) => Promise<void>;

export default class ConfigFileSystemIO implements IInputOutput {
  private constructor(
    private config: Config,
    private writeFiles: WriteFilesFn,
  ) {}

  static async create(configPath: string, writeFiles: WriteFilesFn) {
    try {
      const configDto = (await import(configPath)).default;
      const config = Config.create(configDto);
      return new ConfigFileSystemIO(config, writeFiles);
    } catch (err) {
      if (err.code === "MODULE_NOT_FOUND") throw Error("Config not found");
      else throw err;
    }
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
    return this.writeFiles(files);
  }
}
