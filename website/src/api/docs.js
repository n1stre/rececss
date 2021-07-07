import path from "path";
import fs from "fs";
import matter from "gray-matter";
import dirtree from "../utils/dirtree";
import { markdownToHtml } from "../utils/markdown";

const CWD = process.cwd();
const DOCS_DIR = path.join(CWD, "../docs");
const DOCS_PATH_ANCHOR = path.sep + "docs" + path.sep;

export function getDocsNavigation() {
  return dirtree(DOCS_DIR, {
    handlePath: toNavigationText,
    handleFile: toNavigationSlug,
  });
}

export function getDocsPaths() {
  const paths = new Set();
  const handleFile = (p) => paths.add(toNavigationSlug(p));
  dirtree(DOCS_DIR, { handleFile });
  return [...paths];
}

export function getDocBySlug(slugArr) {
  const doc = {};

  dirtree(DOCS_DIR, {
    handleFile: async (filepath) => {
      if (!docPathMatchesSlug(filepath, slugArr)) return;
      const fileContents = fs.readFileSync(filepath, "utf8");
      const { data, content } = matter(fileContents);
      doc.meta = data;
      doc.content = await markdownToHtml(content);
    },
  });

  return doc;
}

function toNavigationSlug(filepath) {
  const tail = filepath.split(DOCS_PATH_ANCHOR)[1];
  const docPath = DOCS_PATH_ANCHOR + (tail || "");
  return docPath.replace(".md", "").replace(/(\/\d+\-)/g, "/");
}

function toNavigationText(string) {
  const [head, ...tail] = string.replace(".md", "").split("-");
  const resultArr = isNumber(head) ? tail : [head, ...tail];
  return resultArr.map(toPascalCase).join(" ");
}

function toPascalCase(string) {
  const [head, ...tail] = string.split("");
  return [head.toUpperCase(), ...tail].join("");
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function docPathMatchesSlug(filepath, slugArr) {
  const docPath = filepath.split(DOCS_PATH_ANCHOR)[1] || "";
  const parts = docPath.split(path.sep);

  return slugArr.every((slug, idx) => {
    const docPathPart = parts[idx];
    const isLast = idx === slugArr.length - 1;
    const re = new RegExp(`(\\d+\\-)?${slug}` + (isLast ? "\\.md" : ""));
    return docPathPart.match(re);
  });
}
