import StylesheetsController from "../../3_adapters/StylesheetsController";
import FileSystem from "../fs";
import IO from "../io";

export default async function run() {
  const fs = FileSystem.new();
  const io = IO.new("rececss.config.js", fs);
  const controller = StylesheetsController.create(io);
  controller.generateAssets();
}
