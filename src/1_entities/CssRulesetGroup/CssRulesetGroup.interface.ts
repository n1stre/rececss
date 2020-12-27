import { CSSRulesetDTO } from "../CssRuleset/CssRuleset.interface";

export type CssRulesetGroupItem = [string, Record<string, string | number>];

export interface CssRulesetGroupInstance {
  addItems: (...dto: CssRulesetGroupItem[]) => CssRulesetGroupInstance;
  addItemsFromValues: (
    values: (string | number)[],
    ...mapFns: ((value: string | number) => CssRulesetGroupItem)[]
  ) => CssRulesetGroupInstance;
  addItemsFromMap: (
    map: Record<string, string>,
    ...mapFns: ((value: {
      name: string;
      value: string;
    }) => CssRulesetGroupItem)[]
  ) => CssRulesetGroupInstance;
  toString: () => string;
  toDTO: () => CssRulesetGroupItem[];
  toRulesetsDTO: () => CSSRulesetDTO[] | null;
}
