import path from "path";
import { IInputOutput } from "../../3_adapters/interfaces";
import Config from "../config";
import { IConfig, IFileSystem } from "../interfaces";

export default class ConfigFileSystemIO implements IInputOutput {
  private config: IConfig;

  constructor(private configFileName: string, private fs: IFileSystem) {
    try {
      this.config = Config.new(require(this.configPath));
    } catch (err) {
      throw Error("Config does not exist");
    }
  }

  getStylesheetsAssetsInput() {
    return {
      values: this.config.getRulesetsValues(),
      media: this.config.getMedia(),
      splitByMedia: this.config.shouldSplitOutputByMedia(),
    };
  }

  outputAssets(assets: { name: string; contents: string }[]) {
    const files = assets.map((asset) => ({
      path: path.join(this.config.getOutputPath(), asset.name),
      contents: asset.contents,
    }));
    return this.fs.writeFiles(files);
  }

  private get configPath() {
    return path.resolve(process.cwd(), this.configFileName);
  }
}
