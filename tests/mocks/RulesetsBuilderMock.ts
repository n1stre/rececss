import { IRulesetDTO } from "../../src/1_entities/Ruleset/Ruleset.interface";
import { IRulesetsBuilder } from "../../src/2_usecases/interfaces";

export default class RulesetsBuilderMock implements IRulesetsBuilder {
  private result: IRulesetDTO[];

  constructor() {
    this.result = [];
  }

  getResult() {
    return this.result;
  }

  private add(values: Record<string, string>, fn: (v: any) => IRulesetDTO[]) {
    this.result = this.result.concat(Object.entries(values).flatMap(fn));
  }

  addSize(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `w_${e[0]}`, declarations: `width: ${e[1]};` },
      { classname: `h_${e[0]}`, declarations: `height: ${e[1]};` },
    ]);
  }

  addMargin(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `m_${e[0]}`, declarations: `margin: ${e[1]};` },
    ]);
  }

  addPadding(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `p_${e[0]}`, declarations: `padding: ${e[1]};` },
    ]);
  }

  addOffset(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `oft_${e[0]}`, declarations: `top: ${e[1]};` },
      { classname: `ofb_${e[0]}`, declarations: `bottom: ${e[1]};` },
    ]);
  }

  addZIndex(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `z_${e[0]}`, declarations: `top: ${e[1]};` },
    ]);
  }

  addFontSize(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `fz_${e[0]}`, declarations: `font-size: ${e[1]};` },
    ]);
  }

  addFontFamily(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `ff_${e[0]}`, declarations: `font-family: ${e[1]};` },
    ]);
  }

  addBorder(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `brd_${e[0]}`, declarations: `border: ${e[1]};` },
      { classname: `brdl_${e[0]}`, declarations: `border-left: ${e[1]};` },
    ]);
  }

  addBorderRadius(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `brra_${e[0]}`, declarations: `border-radius: ${e[1]};` },
    ]);
  }
}
