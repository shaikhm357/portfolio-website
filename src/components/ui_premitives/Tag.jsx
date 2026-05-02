const Tag = ({ children, style = {} }) => {
  return (
    <span
      className="tag-el"
      style={{
        padding: "6px 14px",
        border: "1px solid var(--line)",
        fontSize: ".7rem",
        letterSpacing: "2px",
        color: "var(--text-dim)",
        textTransform: "uppercase",
        position: "relative",
        cursor: "default",
        transition: "all .2s",
        ...style,
      }}
    >
      {/* Blueprint corner marks */}
      <span
        style={{
          position: "absolute",
          top: -3,
          left: -3,
          width: 6,
          height: 6,
          borderTop: "1px solid var(--accent)",
          borderLeft: "1px solid var(--accent)",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: -3,
          right: -3,
          width: 6,
          height: 6,
          borderBottom: "1px solid var(--accent)",
          borderRight: "1px solid var(--accent)",
        }}
      />
      {children}
    </span>
  );
};

export default Tag;
