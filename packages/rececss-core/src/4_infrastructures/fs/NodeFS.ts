import path from "path";
import { promises as fs } from "fs";

type File = { path: string; contents: string };

export const pathExists = async (path: string) => {
  try {
    await fs.stat(path);
    return true;
  } catch {
    return false;
  }
};

export const writeFile = async (file: string, content: string) => {
  const dir = path.dirname(file);
  const dirExists = await pathExists(dir);
  if (!dirExists) await fs.mkdir(dir, { recursive: true });
  return fs.writeFile(file, content);
};

export const writeFiles = async (files: File[]) => {
  const failedFiles: Record<string, string> = {};
  const promises = files.map((f) => {
    const handleError = (e: Error) => (failedFiles[f.path] = e.message);
    return writeFile(f.path, f.contents).catch(handleError);
  });

  await Promise.all(promises);

  if (Object.keys(failedFiles).length) {
    throw new Error(
      "Failed writing files: \n" + JSON.stringify(failedFiles, null, 2),
    );
  }
};

export const findExistingFilePath = async (
  paths: string[],
): Promise<string | null> => {
  for (let i = 0, l = paths.length; i < l; i++) {
    const path = paths[i];
    const exists = await pathExists(path);
    if (exists) return path;
  }
  return null;
};
