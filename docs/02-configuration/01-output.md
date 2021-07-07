## Output

Specifies the output settings of the result CSS assets.

| Option | Type | Desc | Default |
| ---    | ---  | ---  | ---     |
| **`path`** | string | All of the generated assets will be placed into this directory. | `.` |
| **`filename`**  | string | Common filename which will be given to all of the generated assets. | `rececss` |
| **`extension`** | "css","scss" | Extension of the generated assets. | `css` |
| **`splitByMedia`** | boolean | Weather split generated assets for each media or keep it in a single file. | `false` |

<!-- - **`path`** (string) - All of the generated assets will be placed into this directory. Defaults to `.`.
- **`filename`** (string) - Common filename which will be given to all of the generated assets. Defaults to `rececss`.
- **`extension`** ("css" | "scss") - Extension of the generated assets. Defaults to `css`.
- **`splitByMedia`** (boolean) - Weather split generated assets for each media or keep it in a single file. Defaults to `false` -->


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