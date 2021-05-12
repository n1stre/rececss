import { RulesetsBuilder } from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapFontSize(values?: Record<string, string>) {
    if (values) {
      Object.entries(values).forEach(([key, value]) => {
        const values = value.split("/");
        const rule = values.length > 1 ? "fontSizeWithLineHeight" : "fontSize";
        const classname = builder.getClassname("fontSize", key);
        const declarations = builder.getDeclaration(rule, ...values);
        builder.addRuleset({ classname, declarations });
      });
    }
  };
