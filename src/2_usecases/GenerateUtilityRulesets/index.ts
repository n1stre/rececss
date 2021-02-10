import * as errors from "./GenerateUtilityRulesets.errors";
import build from "./GenerateUtilityRulesets";

const UseCase = build();

export default Object.freeze({
  build,
  make: (...args: ConstructorParameters<typeof UseCase>) => {
    return new UseCase(...args);
  },
});
