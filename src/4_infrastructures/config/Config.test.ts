import Config from "./index";
const dto = require("../../../rececss.config");

describe("Config", () => {
  it("should parse rules to values", () => {
    const config = Config.new(dto);
    const values = config.getRulesetsValues();

    expect(values.size).toEqual({
      width: {
        full: "100%",
        half: "50%",
        "0": "0px",
        "5": "5px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "25": "25px",
        "30": "30px",
        "35": "35px",
        "40": "40px",
        "45": "45px",
        "50": "50px",
        "100": "100px",
        "200": "200px",
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "900": "900px",
        "1000": "1000px",
        "0%": "0%",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "100%": "100%",
      },
      height: {
        full: "100%",
        half: "50%",
        "50": "50px",
        "300": "300px",
        "50vh": "50vh",
        "100vh": "100vh",
      },
    });

    expect(values.padding).toEqual({
      shorthand: { a: "auto" },
      edges: {
        sm: "10px",
        md: "15px",
        lg: "30px",
        xl: "50px",
        "0": "0px",
        "5": "5px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "25": "25px",
        "30": "30px",
        "35": "35px",
        "40": "40px",
        "45": "45px",
        "50": "50px",
        "3em": "3em",
        "1.3em": "1.3em",
      },
    });

    expect(values.margin).toEqual({
      shorthand: {
        a: "auto",
        "0a": "0 auto",
      },
      edges: {
        sm: "10px",
        md: "15px",
        lg: "30px",
        xl: "50px",
        "0": "0px",
        "5": "5px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "25": "25px",
        "30": "30px",
        "35": "35px",
        "40": "40px",
        "45": "45px",
        "50": "50px",
      },
    });

    expect(values.offset).toEqual({
      xs: "5px",
      sm: "10px",
      md: "15px",
      lg: "30px",
      xl: "50px",
      "0": "0px",
      "5": "5px",
      "10": "10px",
      "15": "15px",
      "20": "20px",
      "25": "25px",
      "30": "30px",
      "35": "35px",
      "40": "40px",
      "45": "45px",
      "50": "50px",
      "55": "55px",
      "60": "60px",
      "65": "65px",
      "70": "70px",
      "75": "75px",
      "80": "80px",
      "85": "85px",
      "90": "90px",
      "95": "95px",
      "100": "100px",
    });

    expect(values.flex).toEqual({
      shorthand: {
        "00a": "0 0 auto",
        norm: "1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
      },
      basis: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "0%": "0%",
        "20%": "20%",
        "40%": "40%",
        "60%": "60%",
        "80%": "80%",
        "100%": "100%",
      },
      grow: {
        "1": "1",
        "2": "2",
        "4": "4",
      },
      shrink: {
        "1": "1",
        "3": "3",
      },
      order: {
        "1": "1",
        "-1": "-1",
      },
      grid: {
        cols: 12,
        gutter: "20px",
        gutters: { sm: "10px", lg: "40px" },
      },
    });

    expect(values.font).toEqual({
      shorthand: {
        primary: "italic bold .8em/1.2 Arial, sans-serif",
      },
      size: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "14": "14px",
        "16": "16px",
      },
      family: {
        primary: "Arial, serif",
        secondary: "Helvetica, sans-serif",
      },
    });

    expect(values.border).toEqual({
      shorthand: { thin: "1px solid black", bold: "5px solid black" },
      radius: {
        circle: "50%",
        "5": "5px",
        "10": "10px",
      },
    });

    expect(values.color).toEqual({ dark: "#000", light: "#fff", red: "red" });
  });
});
