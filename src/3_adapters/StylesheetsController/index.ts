import build from "./StylesheetsController";

const Controller = build();
const StylesheetsController = Object.freeze({
  build,
  new: (...p: ConstructorParameters<typeof Controller>) => new Controller(...p),
});

export default StylesheetsController;
