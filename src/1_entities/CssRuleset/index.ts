import { CSSDeclarationDTO } from "./CssRuleset.interface";
import buildCssRuleset from "./CssRuleset";

const makeCssRuleset = buildCssRuleset({});

const CssRuleset = Object.freeze({
  prebuild: buildCssRuleset,
  make: makeCssRuleset,
  fromDTO: makeCssRuleset,
  // fromArgs: (selector: string, ...declarations: CSSDeclarationDTO[]) =>
  //   makeCssRuleset({ selector, declarations }),
});

const CssRulesetsFactory = Object.freeze({});

export default CssRuleset;
