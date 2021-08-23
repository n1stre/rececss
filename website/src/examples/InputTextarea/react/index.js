import cn from "classnames";

export default function InputText({
  id,
  value,
  onChange,
  className,
  placeholder,
  labelText,
  labelClassName,
  containerClassName,
}) {
  const container = cn(containerClassName);
  const label = cn({ "d_b": true, }, labelClassName);
  const input = cn({ "d_b w_100% bd_black bdrs_xs p_md rsz_v": true, }, className);

  return (
    <div className={container}>
      {labelText && (
        <label htmlFor={id} className={label}>
          {labelText}
        </label>
      )}

      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className={input}
        placeholder={placeholder}
      />
    </div>
  );
}
