import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addSize(v?: {
    width: Record<number, string>;
    height: Record<number, string>;
  }) {
    self.addStatic("widthAuto");
    self.addValues(v?.width, "width", "minWidth", "maxWidth");

    self.addStatic("heightAuto");
    self.addValues(v?.height, "height", "minHeight", "maxHeight");

    return self;
  };
