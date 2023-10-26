import StylesheetsController from "../../3_adapters/StylesheetsController";
import FileSystem from "../fs";
import IO from "../io";
import { CSSProcessor } from "../utils";

const configPaths = ["rececss.config.js", "rececss.config.mjs"];

export default async function run() {
  const configPath = await FileSystem.findExistingFilePath(configPaths);
  if (!configPath) throw Error("Config path doesn't exists");

  const io = await IO.create(configPath, FileSystem.writeFiles);
  const cssProcessor = CSSProcessor.create(io.getCSSProccesorInput());
  const controller = StylesheetsController.create(io, cssProcessor);
  controller.generateAssets();
}
