import NodeFileSystem from "./NodeFS";

const FileSystem = Object.freeze({
  new: (...p: ConstructorParameters<typeof NodeFileSystem>) =>
    new NodeFileSystem(...p),
});

export default FileSystem;
