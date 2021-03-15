import { IConfig } from "../interfaces";
import ConfigImpl from "./Config";

const Config = Object.freeze({
  new: (...p: ConstructorParameters<typeof ConfigImpl>): IConfig =>
    new ConfigImpl(...p),
});

export default Config;
