import buildCSSRuleset from "./CssRuleset";

const CSSRuleset = Object.freeze({
  prebuild: buildCSSRuleset,
  make: buildCSSRuleset({}),
});

export default CSSRuleset;
