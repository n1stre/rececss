import Config from "./Config";
import classnames from "./defaults/classnames";
import declarations from "./defaults/declarations";
import variants from "./defaults/variants";
import associations from "./defaults/associations";
import values from "./defaults/values";

export default Config.createFactory({
  defaults: {
    values,
    variants,
    associations,
    classnames,
    declarations,
  },
});

export { Config };
export * as IConfig from "./Config.interfaces";
