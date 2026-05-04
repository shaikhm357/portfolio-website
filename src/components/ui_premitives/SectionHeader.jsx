const SectionHeader = ({ number, title }) => {
  return (
    <div className="section-header" style={{ marginBottom: 60, position: "relative" }}>
      <div
        style={{
          fontSize: ".65rem",
          letterSpacing: "4px",
          color: "var(--accent2)",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        ◈ SECTION — {number}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          fontWeight: 700,
          color: "var(--white)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          position: "relative",
          display: "inline-block",
        }}
      >
        {title}
        <span
          style={{
            position: "absolute",
            bottom: -12,
            left: 0,
            width: 60,
            height: 2,
            background: "var(--accent)",
          }}
        />
      </h2>
    </div>
  );
};

export default SectionHeader;
