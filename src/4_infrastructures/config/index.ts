import Config from "./Config";
import * as defaults from "./Config.defaults";
export * as IConfig from "./Config.interfaces";

export default Config.createFactory({
  defaultRules: defaults.rules,
});
