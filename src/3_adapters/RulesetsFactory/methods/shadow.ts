import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function createShadow(v?: {
    box?: Record<string, string>;
    text?: Record<string, string>;
  }) {
    builder.addRulesetsFromValues(v?.box, ["boxShadow"]);
    builder.addRulesetsFromNames(["boxShadowNone"]);
    builder.addRulesetsFromValues(v?.text, ["textShadow"]);
    builder.addRulesetsFromNames(["textShadowNone"]);

    return builder.getResult();
  };
