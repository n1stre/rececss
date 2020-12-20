import prebuildClassnamesMapper from "./ClassnamesMapper";

const ClassnamesMapper = Object.freeze({
  prebuild: prebuildClassnamesMapper,
  make: prebuildClassnamesMapper({ valueSymbol: "$VAL" }),
});

export default ClassnamesMapper;
