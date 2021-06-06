import fs from "fs";
import CSSProcessor from "./CSSProcessor";

const CSS_PATH = "tests/__fixtures__/processing_css.css";
const RESULT_CSS_PATH = "tests/__fixtures__/processing_css.result.css";
const MARKUP_PATH = "tests/__fixtures__/processing_markup.html";

const expectedRes = fs.readFileSync(RESULT_CSS_PATH).toString();
const cssContent = fs.readFileSync(CSS_PATH).toString();

describe("CSSProcessor", () => {
  test("purge properly", async () => {
    const processor = CSSProcessor.create({ content: [MARKUP_PATH] });
    const res = await processor.removeUnused([{ contents: cssContent }]);
    expect(res?.[0]?.contents).toBe(expectedRes);
  });

  test("returns initial css if no markup content were provided", async () => {
    const processor = CSSProcessor.create({ content: [] });
    const res = await processor.removeUnused([{ contents: cssContent }]);
    expect(res?.[0]?.contents).toBe(cssContent);
  });
});
