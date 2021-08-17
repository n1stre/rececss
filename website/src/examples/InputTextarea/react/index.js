import cn from "classnames";

export default function InputText({
  value,
  onChange,
  size,
  className,
  placeholder,
}) {
  const input = cn(
    {
      "bd_black bdrs_xs": true,
      "px_lg py_sm": size === "sm",
      "px_xl py_md fz_md": size === "md",
      "px_xl py_md fz_lg": size === "lg",
    },
    className,
  );

  return (
    <input
      type="text"
      className={input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
