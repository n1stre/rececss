import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addSize(v?: {
    width?: Record<string, string>;
    height?: Record<string, string>;
  }) {
    self.addRulesetsFromNames(["widthAuto"]);
    self.addRulesetsFromValues(v?.width, ["width", "minWidth", "maxWidth"]);

    self.addRulesetsFromNames(["heightAuto"]);
    self.addRulesetsFromValues(v?.height, ["height", "minHeight", "maxHeight"]);

    return self.getResult();
  };
