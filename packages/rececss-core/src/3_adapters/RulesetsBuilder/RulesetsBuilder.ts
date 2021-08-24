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

  addRulesetFromKeyword(kw: keyof KeywordsMap, values?: [string, string]) {
    const classname = this.getClassname(kw, values?.[0]);
    const declarations = this.getDeclaration(kw, values?.[1]);
    const classnameVariants = this.getVariants(kw);
    this.addRulesetFromDTO({ classname, declarations, classnameVariants });
  }

  addRulesetFromDTO(dto: IRuleset.DTO) {
    this.result.push(dto);
  }

  getClassname(keyword: keyof ClassnamesMap, ...values: Placeholders) {
    return this.interpolate(this.dto.classnamesMap[keyword], values);
  }

  getDeclaration(keyword: keyof DeclarationsMap, ...values: Placeholders) {
    return this.interpolate(this.dto.declarationsMap[keyword], values);
  }

  getVariants(keyword: keyof VariantsMap) {
    return this.dto.variantsMap[keyword];
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
