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

  addSize(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `w_${e[0]}`, declarations: `width: ${e[1]};` },
      { classname: `h_${e[0]}`, declarations: `height: ${e[1]};` },
    ]);

    return this;
  }

  addMargin(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `m_${e[0]}`, declarations: `margin: ${e[1]};` },
    ]);
    return this;
  }

  addPadding(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `p_${e[0]}`, declarations: `padding: ${e[1]};` },
    ]);
    return this;
  }

  addOffset(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `oft_${e[0]}`, declarations: `top: ${e[1]};` },
      { classname: `ofb_${e[0]}`, declarations: `bottom: ${e[1]};` },
    ]);
    return this;
  }

  addZIndex(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `z_${e[0]}`, declarations: `z-index: ${e[1]};` },
    ]);
    return this;
  }

  addFontSize(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `fz_${e[0]}`, declarations: `font-size: ${e[1]};` },
    ]);
    return this;
  }

  addFontFamily(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `ff_${e[0]}`, declarations: `font-family: ${e[1]};` },
    ]);
    return this;
  }

  addBorder(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `brd_${e[0]}`, declarations: `border: ${e[1]};` },
      { classname: `brdl_${e[0]}`, declarations: `border-left: ${e[1]};` },
    ]);
    return this;
  }

  addBorderRadius(values: Record<string, string>) {
    this.add(values, (e) => [
      { classname: `brra_${e[0]}`, declarations: `border-radius: ${e[1]};` },
    ]);

    return this;
  }

  private add(values: Record<string, string>, fn: (v: any) => IRulesetDTO[]) {
    if (!values) return;
    this.result = this.result.concat(Object.entries(values).flatMap(fn));
  }
}
