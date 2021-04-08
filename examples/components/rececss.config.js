const colors = { dark: "#000", light: "#fff", red: "red" }
const spacing = { sm: "10px", md: "15px", lg: "30px", xl: "50px" }

module.exports = {
  output: {
    path: ".",
    splitByMedia: true,
  },
  media: {
    md: "only screen and (min-width: 768px)",
  },
  states: {
    h: "$0:hover",
  },
  rules: {
    width: {
      named: { full: "100%", half: "50%" },
      units: { px: [[0, 50, 5], [100, 1000, 100]], "%": [[0, 100, 10]] },
    },
    height: {
      named: { full: "100%", half: "50%" },
      units: { px: [300, 50] },
    },
    padding: {
      shorthand: { a: "auto" },
      edges: {
        named: spacing,
      },
    },
    margin: {
      shorthand: { a: "auto", "0a": "0 auto" },
      edges: {
        named: spacing,
      },
    },
    offset: {
      named: spacing,
      units: { px: [[0, 100, 5]] },
    },
    flex: {
      shorthand: {
        named: { "00a": "0 0 auto", norm: "1" },
        values: [[1, 10, 1]],
      },
      basis: {
        named: { xs: "8px", sm: "12px", md: "16px" },
        units: { "%": [[0, 100, 20]] },
      },
      grid: {
        cols: 12,
        gutter: "20px",
        gutters: { sm: "10px", lg: "40px"}
      },
    },
    font: {
      shorthand: {
        primary: "italic bold .8em/1.2 Arial, sans-serif",
      },
      size: {
        named: { xs: "8px", sm: "12px", md: "16px" },
        units: { px: [[8, 16, 2]] },
      },
      family: {
        primary: "Arial, serif",
        secondary: "Helvetica, sans-serif",
      },
      lineHeight: {
        named: { xs: "8px", sm: "12px", md: "16px" },
        values: [1, 2, [3, 4, 0.2]]
      }
    },
    border: {
      shorthand: {
        thin: "1px solid black",
        bold: "5px solid black"
      },
      radius: {
        named: { circle: "50%" },
        units: { px: [5, 10] },
      },
    },
    background: {
      shorthand: {
        grn: "green",
        gra: "content-box radial-gradient(crimson, skyblue);"
      },
      color: colors
    },
    color: colors,
  },
}
