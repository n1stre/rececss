import filter from "./filter";
import flexGrid from "./flexGrid";
import fontSize from "./fontSize";
import transform from "./transform";
import {
  CompoundRulesetCreator,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

const compounds: Partial<
  Record<keyof ConfigurableValues, CompoundRulesetCreator>
> = {
  filter,
  flexGrid,
  fontSize,
  transform,
};

export default compounds;
