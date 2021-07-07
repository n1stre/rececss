
## Increasing specificity
The are scenarios when you need to make some classes more specific then the others. Here is an [example](https://github.com/tailwindlabs/tailwindcss/discussions/1446) of such usecase. You can achieve that with `states` as well:


```javascript
module.exports = {
  ...
  sep: {
    state: "-"
  },
  rules: {
    color: {
      dark: "#000",
      light: "#fff",

      $variants: {
        "!": "&&",
      }
    },
  },
}
```

That'll generate the dubplicated classnames like so:

```css
.c_dark, .c_dark-\\!.c_dark-\\! { color: #000; }
.c_light, .c_light-\\!.c_light-\\! { color: #fff; }
```

So that `.c_dark-!` and `.c_light-!` would be more specific then theirs normal variants:
```html
<span class="c_light c_dark-!">This texts color is #000<span>
```

And you can ofcourse add as many levels of specificity as you need.