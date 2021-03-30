# rececss

Minimalistic, fully customizable CSS utilities generator

![License](https://img.shields.io/npm/l/rececss)
![NPM Version](https://img.shields.io/npm/v/rececss)

---

## Usage

Create a `rececss.config.js` file at the root of your project:

```javascript
module.exports = {
  output: {
    path: "./path/to/css",
  },
  rules: {
    width: {
      named: { full: "100%", half: "50%" },
      units: { px: [[0, 50, 10], 100, 500], "%": [[0, 100, 20]] }, // supports ranges in form [start, stop, step]
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

The following CSS will be generated at `./path/to/css/rececss.css`:

```css
.w_full { width: 100%; } .miw_full { min-width: 100%; } .maw_full { max-width: 100%; }
.w_half { width: 50%; }  .miw_half { min-width: 50%; }  .maw_half { max-width: 50%; }

.w_0   { width: 0px; }   .miw_0   { min-width: 0px; }   .maw_0   { max-width: 0px; }
.w_10  { width: 10px; }  .miw_10  { min-width: 10px; }  .maw_10  { max-width: 10px; }
.w_20  { width: 20px; }  .miw_20  { min-width: 20px; }  .maw_20  { max-width: 20px; }
.w_30  { width: 30px; }  .miw_30  { min-width: 30px; }  .maw_30  { max-width: 30px; }
.w_40  { width: 40px; }  .miw_40  { min-width: 40px; }  .maw_40  { max-width: 40px; }
.w_50  { width: 50px; }  .miw_50  { min-width: 50px; }  .maw_50  { max-width: 50px; }
.w_100 { width: 100px; } .miw_100 { min-width: 100px; } .maw_100 { max-width: 100px; }
.w_500 { width: 500px; } .miw_500 { min-width: 500px; } .maw_500 { max-width: 500px; }

.w_0\%   { width: 0%; }   .miw_0\%   { min-width: 0%; }   .maw_0\%   { max-width: 0%; }
.w_20\%  { width: 20%; }  .miw_20\%  { min-width: 20%; }  .maw_20\%  { max-width: 20%; }
.w_40\%  { width: 40%; }  .miw_40\%  { min-width: 40%; }  .maw_40\%  { max-width: 40%; }
.w_60\%  { width: 60%; }  .miw_60\%  { min-width: 60%; }  .maw_60\%  { max-width: 60%; }
.w_80\%  { width: 80%; }  .miw_80\%  { min-width: 80%; }  .maw_80\%  { max-width: 80%; }
.w_100\% { width: 100%; } .miw_100\% { min-width: 100%; } .maw_100\% { max-width: 100%; }

.c_dark  { color: #000; } .bgc_dark  { background-color: #000; }
.c_light { color: #fff; } .bgc_light { background-color: #fff; }

```
