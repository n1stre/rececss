import { IRuleset } from "../Ruleset";
import {
  ClassnamesMap,
  DTO,
  DeclarationsMap,
  CSSProperties,
  Placeholders,
  VariantsMap,
} from "./RulesetsListBuilder.interface";

export default class RulesetsListBuilder {
  private result: IRuleset.DTO[] = [];
  private constructor(private dto: DTO) {}

  static create(dto: DTO) {
    return new RulesetsListBuilder(dto);
  }

  getResult() {
    return this.result;
  }

  addRulesetFromKeyword(kw: keyof CSSProperties, values?: [string, string]) {
    const classname = this.getClassname(kw, values?.[0]);
    const declarations = this.getDeclaration(kw, values?.[1]);
    const classnameVariants = this.getVariants(kw);
    this.addRulesetFromDTO({ classname, declarations, classnameVariants });
  }

  addRulesetFromDTO(dto: Partial<IRuleset.DTO>) {
    if (!dto.classname || !dto.declarations) return;
    this.result.push(dto as IRuleset.DTO);
  }

  getClassname(keyword: keyof ClassnamesMap, ...values: Placeholders) {
    const classname = this.dto.classnamesMap[keyword];
    if (classname) return this.interpolate(classname, values);
  }

  getDeclaration(keyword: keyof DeclarationsMap, ...values: Placeholders) {
    const declaration = this.dto.declarationsMap[keyword];
    if (declaration) return this.interpolate(declaration, values);
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
