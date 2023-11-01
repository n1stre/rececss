import { RuleUnit } from "../Config.interfaces";

const unitsMap: Record<RuleUnit, string> = {
  $cm: "cm",
  $mm: "mm",
  $in: "in",
  $pc: "pc",
  $pt: "pt",
  $px: "px",
  $em: "em",
  $ex: "ex",
  $ch: "ch",
  $rem: "rem",
  $vw: "vw",
  $vh: "vh",
  $vmin: "vmin",
  $vmax: "vmax",
  $percent: "%",
  $pct: "%",
  $number: "",
  $num: "",
  $deg: "deg",
  $grad: "grad",
  $rad: "rad",
  $turn: "turn",
};

export default unitsMap;
