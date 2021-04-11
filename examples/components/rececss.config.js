// rececss.config.js

module.exports = {
  output: {
    path: ".",
    splitByMedia: true,
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)"
  },
  states: {
    h: "$0:hover",
  },
  rules: {
    width: { $px: [50, 100], $pct: [100] },
    height: { $px: [50, 100] },
    padding: {
      edges: { $px: [[0, 50, 5]] }
    },
    margin: {
      edges: { $px: [-80, [0, 50, 5]] }
    },
    font: {
      size: { $px: [[8, 24, 2]] },
      family: { pri: "'Archivo Black', sans-serif", sec: "'Montserrat', sans-serif" },
    },
    border: {
      shorthand: { sep: "1px solid rgba(0,0,0,0.1)", frame: "10px solid #fff", },
      radius: { $px: [15], $pct: [50] },
    },
    background: {
      color: { light: "#fff", blue: "#ECF0FB", }
    },
    shadow: {
      box: { air: "0px 4px 12px rgba(0, 0, 0, 0.08)", }
    },
    color: { blue: "#51568A" },
  },
}
