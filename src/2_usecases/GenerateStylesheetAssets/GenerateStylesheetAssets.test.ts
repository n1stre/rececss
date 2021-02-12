import RulesetsBuilderMock from "../../../tests/mocks/RulesetsBuilderMock";
import GenerateUtilityStylesheet from "./index";

const Usecase = GenerateUtilityStylesheet.build();
const builder = new RulesetsBuilderMock();
const basicUsecase = new Usecase(builder);

describe("GenerateUtilityStylesheet usecase", () => {
  it("should contain specified utility rulesets", async () => {
    const result = await basicUsecase.exec({
      rules: {
        size: { "5px": "5px", sm: "15px" },
        margin: { "5px": "5px", sm: "15px" },
        padding: { "5px": "5px", sm: "15px" },
        offset: { "5px": "5px", sm: "15px" },
        fontSize: { "5px": "5px", sm: "15px" },
        fontFamily: { prim: "Arial, sans-serif", sec: "Helvetica, serif" },
        zIndex: { popup: "900", toast: "100" },
      },
    });

    const cnt = result[0].contents;

    expect(cnt).toContain(".w_5px { width: 5px; }\n");
    expect(cnt).toContain(".h_5px { height: 5px; }\n");
    expect(cnt).toContain(".w_sm { width: 15px; }\n");
    expect(cnt).toContain(".h_sm { height: 15px; }\n");
    expect(cnt).toContain(".m_5px { margin: 5px; }\n");
    expect(cnt).toContain(".m_sm { margin: 15px; }\n");
    expect(cnt).toContain(".p_5px { padding: 5px; }\n");
    expect(cnt).toContain(".p_sm { padding: 15px; }\n");
    expect(cnt).toContain(".oft_5px { top: 5px; }\n");
    expect(cnt).toContain(".ofb_5px { bottom: 5px; }\n");
    expect(cnt).toContain(".oft_sm { top: 15px; }\n");
    expect(cnt).toContain(".ofb_sm { bottom: 15px; }\n");
    expect(cnt).toContain(".fz_5px { font-size: 5px; }\n");
    expect(cnt).toContain(".fz_sm { font-size: 15px; }\n");
    expect(cnt).toContain(".ff_prim { font-family: Arial, sans-serif; }\n");
    expect(cnt).toContain(".ff_sec { font-family: Helvetica, serif; }\n");
    expect(cnt).toContain(".z_popup { z-index: 900; }\n");
    expect(cnt).toContain(".z_toast { z-index: 100; }\n");
  });

  it("should contain specified media queries", async () => {
    const md = "only screen and (min-width: 768px)";
    const lg = "only screen and (min-width: 999px)";

    const result = await basicUsecase.exec({
      concat: true,
      media: { md, lg },
      rules: {
        margin: { "5px": "5px" },
        fontSize: { "5px": "5px" },
      },
    });

    const contents = result[0].contents;
    const mdIdx = contents.indexOf("@media only screen and (min-width: 768px)");
    const lgIdx = contents.indexOf("@media only screen and (min-width: 999px)");
    expect(mdIdx).not.toBe(-1);
    expect(lgIdx).not.toBe(-1);

    const basePart = contents.slice(0, mdIdx);
    expect(basePart).toContain(`.fz_5px { font-size: 5px; }\n`);
    expect(basePart).toContain(`.m_5px { margin: 5px; }\n`);

    const mdPart = contents.slice(mdIdx, lgIdx);
    expect(mdPart).toContain(`.md\:fz_5px { font-size: 5px; }\n`);
    expect(mdPart).toContain(`.md\:m_5px { margin: 5px; }\n`);

    const lgPart = contents.slice(lgIdx, -1);
    expect(lgPart).toContain(`.lg\:fz_5px { font-size: 5px; }\n`);
    expect(lgPart).toContain(`.lg\:m_5px { margin: 5px; }\n`);
  });
});
