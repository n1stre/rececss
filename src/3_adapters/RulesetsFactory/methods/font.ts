import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addFont(v?: {
    shorthand?: Record<string, string>;
    family?: Record<string, string>;
    size?: Record<string, string>;
  }) {
    self.addRulesetsFromValues(v?.shorthand, ["font"]);
    self.addRulesetsFromValues(v?.family, ["fontFamily"]);
    self.addRulesetsFromValues(v?.size, ["fontSize"]);

    return self.getResult();
  };
