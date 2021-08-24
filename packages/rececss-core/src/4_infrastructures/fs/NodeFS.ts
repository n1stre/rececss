import path from "path";
import { promises as fs } from "fs";
import { IFileSystem } from "./interfaces";

type File = {
  path: string;
  contents: string;
};

export default class NodeFileSystem implements IFileSystem {
  static create() {
    return new NodeFileSystem();
  }

  async writeFiles(files: File[]) {
    const failedFiles: Record<string, string> = {};
    const promises = files.map((f) => {
      const handleError = (e: Error) => (failedFiles[f.path] = e.message);
      const promise = this.writeFile(f.path, f.contents).catch(handleError);
      return promise;
    });

    await Promise.all(promises);

    if (Object.keys(failedFiles).length) {
      throw new Error(
        "Failed writing files: \n" + JSON.stringify(failedFiles, null, 2),
      );
    }
  }

  private async writeFile(file: string, content: string) {
    const dir = path.dirname(file);
    const dirExists = await this.exists(dir);
    if (!dirExists) await fs.mkdir(dir, { recursive: true });
    return fs.writeFile(file, content);
  }

  private async exists(path: string) {
    try {
      await fs.stat(path);
      return true;
    } catch {
      return false;
    }
  }
}
