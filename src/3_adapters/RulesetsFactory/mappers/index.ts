import { Mappers, RulesetsBuilder } from "../RulesetsFactory.interface";

import makeMapFlexGrid from "./flexGrid";
import makeMapFontSize from "./fontSize";
import makeMapMargin from "./margin";
import makeMapPadding from "./padding";
import makeMapInset from "./inset";
import makeMapBorder from "./border";
import makeMapBorderColor from "./borderColor";
import makeMapBorderRadius from "./borderRadius";
import makeMapBorderStyle from "./borderStyle";
import makeMapBorderWidth from "./borderWidth";
import makeMapOverflow from "./overflow";
import makeMapOverscrollBehavior from "./overscrollBehavior";
import makeTransformTranslate from "./transformTranslate";
import makeTransformRotate from "./transformRotate";
import makeTransformScale from "./transformScale";
import makeTransformSkew from "./transformSkew";

export default function createMappers(builder: RulesetsBuilder): Mappers {
  return Object.freeze({
    flexGrid: makeMapFlexGrid(builder),
    fontSize: makeMapFontSize(builder),
    margin: makeMapMargin(builder),
    padding: makeMapPadding(builder),
    inset: makeMapInset(builder),
    border: makeMapBorder(builder),
    borderColor: makeMapBorderColor(builder),
    borderRadius: makeMapBorderRadius(builder),
    borderStyle: makeMapBorderStyle(builder),
    borderWidth: makeMapBorderWidth(builder),
    overflow: makeMapOverflow(builder),
    overscrollBehavior: makeMapOverscrollBehavior(builder),
    transformTranslate: makeTransformTranslate(builder),
    transformRotate: makeTransformRotate(builder),
    transformScale: makeTransformScale(builder),
    transformSkew: makeTransformSkew(builder),
  });
}
