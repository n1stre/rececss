import Ruleset, { IRuleset } from "../../1_entities/Ruleset";
import BuildRulesets, { IBuildRulesets } from "./index";

const toString = (rs: IRuleset.DTO[]) =>
  rs.map((rs) => Ruleset.create(rs).toString());

const basic: IBuildRulesets.Props = {
  variantsMap: {},
  classnamesMap: {
    width: "w-$0",

    filter: "ftr_$0",
    filterCompound: "ftr~",
    filterBlur: "~bl_$0",
    filterBrightness: "~br_$0",
    filterContrast: "~ctst_$0",
    filterDropShadow: "~dsh_$0",
    filterGrayscale: "~gsc_$0",
    filterHueRotate: "~hrt_$0",
    filterInvert: "~inv_$0",
    filterOpacity: "~op_$0",
    filterSaturate: "~sat_$0",
    filterSepia: "~sep_$0",

    flexRow: "fxrow",
    flexRowGuttered: "fxrow_$0",
    flexCol: "fxcol_$0",
    flex: "fx_$0",

    fontSize: "fz_$0",

    transform: "trf_$0",
    transformCompound: "trf~",
    transformCompound3D: "trf3~",
    transformTranslate: "~tra_$0",
    transformTranslate3D: "~tra3_$0",
    transformTranslateX: "~trax_$0",
    transformTranslateY: "~tray_$0",
    transformTranslateZ: "~traz_$0",
    transformRotate: "~rot_$0",
    transformRotateX: "~rotx_$0",
    transformRotateY: "~roty_$0",
    transformRotateZ: "~rotz_$0",
    transformScale: "~sca_$0",
    transformScale3D: "~sca3_$0",
    transformScaleX: "~scax_$0",
    transformScaleY: "~scay_$0",
    transformScaleZ: "~scaz_$0",
    transformSkew: "~sce_$0",
    transformSkewX: "~scex_$0",
    transformSkewY: "~scey_$0",
    transformPerspective: "~prs_$0",
  },
  declarationsMap: {
    width: "width: $0;",

    filter: "filter: $0;",
    filterCompound:
      "filter: blur(var(--filterBlur)) brightness(var(--filterBrightness)) contrast(var(--filterContrast)) drop-shadow(var(--filterDropShadow)) grayscale(var(--filterGrayscale)) hue-rotate(var(--filterHueRotate)) invert(var(--filterInvert)) opacity(var(--filterOpacity)) saturate(var(--filterSaturate)) sepia(var(--filterSepia));",
    filterBlur: "--filterBlur: $0;",
    filterBrightness: "--filterBrightness: $0;",
    filterContrast: "--filterContrast: $0;",
    filterDropShadow: "--filterDropShadow: $0;",
    filterGrayscale: "--filterGrayscale: $0;",
    filterHueRotate: "--filterHueRotate: $0;",
    filterInvert: "--filterInvert: $0;",
    filterOpacity: "--filterOpacity: $0;",
    filterSaturate: "--filterSaturate: $0;",
    filterSepia: "--filterSepia: $0;",

    flexRow: "display: flex; margin-left: -$0; margin-right: -$0;",
    flexRowChild: "flex: 1 0 auto; padding-left: $0; padding-right: $0;",
    flexCol: "flex-basis: $0; max-width: $0;",
    flex: "flex: $0;",

    fontSize: "font-size: $0;",
    fontSizeWithLineHeight: "font-size: $0; line-height: $1;",

    transformOrigin: "transform-origin: $0;",
    transform: "transform: $0;",
    transformCompound: [
      "transform:",
      "translate(var(--transformTranslate, var(--transformTranslateX, 0), var(--transformTranslateY, 0)))",
      "rotateX(var(--transformRotate, var(--transformRotateX, 0))) rotateY(var(--transformRotate, var(--transformRotateY, 0))) rotateZ(var(--transformRotate, var(--transformRotateZ, 0)))",
      "scale(var(--transformScale, var(--transformScaleX, 1), var(--transformScaleY, 1)))",
      "skew(var(--transformSkew, var(--transformSkewX, 0), var(--transformSkewY, 0)));",
    ].join(" "),
    transformCompound3D: [
      "transform:",
      "translate3d(var(--transformTranslate3D, var(--transformTranslateX, 0), var(--transformTranslateY, 0), var(--transformTranslateZ, 0)))",
      "rotateX(var(--transformRotate, var(--transformRotateX, 0))) rotateY(var(--transformRotate, var(--transformRotateY, 0))) rotateZ(var(--transformRotate, var(--transformRotateZ, 0)))",
      "scale3d(var(--transformScale3D, var(--transformScaleX, 1), var(--transformScaleY, 1), var(--transformScaleZ, 1)))",
      "skew(var(--transformSkew, var(--transformSkewX, 0), var(--transformSkewY, 0)))",
      "perspective(var(--transformPerspective, 0));",
    ].join(" "),
    transformTranslate: "--transformTranslate: $0;",
    transformTranslate3D: "--transformTranslate3D: $0;",
    transformTranslateX: "--transformTranslateX: $0;",
    transformTranslateY: "--transformTranslateY: $0;",
    transformTranslateZ: "--transformTranslateZ: $0;",
    transformRotate: "--transformRotate: $0;",
    transformRotateX: "--transformRotateX: $0;",
    transformRotateY: "--transformRotateY: $0;",
    transformRotateZ: "--transformRotateZ: $0;",
    transformScale: "--transformScale: $0;",
    transformScale3D: "--transformScale3D: $0;",
    transformScaleX: "--transformScaleX: $0;",
    transformScaleY: "--transformScaleY: $0;",
    transformScaleZ: "--transformScaleZ: $0;",
    transformSkew: "--transformSkew: $0;",
    transformSkewX: "--transformSkewX: $0;",
    transformSkewY: "--transformSkewY: $0;",
    transformPerspective: "--transformPerspective: $0;",
  },
};

