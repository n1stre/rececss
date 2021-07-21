import path from "path";
import fs from "fs";
import matter from "gray-matter";
import dirtree from "../utils/dirtree";
import markdownToHtml from "../utils/markdownToHtml";
import createMarkdownTable from "../utils/markdownTable";
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
  contents = insertValuesData(rulename, contents);
  contents = insertVariantsData(rulename, contents);
  return contents;
}

function insertValuesData(rulename, contents) {
  return insertBetween(
    contents,
    "<!-- defaults.values.start -->",
    "<!-- defaults.values.end -->",
    createValuesTable(rulename),
  );
}

function insertVariantsData(rulename, contents) {
  return insertBetween(
    contents,
    "<!-- defaults.variants.start -->",
    "<!-- defaults.variants.end -->",
    createVariantsTable(rulename),
  );
}

function createValuesTable(rulename) {
  const parseValue = (_, v) => (Array.isArray(v) ? JSON.stringify(v) : v);
  return createMarkdownTable(defaults.values[rulename], [
    { head: "Classname key", calcValue: (key) => key },
    { head: "CSS value", calcValue: parseValue },
  ]);
}

function createVariantsTable(rulename) {
  return createMarkdownTable(defaults.variants[rulename], [
    { head: "Classname key", calcValue: (key) => key },
    { head: "Variant selector", calcValue: (_, v) => v },
  ]);
}

function insertBetween(content, start, end, data) {
  if (content.indexOf(start) === -1 || content.indexOf(end) === -1)
    return content;

  const before = content.split(start)[0];
  const after = content.split(end)[1];
  return before + start + "\n" + data + "\n" + end + after;
}
