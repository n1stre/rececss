import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapFlexGrid(v?: {
    cols?: number;
    gutter?: string;
    gutters?: Record<string, string>;
  }) {
    if (!v) return [];
    const { cols = 12, gutter = "20px", gutters } = v;
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

    function createRow(classname: string, gutter: string) {
      const spacing = getSpacing(gutter);

      builder.addRuleset({
        classname,
        declarations: builder.getDeclaration("flexRow", spacing),
      });

      builder.addRuleset({
        classname,
        declarations: builder.getDeclaration("flexRowChild", spacing),
        selectorTransform: "$0 > *",
      });
    }

    function createCol(col: number, width: number) {
      builder.addRuleset({
        classname: builder.getClassname("flexCol", String(col)),
        declarations: builder.getDeclaration("flexCol", width + "%"),
      });
    }
  };

function getSpacing(gutter: string) {
  const gutterValue = parseFloat(gutter);
  const spacingValue = gutterValue / 2;
  return gutter.replace(String(gutterValue), String(spacingValue));
}
