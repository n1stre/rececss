import Config from "./Config";
import associations from "./defaults/associations";
import { CreatorFn, RawValues, Variants } from "./Config.interfaces";

const dto = require("../../../tests/__fixtures__/rececss.config");

const basicValues = {
  all: { u: "unset", ini: "initial" },
  width: { full: "100%" },
  outline: { sm: "1px solid" },
};

const basicVariants = {
  all: { h: "&:hover", js: "&.js-active" },
  outline: { a: "&:active" },
};

const configBasic = Config.createFactory({
  defaults: {
    values: basicValues,
    variants: basicVariants,
  },
});

const configWithAssociations = Config.createFactory({
  defaults: {
    values: basicValues,
    variants: basicVariants,
    associations,
  },
});

describe("Config", () => {
  test("output", () => {
    const config = configBasic.create(dto);
    expect.assertions(4);
    expect(config.getOutputPath()).toBe("./website/styles");
    expect(config.getOutputFilename()).toBe("rececss");
    expect(config.getOutputExtension()).toBe("css");
    expect(config.shouldSplitOutputByMedia()).toBe(false);
  });

  test("undefined purge settings", () => {
    const config = configBasic.create({
      output: { path: "" },
      values: {},
    });
    expect.assertions(3);
    expect(config.getPurgeContent()).toEqual([]);
    expect(config.getPurgeSafelist()).toEqual([]);
    expect(config.getPurgeBlocklist()).toEqual([]);
  });

  test("defined purge settings", () => {
    const config = configBasic.create({
      output: {
        path: "",
        purge: {
          content: ["some/path"],
          blocklist: ["visibleClass"],
          safelist: ["invisibleClass"],
        },
      },
      values: {},
    });
    expect.assertions(3);
    expect(config.getPurgeContent()).toEqual(["some/path"]);
    expect(config.getPurgeSafelist()).toEqual(["invisibleClass"]);
    expect(config.getPurgeBlocklist()).toEqual(["visibleClass"]);
  });

  test("media getter", () => {
    const config = configBasic.create(dto);
    expect(config.getMedia()).toEqual({
      md: "only screen and (min-width: 768px)",
      lg: "only screen and (min-width: 1024px)",
    });
  });

  test("separator getters", () => {
    const config = configBasic.create(dto);
    expect.assertions(2);
    expect(config.getMediaSeparator()).toBe(":");
    expect(config.getVariantSeparator()).toBe(":");
  });

  test("classnames getter", () => {
    const classesConfig = configBasic.create({
      output: { path: "" },
      values: {},
      classnames: {
        width: "wid_$0",
      },
    });

    expect(classesConfig.getRulesetsClassnames()).toEqual({
      width: "wid_$0",
    });
  });

  test("getters fallbacks", () => {
    const config = configBasic.create({
      output: { path: "" },
      values: {},
    });
    expect.assertions(4);
    expect(config.getMedia()).toMatchObject({});
    expect(config.getRulesetsClassnames()).toMatchObject({});
    expect(config.getMediaSeparator()).toBe(undefined);
    expect(config.getVariantSeparator()).toBe(undefined);
  });

  test("variants combined with defaults implicitly", () => {
    const variants = {
      all: { f: "&:focus" },
      color: { hp: "*:hover &" },
    };

    const config = configBasic.create({ ...dto, variants });
    const common = { h: "&:hover", js: "&.js-active", f: "&:focus" };

    expect(config.getRulesetsVariants()).toEqual({
      all: common,
      // width: common,
      color: { ...common, hp: "*:hover &" },
      outline: { ...common, a: "&:active" },
    });
  });

  test("values combined with defaults implicitly", () => {
    const values = {
      all: { inh: "inherit" },
      width: { half: "50%" },
      color: { red: "red" },
    };

    const config = configBasic.create({ ...dto, values });
    const commonValues = { u: "unset", ini: "initial", inh: "inherit" };

    expect(config.getRulesetsValues()).toEqual({
      all: commonValues,
      width: { ...commonValues, full: "100%", half: "50%" },
      color: { ...commonValues, red: "red" },
      outline: { ...commonValues, sm: "1px solid" },
    });
  });

  test("variants combined with defaults explicitly", () => {
    const variants: CreatorFn<Variants> = ({ defaults }) => {
      return {
        all: { ...defaults.all, f: "&:focus" },
        color: { ...defaults.color, hp: "*:hover &" },
      };
    };

    const config = configBasic.create({ ...dto, variants });
    const common = { h: "&:hover", js: "&.js-active", f: "&:focus" };

    expect(config.getRulesetsVariants()).toEqual({
      all: common,
      color: { ...common, hp: "*:hover &" },
    });
  });

  test("values combined with defaults explicitly", () => {
    const values: CreatorFn<RawValues> = ({ defaults }) => {
      return {
        all: { ...defaults.all, inh: "inherit" },
        width: { ...defaults.width, half: "50%" },
        color: { ...defaults.color, red: "red" },
      };
    };

    const config = configBasic.create({ ...dto, values });
    const commonValues = { u: "unset", ini: "initial", inh: "inherit" };

    expect(config.getRulesetsValues()).toEqual({
      all: commonValues,
      width: { ...commonValues, full: "100%", half: "50%" },
      color: { ...commonValues, red: "red" },
    });
  });

  test("variants without defaults", () => {
    const configFactory = Config.createFactory({ defaults: {} });
    const config = configFactory.create({
      output: { path: "" },
      values: {},
      variants: {
        width: { h: "&:hover" },
      },
    });

    expect(config.getRulesetsVariants()).toMatchObject({
      width: { h: "&:hover" },
    });
  });

  test("rule associations values", () => {
    const config = configWithAssociations.create({
      ...dto,
      values: ({ defaults }) => {
        return {
          all: defaults.all,
          border: { sm: "1px solid" },
          borderColor: { dark: "#000" },
          borderRadius: { sm: "2px" },
          borderStyle: { s: "solid" },
          borderWidth: { lg: "8px" },
          inset: { s: "10px", m: "10px 20px 15px" },
          margin: { s: "10px", m: "10px 20px 15px" },
          overflow: { h: "hidden" },
          overscrollBehavior: { c: "contain" },
          padding: { s: "10px", m: "10px 20px 15px" },
          transformRotate: { s: "30deg" },
          transformScale: { s: "1.2", m: "1.1, 1.2" },
          transformSkew: { s: "10px", m: "10px, 20px" },
          transformTranslate: { s: "10px", m: "12px, 50%" },
        };
      },
    });

    const common = { u: "unset", ini: "initial" };

    expect(config.getRulesetsValues()).toEqual({
      all: common,
      border: { sm: "1px solid", ...common },
      borderTop: { sm: "1px solid", ...common },
      borderBottom: { sm: "1px solid", ...common },
      borderLeft: { sm: "1px solid", ...common },
      borderRight: { sm: "1px solid", ...common },
      borderColor: { dark: "#000", ...common },
      borderTopColor: { dark: "#000", ...common },
      borderBottomColor: { dark: "#000", ...common },
      borderLeftColor: { dark: "#000", ...common },
      borderRightColor: { dark: "#000", ...common },
      borderRadius: { sm: "2px", ...common },
      borderTopLeftRadius: { sm: "2px", ...common },
      borderTopRightRadius: { sm: "2px", ...common },
      borderBottomLeftRadius: { sm: "2px", ...common },
      borderBottomRightRadius: { sm: "2px", ...common },
      borderStyle: { s: "solid", ...common },
      borderTopStyle: { s: "solid", ...common },
      borderBottomStyle: { s: "solid", ...common },
      borderLeftStyle: { s: "solid", ...common },
      borderRightStyle: { s: "solid", ...common },
      borderWidth: { lg: "8px", ...common },
      borderTopWidth: { lg: "8px", ...common },
      borderBottomWidth: { lg: "8px", ...common },
      borderLeftWidth: { lg: "8px", ...common },
      borderRightWidth: { lg: "8px", ...common },
      inset: { s: "10px", m: "10px 20px 15px", ...common },
      top: { s: "10px", ...common },
      bottom: { s: "10px", ...common },
      left: { s: "10px", ...common },
      right: { s: "10px", ...common },
      margin: { s: "10px", m: "10px 20px 15px", ...common },
      marginTop: { s: "10px", ...common },
      marginBottom: { s: "10px", ...common },
      marginVertical: { s: "10px", ...common },
      marginLeft: { s: "10px", ...common },
      marginRight: { s: "10px", ...common },
      marginHorizontal: { s: "10px", ...common },
      overflow: { h: "hidden", ...common },
      overflowX: { h: "hidden", ...common },
      overflowY: { h: "hidden", ...common },
      overflowInline: { h: "hidden", ...common },
      overflowBlock: { h: "hidden", ...common },
      overscrollBehavior: { c: "contain", ...common },
      overscrollBehaviorInline: { c: "contain", ...common },
      overscrollBehaviorBlock: { c: "contain", ...common },
      overscrollBehaviorX: { c: "contain", ...common },
      overscrollBehaviorY: { c: "contain", ...common },
      padding: { s: "10px", m: "10px 20px 15px", ...common },
      paddingTop: { s: "10px", ...common },
      paddingBottom: { s: "10px", ...common },
      paddingVertical: { s: "10px", ...common },
      paddingLeft: { s: "10px", ...common },
      paddingRight: { s: "10px", ...common },
      paddingHorizontal: { s: "10px", ...common },
      transformRotate: { s: "30deg", ...common },
      transformRotateX: { s: "30deg", ...common },
      transformRotateY: { s: "30deg", ...common },
      transformRotateZ: { s: "30deg", ...common },
      transformScale: { s: "1.2", m: "1.1, 1.2", ...common },
      transformScaleX: { s: "1.2", ...common },
      transformScaleY: { s: "1.2", ...common },
      transformScaleZ: { s: "1.2", ...common },
      transformSkew: { s: "10px", m: "10px, 20px", ...common },
      transformSkewX: { s: "10px", ...common },
      transformSkewY: { s: "10px", ...common },
      transformTranslate: { s: "10px", m: "12px, 50%", ...common },
      transformTranslateX: { s: "10px", ...common },
      transformTranslateY: { s: "10px", ...common },
      transformTranslateZ: { s: "10px", ...common },
    });
  });

  test("unit values", () => {
    const values: CreatorFn<RawValues> = ({ defaults }) => {
      return {
        width: {
          ...defaults.width,
          half: "50%",
          $cm: [0, 10, [20, 30, 2]],
          $mm: [0, 10, [20, 30, 2]],
          $in: [0, 10, [20, 30, 2]],
          $pc: [0, 10, [20, 30, 2]],
          $pt: [0, 10, [20, 30, 2]],
          $px: [0, 10, [20, 30, 2]],
          $em: [0, 1, [1.2, 2, 0.2]],
          $ex: [0, 10, [20, 30, 2]],
          $ch: [0, 10, [20, 30, 2]],
          $rem: [0, 1, [1.2, 2, 0.2]],
          $vw: [0, 10, [20, 30, 2]],
          $vh: [0, 10, [20, 30, 2]],
          $vmin: [0, 10, [20, 30, 2]],
          $vmax: [0, 10, [20, 30, 2]],
          $percent: [0, 10, [20, 30, 2]],
          $pct: [50, [60, 70, 5]],
          $number: [0, 50, [60, 70, 2]],
          $num: [2, [3, 6, 1]],
        },
      };
    };

    const config = configBasic.create({ ...dto, values });

    expect(config.getRulesetsValues()).toEqual({
      width: {
        full: "100%",
        half: "50%",

        "0": "0",

        "10cm": "10cm",
        "20cm": "20cm",
        "22cm": "22cm",
        "24cm": "24cm",
        "26cm": "26cm",
        "28cm": "28cm",
        "30cm": "30cm",

        "10mm": "10mm",
        "20mm": "20mm",
        "22mm": "22mm",
        "24mm": "24mm",
        "26mm": "26mm",
        "28mm": "28mm",
        "30mm": "30mm",

        "10in": "10in",
        "20in": "20in",
        "22in": "22in",
        "24in": "24in",
        "26in": "26in",
        "28in": "28in",
        "30in": "30in",

        "10pc": "10pc",
        "20pc": "20pc",
        "22pc": "22pc",
        "24pc": "24pc",
        "26pc": "26pc",
        "28pc": "28pc",
        "30pc": "30pc",

        "10pt": "10pt",
        "20pt": "20pt",
        "22pt": "22pt",
        "24pt": "24pt",
        "26pt": "26pt",
        "28pt": "28pt",
        "30pt": "30pt",

        "10px": "10px",
        "20px": "20px",
        "22px": "22px",
        "24px": "24px",
        "26px": "26px",
        "28px": "28px",
        "30px": "30px",

        "1em": "1em",
        "1.2em": "1.2em",
        "1.4em": "1.4em",
        "1.6em": "1.6em",
        "1.8em": "1.8em",
        "2em": "2em",

        "10ex": "10ex",
        "20ex": "20ex",
        "22ex": "22ex",
        "24ex": "24ex",
        "26ex": "26ex",
        "28ex": "28ex",
        "30ex": "30ex",

        "10ch": "10ch",
        "20ch": "20ch",
        "22ch": "22ch",
        "24ch": "24ch",
        "26ch": "26ch",
        "28ch": "28ch",
        "30ch": "30ch",

        "1rem": "1rem",
        "1.2rem": "1.2rem",
        "1.4rem": "1.4rem",
        "1.6rem": "1.6rem",
        "1.8rem": "1.8rem",
        "2rem": "2rem",

        "10vw": "10vw",
        "20vw": "20vw",
        "22vw": "22vw",
        "24vw": "24vw",
        "26vw": "26vw",
        "28vw": "28vw",
        "30vw": "30vw",

        "10vh": "10vh",
        "20vh": "20vh",
        "22vh": "22vh",
        "24vh": "24vh",
        "26vh": "26vh",
        "28vh": "28vh",
        "30vh": "30vh",

        "10vmin": "10vmin",
        "20vmin": "20vmin",
        "22vmin": "22vmin",
        "24vmin": "24vmin",
        "26vmin": "26vmin",
        "28vmin": "28vmin",
        "30vmin": "30vmin",

        "10vmax": "10vmax",
        "20vmax": "20vmax",
        "22vmax": "22vmax",
        "24vmax": "24vmax",
        "26vmax": "26vmax",
        "28vmax": "28vmax",
        "30vmax": "30vmax",

        "10%": "10%",
        "20%": "20%",
        "22%": "22%",
        "24%": "24%",
        "26%": "26%",
        "28%": "28%",
        "30%": "30%",

        "50%": "50%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",

        "50": "50",
        "60": "60",
        "62": "62",
        "64": "64",
        "66": "66",
        "68": "68",
        "70": "70",

        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
      },
    });
  });
});
