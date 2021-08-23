import cn from "classnames";

export default function Button({ children, size, className, onClick }) {
  const btn = cn({
    "cur_p bd_n bgc_black:h c_white:h": true,
    "px_lg py_sm bdrs_xs": size === "sm",
    "px_xl py_md bdrs_sm fz_md": size === "md",
    "px_xl py_md bdrs_sm fz_lg": size === "lg",
  }, className);

  return (
    <button className={btn} onClick={onClick}>
      {children}
    </button>
  );
}
