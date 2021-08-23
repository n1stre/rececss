import remark from "remark";
import gfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import highlight from "rehype-highlight";
import { selectAll } from "hast-util-select";

const classNames = {
  pre: "bdrs_sm bgc_whitesmoke p_lg ovx_s",
  code: "bgc_whitesmoke px_xs bdrs_xs",
  table: "w_full bdcl_c",
  th: "ta_l",
  "th, td": "py_sm pr_sm",
  tr: "bdb_lightgray",
  "pre code": "bxsh_n bd_n px_n",
  h1: "fz_2xl mt_2xl",
  h2: "fz_xl mt_xl",
  h3: "fz_lg mt_lg",
  p: "",
  ".hljs-comment": "op_0.3",
  ".hljs-string": "fw_b",
};
// 90be6d
const styles = {
  // pre: "background: #6d6875;",
  // "pre code": "background-color: initial; color: #e5989b",
  ".hljs-keyword": "color: #277da1;",
  // ".hljs-name": "color: #f94144;",
  ".hljs-string": "color: #90be6d;",
};

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(gfm)
    .use(remark2rehype)
    .use(html)
    .use(highlight)
    .use(addClasses, classNames)
    .use(addStyles, styles)
    .process(markdown);

  return result.toString();
}

function addClasses(classNames) {
  const adders = Object.entries(classNames).map(([selector, className]) => {
    return (node) =>
      selectAll(selector, node).forEach(({ properties }) => {
        if (!properties.className) properties.className = [className];
        else properties.className = [...properties.className, className];
      });
  });

  return (node) => adders.forEach((a) => a(node));
}

function addStyles(styles) {
  const adders = Object.entries(styles).map(([selector, style]) => {
    return (node) =>
      selectAll(selector, node).forEach(({ properties }) => {
        if (!properties.style) properties.style = style;
        else properties.style = [...properties.style, style];
      });
  });

  return (node) => adders.forEach((a) => a(node));
}
