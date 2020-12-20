import ClassnamesMapperFixture from "@fixtures/ClassnamesMapperFixture";
import CssRuleset from "@entities/CssRuleset";
import CssRulesetsInteractor from "./index";

const cnm = ClassnamesMapperFixture;
const interactor = CssRulesetsInteractor.prebuild({
  classnamesMapper: cnm,
});

describe("CssRulesetsInteractor", () => {
  it("should create size rulesets", () => {
    expect(
      interactor.createSizeRulesets([
        { length: 10, unit: "px" },
        { length: 20, unit: "px" },
        { length: 1, unit: "em" },
        { length: 2, unit: "em" },
      ]),
    ).toEqual([
      CssRuleset.fromArgs(cnm.widthAuto(), ["width", "auto"]).toDTO(),
      CssRuleset.fromArgs(cnm.heightAuto(), ["height", "auto"]).toDTO(),
      CssRuleset.fromArgs(cnm.width("10px"), ["width", "10px"]).toDTO(),
      CssRuleset.fromArgs(cnm.height("10px"), ["height", "10px"]).toDTO(),
      CssRuleset.fromArgs(cnm.width("20px"), ["width", "20px"]).toDTO(),
      CssRuleset.fromArgs(cnm.height("20px"), ["height", "20px"]).toDTO(),
      CssRuleset.fromArgs(cnm.width("1em"), ["width", "1em"]).toDTO(),
      CssRuleset.fromArgs(cnm.height("1em"), ["height", "1em"]).toDTO(),
      CssRuleset.fromArgs(cnm.width("2em"), ["width", "2em"]).toDTO(),
      CssRuleset.fromArgs(cnm.height("2em"), ["height", "2em"]).toDTO(),
    ]);

    // @include class("w_a") { width: auto; }
    // @include class("w_100p") { width: 100%; }

    // @include class("h_a") { height: auto; }
    // @include class("h_100vh") { height: 100vh; }
    // @include class("h_100p") { height: 100%; }

    // @include class("maw_n") { max-width: none; }
    // @include class("maw_100vh") { max-width: 100vw; }
    // @include class("miw_0") { min-width: 0; }
    // @include class("miw_u") { min-width: unset; }
    // @include class("miw_100vh") { min-width: 100vw; }

    // @include class("mah_n") { max-height: none; }
    // @include class("mah_100vh") { max-height: 100vh; }
    // @include class("mih_0") { min-height: 0; }
    // @include class("mih_u") { min-height: unset; }
    // @include class("mih_100vh") { min-height: 100vh; }

    // @for $i from 1 through ($DIMENSIONS_MAX / $DIMENSIONS_STEP) {
    //   $val: $i * $DIMENSIONS_STEP;

    //   @include class("w_#{$val}") { width: $val + px; }
    //   @include class("h_#{$val}") { height: $val + px; }
    //   @include class("maw_#{$val}") { max-width: $val + px; }
    //   @include class("mah_#{$val}") { max-height: $val + px; }
    //   @include class("miw_#{$val}") { min-width: $val + px; }
    //   @include class("mih_#{$val}") { min-height: $val + px; }
    // }

    // @for $i from 1 through 20 {
    //   $val: $i * 5;

    //   @include class("w_#{$val}p") { width: unquote($val + "%"); }
    //   @include class("h_#{$val}p") { height: unquote($val + "%"); }
    //   @include class("w_#{$val}vw") { width: $val + vw; }
    //   @include class("h_#{$val}vh") { height: $val + vh; }
    //   @include class("maw_#{$val}p") { max-width: unquote($val + "%"); }
    //   @include class("mah_#{$val}p") { max-height: unquote($val + "%"); }
    //   @include class("miw_#{$val}p") { min-width: unquote($val + "%"); }
    //   @include class("mih_#{$val}p") { min-height: unquote($val + "%"); }
    // }
  });
});