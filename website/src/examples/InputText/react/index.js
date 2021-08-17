import cn from "classnames";

export default function InputText({
  id,
  value,
  onChange,
  size,
  className,
  placeholder,
  labelText,
  labelClassName,
  containerClassName,
}) {
  const container = cn(containerClassName);

  const label = cn({
    "d_b": true,
    "fz_md": size === "md",
    "fz_lg": size === "lg",
  }, labelClassName);

  const input = cn({
    "d_b w_100% bd_black bdrs_xs": true,
    "px_lg py_sm": size === "sm",
    "px_xl py_md fz_md": size === "md",
    "px_xl py_md fz_lg": size === "lg",
  }, className);

  return (
    <div className={container}>
      {labelText && (
        <label htmlFor={id} className={label}>
          {labelText}
        </label>
      )}

      <input
        id={id}
        value={value}
        onChange={onChange}
        type="text"
        className={input}
        placeholder={placeholder}
      />
    </div>
  );
}
