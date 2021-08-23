## Rules

Most of the rules follows minimal conventions for generating values. Each rule gets described thought an object where regular keys are being used as classname suffixes and their values inserted into CSS declaration. In addition you could provide unit keywords starting with `$` (`$px`, `$em`, `$rem`, `$pct`, ect) with array of numbers and ranges (`[start, stop, step]`) as a value:


```javascript
module.exports = {
  rules: {
    [rulename]: {
      md: "16px",
      lg: "24px",

      $px: [20, 30, [8, 16, 2]], // => 8px, 10px, 12px, 14px, 16px, 20px, 30px
      $pct: [[50, 80, 10], 100, 150], // => 50%, 60%, 70%, 80%, 100%, 150%
      $em: [1, [2, 5, 1]], // => 1em, 2em, 3em, 4em, 5em
      $rem: [1, [1.1, 2, 0.1]], // => 1rem, 1.1rem, 1.2rem, 1.3rem, 1.4rem, 1.5rem, 1.6rem, 1.7rem, 1.8rem, 1.9rem, 2rem
      $num: [-1, 0, 1], // => -1, 0, 1
      $vw: [50, 90], // => 50vw, 90vw
      $vh: [10, 100], // => 10vh, 100vh
      $cm: [...],
      $mm: [...],
      $in: [...],
      $pc: [...],
      $pt: [...],
      $ex: [...],
      $ch: [...],
      $lh: [...],
      $vmin: [...],
      $vmax: [...],
      $percent: [...], // alias for $pct
      $number: [...] // alias for $num
    },
  }
}
```


