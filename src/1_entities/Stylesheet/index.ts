import { IStylesheetDTO, IStylesheet } from "./Stylesheet.interface";
import buildStylesheet from "./Stylesheet";

const Stylesheet = buildStylesheet();

export default Object.freeze({
  prebuild: buildStylesheet,
  make: (dto: Partial<IStylesheetDTO>): IStylesheet => new Stylesheet(dto),
});
