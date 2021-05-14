import Config from "./Config";
const dto = require("../../../tests/fixtures/rececss.config");
const configFactory = Config.createFactory({
  defaultRules: {
    all: {
      u: "unset",
      ini: "initial",
      $variants: { h: "&:hover", js: "&.js-active" },
    },
    width: { full: "100%" },
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

  test("variants implicit extend", () => {
    const rules = {
      all: { inh: "inherit", $variants: { f: "&:focus" } },
      width: { half: "50%" },
      color: { red: "red", $variants: { hp: "*:hover &" } },
    };

    const config = configFactory.create({ ...dto, rules });
    const commonVariants = { h: "&:hover", js: "&.js-active", f: "&:focus" };

    expect(config.getRulesetsVariants()).toEqual({
      all: commonVariants,
      width: commonVariants,
      color: { ...commonVariants, hp: "*:hover &" },
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
    });
  });
});
