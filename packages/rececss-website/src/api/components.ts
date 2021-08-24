import { promises as fs } from "fs";
import path from "path";
import markdownToHtml from "../utils/markdownToHtml";

const componentsPath = path.join(process.cwd(), "./src/examples");

export async function getData(component) {
  const code = await getCode(component);
  return { code };
}

export async function getCode(component) {
  const react = await getReactCode(component);
  const html = await getHtmlCode(component);
  return { react, html };
}

export async function getReactCode(component) {
  const sourcePath = path.join(componentsPath, component, "react", "index.js");
  const source = await getFileContents(sourcePath);
  const usagePath = path.join(componentsPath, component, "react", "usage.js");
  const usageContents = await getFileContents(usagePath);
  const usage = getReactComponentJsx(usageContents);
  return {
    source,
    sourceHighlighted: await highlightCode(source, "jsx"),
    usage,
    usageHighlighted: await highlightCode(usage, "jsx"),
  };
}

export async function getHtmlCode(component) {
  const sourcePath = path.join(componentsPath, component, "html", "index.html");
  const source = await getFileContents(sourcePath);
  return {
    source,
    sourceHighlighted: await highlightCode(source, "html"),
  };
}

export async function getFileContents(filepath) {
  const code = (await fs.readFile(filepath)).toString().trim();
  return code;
}

export async function highlightCode(code, lang = "jsx") {
  const higlighted = await markdownToHtml(`\`\`\`${lang}\n${code}\n\`\`\``);
  return higlighted;
}

function getReactComponentJsx(contents) {
  const match = contents.match(
    /([\s\S]*)return \([\n]*(?<jsx>([\s\S]*))[\n]*\)([\s\S]*)/,
  );
  const rawJsx = match?.groups?.jsx;
  const extraSpaces = rawJsx.split("<")[0];
  const jsx = rawJsx.replace(new RegExp(extraSpaces, "g"), "");
  return jsx.trim();
}
