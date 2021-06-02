import {
  ConfigurableValues,
  MapperCreator,
} from "../RulesetsFactory.interface";

import flexGrid from "./flexGrid";
import fontSize from "./fontSize";
import margin from "./margin";
import padding from "./padding";
import inset from "./inset";
import border from "./border";
import borderColor from "./borderColor";
import borderRadius from "./borderRadius";
import borderStyle from "./borderStyle";
import borderWidth from "./borderWidth";
import overflow from "./overflow";
import overscrollBehavior from "./overscrollBehavior";
import transformTranslate from "./transformTranslate";
import transformRotate from "./transformRotate";
import transformScale from "./transformScale";
import transformSkew from "./transformSkew";
import compounds from "./compounds";

const mapperCreators: Partial<
  Record<keyof ConfigurableValues | "compounds", MapperCreator>
> = Object.freeze({
  flexGrid,
  fontSize,
  margin,
  padding,
  inset,
  border,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  overflow,
  overscrollBehavior,
  transformTranslate,
  transformRotate,
  transformScale,
  transformSkew,
  compounds,
});

export default mapperCreators;
