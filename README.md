# rececss

Minimalistic, fully customizable CSS utilities generator

![License](https://img.shields.io/npm/l/rececss)
![NPM Version](https://img.shields.io/npm/v/rececss)

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
      units: { px: [[0, 50, 10], 100, 500] }, // supports ranges in a [start, stop, step] form
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

.c_dark  { color: #000; } .bgc_dark  { background-color: #000; }
.c_light { color: #fff; } .bgc_light { background-color: #fff; }

```

## Customization

### Output
Specifies the output settings of the result CSS assets.
- **`path` (string)** - All of the generated assets will be placed into this directory. Defaults to `.`.
- **`filename` (string)** - Common filename which will be given to all of the generated assets. Defaults to `rececss`.
- **`extension` ("css" | "scss")** - Extension of the generated assets. Defaults to `css`.
- **`splitByMedia` (boolean)** - Weather split generated assets for each media or keep it in a single file. Defaults to `false`


For example, using the following `rececss.config.js` 

```javascript
module.exports = {
  output: {
    path: "path/to/css",
    filename: "utils",
    extension: "css",
    splitByMedia: true,
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)"
  },
  ...
}
```

will result in:

```console
├── path
│   └── to
│       └── css
│           ├── utils.css
│           ├── utils.lg.css
│           └── utils.md.css
└── rececss.config.js
```

### Media Queries

### States (:hover, :focus, :active, etc.)

### Rules
#### Width
#### Height
#### Margin
#### Padding
#### Offset (top, right, bottom, left)
#### Flex
#### Font
#### Border
#### Colors

### Classnames
