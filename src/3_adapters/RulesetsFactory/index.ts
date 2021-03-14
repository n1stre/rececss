import AllRulesetsFactoryClass from "./AllRulesetsFactory";

export const AllRulesetsFactory = Object.freeze({
  new: (...p: ConstructorParameters<typeof AllRulesetsFactoryClass>) =>
    new AllRulesetsFactoryClass(...p),
});
