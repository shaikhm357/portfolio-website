const Skillbar = ({ name, pct, color }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: ".72rem",
          color: "var(--text)",
          marginBottom: 6,
          letterSpacing: "1px",
        }}
      >
        <span>{name}</span>
        <span style={{ color: "var(--accent)" }}>{pct}%</span>
      </div>
      <div
        style={{
          height: 4,
          background: "rgba(44,100,150,.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background:
              "repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(13,33,55,.8) 9px, rgba(13,33,55,.8) 10px)",
            zIndex: 2,
          }}
        />
        <div className="skill-bar-fill" data-width={pct} style={{ "--bar-color": color }} />
      </div>
    </div>
  );
};

export default Skillbar;
