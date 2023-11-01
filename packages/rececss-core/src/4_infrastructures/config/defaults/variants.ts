import { Variants } from "../Config.interfaces";

const VARIANTS = {
  hover: { h: "&:hover" },
  hoverTarget: { "@h": ".\\@:hover &:not(.\\@:hover .\\@ &)" },
  focus: { f: "&:focus" },
  focusTarget: { "@f": ".\\@:focus &" },
  js: { js: "&.js" },
  jsTarget: { "@js": ".\\@.js &:not(.\\@.js .\\@ &)" },
  important: { "!": "&&" },
};

const variantsMap: Variants = {
  border: { ...VARIANTS.hover, ...VARIANTS.focus },
  boxShadow: { ...VARIANTS.hover, ...VARIANTS.focus },
  borderWidth: { ...VARIANTS.important },
  color: { ...VARIANTS.hover, ...VARIANTS.focus },
  backgroundColor: { ...VARIANTS.hover, ...VARIANTS.focus },
  display: { ...VARIANTS.hoverTarget, ...VARIANTS.jsTarget },
  opacity: { ...VARIANTS.hover, ...VARIANTS.hoverTarget, ...VARIANTS.jsTarget },
  textDecoration: { ...VARIANTS.hover },
  transform: {
    ...VARIANTS.hover,
    ...VARIANTS.hoverTarget,
    ...VARIANTS.jsTarget,
  },
};

export default variantsMap;
