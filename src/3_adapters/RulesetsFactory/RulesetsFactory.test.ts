import { IRuleset } from "../../1_entities/Ruleset";
import RulesetsFactory from "./index";

const rulesetsFactory = RulesetsFactory.create();
const toString = (rs: IRuleset.Instance[]) => rs.map((rs) => rs.toString());

describe("RulesetsFactory", () => {
  it("should create size rulesets", () => {
    const width = { "20": "20px", "2em": "2em" };
    const height = { "50": "50px" };
    const res = rulesetsFactory.createSize({ width, height });

    expect(toString(res)).toEqual([
      ".w_a { width: auto; }",
      ".w_20 { width: 20px; }",
      ".miw_20 { min-width: 20px; }",
      ".maw_20 { max-width: 20px; }",
      ".w_2em { width: 2em; }",
      ".miw_2em { min-width: 2em; }",
      ".maw_2em { max-width: 2em; }",
      ".h_a { height: auto; }",
      ".h_50 { height: 50px; }",
      ".mih_50 { min-height: 50px; }",
      ".mah_50 { max-height: 50px; }",
    ]);
  });

  it("should build margin rulesets", () => {
    const shorthand = { "0a": "0 auto" };
    const edges = { "20": "20px", "2em": "2em" };
    const res = rulesetsFactory.createMargin({ shorthand, edges });

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".m_0a { margin: 0 auto; }",
      ".m_20 { margin: 20px; }",
      ".mt_20 { margin-top: 20px; }",
      ".mb_20 { margin-bottom: 20px; }",
      ".mver_20 { margin-top: 20px; margin-bottom: 20px; }",
      ".ml_20 { margin-left: 20px; }",
      ".mr_20 { margin-right: 20px; }",
      ".mhor_20 { margin-left: 20px; margin-right: 20px; }",
      ".m_2em { margin: 2em; }",
      ".mt_2em { margin-top: 2em; }",
      ".mb_2em { margin-bottom: 2em; }",
      ".mver_2em { margin-top: 2em; margin-bottom: 2em; }",
      ".ml_2em { margin-left: 2em; }",
      ".mr_2em { margin-right: 2em; }",
      ".mhor_2em { margin-left: 2em; margin-right: 2em; }",
    ]);
  });

  it("should build padding rulesets", () => {
    const shorthand = { btn: "10px 20px" };
    const edges = { "20": "20px", "2em": "2em" };
    const res = rulesetsFactory.createPadding({ shorthand, edges });

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".p_btn { padding: 10px 20px; }",
      ".p_20 { padding: 20px; }",
      ".pt_20 { padding-top: 20px; }",
      ".pb_20 { padding-bottom: 20px; }",
      ".pver_20 { padding-top: 20px; padding-bottom: 20px; }",
      ".pl_20 { padding-left: 20px; }",
      ".pr_20 { padding-right: 20px; }",
      ".phor_20 { padding-left: 20px; padding-right: 20px; }",
      ".p_2em { padding: 2em; }",
      ".pt_2em { padding-top: 2em; }",
      ".pb_2em { padding-bottom: 2em; }",
      ".pver_2em { padding-top: 2em; padding-bottom: 2em; }",
      ".pl_2em { padding-left: 2em; }",
      ".pr_2em { padding-right: 2em; }",
      ".phor_2em { padding-left: 2em; padding-right: 2em; }",
    ]);
  });

  it("should build offset rulesets", () => {
    const values = { "20": "20px", "2em": "2em" };
    const res = rulesetsFactory.createOffset(values);

    expect(toString(res)).toEqual([
      ".t_20 { top: 20px; }",
      ".b_20 { bottom: 20px; }",
      ".l_20 { left: 20px; }",
      ".r_20 { right: 20px; }",
      ".t_2em { top: 2em; }",
      ".b_2em { bottom: 2em; }",
      ".l_2em { left: 2em; }",
      ".r_2em { right: 2em; }",
    ]);
  });

  it("should build z index rulesets", () => {
    const values = { modal: "1000", toast: "200" };
    const res = rulesetsFactory.createZIndex(values);

    expect(toString(res)).toEqual([
      ".z_a { z-index: auto; }",
      ".z_modal { z-index: 1000; }",
      ".z_toast { z-index: 200; }",
    ]);
  });

  it("should build font rulesets", () => {
    const shorthand = { main: "italic bold .8em/1.2 Arial, sans-serif" };
    const family = { main: "Arial", second: "Helvetica, sans-serif" };
    const size = { "20": "20px", "2em": "2em" };
    const res = rulesetsFactory.createFont({ shorthand, size, family });

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".f_main { font: italic bold .8em/1.2 Arial, sans-serif; }",
      ".ff_main { font-family: Arial; }",
      ".ff_second { font-family: Helvetica, sans-serif; }",
      ".fz_20 { font-size: 20px; }",
      ".fz_2em { font-size: 2em; }",
    ]);
  });

  it("should build border rulesets", () => {
    const shorthand = { thin: "1px solid black", bold: "5px solid black" };
    const radius = { "50%": "50%", "5px": "5px" };

    const res = rulesetsFactory.createBorder({ shorthand, radius });

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".bd_thin { border: 1px solid black; }",
      ".bdt_thin { border-top: 1px solid black; }",
      ".bdb_thin { border-bottom: 1px solid black; }",
      ".bdl_thin { border-left: 1px solid black; }",
      ".bdr_thin { border-right: 1px solid black; }",
      ".bd_bold { border: 5px solid black; }",
      ".bdt_bold { border-top: 5px solid black; }",
      ".bdb_bold { border-bottom: 5px solid black; }",
      ".bdl_bold { border-left: 5px solid black; }",
      ".bdr_bold { border-right: 5px solid black; }",
      ".bdrs_50\\% { border-radius: 50%; }",
      ".bdrs_5px { border-radius: 5px; }",
    ]);
  });

  it("should build color rulesets", () => {
    const colors = { dark: "#000", light: "#fff", blue: "#0000ff" };
    const res = rulesetsFactory.createColor(colors);

    expect(toString(res)).toEqual([
      ".bgc_dark { background-color: #000; }",
      ".c_dark { color: #000; }",
      ".bgc_light { background-color: #fff; }",
      ".c_light { color: #fff; }",
      ".bgc_blue { background-color: #0000ff; }",
      ".c_blue { color: #0000ff; }",
    ]);
  });

  it("should build position rulesets", () => {
    const res = rulesetsFactory.createPosition();

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".pos_s { position: static; }",
      ".pos_r { position: relative; }",
      ".pos_a { position: absolute; }",
      ".pos_f { position: fixed; }",
    ]);
  });

  it("should build display rulesets", () => {
    const res = rulesetsFactory.createDisplay();

    expect(toString(res)).toEqual([
      ".d_n { display: none; }",
      ".d_i { display: inline; }",
      ".d_b { display: block; }",
      ".d_ib { display: inline-block; }",
      ".d_f { display: flex; }",
      ".d_if { display: inline-flex; }",
      ".d_t { display: table; }",
      ".d_g { display: grid; }",
      ".d_ig { display: inline-grid; }",
    ]);
  });

  it("should build flex rulesets", () => {
    const shorthand = { "00a": "0 0 auto", "1": "1" };
    const grow = { "1": "1", "2": "2", "4": "4" };
    const shrink = { "1": "1", "3": "3" };
    const basis = { "20%": "20%", "5rem": "5rem" };
    const order = { "-1": "-1", "3": "3" };
    const res = rulesetsFactory.createFlex({
      shorthand,
      grow,
      shrink,
      basis,
      order,
    });

    // prettier-ignore
    expect(toString(res)).toEqual(expect.arrayContaining([
      ".fx_00a { flex: 0 0 auto; }",
      ".fx_1 { flex: 1; }",
      ".fxg_1 { flex-grow: 1; }",
      ".fxg_2 { flex-grow: 2; }",
      ".fxg_4 { flex-grow: 4; }",
      ".fxs_1 { flex-shrink: 1; }",
      ".fxs_3 { flex-shrink: 3; }",
      ".fxb_a { flex-basis: auto; }",
      ".fxb_20\\% { flex-basis: 20%; }",
      ".fxb_5rem { flex-basis: 5rem; }",
      ".ord_u { order: unset; }",
      ".ord_-1 { order: -1; }",
      ".ord_3 { order: 3; }",
      ".fxd_c { flex-direction: column; }",
      ".fxd_cr { flex-direction: column-reverse; }",
      ".fxd_r { flex-direction: row; }",
      ".fxd_rr { flex-direction: row-reverse; }",
      ".fxw_n { flex-wrap: nowrap; }",
      ".fxw_w { flex-wrap: wrap; }",
      ".fxw_we { flex-wrap: wrap-reverse; }",
      ".fxw_u { flex-wrap: unset; }",
      ".jc_u { justify-content: unset; }",
      ".jc_c { justify-content: center; }",
      ".jc_fe { justify-content: flex-end; }",
      ".jc_fs { justify-content: flex-start; }",
      ".jc_sa { justify-content: space-around; }",
      ".jc_sb { justify-content: space-between; }",
      ".ac_c { align-content: center; }",
      ".ac_fe { align-content: flex-end; }",
      ".ac_fs { align-content: flex-start; }",
      ".ac_s { align-content: stretch; }",
      ".ac_sa { align-content: space-around; }",
      ".ac_sb { align-content: space-between; }",
      ".ai_b { align-items: baseline; }",
      ".ai_c { align-items: center; }",
      ".ai_fe { align-items: flex-end; }",
      ".ai_fs { align-items: flex-start; }",
      ".ai_s { align-items: stretch; }",
    ]));
  });

  it("should build flex grid rulesets", () => {
    const res = rulesetsFactory.createFlexGrid({
      cols: 12,
      gutter: "10px",
      gutters: { sm: "20px", lg: "40em" },
    });
    // prettier-ignore
    expect(toString(res)).toEqual([
      ".fxrow { display: flex; margin-left: -5px; margin-right: -5px; }",
      ".fxrow > * { flex: 1 0 auto; padding-left: 5px; padding-right: 5px; }",
      ".fxrow_sm { display: flex; margin-left: -10px; margin-right: -10px; }",
      ".fxrow_sm > * { flex: 1 0 auto; padding-left: 10px; padding-right: 10px; }",
      ".fxrow_lg { display: flex; margin-left: -20em; margin-right: -20em; }",
      ".fxrow_lg > * { flex: 1 0 auto; padding-left: 20em; padding-right: 20em; }",

      `.fxcol_1 { flex-basis: ${1 / 12 * 100}%; max-width: ${1 / 12 * 100}%; }`,
      `.fxcol_2 { flex-basis: ${2 / 12 * 100}%; max-width: ${2 / 12 * 100}%; }`,
      `.fxcol_3 { flex-basis: ${3 / 12 * 100}%; max-width: ${3 / 12 * 100}%; }`,
      `.fxcol_4 { flex-basis: ${4 / 12 * 100}%; max-width: ${4 / 12 * 100}%; }`,
      `.fxcol_5 { flex-basis: ${5 / 12 * 100}%; max-width: ${5 / 12 * 100}%; }`,
      `.fxcol_6 { flex-basis: ${6 / 12 * 100}%; max-width: ${6 / 12 * 100}%; }`,
      `.fxcol_7 { flex-basis: ${7 / 12 * 100}%; max-width: ${7 / 12 * 100}%; }`,
      `.fxcol_8 { flex-basis: ${8 / 12 * 100}%; max-width: ${8 / 12 * 100}%; }`,
      `.fxcol_9 { flex-basis: ${9 / 12 * 100}%; max-width: ${9 / 12 * 100}%; }`,
      `.fxcol_10 { flex-basis: ${10 / 12 * 100}%; max-width: ${10 / 12 * 100}%; }`,
      `.fxcol_11 { flex-basis: ${11 / 12 * 100}%; max-width: ${11 / 12 * 100}%; }`,
      `.fxcol_12 { flex-basis: ${12 / 12 * 100}%; max-width: ${12 / 12 * 100}%; }`,
    ])
  });

  it("should build text rulesets", () => {
    const res = rulesetsFactory.createText();

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".va_sup { vertical-align: super; }",
      ".va_t { vertical-align: top; }",
      ".va_tt { vertical-align: text-top; }",
      ".va_m { vertical-align: middle; }",
      ".va_bl { vertical-align: baseline; }",
      ".va_b { vertical-align: bottom; }",
      ".va_tb { vertical-align: text-bottom; }",
      ".va_sub { vertical-align: sub; }",
      ".ta_l { text-align: left; }",
      ".ta_c { text-align: center; }",
      ".ta_r { text-align: right; }",
      ".ta_j { text-align: justify; }",
      ".tal_a { text-align-last: auto; }",
      ".tal_l { text-align-last: left; }",
      ".tal_c { text-align-last: center; }",
      ".tal_r { text-align-last: right; }",
      ".td_n { text-decoration: none; }",
      ".td_u { text-decoration: underline; }",
      ".td_o { text-decoration: overline; }",
      ".td_l { text-decoration: line-through; }",
      ".te_n { text-emphasis: none; }",
      ".te_ac { text-emphasis: accent; }",
      ".te_dt { text-emphasis: dot; }",
      ".te_c { text-emphasis: circle; }",
      ".te_ds { text-emphasis: disc; }",
      ".te_b { text-emphasis: before; }",
      ".te_a { text-emphasis: after; }",
      ".tt_n { text-transform: none; }",
      ".tt_c { text-transform: capitalize; }",
      ".tt_u { text-transform: uppercase; }",
      ".tt_l { text-transform: lowercase; }",
      ".whs_n { white-space: normal; }",
      ".whs_p { white-space: pre; }",
      ".whs_nw { white-space: nowrap; }",
      ".whs_pw { white-space: pre-wrap; }",
      ".whs_pl { white-space: pre-line; }",
    ]);
  });

  it("should build overflow rulesets", () => {
    const res = rulesetsFactory.createOverflow();

    expect(toString(res)).toEqual([
      ".ov_v { overflow: visible; }",
      ".ov_h { overflow: hidden; }",
      ".ov_s { overflow: scroll; }",
      ".ov_a { overflow: auto; }",
      ".ovx_v { overflow-x: visible; }",
      ".ovx_h { overflow-x: hidden; }",
      ".ovx_s { overflow-x: scroll; }",
      ".ovx_a { overflow-x: auto; }",
      ".ovy_v { overflow-y: visible; }",
      ".ovy_h { overflow-y: hidden; }",
      ".ovy_s { overflow-y: scroll; }",
      ".ovy_a { overflow-y: auto; }",
    ]);
  });

  it("should build background rulesets", () => {
    const shorthand = { main: "border-box #eee" };
    const color = { pink: "pink", tom: "tomato" };
    const res = rulesetsFactory.createBackground({ shorthand, color });

    expect(toString(res)).toEqual([
      ".bg_main { background: border-box #eee; }",
      ".bgc_pink { background-color: pink; }",
      ".bgc_tom { background-color: tomato; }",
      ".bgp_b { background-position: bottom; }",
      ".bgp_t { background-position: top; }",
      ".bgp_l { background-position: left; }",
      ".bgp_r { background-position: right; }",
      ".bgp_c { background-position: center; }",
    ]);
  });

  it("should build box shadow rulesets", () => {
    const box = { main: "10px 5px 5px red", dark: "10px 5px 5px black" };
    const text = { red: "red 2px 5px" };
    const res = rulesetsFactory.createShadow({ box, text });

    expect(toString(res)).toEqual(
      expect.arrayContaining([
        ".bxsh_n { box-shadow: none; }",
        ".bxsh_main { box-shadow: 10px 5px 5px red; }",
        ".bxsh_dark { box-shadow: 10px 5px 5px black; }",
        ".tsh_n { text-shadow: none; }",
        ".tsh_red { text-shadow: red 2px 5px; }",
      ]),
    );
  });

  it("should build opacity rulesets", () => {
    const res = rulesetsFactory.createOpacity();

    expect(toString(res)).toEqual([
      ".op_0 { opacity: 0; }",
      ".op_01 { opacity: 0.1; }",
      ".op_02 { opacity: 0.2; }",
      ".op_03 { opacity: 0.3; }",
      ".op_04 { opacity: 0.4; }",
      ".op_05 { opacity: 0.5; }",
      ".op_06 { opacity: 0.6; }",
      ".op_07 { opacity: 0.7; }",
      ".op_08 { opacity: 0.8; }",
      ".op_09 { opacity: 0.9; }",
      ".op_1 { opacity: 1; }",
    ]);
  });

  it("should build visibility rulesets", () => {
    const res = rulesetsFactory.createVisibility();

    expect(toString(res)).toEqual([
      ".v_v { visibility: visible; }",
      ".v_h { visibility: hidden; }",
      ".v_c { visibility: collapse; }",
    ]);
  });
});
