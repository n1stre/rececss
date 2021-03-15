import buildRulesetsBuilder from "./RulesetsBuilder";
export { IRulesetNamesMap } from "./RulesetsBuilder.interface";

const RulesetsBuilder = buildRulesetsBuilder();

export default Object.freeze({
  build: buildRulesetsBuilder,
  new: (...args: ConstructorParameters<typeof RulesetsBuilder>) => {
    return new RulesetsBuilder(...args);
  },
});
