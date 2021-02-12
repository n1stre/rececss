import Stylesheet from "../../1_entities/Stylesheet";
import { IStylesheet } from "../../1_entities/Stylesheet/Stylesheet.interface";
import { IAsset, IRulesetsBuilder, IRulesetsValuesDTO } from "../interfaces";
import * as errors from "./GenerateStylesheetAssets.errors";

export default () => {
  return class GenerateStylesheetAssetsUseCase {
    constructor(private rulesetsBuilder: IRulesetsBuilder) {}

    public exec = async (
      dto: Partial<{
        name: string;
        rules: Partial<IRulesetsValuesDTO>;
        media: Record<string, string>;
        concat: boolean;
      }>,
    ) => {
      const assets: IAsset[] = [];
      const stylesheets: IStylesheet[] = [];
      const rulesets = this.rulesetsBuilder.addComputed(dto.rules).getResult();

      stylesheets.push(Stylesheet.make({ rulesets }));

      if (dto.media) {
        Object.entries(dto.media).forEach((entry) => {
          const media = { name: entry[0], query: entry[1] };
          const stylesheet = Stylesheet.make({ rulesets, media });
          stylesheets.push(stylesheet);
        });
      }

      if (dto.concat) {
        const name = dto.name + ".css";
        const contents = stylesheets.map((s) => s.getContents()).join("\n");
        assets.push({ name, contents });
      } else {
        stylesheets.forEach((s) => {
          const media = s.getMedia();
          const name = `${dto.name}${media ? `.${media.name}` : ""}.css`;
          const contents = s.getContents();
          assets.push({ name, contents });
        });
      }

      return assets;
    };
  };
};
