import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { defaultValues, defaultVariants } from "rececss";
import { isNumber, insertBetweenSubstrings, toPascalCase } from "../utils";
import dirtree from "../utils/dirtree";
import markdownToHtml from "../utils/markdownToHtml";
import {
  createMarkdownTable,
  createMarkdownCodeblock,
} from "../utils/markdown";

const CWD = process.cwd();
const DOCS_DIR = path.join(CWD, "../rececss-core/docs");
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
      const filledDoc = fillDefaultsIntoDocContents(orig.toString());
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

function toNavigationText(filepath) {
  const [head, ...tail] = filepath.replace(".md", "").split("-");
  const resultArr = isNumber(head) ? tail : [head, ...tail];
  return resultArr.map(toPascalCase).join(" ");
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

function fillDefaultsIntoDocContents(contents) {
  const matches = contents.matchAll(
    /<!-- <(?<key>values|variants).(?<rulename>(.*))> -->/g,
  );

  for (const match of matches) {
    const key = match.groups.key;
    const rulename = match.groups.rulename;
    contents = insertData(key, rulename, contents);
  }

  return contents;
}

function insertData(key, rulename, contents) {
  return insertBetweenSubstrings(
    contents,
    `<!-- <${key}.${rulename}> -->`,
    `<!-- </${key}.${rulename}> -->`,
    createDataTable(key, rulename),
  );
}

function createDataTable(key, rulename) {
  if (key === "values") return createValuesTable(rulename);
  if (key === "variants") return createVariantsTable(rulename);
}

function createValuesTable(rulename) {
  const heading = "#### Default values";
  const table = createMarkdownTable(defaultValues[rulename], [
    { head: "Classname key", calcValue: (key) => key },
    { head: "CSS value", calcValue: (_, v) => createMarkdownCodeblock(v) },
  ]);

  if (table) return heading + "\n" + table;
  return "";
}

function createVariantsTable(rulename) {
  const heading = "#### Default variants";
  const table = createMarkdownTable(defaultVariants[rulename], [
    { head: "Classname key", calcValue: (key) => key },
    { head: "Variant selector", calcValue: (_, v) => v },
  ]);

  if (table) return heading + "\n" + table;
  return "";
}
