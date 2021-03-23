import path from "path";
import { promises as fs } from "fs";
import { IFileSystem } from "./interfaces";

export default class NodeFileSystem implements IFileSystem {
  async writeFiles(files: { path: string; contents: string }[]) {
    const failedFiles: Record<string, string> = {};
    const promises = files.map((f) => {
      return this.writeFileRecursive(f.path, f.contents).catch(
        (e) => (failedFiles[f.path] = e.message),
      );
    });

    await Promise.all(promises);

    if (Object.keys(failedFiles).length) {
      throw new Error(
        "Failed writing files: \n" + JSON.stringify(failedFiles, null, 2),
      );
    }
  }

  private async writeFileRecursive(filename: string, content: string) {
    const filePathParts = filename.split(path.sep);
    const filePathPartsSize = filePathParts.length;

    if (filePathPartsSize > 1) {
      const folderPathParts = filePathParts.slice(0, filePathPartsSize - 1);
      const folderPath = folderPathParts.join(path.sep);
      const folderExists = await this.folderExists(folderPath);
      if (!folderExists) await fs.mkdir(folderPath, { recursive: true });
    }

    return fs.writeFile(filename, content);
  }

  private async folderExists(path: string) {
    try {
      await fs.stat(path);
      return true;
    } catch {
      return false;
    }
  }
}
