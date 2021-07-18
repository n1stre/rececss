import path from "path";
import fs from "fs";
import matter from "gray-matter";
import dirtree from "../utils/dirtree";
import { markdownToHtml } from "../utils/markdown";
import * as defaults from "../../../src/4_infrastructures/config/Config.defaults";

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
  return Array.from(paths);
}

export function getDocBySlug(slugArr) {
  const doc: Record<string, any> = {};

  dirtree(DOCS_DIR, {
    handleFile: async (filepath) => {
      if (!docPathMatchesSlug(filepath, slugArr)) return;
      const { data, orig } = matter.read(filepath);
      const ruleName = data.name;
      const filledDoc = fillDefaultsIntoDocContents(ruleName, orig.toString());
      const { content } = matter(filledDoc);

      fs.writeFileSync(filepath, filledDoc);

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
    const re = new RegExp(`^(\\d+\\-)?${slug}` + (isLast ? "\\.md" : ""));
    return docPathPart.match(re);
  });
}

function fillDefaultsIntoDocContents(rulename, contents) {
  contents = insertBetween(
    commentString("defaults.values.start"),
    commentString("defaults.values.end"),
    contents,
    defaults.values[rulename],
  );

  contents = insertBetween(
    commentString("defaults.variants.start"),
    commentString("defaults.variants.end"),
    contents,
    defaults.variants[rulename],
  );

  return contents;
}

function commentString(string) {
  return `<!-- ${string} -->`;
}

function insertBetween(start, end, content, data) {
  if (content.indexOf(start) === -1 || content.indexOf(end) === -1)
    return content;

  const dataString = JSON.stringify(data, null, 4);
  const before = content.split(start)[0];
  const after = content.split(end)[1];
  return before + start + "\n```\n" + dataString + "\n```\n" + end + after;
}
