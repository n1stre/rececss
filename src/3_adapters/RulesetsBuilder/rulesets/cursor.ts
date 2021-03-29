import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addCursor() {
    self.addRulesets(
      "cursorAuto",
      "cursorDefault",
      "cursorCrosshair",
      "cursorHand",
      "cursorHelp",
      "cursorMove",
      "cursorPointer",
      "cursorText",
    );

    return self;
  };
