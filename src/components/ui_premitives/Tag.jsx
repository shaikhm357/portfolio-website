const Tag = ({ children, color, style = {} }) => {
  return (
    <span
      className="tag-el"
      style={{
        "--tag-neon": color || "var(--accent)",
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
      <span
        style={{
          position: "absolute",
          top: -3,
          left: -3,
          width: 6,
          height: 6,
          borderTop: "1px solid var(--tag-neon)",
          borderLeft: "1px solid var(--tag-neon)",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: -3,
          right: -3,
          width: 6,
          height: 6,
          borderBottom: "1px solid var(--tag-neon)",
          borderRight: "1px solid var(--tag-neon)",
        }}
      />
      {children}
    </span>
  );
};

export default Tag;
