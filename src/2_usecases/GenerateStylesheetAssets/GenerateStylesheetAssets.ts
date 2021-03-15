import Stylesheet from "../../1_entities/Stylesheet";
import { IStylesheet } from "../../1_entities/Stylesheet/Stylesheet.interface";
import { IRulesetsFactory, TConfigurableRulesetsValues } from "../interfaces";
import * as errors from "./GenerateStylesheetAssets.errors";

export default (props: { basename: string; extension: string }) => {
  return class GenerateStylesheetAssetsUseCase {
    constructor(private rulesetsFactory: IRulesetsFactory) {}

    public exec = async (dto: {
      values: TConfigurableRulesetsValues;
      media?: Record<string, string>;
      splitByMedia?: boolean;
    }) => {
      const stylesheets: IStylesheet[] = [];
      const rulesets = this.rulesetsFactory.create(dto.values);
      stylesheets.push(Stylesheet.make({ rulesets }));

      if (dto.media) {
        Object.entries(dto.media).forEach(([name, query]) => {
          const media = { name, query };
          const stylesheet = Stylesheet.make({ rulesets, media });
          stylesheets.push(stylesheet);
        });
      }

      if (dto.splitByMedia) {
        return stylesheets.map((s) => {
          const name = this.generateStylesheetName(s);
          const contents = s.getContents();
          return { name, contents };
        });
      }

      const name = this.generateStylesheetName();
      const contents = stylesheets.map((s) => s.getContents()).join("\n");
      return [{ name, contents }];
    };

    private generateStylesheetName(stylesheet?: IStylesheet) {
      const mediaName = stylesheet?.getMedia()?.name;
      const nameParts = [props.basename, mediaName, props.extension];
      return nameParts.filter(Boolean).join(".");
    }
  };
};
