import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addCursor() {
    self.addRulesetsFromNames([
      "cursorAuto",
      "cursorDefault",
      "cursorCrosshair",
      "cursorHand",
      "cursorHelp",
      "cursorMove",
      "cursorPointer",
      "cursorText",
    ]);

    return self.getResult();
  };
