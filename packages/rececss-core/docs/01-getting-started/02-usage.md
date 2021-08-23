## Usage

Create a `rececss.config.js` file at the root of your project:

```javascript
module.exports = {
  output: {
    path: "./path/to/css",
  },
  rules: {
    width: {
      full: "100%",
      half: "50%",
      $px: [[0, 50, 10], 100, 500], // supports ranges in a [start, stop, step] form
    },
    color: { dark: "#000", light: "#fff" },
    ...
  },
}
```

And simply run:

```console
$ npx rececss
```

The generated CSS assets will be placed at `./path/to/css/rececss.css` and contain the following rulesets:

```css
.w_full  { width: 100%; }
.w_half  { width: 50%; }
.w_0     { width: 0px; }
.w_10    { width: 10px; }
.w_20    { width: 20px; }
.w_30    { width: 30px; }
.w_40    { width: 40px; }
.w_50    { width: 50px; }
.w_100   { width: 100px; }
.w_500   { width: 500px; }
.c_dark  { color: #000; }
.c_light { color: #fff; }
```