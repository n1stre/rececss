import RulesetsBuilder from "./index";

describe("RulesetsBuilder", () => {
  it("should build size rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const width = { "20": "20px", "2em": "2em" };
    const height = { "50": "50px" };
    const res = rulesetsBuilder.addSize({ width, height }).getResult();

    expect(res).toEqual([
      { classname: "w_a", declarations: "width: auto;" },
      { classname: "w_20", declarations: "width: 20px;" },
      { classname: "miw_20", declarations: "min-width: 20px;" },
      { classname: "maw_20", declarations: "max-width: 20px;" },
      { classname: "w_2em", declarations: "width: 2em;" },
      { classname: "miw_2em", declarations: "min-width: 2em;" },
      { classname: "maw_2em", declarations: "max-width: 2em;" },
      { classname: "h_a", declarations: "height: auto;" },
      { classname: "h_50", declarations: "height: 50px;" },
      { classname: "mih_50", declarations: "min-height: 50px;" },
      { classname: "mah_50", declarations: "max-height: 50px;" },
    ]);
  });

  it("should build margin rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const shorthand = { "0a": "0 auto" };
    const edges = { "20": "20px", "2em": "2em" };
    const res = rulesetsBuilder.addMargin({ shorthand, edges }).getResult();

    // prettier-ignore
    expect(res).toEqual([
      { classname: "m_0a", declarations: "margin: 0 auto;" },
      { classname: "m_20", declarations: "margin: 20px;" },
      { classname: "mt_20", declarations: "margin-top: 20px;" },
      { classname: "mb_20", declarations: "margin-bottom: 20px;" },
      { classname: "mver_20", declarations: "margin-top: 20px; margin-bottom: 20px;" },
      { classname: "ml_20", declarations: "margin-left: 20px;" },
      { classname: "mr_20", declarations: "margin-right: 20px;" },
      { classname: "mhor_20", declarations: "margin-left: 20px; margin-right: 20px;" },
      { classname: "m_2em", declarations: "margin: 2em;" },
      { classname: "mt_2em", declarations: "margin-top: 2em;" },
      { classname: "mb_2em", declarations: "margin-bottom: 2em;" },
      { classname: "mver_2em", declarations: "margin-top: 2em; margin-bottom: 2em;" },
      { classname: "ml_2em", declarations: "margin-left: 2em;" },
      { classname: "mr_2em", declarations: "margin-right: 2em;" },
      { classname: "mhor_2em", declarations: "margin-left: 2em; margin-right: 2em;" },
    ]);
  });

  it("should build padding rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const shorthand = { btn: "10px 20px" };
    const edges = { "20": "20px", "2em": "2em" };
    const res = rulesetsBuilder.addPadding({ shorthand, edges }).getResult();

    // prettier-ignore
    expect(res).toEqual([
      { classname: "p_btn", declarations: "padding: 10px 20px;" },
      { classname: "p_20", declarations: "padding: 20px;" },
      { classname: "pt_20", declarations: "padding-top: 20px;" },
      { classname: "pb_20", declarations: "padding-bottom: 20px;" },
      { classname: "pver_20", declarations: "padding-top: 20px; padding-bottom: 20px;" },
      { classname: "pl_20", declarations: "padding-left: 20px;" },
      { classname: "pr_20", declarations: "padding-right: 20px;" },
      { classname: "phor_20", declarations: "padding-left: 20px; padding-right: 20px;" },
      { classname: "p_2em", declarations: "padding: 2em;" },
      { classname: "pt_2em", declarations: "padding-top: 2em;" },
      { classname: "pb_2em", declarations: "padding-bottom: 2em;" },
      { classname: "pver_2em", declarations: "padding-top: 2em; padding-bottom: 2em;" },
      { classname: "pl_2em", declarations: "padding-left: 2em;" },
      { classname: "pr_2em", declarations: "padding-right: 2em;" },
      { classname: "phor_2em", declarations: "padding-left: 2em; padding-right: 2em;" },
    ]);
  });

  it("should build offset rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const values = { "20": "20px", "2em": "2em" };
    const res = rulesetsBuilder.addOffset(values).getResult();

    expect(res).toEqual([
      { classname: "t_20", declarations: "top: 20px;" },
      { classname: "b_20", declarations: "bottom: 20px;" },
      { classname: "l_20", declarations: "left: 20px;" },
      { classname: "r_20", declarations: "right: 20px;" },
      { classname: "t_2em", declarations: "top: 2em;" },
      { classname: "b_2em", declarations: "bottom: 2em;" },
      { classname: "l_2em", declarations: "left: 2em;" },
      { classname: "r_2em", declarations: "right: 2em;" },
    ]);
  });

  it("should build z index rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const values = { modal: "1000", toast: "200" };
    const res = rulesetsBuilder.addZIndex(values).getResult();

    expect(res).toEqual([
      { classname: "z_a", declarations: "z-index: auto;" },
      { classname: "z_modal", declarations: "z-index: 1000;" },
      { classname: "z_toast", declarations: "z-index: 200;" },
    ]);
  });

  it("should build font rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const shorthand = { main: "italic bold .8em/1.2 Arial, sans-serif" };
    const family = { main: "Arial", second: "Helvetica, sans-serif" };
    const size = { "20": "20px", "2em": "2em" };

    const res = rulesetsBuilder
      .addFont({ shorthand, size, family })
      .getResult();

    // prettier-ignore
    expect(res).toEqual([
      { classname: "f_main", declarations: "font: italic bold .8em/1.2 Arial, sans-serif;" },
      { classname: "ff_main", declarations: "font-family: Arial;" },
      { classname: "ff_second", declarations: "font-family: Helvetica, sans-serif;" },
      { classname: "fz_20", declarations: "font-size: 20px;" },
      { classname: "fz_2em", declarations: "font-size: 2em;" },
    ]);
  });

  it("should build border rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const shorthand = { thin: "1px solid black", bold: "5px solid black" };
    const radius = { "50%": "50%", "5px": "5px" };

    const res = rulesetsBuilder.addBorder({ shorthand, radius }).getResult();

    // prettier-ignore
    expect(res).toEqual([
      { classname: "bd_thin", declarations: "border: 1px solid black;" },
      { classname: "bdt_thin", declarations: "border-top: 1px solid black;" },
      { classname: "bdb_thin", declarations: "border-bottom: 1px solid black;" },
      { classname: "bdl_thin", declarations: "border-left: 1px solid black;" },
      { classname: "bdr_thin", declarations: "border-right: 1px solid black;" },
      { classname: "bd_bold", declarations: "border: 5px solid black;" },
      { classname: "bdt_bold", declarations: "border-top: 5px solid black;" },
      { classname: "bdb_bold", declarations: "border-bottom: 5px solid black;" },
      { classname: "bdl_bold", declarations: "border-left: 5px solid black;" },
      { classname: "bdr_bold", declarations: "border-right: 5px solid black;" },
      { classname: "bdrs_50%", declarations: "border-radius: 50%;" },
      { classname: "bdrs_5px", declarations: "border-radius: 5px;" },
    ]);
  });

  it("should build color rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const colors = { dark: "#000", light: "#fff", blue: "#0000ff" };
    const res = rulesetsBuilder.addColor(colors).getResult();

    expect(res).toEqual([
      { classname: "bgc_dark", declarations: "background-color: #000;" },
      { classname: "c_dark", declarations: "color: #000;" },
      { classname: "bgc_light", declarations: "background-color: #fff;" },
      { classname: "c_light", declarations: "color: #fff;" },
      { classname: "bgc_blue", declarations: "background-color: #0000ff;" },
      { classname: "c_blue", declarations: "color: #0000ff;" },
    ]);
  });

  it("should build position rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const res = rulesetsBuilder.addPosition().getResult();

    // prettier-ignore
    expect(res).toEqual([
      { classname: "pos_s", declarations: "position: static;" },
      { classname: "pos_r", declarations: "position: relative;" },
      { classname: "pos_a", declarations: "position: absolute;" },
      { classname: "pos_f", declarations: "position: fixed;" },
    ]);
  });

  it("should build display rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const res = rulesetsBuilder.addDisplay().getResult();

    expect(res).toEqual([
      { classname: "d_n", declarations: "display: none;" },
      { classname: "d_i", declarations: "display: inline;" },
      { classname: "d_b", declarations: "display: block;" },
      { classname: "d_ib", declarations: "display: inline-block;" },
      { classname: "d_f", declarations: "display: flex;" },
      { classname: "d_if", declarations: "display: inline-flex;" },
      { classname: "d_t", declarations: "display: table;" },
      { classname: "d_g", declarations: "display: grid;" },
      { classname: "d_ig", declarations: "display: inline-grid;" },
    ]);
  });

  it("should build flex rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const shorthand = { "00a": "0 0 auto", "1": "1" };
    const grow = { "1": "1", "2": "2", "4": "4" };
    const shrink = { "1": "1", "3": "3" };
    const basis = { "20%": "20%", "5rem": "5rem" };
    const order = { "-1": "-1", "3": "3" };
    const res = rulesetsBuilder
      .addFlex({ shorthand, grow, shrink, basis, order })
      .getResult();

    // prettier-ignore
    expect(res).toEqual(expect.arrayContaining([
      { classname: "fx_00a", declarations: "flex: 0 0 auto;" },
      { classname: "fx_1", declarations: "flex: 1;" },
      { classname: "fxg_1", declarations: "flex-grow: 1;" },
      { classname: "fxg_2", declarations: "flex-grow: 2;" },
      { classname: "fxg_4", declarations: "flex-grow: 4;" },
      { classname: "fxs_1", declarations: "flex-shrink: 1;" },
      { classname: "fxs_3", declarations: "flex-shrink: 3;" },
      { classname: "fxb_a", declarations: "flex-basis: auto;" },
      { classname: "fxb_20%", declarations: "flex-basis: 20%;" },
      { classname: "fxb_5rem", declarations: "flex-basis: 5rem;" },
      { classname: "ord_u", declarations: "order: unset;" },
      { classname: "ord_-1", declarations: "order: -1;" },
      { classname: "ord_3", declarations: "order: 3;" },
      { classname: "fxd_c", declarations: "flex-direction: column;" },
      { classname: "fxd_cr", declarations: "flex-direction: column-reverse;" },
      { classname: "fxd_r", declarations: "flex-direction: row;" },
      { classname: "fxd_rr", declarations: "flex-direction: row-reverse;" },
      { classname: "fxw_n", declarations: "flex-wrap: nowrap;" },
      { classname: "fxw_w", declarations: "flex-wrap: wrap;" },
      { classname: "fxw_we", declarations: "flex-wrap: wrap-reverse;" },
      { classname: "fxw_u", declarations: "flex-wrap: unset;" },
      { classname: "jc_u", declarations: "justify-content: unset;" },
      { classname: "jc_c", declarations: "justify-content: center;" },
      { classname: "jc_fe", declarations: "justify-content: flex-end;" },
      { classname: "jc_fs", declarations: "justify-content: flex-start;" },
      { classname: "jc_sa", declarations: "justify-content: space-around;" },
      { classname: "jc_sb", declarations: "justify-content: space-between;" },
      { classname: "ac_c", declarations: "align-content: center;" },
      { classname: "ac_fe", declarations: "align-content: flex-end;" },
      { classname: "ac_fs", declarations: "align-content: flex-start;" },
      { classname: "ac_s", declarations: "align-content: stretch;" },
      { classname: "ac_sa", declarations: "align-content: space-around;" },
      { classname: "ac_sb", declarations: "align-content: space-between;" },
      { classname: "ai_b", declarations: "align-items: baseline;" },
      { classname: "ai_c", declarations: "align-items: center;" },
      { classname: "ai_fe", declarations: "align-items: flex-end;" },
      { classname: "ai_fs", declarations: "align-items: flex-start;" },
      { classname: "ai_s", declarations: "align-items: stretch;" },
    ]));
  });

  it("should build text rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const res = rulesetsBuilder.addText().getResult();

    // prettier-ignore
    expect(res).toEqual([
      { classname: "va_sup", declarations: "vertical-align: super;" },
      { classname: "va_t", declarations: "vertical-align: top;" },
      { classname: "va_tt", declarations: "vertical-align: text-top;" },
      { classname: "va_m", declarations: "vertical-align: middle;" },
      { classname: "va_bl", declarations: "vertical-align: baseline;" },
      { classname: "va_b", declarations: "vertical-align: bottom;" },
      { classname: "va_tb", declarations: "vertical-align: text-bottom;" },
      { classname: "va_sub", declarations: "vertical-align: sub;" },
      { classname: "ta_l", declarations: "text-align: left;" },
      { classname: "ta_c", declarations: "text-align: center;" },
      { classname: "ta_r", declarations: "text-align: right;" },
      { classname: "ta_j", declarations: "text-align: justify;" },
      { classname: "tal_a", declarations: "text-align-last: auto;" },
      { classname: "tal_l", declarations: "text-align-last: left;" },
      { classname: "tal_c", declarations: "text-align-last: center;" },
      { classname: "tal_r", declarations: "text-align-last: right;" },
      { classname: "td_n", declarations: "text-decoration: none;" },
      { classname: "td_u", declarations: "text-decoration: underline;" },
      { classname: "td_o", declarations: "text-decoration: overline;" },
      { classname: "td_l", declarations: "text-decoration: line-through;" },
      { classname: "te_n", declarations: "text-emphasis: none;" },
      { classname: "te_ac", declarations: "text-emphasis: accent;" },
      { classname: "te_dt", declarations: "text-emphasis: dot;" },
      { classname: "te_c", declarations: "text-emphasis: circle;" },
      { classname: "te_ds", declarations: "text-emphasis: disc;" },
      { classname: "te_b", declarations: "text-emphasis: before;" },
      { classname: "te_a", declarations: "text-emphasis: after;" },
      { classname: "tt_n", declarations: "text-transform: none;" },
      { classname: "tt_c", declarations: "text-transform: capitalize;" },
      { classname: "tt_u", declarations: "text-transform: uppercase;" },
      { classname: "tt_l", declarations: "text-transform: lowercase;" },
      { classname: "whs_n", declarations: "white-space: normal;" },
      { classname: "whs_p", declarations: "white-space: pre;" },
      { classname: "whs_nw", declarations: "white-space: nowrap;" },
      { classname: "whs_pw", declarations: "white-space: pre-wrap;" },
      { classname: "whs_pl", declarations: "white-space: pre-line;" },
    ]);
  });

  it("should build overflow rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const res = rulesetsBuilder.addOverflow().getResult();

    expect(res).toEqual([
      { classname: "ov_v", declarations: "overflow: visible;" },
      { classname: "ov_h", declarations: "overflow: hidden;" },
      { classname: "ov_s", declarations: "overflow: scroll;" },
      { classname: "ov_a", declarations: "overflow: auto;" },
      { classname: "ovx_v", declarations: "overflow-x: visible;" },
      { classname: "ovx_h", declarations: "overflow-x: hidden;" },
      { classname: "ovx_s", declarations: "overflow-x: scroll;" },
      { classname: "ovx_a", declarations: "overflow-x: auto;" },
      { classname: "ovy_v", declarations: "overflow-y: visible;" },
      { classname: "ovy_h", declarations: "overflow-y: hidden;" },
      { classname: "ovy_s", declarations: "overflow-y: scroll;" },
      { classname: "ovy_a", declarations: "overflow-y: auto;" },
    ]);
  });

  it("should build opacity rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const res = rulesetsBuilder.addOpacity().getResult();

    expect(res).toEqual([
      { classname: "op_0", declarations: "opacity: 0;" },
      { classname: "op_01", declarations: "opacity: 0.1;" },
      { classname: "op_02", declarations: "opacity: 0.2;" },
      { classname: "op_03", declarations: "opacity: 0.3;" },
      { classname: "op_04", declarations: "opacity: 0.4;" },
      { classname: "op_05", declarations: "opacity: 0.5;" },
      { classname: "op_06", declarations: "opacity: 0.6;" },
      { classname: "op_07", declarations: "opacity: 0.7;" },
      { classname: "op_08", declarations: "opacity: 0.8;" },
      { classname: "op_09", declarations: "opacity: 0.9;" },
      { classname: "op_1", declarations: "opacity: 1;" },
    ]);
  });

  it("should build visibility rulesets", () => {
    const rulesetsBuilder = RulesetsBuilder.new();
    const res = rulesetsBuilder.addVisibility().getResult();

    expect(res).toEqual([
      { classname: "v_v", declarations: "visibility: visible;" },
      { classname: "v_h", declarations: "visibility: hidden;" },
      { classname: "v_c", declarations: "visibility: collapse;" },
    ]);
  });
});
