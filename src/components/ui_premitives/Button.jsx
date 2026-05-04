const Button = ({
  children,
  href,
  variant = "primary",
  style = {},
  ...props
}) => {
  const clip =
    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))";
  const base = {
    padding: "12px 28px",
    fontFamily: "var(--font-mono)",
    fontSize: ".8rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    display: "inline-block",
    clipPath: clip,
    transition: "all .2s",
    ...style,
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--bg)",
      fontWeight: "bold",
    },
    secondary: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid var(--accent)",
    },
  };
  const combined = { ...base, ...variants[variant] };
  const className = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${props.className || ""}`.trim();

  const filteredProps = { ...props };
  delete filteredProps.className;

  return href ? (
    <a href={href} className={className} style={combined} {...filteredProps}>
      {children}
    </a>
  ) : (
    <button className={className} style={combined} {...filteredProps}>
      {children}
    </button>
  );
};

export default Button;
