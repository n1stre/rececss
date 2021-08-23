export interface IFileSystem {
  writeFiles(files: { path: string; contents: string }[]): Promise<void>;
}
