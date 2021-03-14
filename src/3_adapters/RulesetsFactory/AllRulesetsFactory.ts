import {
  IRulesetsFactory,
  TConfigurableRulesetsValues,
} from "../../2_usecases/interfaces";
import { IRulesetsBuilder } from "../RulesetsBuilder/RulesetsBuilder.interface";

export default class AllRulesetsFactory implements IRulesetsFactory {
  constructor(private builder: IRulesetsBuilder) {}

  create(dto: TConfigurableRulesetsValues) {
    return this.builder
      .addSize(dto.size)
      .addMargin(dto.margin)
      .addPadding(dto.padding)
      .addOffset(dto.offset)
      .addFont(dto.font)
      .addBorder(dto.border)
      .addColor(dto.color)
      .addFlex(dto.flex)
      .addZIndex(dto.zIndex)
      .addDisplay()
      .addPosition()
      .addText()
      .addVisibility()
      .addCursor()
      .addList()
      .addOverflow()
      .addOpacity()
      .getResult();
  }
}
