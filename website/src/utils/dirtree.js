import fs from "fs";
import path from "path";

export default function dirtree(dirPath, options = {}) {
  const tree = {};
  const handlePath = options.handlePath || ((v) => v);
  const handleFile = options.handleFile || ((v) => v);
  const contents = fs.readdirSync(dirPath);

  contents.forEach((element) => {
    const fullpath = path.join(dirPath, element);
    const stat = fs.statSync(fullpath);
    const name = handlePath(element);
    if (stat.isDirectory()) tree[name] = dirtree(fullpath, options);
    else if (stat.isFile()) tree[name] = handleFile(fullpath);
  });

  return tree;
}
