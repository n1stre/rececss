export interface Props {
  prefixSep: string;
  suffixSep: string;
}

export interface DTO {
  classname: string;
  classnamePrefix?: string;
  declarations: string;
  pseudoClasses?: Record<string, string>;
}

export interface Instance {
  addClassnamePrefix: (prefix: string) => Instance;
  toString: () => string;
  toPrefixedString: (prefix: string) => string;
  toDTO: () => DTO;
}
