import { IRulesetsBuilderFunctions } from "../RulesetsBuilder.interface";

export default <T extends IRulesetsBuilderFunctions>(self: T) =>
  function addList() {
    self.addRulesets(
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
    );

    return self;
  };
