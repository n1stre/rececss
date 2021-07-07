import remark from "remark";
import gfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import highlight from "rehype-highlight";
import { selectAll } from "hast-util-select";

const classNames = {
  pre: "bdrs_sm bgc_whitesmoke p_lg ovx_s",
  code: "bgc_whitesmoke px_xs bdrs_xs",
  "pre code": "bxsh_n bd_n px_n",
  h1: "fz_2xl mt_2xl",
  h2: "fz_xl mt_xl",
  h3: "fz_lg mt_lg",
  p: "",
  ".hljs-comment": "op_0.3",
};

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(gfm)
    .use(remark2rehype)
    .use(html)
    .use(highlight)
    .use(addClasses, classNames)
    .process(markdown);

  return result.toString();
}

function addClasses(classNames) {
  const adders = Object.entries(classNames).map(([selector, className]) => {
    return (node) =>
      selectAll(selector, node).forEach(({ properties }) => {
        if (!properties.className) properties.className = className;
        else properties.className = [...properties.className, className];
      });
  });

  return (node) => adders.forEach((a) => a(node));
}
