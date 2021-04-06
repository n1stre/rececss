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

The generated CSS assets will be placed at `./path/to/css/rececss.css` and contain the following rulesets:

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

.c_dark  { color: #000; }
.c_light { color: #fff; }

// ... 

```

## Motivation || "Why not tailwind?"
1. Dependency free. Can be used without PostCSS.
2. Autogenerated unit values. Range syntax support.
3. Ability to split output files by media queries.
3. More control over state utilities (:hover, :active, js states). 
4. Rich classnames customization that default to [Emmet abbreviations](https://docs.emmet.io/cheat-sheet).

## Customization

### Output
Specifies the output settings of the result CSS assets.
- **`path`** (string) - All of the generated assets will be placed into this directory. Defaults to `.`.
- **`filename`** (string) - Common filename which will be given to all of the generated assets. Defaults to `rececss`.
- **`extension`** ("css" | "scss") - Extension of the generated assets. Defaults to `css`.
- **`splitByMedia`** (boolean) - Weather split generated assets for each media or keep it in a single file. Defaults to `false`


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
    prnt: "print",
    scr: "screen"
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
│           ├── utils.prnt.css
│           └── utils.scr.css
└── rececss.config.js
```

### Media
Sets up the map of media queries to be used in generated assets where keys are used as prefixes for classnames. For example the config below:

```javascript
module.exports = {
  output: {
    splitByMedia: true,
  },
  sep: {
    media: "-",
  },
  media: {
    md: "only screen and (min-width: 768px)",
    lg: "only screen and (min-width: 1024px)"
  },
  rules: {
    color: { dark: "#000" },
  }
  ...
}
```

will generate assets with the following rulesets: 

```css rececss
/* rececss.css */
.c_dark { color: #000; }
...
```

```css
/* rececss.md.css */
@media only screen and (min-width: 768px) {
  .md-c_dark { color: #000; }
  ...
}
```

```css
/* rececss.lg.css */
@media only screen and (min-width: 1024px) {
  .lg-c_dark { color: #000; }
  ...
}
```

### States (:hover, :focus, :active, etc.)
Here is the place where you can define pseudo-class or javasript driven utility states that would be applied to *all* of the generated rulesets.

```javascript
module.exports = {
  ...
  sep: {
    state: "-"
  },
  states: {
    hov: "$0:hover",
    hovParent: ":hover > $0",
    js: "$0.js-active",
  },
  rules: {
    margin: { shorthand: { "0a": "0 auto" }},
    color: { dark: "#000", light: "#fff" },
  },
}
```
In the above config `$0` in `states` represents a classname that would be inserted after processing. Keys should be used as suffixes for this classnames. Check out the result: 

```css
.m_0a,
.m_0a-hov:hover,
*:hover > .m_0a-hovParent,
.m_0a-js.js-active {
  margin: 0 auto;
}
.c_dark,
.c_dark-hov:hover,
*:hover > .c_dark-hovParent,
.c_dark-js.js-active {
  color: #000;
}
.c_light,
.c_light-hov:hover,
*:hover > .c_light-hovParent,
.c_light-js.js-active {
  color: #fff;
}

```

### Rules
Most of the rules follows minimal conventions for generating values:

**Named values.** <br>
An object where keys are being used as classname value identifiers and values inserted into CSS declaration.
```javascript
rule: { 
  named: { full: "100%", half: "50%" } 
}
```

**Unit values.** <br>
An object with CSS units (`px`, `em`, `rem`, `vh`, `vw`, `ch`, `pt`, `%`) as keys and values as an array of numbers or ranges where ranges is a number array in a `[start, stop, step]` form.
```javascript
rule: { 
  units: { 
    px: [33, [0, 50, 5], [100, 1000, 100]], // => 33px, 0px, 5px, 10px, ... 50px, 100px, ... 1000px
    "%": [[0, 100, 10]] // => 0%, 10%, 15%, ... 100%
  }
}
```

**Unitless values.** <br>
An array of numbers or ranges used for unitless ruleset property values (`line-height`, `flex`, etc.)
```javascript
rule: { 
  values: [1.5, [1, 10, 1]], // => 1.5, 1, 2, 3, ... 10
}
```

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
Allows to overwrite any of the utility classnames:

```javascript
module.exports = {
  classnames: {
    font: "font_$0",
    displayNone: "hidden",
    opacity0: "invisible"
  },
  ...
}
```

List of all available classnames can found [here](https://github.com/re-ce/rececss/blob/master/src/3_adapters/RulesetsBuilder/RulesetsBuilder.classnames.ts)

