import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addList() {
    self.addRulesetsFromNames([
      "listStyleNone",
      "listStylePositionInside",
      "listStylePositionOutside",
      "listStyleTypeNone",
      "listStyleTypeDisc",
      "listStyleTypeCircle",
      "listStyleTypeSquare",
      "listStyleTypeDecimal",
      "listStyleTypeDecimalLeadingZero",
      "listStyleTypeLowerRoman",
      "listStyleTypeUpperRoman",
      "listStyleImageNone",
    ]);

    return self.getResult();
  };
