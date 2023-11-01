import { ComputedRulesetCreator } from "../BuildRulesets.interface";

const createFontSizeRulesets: ComputedRulesetCreator = (values, builder) => {
  if (values.fontSize) {
    Object.entries(values.fontSize).forEach(([key, value]) => {
      const values = value.split("/");
      const rule = values.length > 1 ? "fontSizeWithLineHeight" : "fontSize";

      builder.addRulesetFromDTO({
        classname: builder.getClassname("fontSize", key),
        classnameVariants: builder.getVariants("fontSize"),
        declarations: builder.getDeclaration(rule, ...values),
      });
    });
  }
};

export default createFontSizeRulesets;
