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
      declarations: [...(input.declarations || [])],
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
      setDeclarations(declarations: CSSDeclarationDTO[]) {
        dto.declarations = declarations;
        return this;
      },
      addDeclaration(declaration: CSSDeclarationDTO) {
        dto.declarations.push(declaration);
        return this;
      },
      removeDeclaration(property: CSSProperty) {
        dto.declarations = dto.declarations.filter(
          (d) => d.property !== property,
        );
        return this;
      },
      toString: () => {
        if (!dto.selector) return "";
        return `${dto.selector} { ${declarationsToString()} }`;
      },
      toDTO: () => dto,
    });

    function declarationsToString() {
      return dto.declarations
        .map((d) => `${d.property}: ${d.value};`)
        .join(" ");
    }

    function findDeclaration(property: CSSProperty) {
      return dto.declarations.find((d) => d.property === property) || null;
    }
  };
};
