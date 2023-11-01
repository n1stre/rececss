import path from "path";
import { IInputOutput } from "../../3_adapters/interfaces";
import defaultConfig, { Config, IConfig } from "../config";

type File = { path: string; contents: string };
type WriteFilesFn = (files: File[]) => Promise<void>;

export default class ConfigFileSystemIO implements IInputOutput {
  private constructor(
    private config: Config,
    private writeFiles: WriteFilesFn,
  ) {}

  static create(configDto: IConfig.DTO, writeFiles: WriteFilesFn) {
    return new ConfigFileSystemIO(defaultConfig.create(configDto), writeFiles);
  }

  getMediaQueries() {
    return this.config.getMedia();
  }

  getRulesetsValues() {
    return this.config.getRulesetsValues();
  }

  getRulesetsBuildProps() {
    return {
      classnamesMap: this.config.getRulesetsClassnames(),
      declarationsMap: this.config.getRulesetsDeclarations(),
      variantsMap: this.config.getRulesetsVariants(),
    };
  }

  getAssetsGenerationProps() {
    return {
      splitByMedia: this.config.shouldSplitOutputByMedia(),
      rulesetProps: {
        prefixSep: this.config.getMediaSeparator(),
        suffixSep: this.config.getVariantSeparator(),
      },
      stylesheetProps: {
        filename: this.config.getOutputFilename(),
        extension: this.config.getOutputExtension(),
      },
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
