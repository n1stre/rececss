import { ConfigInstance } from "../ConfigAdapter.types";

export default () => {
  return function makeConfigAdapter(): ConfigInstance {
    return Object.freeze({});
  };
};
