const Container = ({ children, className }) => {
  return (
    <div className={`w_100% px_md maw_1320 m_0a ${className}`}>{children}</div>
  );
};

export default Container;
