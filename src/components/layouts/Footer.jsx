const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--line)",
        padding: "28px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: ".68rem",
        color: "var(--text-dim)",
        letterSpacing: "2px",
      }}
    >
      <div>
        ◈ <span style={{ color: "var(--accent)" }}>WEEBCODERS</span> — PORTFOLIO
        v2.0
      </div>
      <div className="hide-mobile">
        DRAFTED ON BLUEPRINT PAPER &nbsp;·&nbsp; ALL RIGHTS RESERVED © 2026
      </div>
    </footer>
  );
};

export default Footer;
