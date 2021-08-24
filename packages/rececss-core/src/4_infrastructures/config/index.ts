import Config from "./Config";
import * as defaults from "./Config.defaults";
export * as IConfig from "./Config.interfaces";

export const defaultValues = defaults.values;
export const defaultVariants = defaults.variants;
export const defaultAssociations = defaults.rulesAssociations;

export default Config.createFactory({
  defaultValues,
  defaultVariants,
  defaultAssociations,
});
