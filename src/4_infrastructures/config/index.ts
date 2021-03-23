import { Range } from "../utils";
import { IConfig } from "./interfaces";
import buildConfig from "./Config";

const ConfigImpl = buildConfig({
  isRangeable: Range.isRangeable,
  rangeInclusive: (v: number[]) => Range.createInclusive(v[0], v[1], v[2]),
});

const Config = Object.freeze({
  new: (...p: ConstructorParameters<typeof ConfigImpl>): IConfig =>
    new ConfigImpl(...p),
});

export default Config;
