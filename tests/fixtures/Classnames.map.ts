import { IRulesetNamesMap } from "../../src/3_adapters/RulesetsBuilder";

const RulesetsEmmetClassnamesMap: IRulesetNamesMap<string> = {
  widthAuto: "w_a",
  heightAuto: "h_a",
  width: `w_$0`,
  height: `h_$0`,
  minWidth: `miw_$0`,
  minHeight: `mih_$0`,
  maxWidth: `maw_$0`,
  maxHeight: `mah_$0`,

  padding: `p_$0`,
  paddingTop: `pt_$0`,
  paddingBottom: `pb_$0`,
  paddingVertical: `pver_$0`,
  paddingLeft: `pl_$0`,
  paddingRight: `pr_$0`,
  paddingHorizontal: `phor_$0`,

  margin: `m_$0`,
  marginTop: `mt_$0`,
  marginBottom: `mb_$0`,
  marginVertical: `mver_$0`,
  marginLeft: `ml_$0`,
  marginRight: `mr_$0`,
  marginHorizontal: `mhor_$0`,

  top: `t_$0`,
  bottom: `b_$0`,
  left: `l_$0`,
  right: `r_$0`,

  positionStatic: `pos_s`,
  positionRelative: `pos_r`,
  positionAbsolute: `pos_a`,
  positionFixed: `pos_f`,
  zIndex: `z_$0`,

  fontSize: `fz_$0`,
  fontFamily: `ff_$0`,

  border: `bd_$0`,
  borderLeft: `bdl_$0`,
  borderRight: `bdr_$0`,
  borderTop: `bdt_$0`,
  borderBottom: `bdb_$0`,
  borderRadius: `bdrs_$0`,

  color: `c_$0`,
  backgroundColor: `bgc_$0`,
};

export default RulesetsEmmetClassnamesMap;
