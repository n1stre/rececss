import buildCssRulesetsInteractor from "./CssRulesetsInteractor";

const CssRulesetsInteractor = Object.freeze({
  prebuild: buildCssRulesetsInteractor,
  make: buildCssRulesetsInteractor({}),
});

export default CssRulesetsInteractor;
