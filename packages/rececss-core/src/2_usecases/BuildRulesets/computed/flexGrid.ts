import { ComputedRulesetCreator } from "../BuildRulesets.interface";

const createFlexGridRulesets: ComputedRulesetCreator = (values, builder) => {
  if (!values.flexGrid) return;

  const { cols, gutter = "20px", gutters } = values.flexGrid;
  const classname = builder.getClassname("flexRow");
  const classnameVariants = builder.getVariants("flexGrid");

  createRow(classname, gutter);

  for (let key in gutters) {
    const classname = builder.getClassname("flexRowGuttered", key);
    createRow(classname, gutters[key]);
  }

  for (let col = 1; col <= cols; col++) {
    const width = (col / cols) * 100;
    createCol(col, width);
  }

  function createRow(classname: string | undefined, gutter: string) {
    const spacing = getSpacing(gutter);

    builder.addRulesetFromDTO({
      classname,
      classnameVariants,
      declarations: builder.getDeclaration("flexRow", spacing),
    });

    builder.addRulesetFromDTO({
      classname,
      classnameVariants,
      declarations: builder.getDeclaration("flexRowChild", spacing),
      selectorTransform: "& > *",
    });
  }

  function createCol(col: number, width: number) {
    builder.addRulesetFromDTO({
      classname: builder.getClassname("flexCol", String(col)),
      classnameVariants,
      declarations: builder.getDeclaration("flexCol", width + "%"),
    });
  }
};

function getSpacing(gutter: string) {
  const gutterValue = parseFloat(gutter);
  const spacingValue = gutterValue / 2;
  return gutter.replace(String(gutterValue), String(spacingValue));
}

export default createFlexGridRulesets;
