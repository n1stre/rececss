import fs from "fs";
import CSSProcessor from "./CSSProcessor";

const CSS_PATH = "tests/fixtures/processing_css.css";
const RESULT_CSS_PATH = "tests/fixtures/processing_css.result.css";
const MARKUP_PATH = "tests/fixtures/processing_markup.html";

describe("CSSProcessor", () => {
  test("purge properly", async () => {
    const expectedRes = fs.readFileSync(RESULT_CSS_PATH).toString();
    const cssContent = fs.readFileSync(CSS_PATH).toString();
    const processor = CSSProcessor.create({ content: [MARKUP_PATH] });
    const res = await processor.removeUnused([{ contents: cssContent }]);

    expect(res?.[0]?.contents).toBe(expectedRes);
  });
});
