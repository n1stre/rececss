export interface Props {
  filename: string;
  extension: string;
}

export interface DTO {
  rulesets: string[];
  media?: MediaDTO;
}

export interface MediaDTO {
  name: string;
  query: string;
}

export interface Instance {
  getRulesets: () => string[];
  getMedia: () => MediaDTO | undefined;
  getName: () => string;
  setMedia: (media: MediaDTO) => Instance;
  toString: () => string;
  toDTO: () => DTO;
}

export interface Factory {
  create: (dto: DTO) => Instance;
}
