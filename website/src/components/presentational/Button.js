function Button(props) {
  return (
    <button className="px_xl py_md bgc_black c_white bdrs_sm bd_n fz_md cur_p tt_u fw_b">
      {props.children}
    </button>
  );
}

export default Button;
