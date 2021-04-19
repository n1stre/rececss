import { Range } from "../utils";
import Config from "./Config";
export * as IConfig from "./Config.interfaces";

export default Config.createFactory({
  isRangeable: Range.isRangeable,
  rangeInclusive: (v: number[]) => Range.createInclusive(v[0], v[1], v[2]),
});
