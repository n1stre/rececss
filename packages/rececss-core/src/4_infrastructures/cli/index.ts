import { resolve } from "path";
import { cwd } from "process";
import StylesheetsController from "../../3_adapters/StylesheetsController";
import FileSystem from "../fs";
import IO from "../io";
import { CSSProcessor } from "../utils";

const configPaths = [
  resolve(cwd(), "rececss.config.js"),
  resolve(cwd(), "rececss.config.mjs"),
];

export default async function run() {
  const configPath = await FileSystem.findExistingFilePath(configPaths);
  if (!configPath) throw Error("Config path doesn't exists");

  const configDto = await loadConfigDto(configPath);
  const io = IO.create(configDto, FileSystem.writeFiles);
  const cssProcessor = CSSProcessor.create(io.getCSSProccesorInput());
  const controller = StylesheetsController.create(io, cssProcessor);
  controller.generateAssets();
}

async function loadConfigDto(configPath: string) {
  try {
    return (await import(configPath)).default;
  } catch (err) {
    throw Error("Failed to load config");
  }
}
