import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (self: RulesetsBuilder) =>
  function addOverflow() {
    self.addRulesetsFromNames([
      "overflowVisible",
      "overflowHidden",
      "overflowScroll",
      "overflowAuto",
      "overflowXVisible",
      "overflowXHidden",
      "overflowXScroll",
      "overflowXAuto",
      "overflowYVisible",
      "overflowYHidden",
      "overflowYScroll",
      "overflowYAuto",
    ]);

    return self.getResult();
  };
