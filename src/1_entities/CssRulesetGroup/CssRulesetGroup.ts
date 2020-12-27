import { CSSRulesetDTO } from "../CssRuleset/CssRuleset.interface";
import {
  CssRulesetGroupInstance,
  CssRulesetGroupItem,
} from "./CssRulesetGroup.interface";

export default (p: {}) => {
  return function makeCssRulesetGroup(
    ...input: CssRulesetGroupItem[]
  ): CssRulesetGroupInstance {
    let items = [...input];

    return Object.freeze({
      addItems(...newItems) {
        newItems.forEach((item) => items.push(item));
        return this;
      },

      addItemsFromValues(values, ...mapFns) {
        values.forEach((v) => {
          mapFns.forEach((fn) => items.push(fn(v)));
        });
        return this;
      },

      addItemsFromMap(map, ...mapFns) {
        Object.entries(map).forEach(([name, value]) => {
          mapFns.forEach((fn) => items.push(fn({ name, value })));
        });
        return this;
      },

      toString: () => {
        return "";
      },

      toRulesetsDTO: () => items.map(mapGroupItemToRuleset),

      toDTO: () => items,
    });

    function mapGroupItemToRuleset(item: CssRulesetGroupItem): CSSRulesetDTO {
      return { selector: item[0], declarations: item[1] };
    }
  };
};
