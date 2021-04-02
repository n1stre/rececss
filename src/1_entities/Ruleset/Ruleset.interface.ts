export interface Props {
  prefixSep: string;
  suffixSep: string;
}

export interface DTO {
  selectorTransform?: string;
  classname: string;
  classnamePrefix?: string;
  classnameStates?: Record<string, string>;
  declarations: string;
}

export interface Instance {
  addClassnamePrefix: (prefix: string) => Instance;
  toString: () => string;
  toPrefixedString: (prefix: string) => string;
  toDTO: () => DTO;
}

export interface Factory {
  create: (dto: DTO) => Instance;
}
