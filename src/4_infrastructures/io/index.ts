import ConfigFileSystemIO from "./ConfigFileSystemIO";

const IO = Object.freeze({
  new: (...p: ConstructorParameters<typeof ConfigFileSystemIO>) =>
    new ConfigFileSystemIO(...p),
});

export default IO;
