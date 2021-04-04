import {
  IRulesetsFactory,
  TConfigurableRulesetsValues,
} from "../../2_usecases/interfaces";
import RulesetsBuilder from "../RulesetsBuilder";
import {
  DTO,
  RulesetsBuilder as IRulesetsBuilder,
} from "./RulesetsFactory.interface";
import * as methods from "./methods";

export default class RulesetsFactory implements IRulesetsFactory {
  private builder: IRulesetsBuilder = RulesetsBuilder.create(this.dto);

  private constructor(private dto: DTO) {}

  static create(dto: DTO = {}) {
    return new RulesetsFactory(dto);
  }

  createSize = methods.makeCreateSize(this.builder);
  createMargin = methods.makeCreateMargin(this.builder);
  createPadding = methods.makeCreatePadding(this.builder);
  createOffset = methods.makeCreateOffset(this.builder);
  createFont = methods.makeCreateFont(this.builder);
  createFlex = methods.makeCreateFlex(this.builder);
  createFlexGrid = methods.makeCreateFlexGrid(this.builder);
  createBorder = methods.makeCreateBorder(this.builder);
  createColor = methods.makeCreateColor(this.builder);
  createText = methods.makeCreateText(this.builder);
  createZIndex = methods.makeCreateZIndex(this.builder);
  createDisplay = methods.makeCreateDisplay(this.builder);
  createPosition = methods.makeCreatePosition(this.builder);
  createOpacity = methods.makeCreateOpacity(this.builder);
  createOverflow = methods.makeCreateOverflow(this.builder);
  createVisibility = methods.makeCreateVisibility(this.builder);
  createList = methods.makeCreateList(this.builder);
  createCursor = methods.makeCreateCursor(this.builder);

  createAll(dto: TConfigurableRulesetsValues) {
    return [
      this.createSize(dto.size),
      this.createMargin(dto.margin),
      this.createPadding(dto.padding),
      this.createOffset(dto.offset),
      this.createFont(dto.font),
      this.createBorder(dto.border),
      this.createColor(dto.color),
      this.createFlex(dto.flex),
      this.createFlexGrid(dto.flex?.grid),
      this.createZIndex(dto.zIndex),
      this.createDisplay(),
      this.createPosition(),
      this.createText(),
      this.createVisibility(),
      this.createCursor(),
      this.createList(),
      this.createOverflow(),
      this.createOpacity(),
    ].flat();
  }
}
