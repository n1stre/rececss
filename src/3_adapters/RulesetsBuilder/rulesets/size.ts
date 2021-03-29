import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addSize(v?: {
    width: Record<number, string>;
    height: Record<number, string>;
  }) {
    self.addRulesets("widthAuto");
    self.mapToRulesets(v?.width, "width", "minWidth", "maxWidth");

    self.addRulesets("heightAuto");
    self.mapToRulesets(v?.height, "height", "minHeight", "maxHeight");

    return self;
  };