const withVariants: IBuildRulesets.Props = {
  variantsMap: {
    width: { h: "&:hover" },
    border: { h: "&:hover" },
  },
  classnamesMap: {},
  declarationsMap: {},
};

describe("BuildRulesets usecase", () => {
  it("should not crash if nothing is provided", () => {
    const build = BuildRulesets.create(basic);
    const res = build.exec({ values: {}, definitions: [] });
    expect(res).toEqual([]);
  });

  it("should build from values and definitions", () => {
    const build = BuildRulesets.create(basic);
    const res = build.exec({
      values: { width: { "20": "20px" } },
      definitions: [{ classname: "height-sm", declarations: "height: 12px;" }],
    });

    expect(toString(res)).toEqual([
      ".w-20 { width: 20px; }",
      ".height-sm { height: 12px; }",
    ]);
  });

  it("should build font size rulesets", () => {
    const build = BuildRulesets.create(basic);
    const res = build.exec({
      definitions: [],
      values: {
        fontSize: { "20": "20px", "2em": "2em", md: "16px/24px" },
      },
    });

    expect(toString(res)).toEqual([
      ".fz_20 { font-size: 20px; }",
      ".fz_2em { font-size: 2em; }",
      ".fz_md { font-size: 16px; line-height: 24px; }",
    ]);
  });

  it("should build flex grid rulesets", () => {
    const build = BuildRulesets.create(basic);
    const res = build.exec({
      definitions: [],
      values: {
        flexGrid: { cols: 6 },
      },
    });
    // prettier-ignore
    expect(toString(res)).toEqual([
      ".fxrow { display: flex; margin-left: -10px; margin-right: -10px; }",
      ".fxrow > * { flex: 1 0 auto; padding-left: 10px; padding-right: 10px; }",
      `.fxcol_1 { flex-basis: ${1 / 6 * 100}%; max-width: ${1 / 6 * 100}%; }`,
      `.fxcol_2 { flex-basis: ${2 / 6 * 100}%; max-width: ${2 / 6 * 100}%; }`,
      `.fxcol_3 { flex-basis: ${3 / 6 * 100}%; max-width: ${3 / 6 * 100}%; }`,
      `.fxcol_4 { flex-basis: ${4 / 6 * 100}%; max-width: ${4 / 6 * 100}%; }`,
      `.fxcol_5 { flex-basis: ${5 / 6 * 100}%; max-width: ${5 / 6 * 100}%; }`,
      `.fxcol_6 { flex-basis: ${6 / 6 * 100}%; max-width: ${6 / 6 * 100}%; }`,
    ])
  });

  it("should build flex grid rulesets with gutters", () => {
    const build = BuildRulesets.create(basic);
    const res = build.exec({
      definitions: [],
      values: {
        flexGrid: {
          cols: 12,
          gutter: "10px",
          gutters: { sm: "20px", lg: "40em" },
        },
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

  it("should build transform rulesets", () => {
    const build = BuildRulesets.create(basic);

    const res = build.exec({
      definitions: [],
      values: {
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
      },
    });

    expect(toString(res)).toEqual([
      ".trf_custom { transform: translate(120px, 50%); }",
      ".trf_gpu { transform: translate3d(0, 0, 0); }",
      ".trf\\~ { transform: translate(var(--transformTranslate, var(--transformTranslateX, 0), var(--transformTranslateY, 0))) rotateX(var(--transformRotate, var(--transformRotateX, 0))) rotateY(var(--transformRotate, var(--transformRotateY, 0))) rotateZ(var(--transformRotate, var(--transformRotateZ, 0))) scale(var(--transformScale, var(--transformScaleX, 1), var(--transformScaleY, 1))) skew(var(--transformSkew, var(--transformSkewX, 0), var(--transformSkewY, 0))); }",
      ".trf3\\~ { transform: translate3d(var(--transformTranslate3D, var(--transformTranslateX, 0), var(--transformTranslateY, 0), var(--transformTranslateZ, 0))) rotateX(var(--transformRotate, var(--transformRotateX, 0))) rotateY(var(--transformRotate, var(--transformRotateY, 0))) rotateZ(var(--transformRotate, var(--transformRotateZ, 0))) scale3d(var(--transformScale3D, var(--transformScaleX, 1), var(--transformScaleY, 1), var(--transformScaleZ, 1))) skew(var(--transformSkew, var(--transformSkewX, 0), var(--transformSkewY, 0))) perspective(var(--transformPerspective, 0)); }",
      ".\\~tra_10 { --transformTranslate: 10px; }",
      ".\\~tra_10\\% { --transformTranslate: 10%; }",
      ".\\~tra_xy { --transformTranslate: 10px, 10px; }",
      ".\\~tra3_xyz { --transformTranslate3D: 10x, 10px, 20px; }",
      ".\\~trax_100 { --transformTranslateX: 100px; }",
      ".\\~tray_101 { --transformTranslateY: 101px; }",
      ".\\~traz_102 { --transformTranslateZ: 102px; }",
      ".\\~rot_45deg { --transformRotate: 45deg; }",
      ".\\~rotx_10deg { --transformRotateX: 10deg; }",
      ".\\~roty_11deg { --transformRotateY: 11deg; }",
      ".\\~rotz_12deg { --transformRotateZ: 12deg; }",
      ".\\~sca_sm { --transformScale: 0.5; }",
      ".\\~sca_dblx { --transformScale: 2, 0.5; }",
      ".\\~sca3_eff { --transformScale3D: 0.5, 2, 1.4; }",
      ".\\~scax_1 { --transformScaleX: 1; }",
      ".\\~scay_2 { --transformScaleY: 2; }",
      ".\\~scaz_3 { --transformScaleZ: 3; }",
      ".\\~sce_both { --transformSkew: 20deg, 10deg; }",
      ".\\~sce_single { --transformSkew: 40deg; }",
      ".\\~scex_25 { --transformSkewX: 25deg; }",
      ".\\~scey_35 { --transformSkewY: 35deg; }",
      ".\\~prs_500 { --transformPerspective: 500px; }",
    ]);
  });

  it("should build filter rulesets", () => {
    const build = BuildRulesets.create(basic);

    const res = build.exec({
      definitions: [],
      values: {
        filterCompound: {},
        filter: {
          hero: "sepia(70%) blur(1px)",
          inv: "drop-shadow(16px 16px 20px red) invert(75%)",
        },
        filterBlur: { sm: "1px", "0": "0", "8": "8px" },
        filterBrightness: { "1": "1", "150%": "150%", "1.4": "1.4" },
        filterContrast: { "1": "1", "150%": "150%", "1.4": "1.4" },
        filterDropShadow: {
          cr: "0 0 0.75rem crimson",
          bl: "30px 10px 4px #4444dd",
        },
        filterGrayscale: { "1": "1", "50%": "50%", "0.4": "0.4" },
        filterHueRotate: { "-90deg": "-90deg", "45deg": "45deg" },
        filterInvert: { a: "0", "0.6": "0.6" },
        filterOpacity: { a: "1", "0.5": "0.5" },
        filterSaturate: { a: "1", "2": "2", "3": "3" },
        filterSepia: { a: "0", max: "1" },
      },
    });

    expect(toString(res)).toEqual([
      ".ftr_hero { filter: sepia(70%) blur(1px); }",
      ".ftr_inv { filter: drop-shadow(16px 16px 20px red) invert(75%); }",
      ".ftr\\~ { filter: blur(var(--filterBlur)) brightness(var(--filterBrightness)) contrast(var(--filterContrast)) drop-shadow(var(--filterDropShadow)) grayscale(var(--filterGrayscale)) hue-rotate(var(--filterHueRotate)) invert(var(--filterInvert)) opacity(var(--filterOpacity)) saturate(var(--filterSaturate)) sepia(var(--filterSepia)); }",
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
    ]);
  });
});
