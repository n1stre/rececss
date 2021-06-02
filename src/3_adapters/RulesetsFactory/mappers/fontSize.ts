import {
  RulesetsBuilder,
  ConfigurableValues,
} from "../RulesetsFactory.interface";

export default (builder: RulesetsBuilder) =>
  function mapFontSize(values: ConfigurableValues) {
    if (values.fontSize) {
      Object.entries(values.fontSize).forEach(([key, value]) => {
        const values = value.split("/");
        const rule = values.length > 1 ? "fontSizeWithLineHeight" : "fontSize";
        const classname = builder.getClassname("fontSize", key);
        const declarations = builder.getDeclaration(rule, ...values);
        const classnameVariants = builder.getVariants("fontSize");
        builder.addRuleset({ classname, classnameVariants, declarations });
      });
    }
  };
