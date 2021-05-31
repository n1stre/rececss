import Config from "./Config";
import { GetRules } from "./Config.interfaces";

const dto = require("../../../tests/fixtures/rececss.config");
const configFactory = Config.createFactory({
  defaultRules: {
    all: {
      u: "unset",
      ini: "initial",
      $variants: { h: "&:hover", js: "&.js-active" },
    },
    width: { full: "100%" },
    border: { sm: "1px solid", $variants: { a: "&:active" } },
    outline: { sm: "1px solid", $variants: { a: "&:active" } },
  },
});

describe("Config", () => {
  test("output", () => {
    const config = configFactory.create(dto);
    expect.assertions(4);
    expect(config.getOutputPath()).toBe("./website/styles");
    expect(config.getOutputFilename()).toBe("rececss");
    expect(config.getOutputExtension()).toBe("css");
    expect(config.shouldSplitOutputByMedia()).toBe(false);
  });

  test("undefined purge settings", () => {
    const config = configFactory.create({
      output: { path: "" },
      rules: {},
    });
    expect.assertions(3);
    expect(config.getPurgeContent()).toEqual([]);
    expect(config.getPurgeSafelist()).toEqual([]);
    expect(config.getPurgeBlocklist()).toEqual([]);
  });

  test("defined purge settings", () => {
    const config = configFactory.create({
      output: {
        path: "",
        purge: {
          content: ["some/path"],
          blocklist: ["visibleClass"],
          safelist: ["invisibleClass"],
        },
      },
      rules: {},
    });
    expect.assertions(3);
    expect(config.getPurgeContent()).toEqual(["some/path"]);
    expect(config.getPurgeSafelist()).toEqual(["invisibleClass"]);
    expect(config.getPurgeBlocklist()).toEqual(["visibleClass"]);
  });

  test("media", () => {
    const config = configFactory.create(dto);
    expect(config.getMedia()).toEqual({
      md: "only screen and (min-width: 768px)",
      lg: "only screen and (min-width: 1024px)",
    });
  });

  test("separators", () => {
    const config = configFactory.create(dto);
    expect.assertions(2);
    expect(config.getMediaSeparator()).toBe(":");
    expect(config.getVariantSeparator()).toBe(":");
  });

  test("classnames", () => {
    const output = { path: "" };
    const noClassesConfig = configFactory.create({ output, rules: {} });
    expect(noClassesConfig.getClassnames()).toEqual({});

    const classesConfig = configFactory.create({
      output,
      rules: {},
      classes: {
        width: "wid_$0",
      },
    });

    expect(classesConfig.getClassnames()).toEqual({
      width: "wid_$0",
    });
  });

  test("variants implicit extend", () => {
    const rules = {
      all: { inh: "inherit", $variants: { f: "&:focus" } },
      width: { half: "50%" },
      color: { red: "red", $variants: { hp: "*:hover &" } },
      border: { $variants: { hp: "*:hover &" } },
    };

    const config = configFactory.create({ ...dto, rules });
    expect(config.getRulesetsVariants()).toEqual({
      all: { h: "&:hover", js: "&.js-active", f: "&:focus" },
      color: { hp: "*:hover &" },
      border: { a: "&:active", hp: "*:hover &" },
      outline: { a: "&:active" },
    });
  });

  test("values implicit extend", () => {
    const rules = {
      all: { inh: "inherit" },
      width: { half: "50%" },
      color: { red: "red" },
    };

    const config = configFactory.create({ ...dto, rules });
    const commonValues = { u: "unset", ini: "initial", inh: "inherit" };

    expect(config.getRulesetsValues()).toEqual({
      all: commonValues,
      width: { ...commonValues, full: "100%", half: "50%" },
      color: { ...commonValues, red: "red" },
      border: { ...commonValues, sm: "1px solid" },
      outline: { ...commonValues, sm: "1px solid" },
    });
  });

  test("variants explicit extend", () => {
    const rules: GetRules = ({ extend }) => {
      return {
        all: extend({ inh: "inherit", $variants: { f: "&:focus" } }),
        width: extend({ half: "50%" }),
        color: extend({ red: "red", $variants: { hp: "*:hover &" } }),
        border: extend({ $variants: { hp: "*:hover &" } }),
      };
    };

    const config = configFactory.create({ ...dto, rules });

    expect(config.getRulesetsVariants()).toEqual({
      all: { h: "&:hover", js: "&.js-active", f: "&:focus" },
      color: { hp: "*:hover &" },
      border: { a: "&:active", hp: "*:hover &" },
    });
  });

  test("values explicit extend", () => {
    const rules: GetRules = ({ extend }) => {
      return {
        all: extend({ inh: "inherit" }),
        width: extend({ half: "50%" }),
        color: extend({ red: "red" }),
      };
    };

    const config = configFactory.create({ ...dto, rules });
    const commonValues = { u: "unset", ini: "initial", inh: "inherit" };

    expect(config.getRulesetsValues()).toEqual({
      all: commonValues,
      width: { ...commonValues, full: "100%", half: "50%" },
      color: { ...commonValues, red: "red" },
    });
  });

  test("unit values", () => {
    const rules: GetRules = ({ extend }) => {
      return {
        width: extend({
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
        }),
      };
    };

    const config = configFactory.create({ ...dto, rules });

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

        "10": "10px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
        "26": "26px",
        "28": "28px",
        "30": "30px",

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
