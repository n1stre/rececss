
module.exports = {
  output: {
    path: "./website/styles",
    filename: "rececss",
    extension: "css",
    splitByMedia: false,
    purge: {
      content: [
        './website/pages/**/*.js',
      ]
    }
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)"
  },
  sep: {
    media: ":",
    state: ":"
  },
  states: {
    h: "$0:hover",
    hp: ":hover > $0",
    js: "$0.js-active",
    jsp: ".js-active $0",
  },
  rules: {
    width: {
      full: "100%", half: "50%",
      $px: [[0, 50, 5], [100, 1000, 100]],
      $pct: [[0, 100, 10]]
    },
    height: {
      full: "100%", half: "50%",
      $px: [300, 50],
      $vh: [50, 100]
    },
    padding: {
      shorthand: { a: "auto" },
      edges: {
        sm: "10px", md: "15px", lg: "30px", xl: "50px",
        $px: [[0, 50, 5]],
        $em: [3, 1.3]
      },
    },
    margin: {
      shorthand: { a: "auto", "0a": "0 auto" },
      edges: {
        sm: "10px", md: "15px", lg: "30px", xl: "50px",
        $px: [[0, 50, 5]]
      },
    },
    offset: {
      xs: "5px", sm: "10px", md: "15px", lg: "30px", xl: "50px",
      $px: [[0, 100, 5]]
    },
    flex: {
      shorthand: {
        "00a": "0 0 auto", norm: "1",
        $num: [[1, 10, 1]]
      },
      basis: {
        xs: "8px", sm: "12px", md: "16px",
        $px: [[8, 16, 2]],
        $pct: [[0, 100, 20]]
      },
      grow: { $num: [1, 2, 4] },
      shrink: { $num: [1, 3] },
      order: { $num: [1, -1] },
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
      family: {
        primary: "Arial, serif",
        secondary: "Helvetica, sans-serif",
      },
      size: {
        xs: "8px", sm: "12px", md: "16px",
        $px: [[8, 16, 2]]
      },
      lineHeight: {
        xs: "8px", sm: "12px", md: "16px",
        $num: [1, 2, [3, 4, 0.2]]
      }
    },
    border: {
      shorthand: { thin: "1px solid black", bold: "5px solid black" },
      radius: { circle: "50%", $px: [5, 10] },
    },
    background: {
      shorthand: {
        grn: "green",
        gra: "content-box radial-gradient(crimson, skyblue);"
      },
      color: {
        dark: "#000",
        light: "#fff",
      }
    },
    shadow: {
      text: {
        simple: "2px 4px 3px rgba(0,0,0,0.3)",
        hard: "6px 6px 0px rgba(0,0,0,0.2)"
      },
      box: {
        air: "0px 4px 12px rgba(0, 0, 0, 0.08) ",
        light: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }
    },
    color: {
      dark: "#000",
      light: "#fff",
      red: "red"
    },
  },
}
