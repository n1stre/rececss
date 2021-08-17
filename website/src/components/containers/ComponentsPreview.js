import React from "react";

const ComponentsPreviewCtx = React.createContext();

function ComponentsPreview({ children, initialVariant }) {
  const [activeVariant, setActiveVariant] = React.useState(initialVariant);

  const variants = React.useMemo(() => {
    return React.Children.map(children, (c) => c.props.name);
  }, [children]);

  const value = React.useMemo(() => {
    return { activeVariant, setActiveVariant };
  }, [activeVariant, setActiveVariant]);

  return (
    <ComponentsPreviewCtx.Provider value={value}>
      <div className="pos_r">
        <nav className="d_f">
          {variants.map((v) => (
            <button
              key={v}
              className="bgc_white bd_lightgrey py_sm px_md cur_p bdtlrs_sm bdtrrs_sm bdb_n"
              style={{
                marginRight: "-1px",
                boxShadow: activeVariant === v ? "0 1px 0 0 white" : "none",
                opacity: activeVariant === v ? "1" : "0.3",
              }}
              onClick={() => setActiveVariant(v)}>
              {v}
            </button>
          ))}
        </nav>

        {children}
      </div>
    </ComponentsPreviewCtx.Provider>
  );
}

function ComponentsPreviewVariant({ children, name, source, usage }) {
  const ctx = React.useContext(ComponentsPreviewCtx);
  const { activeVariant } = ctx || {};
  const className = activeVariant === name ? "d_b" : "d_n";
  return <div className={className}>{children}</div>;
}

function ComponentsPreviewHtml({ children, label }) {
  return (
    <>
      {Boolean(label) && <h3>{label}</h3>}
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </>
  );
}

function ComponentsPreviewRender({ children }) {
  return (
    <div className="bd_lightgrey bdrs_sm bdtlrs_0 p_xl mb_md">{children}</div>
  );
}

ComponentsPreview.Variant = ComponentsPreviewVariant;
ComponentsPreview.Html = ComponentsPreviewHtml;
ComponentsPreview.Render = ComponentsPreviewRender;
export default ComponentsPreview;
