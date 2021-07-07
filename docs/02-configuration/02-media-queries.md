## Media Queries
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