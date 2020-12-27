import {
  CSSRulesetDTO,
  CSSRulesetInstance,
  CSSProperty,
  CSSDeclarationDTO,
} from "./CssRuleset.interface";

export default (p: {}) => {
  return function makeCSSRuleset(input: CSSRulesetDTO): CSSRulesetInstance {
    const dto = {
      selector: input.selector || null,
      declarations: { ...(input.declarations || {}) },
    };

    return Object.freeze({
      getSelector: () => dto.selector || null,

      getDeclarations: () => dto.declarations,

      getDeclaration: (property: CSSProperty) => findDeclaration(property),

      getDeclarationValue: (property: CSSProperty) => {
        return findDeclaration(property)?.value || null;
      },

      setSelector(selector: string) {
        dto.selector = selector;
        return this;
      },

      setDeclarations(declarations: CSSDeclarationDTO) {
        dto.declarations = declarations;
        return this;
      },

      addDeclarations(declarations: CSSDeclarationDTO) {
        dto.declarations = { ...dto.declarations, ...declarations };
        return this;
      },

      removeDeclaration(property: CSSProperty) {
        delete dto.declarations[property];
        return this;
      },

      toString: () => {
        if (!dto.selector) return "";
        return `${dto.selector} { ${declarationsToString()} }`;
      },

      toDTO: () => dto,
    });

    function declarationsToString() {
      return Object.entries(dto.declarations)
        .map((d) => `${d[0]}: ${d[1]};`)
        .join(" ");
    }

    function findDeclaration(prop: CSSProperty) {
      if (dto.declarations[prop] === undefined) return null;
      return { prop, value: dto.declarations[prop] };
    }
  };
};
