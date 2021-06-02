import { IRuleset } from "../../1_entities/Ruleset";
import { DTO, Variants, Placeholders } from "./RulesetsBuilder.interface";

export default class RulesetsBuilder<
  KeywordsMap extends Record<string, string>,
  ClassnamesMap extends KeywordsMap,
  DeclarationsMap extends KeywordsMap,
  VariantsMap extends Partial<Record<keyof KeywordsMap, Variants>>,
> {
  private constructor(
    private dto: DTO<KeywordsMap, ClassnamesMap, DeclarationsMap, VariantsMap>,
  ) {}

  private result: IRuleset.DTO[] = [];

  // prettier-ignore
  static create<K extends Record<string, string>, C extends K, D extends K, V extends Partial<Record<keyof K, Variants>>>(dto: DTO<K, C, D, V>) {
    return new RulesetsBuilder<K, C, D, V>(dto);
  }

  getResult() {
    return this.result;
  }

  mapKeywordsToRulesets(
    keywords: Array<keyof KeywordsMap>,
    val?: [string, string],
  ) {
    keywords.forEach((kw) => {
      this.addRulesetFromKeyword(kw, val);
    });
  }

  mapValuesToRulesets(
    values: Record<string, string> | undefined,
    keywords: Array<keyof KeywordsMap>,
  ) {
    if (!values) return;
    Object.entries(values).forEach((val) => {
      this.mapKeywordsToRulesets(keywords, val);
    });
  }

  mapSingleValuesToRulesets(
    values: Record<string, string> | undefined,
    keywords: Array<keyof KeywordsMap>,
  ) {
    if (!values) return;
    const filterSingleValue = ([_, v]: string[]) => v.split(" ").length === 1;
    const filteredEntries = Object.entries(values).filter(filterSingleValue);
    const filteredValues = Object.fromEntries(filteredEntries);
    return this.mapValuesToRulesets(filteredValues, keywords);
  }

  addRulesetFromKeyword(kw: keyof KeywordsMap, val?: [string, string]) {
    const classname = this.getClassname(kw, val?.[0]);
    const declarations = this.getDeclaration(kw, val?.[1]);
    const classnameVariants = this.getVariants(kw);
    this.addRuleset({ classname, declarations, classnameVariants });
  }

  addRuleset(dto: IRuleset.DTO) {
    this.result.push(dto);
  }

  getClassname(keyword: keyof ClassnamesMap, ...values: Placeholders) {
    return this.interpolate(this.dto.classnamesMap[keyword], values);
  }

  getDeclaration(keyword: keyof DeclarationsMap, ...values: Placeholders) {
    return this.interpolate(this.dto.declarationsMap[keyword], values);
  }

  getVariants(keyword: keyof VariantsMap) {
    const common = this.dto.commonVariants;
    const local = this.dto.variantsMap[keyword];
    if (common || local) {
      console.log(keyword, local, common);
      return Object.assign({}, common, local);
    }
  }

  private interpolate(data: string, placeholders?: Placeholders) {
    if (!placeholders || !placeholders.length) return data;

    placeholders.forEach((value, idx) => {
      if (!value) return;
      data = data.replace(new RegExp(`\\$${idx}`, "g"), value);
    });

    return data;
  }
}
