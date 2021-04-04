import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function addFlexGrid(v?: {
    cols?: number;
    gutter?: string;
    gutters?: Record<string, string>;
  }) {
    if (!v) return [];

    const { cols = 12, gutter = "20px", gutters } = v;
    const createRow = makeCreateFlexRow(builder);
    const createCol = makeCreateFlexCol(builder);

    const classname = builder.getClassname("flexRow");
    createRow(classname, gutter);

    for (let key in gutters) {
      const classname = builder.getClassname("flexRowGuttered", key);
      createRow(classname, gutters[key]);
    }

    for (let col = 1; col <= cols; col++) {
      const width = (col / cols) * 100;
      createCol(col, width);
    }

    return builder.getResult();
  };

function makeCreateFlexRow(builder: RulesetsBuilder) {
  return function createFlexRow(classname: string, gutter: string) {
    builder.addRulesetWithStates({
      classname,
      declarations: builder.getDeclaration("flexRow", getSpacing(gutter)),
    });

    builder.addRulesetWithStates({
      classname,
      declarations: builder.getDeclaration("flexRowChild", getSpacing(gutter)),
      selectorTransform: "$0 > *",
    });
  };
}

function makeCreateFlexCol(builder: RulesetsBuilder) {
  return function createFlexCol(col: number, width: number) {
    builder.addRulesetWithStates({
      classname: builder.getClassname("flexCol", String(col)),
      declarations: builder.getDeclaration("flexCol", width + "%"),
    });
  };
}

function getSpacing(gutter: string) {
  const gutterValue = parseFloat(gutter);
  const spacingValue = gutterValue / 2;
  return gutter.replace(String(gutterValue), String(spacingValue));
}
