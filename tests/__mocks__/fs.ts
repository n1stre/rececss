import path from "path";

type FileStructure = Record<string, Record<string, string>>;
let fileStructure: FileStructure = {};

const fs: any = jest.createMockFromModule("fs");

fs.promises = {
  mkdir: jest.fn(async (path: string) => {
    if (path === "invalid/path") throw new Error("Invalid path!");
    fileStructure[path] = {};
  }),
  writeFile: jest.fn(async (file: string, content: string) => {
    const dir = path.dirname(file);
    const name = path.basename(file);
    const dirContents = fileStructure[dir];
    fileStructure[dir] = { ...dirContents, [name]: content };
  }),
  stat: jest.fn(async (path: string) => {
    if (!fileStructure[path]) {
      throw new Error("ENOENT: no such file or directory, " + path);
    }
  }),
};

fs.__setFileStructure = (structure: FileStructure) => {
  fileStructure = structure;
};

module.exports = fs;
