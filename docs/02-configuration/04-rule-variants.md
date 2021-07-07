## Rule Variants

Each rule allows to specify `$variants` property where you can define pseudo-class (`:hover`, `:focus` states, etc) or javasript driven utility states.

```javascript
module.exports = {
  ...
  sep: {
    state: "-"
  },
  rules: {
    all: {
      $variants: {
        h: "&:hover"
      }
    },
    color: {
      dark: "#000",
      light: "#fff",
      $variants: {
        f: "&:focus"
      }
    },
  },
}
```

In the above config `&` in `$variants` represents a classname that would be inserted after processing. Keys are used as suffixes for this classnames.

> ℹ️ `all` is a special rule that allows to define common variants and values that will be applied to every other rule.

Check out the result:

```css
.c_dark,
.c_dark-h:hover,
.c_dark-f:focus {
  color: #000;
}

.c_light,
.c_light-h:hover,
.c_light-f:focus {
  color: #fff;
}
```