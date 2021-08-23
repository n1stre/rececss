export interface Props {
  prefixSep: string;
  suffixSep: string;
}

export interface DTO {
  selectorTransform?: string;
  classname: string;
  classnamePrefix?: string;
  classnameVariants?: Record<string, string>;
  declarations: string;
}

export interface Instance {
  setClassnamePrefix: (prefix: string) => Instance;
  toString: () => string;
  toPrefixedString: (prefix: string) => string;
  toDTO: () => DTO;
}

export interface Factory {
  create: (dto: DTO) => Instance;
}
