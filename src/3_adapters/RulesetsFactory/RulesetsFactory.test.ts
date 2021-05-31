import { IRuleset } from "../../1_entities/Ruleset";
import RulesetsFactory from "./index";

const toString = (rs: IRuleset.Instance[]) => rs.map((rs) => rs.toString());

describe("RulesetsFactory", () => {
  it("should build size rulesets", () => {
    const width = { "20": "20px", "2em": "2em" };
    const height = { "50": "50px" };
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      width,
      height,
      minWidth: width,
      maxWidth: width,
      minHeight: height,
      maxHeight: height,
    });

    expect(toString(res)).toEqual([
      ".w_20 { width: 20px; }",
      ".w_2em { width: 2em; }",
      ".h_50 { height: 50px; }",
      ".miw_20 { min-width: 20px; }",
      ".miw_2em { min-width: 2em; }",
      ".maw_20 { max-width: 20px; }",
      ".maw_2em { max-width: 2em; }",
      ".mih_50 { min-height: 50px; }",
      ".mah_50 { max-height: 50px; }",
    ]);
  });

  it("should build margin rulesets", () => {
    const margin = { "0a": "0 auto", "20": "20px", "2em": "2em" };
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({ margin });

    expect(toString(res)).toEqual([
      ".m_20 { margin: 20px; }",
      ".m_0a { margin: 0 auto; }",
      ".m_2em { margin: 2em; }",
      ".mt_20 { margin-top: 20px; }",
      ".mb_20 { margin-bottom: 20px; }",
      ".my_20 { margin-top: 20px; margin-bottom: 20px; }",
      ".ml_20 { margin-left: 20px; }",
      ".mr_20 { margin-right: 20px; }",
      ".mx_20 { margin-left: 20px; margin-right: 20px; }",
      ".mt_2em { margin-top: 2em; }",
      ".mb_2em { margin-bottom: 2em; }",
      ".my_2em { margin-top: 2em; margin-bottom: 2em; }",
      ".ml_2em { margin-left: 2em; }",
      ".mr_2em { margin-right: 2em; }",
      ".mx_2em { margin-left: 2em; margin-right: 2em; }",
    ]);
  });

  it("should build padding rulesets", () => {
    const padding = { btn: "10px 20px", "20": "20px", "2em": "2em" };
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({ padding });

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".p_20 { padding: 20px; }",
      ".p_btn { padding: 10px 20px; }",
      ".p_2em { padding: 2em; }",
      ".pt_20 { padding-top: 20px; }",
      ".pb_20 { padding-bottom: 20px; }",
      ".py_20 { padding-top: 20px; padding-bottom: 20px; }",
      ".pl_20 { padding-left: 20px; }",
      ".pr_20 { padding-right: 20px; }",
      ".px_20 { padding-left: 20px; padding-right: 20px; }",
      ".pt_2em { padding-top: 2em; }",
      ".pb_2em { padding-bottom: 2em; }",
      ".py_2em { padding-top: 2em; padding-bottom: 2em; }",
      ".pl_2em { padding-left: 2em; }",
      ".pr_2em { padding-right: 2em; }",
      ".px_2em { padding-left: 2em; padding-right: 2em; }",
    ]);
  });

  it("should build inset rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      inset: { "20": "20px", "2em": "2em" },
      top: { sm: "5px" },
      bottom: { md: "15px" },
      left: { lg: "30px" },
      right: { xl: "50px" },
    });

    expect(toString(res)).toEqual([
      ".ins_20 { inset: 20px; }",
      ".ins_2em { inset: 2em; }",
      ".t_20 { top: 20px; }",
      ".b_20 { bottom: 20px; }",
      ".l_20 { left: 20px; }",
      ".r_20 { right: 20px; }",
      ".t_2em { top: 2em; }",
      ".b_2em { bottom: 2em; }",
      ".l_2em { left: 2em; }",
      ".r_2em { right: 2em; }",
      ".t_sm { top: 5px; }",
      ".b_md { bottom: 15px; }",
      ".l_lg { left: 30px; }",
      ".r_xl { right: 50px; }",
    ]);
  });

  it("should build z index rulesets", () => {
    const zIndex = { modal: "1000", toast: "200" };
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({ zIndex });

    expect(toString(res)).toEqual([
      ".z_modal { z-index: 1000; }",
      ".z_toast { z-index: 200; }",
    ]);
  });

  it("should build font rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      font: { main: "italic bold .8em/1.2 Arial, sans-serif" },
      fontSize: { "20": "20px", "2em": "2em", md: "16px/24px" },
      fontFamily: { main: "Arial", second: "Helvetica, sans-serif" },
    });

    expect(toString(res)).toEqual([
      ".f_main { font: italic bold .8em/1.2 Arial, sans-serif; }",
      ".fz_20 { font-size: 20px; }",
      ".fz_2em { font-size: 2em; }",
      ".fz_md { font-size: 16px; line-height: 24px; }",
      ".ff_main { font-family: Arial; }",
      ".ff_second { font-family: Helvetica, sans-serif; }",
    ]);
  });

  it("should build border rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      border: { thin: "1px solid black", bold: "5px solid black" },
      borderRadius: { "50%": "50%", "5px": "5px" },
      borderWidth: { sm: "1px" },
      borderStyle: { s: "solid" },
      borderColor: { red: "red" },
    });

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
      ".bdtlrs_50\\% { border-top-left-radius: 50%; }",
      ".bdtrrs_50\\% { border-top-right-radius: 50%; }",
      ".bdblrs_50\\% { border-bottom-left-radius: 50%; }",
      ".bdbrrs_50\\% { border-bottom-right-radius: 50%; }",

      ".bdrs_5px { border-radius: 5px; }",
      ".bdtlrs_5px { border-top-left-radius: 5px; }",
      ".bdtrrs_5px { border-top-right-radius: 5px; }",
      ".bdblrs_5px { border-bottom-left-radius: 5px; }",
      ".bdbrrs_5px { border-bottom-right-radius: 5px; }",

      ".bdw_sm { border-width: 1px; }",
      ".bdtw_sm { border-top-width: 1px; }",
      ".bdbw_sm { border-bottom-width: 1px; }",
      ".bdlw_sm { border-left-width: 1px; }",
      ".bdrw_sm { border-right-width: 1px; }",

      ".bdst_s { border-style: solid; }",
      ".bdtst_s { border-top-style: solid; }",
      ".bdbst_s { border-bottom-style: solid; }",
      ".bdlst_s { border-left-style: solid; }",
      ".bdrst_s { border-right-style: solid; }",

      ".bdc_red { border-color: red; }",
      ".bdtc_red { border-top-color: red; }",
      ".bdbc_red { border-bottom-color: red; }",
      ".bdlc_red { border-left-color: red; }",
      ".bdrc_red { border-right-color: red; }",
    ]);
  });

  it("should build position rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      position: { s: "static", r: "relative" },
    });

    expect(toString(res)).toEqual([
      ".pos_s { position: static; }",
      ".pos_r { position: relative; }",
    ]);
  });

  it("should build display rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      display: { n: "none", b: "block", i: "inline" },
    });

    expect(toString(res)).toEqual([
      ".d_n { display: none; }",
      ".d_b { display: block; }",
      ".d_i { display: inline; }",
    ]);
  });

  it("should build flex rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      flex: { "00a": "0 0 auto", "1": "1" },
      flexGrow: { "1": "1", "2": "2", "4": "4" },
      flexShrink: { "1": "1", "3": "3" },
      flexBasis: { "20%": "20%", "5rem": "5rem" },
      order: { "-1": "-1", "3": "3" },
      flexDirection: { c: "column", r: "row" },
      flexWrap: { n: "nowrap", w: "wrap" },
      justifyContent: { u: "unset", c: "center" },
      alignContent: { c: "center", fe: "flex-end" },
      alignItems: { b: "baseline", c: "center" },
    });

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".fx_1 { flex: 1; }",
      ".fx_00a { flex: 0 0 auto; }",
      ".fxg_1 { flex-grow: 1; }",
      ".fxg_2 { flex-grow: 2; }",
      ".fxg_4 { flex-grow: 4; }",
      ".fxsh_1 { flex-shrink: 1; }",
      ".fxsh_3 { flex-shrink: 3; }",
      ".fxb_20\\% { flex-basis: 20%; }",
      ".fxb_5rem { flex-basis: 5rem; }",
      ".ord_3 { order: 3; }",
      ".ord_-1 { order: -1; }",
      ".fxd_c { flex-direction: column; }",
      ".fxd_r { flex-direction: row; }",
      ".fxw_n { flex-wrap: nowrap; }",
      ".fxw_w { flex-wrap: wrap; }",
      ".jc_u { justify-content: unset; }",
      ".jc_c { justify-content: center; }",
      ".ac_c { align-content: center; }",
      ".ac_fe { align-content: flex-end; }",
      ".ai_b { align-items: baseline; }",
      ".ai_c { align-items: center; }",
    ]);
  });

  it("should build flex grid rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      flexGrid: {
        cols: 12,
        gutter: "10px",
        gutters: { sm: "20px", lg: "40em" },
      },
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
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      verticalAlign: { sup: "super", t: "top", m: "middle" },
      textAlign: { l: "left", c: "center" },
      textAlignLast: { r: "right", c: "center" },
      textDecoration: { n: "none", u: "underline" },
      textEmphasis: { n: "none", a: "accent" },
      textTransform: { u: "uppercase", l: "lowercase" },
      textShadow: { red: "red 2px 5px" },
      whiteSpace: { n: "normal", p: "pre" },
    });

    // prettier-ignore
    expect(toString(res)).toEqual([
      ".va_sup { vertical-align: super; }",
      ".va_t { vertical-align: top; }",
      ".va_m { vertical-align: middle; }",
      ".ta_l { text-align: left; }",
      ".ta_c { text-align: center; }",
      ".tal_r { text-align-last: right; }",
      ".tal_c { text-align-last: center; }",
      ".td_n { text-decoration: none; }",
      ".td_u { text-decoration: underline; }",
      ".te_n { text-emphasis: none; }",
      ".te_a { text-emphasis: accent; }",
      ".tt_u { text-transform: uppercase; }",
      ".tt_l { text-transform: lowercase; }",
      ".tsh_red { text-shadow: red 2px 5px; }",
      ".ws_n { white-space: normal; }",
      ".ws_p { white-space: pre; }",
    ]);
  });

  it("should build overflow rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const overflow = { v: "visible", h: "hidden", a: "auto" };
    const res = rulesetsFactory.createAll({
      overflow,
    });

    expect(toString(res)).toEqual([
      ".ov_v { overflow: visible; }",
      ".ovx_v { overflow-x: visible; }",
      ".ovy_v { overflow-y: visible; }",
      ".ovi_v { overflow-inline: visible; }",
      ".ovb_v { overflow-block: visible; }",
      ".ov_h { overflow: hidden; }",
      ".ovx_h { overflow-x: hidden; }",
      ".ovy_h { overflow-y: hidden; }",
      ".ovi_h { overflow-inline: hidden; }",
      ".ovb_h { overflow-block: hidden; }",
      ".ov_a { overflow: auto; }",
      ".ovx_a { overflow-x: auto; }",
      ".ovy_a { overflow-y: auto; }",
      ".ovi_a { overflow-inline: auto; }",
      ".ovb_a { overflow-block: auto; }",
    ]);
  });

  it("should build background rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      background: { main: "border-box #eee" },
      backgroundColor: { pink: "pink", tom: "tomato" },
      backgroundPosition: { b: "bottom", t: "top" },
    });

    expect(toString(res)).toEqual([
      ".bg_main { background: border-box #eee; }",
      ".bgc_pink { background-color: pink; }",
      ".bgc_tom { background-color: tomato; }",
      ".bgp_b { background-position: bottom; }",
      ".bgp_t { background-position: top; }",
    ]);
  });

  it("should build box shadow rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      boxShadow: {
        n: "none",
        main: "10px 5px 5px red",
        dark: "10px 5px 5px black",
      },
    });

    expect(toString(res)).toEqual(
      expect.arrayContaining([
        ".bxsh_n { box-shadow: none; }",
        ".bxsh_main { box-shadow: 10px 5px 5px red; }",
        ".bxsh_dark { box-shadow: 10px 5px 5px black; }",
      ]),
    );
  });

  it("should build opacity rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      opacity: { "0": "0", "0.5": "0.5", "1": "1" },
    });

    expect(toString(res)).toEqual([
      ".op_0 { opacity: 0; }",
      ".op_1 { opacity: 1; }",
      ".op_0\\.5 { opacity: 0.5; }",
    ]);
  });

  it("should build visibility rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();
    const res = rulesetsFactory.createAll({
      visibility: { v: "visible", h: "hidden", c: "collapse" },
    });

    expect(toString(res)).toEqual([
      ".v_v { visibility: visible; }",
      ".v_h { visibility: hidden; }",
      ".v_c { visibility: collapse; }",
    ]);
  });

  it("should build transform rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();

    const res = rulesetsFactory.createAll({
      transform: {
        custom: "translate(120px, 50%)",
        gpu: "translate3d(0, 0, 0)",
      },
      transformTranslate: { 10: "10px", "10%": "10%", xy: "10px, 10px" },
      transformTranslate3D: { xyz: "10x, 10px, 20px" },
      transformTranslateX: { 100: "100px" },
      transformTranslateY: { 101: "101px" },
      transformTranslateZ: { 102: "102px" },
      transformRotate: { "45deg": "45deg" },
      transformRotateX: { "10deg": "10deg" },
      transformRotateY: { "11deg": "11deg" },
      transformRotateZ: { "12deg": "12deg" },
      transformScale: { sm: "0.5", dblx: "2, 0.5" },
      transformScale3D: { eff: "0.5, 2, 1.4" },
      transformScaleX: { 1: "1" },
      transformScaleY: { 2: "2" },
      transformScaleZ: { 3: "3" },
      transformSkew: { both: "20deg, 10deg", single: "40deg" },
      transformSkewX: { 25: "25deg" },
      transformSkewY: { 35: "35deg" },
      transformPerspective: { 500: "500px" },
    });

    expect(toString(res)).toEqual([
      ".trf_custom { transform: translate(120px, 50%); }",
      ".trf_gpu { transform: translate3d(0, 0, 0); }",
      ".\\~tra_10 { --transformTranslate: 10px; }",
      ".\\~tra_10\\% { --transformTranslate: 10%; }",
      ".\\~tra_xy { --transformTranslate: 10px, 10px; }",
      ".\\~trax_10 { --transformTranslateX: 10px; }",
      ".\\~tray_10 { --transformTranslateY: 10px; }",
      ".\\~traz_10 { --transformTranslateZ: 10px; }",
      ".\\~trax_10\\% { --transformTranslateX: 10%; }",
      ".\\~tray_10\\% { --transformTranslateY: 10%; }",
      ".\\~traz_10\\% { --transformTranslateZ: 10%; }",
      ".\\~tra3_xyz { --transformTranslate3D: 10x, 10px, 20px; }",
      ".\\~trax_100 { --transformTranslateX: 100px; }",
      ".\\~tray_101 { --transformTranslateY: 101px; }",
      ".\\~traz_102 { --transformTranslateZ: 102px; }",
      ".\\~rot_45deg { --transformRotate: 45deg; }",
      ".\\~rotx_45deg { --transformRotateX: 45deg; }",
      ".\\~roty_45deg { --transformRotateY: 45deg; }",
      ".\\~rotz_45deg { --transformRotateZ: 45deg; }",
      ".\\~rotx_10deg { --transformRotateX: 10deg; }",
      ".\\~roty_11deg { --transformRotateY: 11deg; }",
      ".\\~rotz_12deg { --transformRotateZ: 12deg; }",
      ".\\~sca_sm { --transformScale: 0.5; }",
      ".\\~sca_dblx { --transformScale: 2, 0.5; }",
      ".\\~scax_sm { --transformScaleX: 0.5; }",
      ".\\~scay_sm { --transformScaleY: 0.5; }",
      ".\\~scaz_sm { --transformScaleZ: 0.5; }",
      ".\\~sca3_eff { --transformScale3D: 0.5, 2, 1.4; }",
      ".\\~scax_1 { --transformScaleX: 1; }",
      ".\\~scay_2 { --transformScaleY: 2; }",
      ".\\~scaz_3 { --transformScaleZ: 3; }",
      ".\\~sce_both { --transformSkew: 20deg, 10deg; }",
      ".\\~sce_single { --transformSkew: 40deg; }",
      ".\\~scex_single { --transformSkewX: 40deg; }",
      ".\\~scey_single { --transformSkewY: 40deg; }",
      ".\\~scex_25 { --transformSkewX: 25deg; }",
      ".\\~scey_35 { --transformSkewY: 35deg; }",
      ".\\~prs_500 { --transformPerspective: 500px; }",
      ".trf\\~ { transform: translate(var(--transformTranslate, var(--transformTranslateX, 0), var(--transformTranslateY, 0))) rotateX(var(--transformRotate, var(--transformRotateX, 0))) rotateY(var(--transformRotate, var(--transformRotateY, 0))) rotateZ(var(--transformRotate, var(--transformRotateZ, 0))) scale(var(--transformScale, var(--transformScaleX, 1), var(--transformScaleY, 1))) skew(var(--transformSkew, var(--transformSkewX, 0), var(--transformSkewY, 0))); }",
      ".trf3\\~ { transform: translate3d(var(--transformTranslate3D, var(--transformTranslateX, 0), var(--transformTranslateY, 0), var(--transformTranslateZ, 0))) rotateX(var(--transformRotate, var(--transformRotateX, 0))) rotateY(var(--transformRotate, var(--transformRotateY, 0))) rotateZ(var(--transformRotate, var(--transformRotateZ, 0))) scale3d(var(--transformScale3D, var(--transformScaleX, 1), var(--transformScaleY, 1), var(--transformScaleZ, 1))) skew(var(--transformSkew, var(--transformSkewX, 0), var(--transformSkewY, 0))) perspective(var(--transformPerspective, 0)); }",
    ]);
  });

  it("should build filter rulesets", () => {
    const rulesetsFactory = RulesetsFactory.create();

    // prettier-ignore
    const res = rulesetsFactory.createAll({
      filter: { hero: "sepia(70%) blur(1px)", inv: "drop-shadow(16px 16px 20px red) invert(75%)" },
      filterBlur: { sm: "1px", "0": "0", "8": "8px" },
      filterBrightness: { "1": "1", "150%": "150%", "1.4": "1.4" },
      filterContrast: { "1": "1", "150%": "150%", "1.4": "1.4" },
      filterDropShadow: { cr: "0 0 0.75rem crimson", bl: "30px 10px 4px #4444dd", },
      filterGrayscale: { "1": "1", "50%": "50%", "0.4": "0.4" },
      filterHueRotate: { "-90deg": "-90deg", "45deg": "45deg" },
      filterInvert: { a: "0", "0.6": "0.6" },
      filterOpacity: { a: "1", "0.5": "0.5" },
      filterSaturate: { a: "1", "2": "2", "3": "3"},
      filterSepia: { a: "0", max: "1" },
    });

    expect(toString(res)).toEqual([
      ".ftr_hero { filter: sepia(70%) blur(1px); }",
      ".ftr_inv { filter: drop-shadow(16px 16px 20px red) invert(75%); }",
      ".\\~bl_0 { --filterBlur: 0; }",
      ".\\~bl_8 { --filterBlur: 8px; }",
      ".\\~bl_sm { --filterBlur: 1px; }",
      ".\\~br_1 { --filterBrightness: 1; }",
      ".\\~br_150\\% { --filterBrightness: 150%; }",
      ".\\~br_1\\.4 { --filterBrightness: 1.4; }",
      ".\\~ctst_1 { --filterContrast: 1; }",
      ".\\~ctst_150\\% { --filterContrast: 150%; }",
      ".\\~ctst_1\\.4 { --filterContrast: 1.4; }",
      ".\\~dsh_cr { --filterDropShadow: 0 0 0.75rem crimson; }",
      ".\\~dsh_bl { --filterDropShadow: 30px 10px 4px #4444dd; }",
      ".\\~gsc_1 { --filterGrayscale: 1; }",
      ".\\~gsc_50\\% { --filterGrayscale: 50%; }",
      ".\\~gsc_0\\.4 { --filterGrayscale: 0.4; }",
      ".\\~hrt_-90deg { --filterHueRotate: -90deg; }",
      ".\\~hrt_45deg { --filterHueRotate: 45deg; }",
      ".\\~inv_a { --filterInvert: 0; }",
      ".\\~inv_0\\.6 { --filterInvert: 0.6; }",
      ".\\~op_a { --filterOpacity: 1; }",
      ".\\~op_0\\.5 { --filterOpacity: 0.5; }",
      ".\\~sat_2 { --filterSaturate: 2; }",
      ".\\~sat_3 { --filterSaturate: 3; }",
      ".\\~sat_a { --filterSaturate: 1; }",
      ".\\~sep_a { --filterSepia: 0; }",
      ".\\~sep_max { --filterSepia: 1; }",
      ".ftr\\~ { filter: blur(var(--filterBlur)) brightness(var(--filterBrightness)) contrast(var(--filterContrast)) drop-shadow(var(--filterDropShadow)) grayscale(var(--filterGrayscale)) hue-rotate(var(--filterHueRotate)) invert(var(--filterInvert)) opacity(var(--filterOpacity)) saturate(var(--filterSaturate)) sepia(var(--filterSepia)); }",
    ]);
  });
});
