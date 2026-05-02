const YTCard = ({ video }) => {
  return (
    <a
      href={video.url}
      className="yt-card"
      style={{
        border: "1px solid var(--line)",
        padding: 24,
        position: "relative",
        background: "rgba(13,33,55,.4)",
        cursor: "pointer",
        textDecoration: "none",
        display: "block",
        color: "inherit",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontSize: ".6rem",
          letterSpacing: "3px",
          color: "var(--accent2)",
          border: "1px solid var(--accent2)",
          padding: "2px 8px",
          marginBottom: 14,
          textTransform: "uppercase",
        }}
      >
        {video.badge}
      </span>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: ".85rem",
          color: "var(--white)",
          lineHeight: 1.5,
          marginBottom: 10,
          letterSpacing: ".5px",
        }}
      >
        {video.title}
      </div>
      <div
        style={{
          fontSize: ".68rem",
          color: "var(--text-dim)",
          letterSpacing: "1px",
        }}
      >
        {video.meta}
      </div>
    </a>
  );
};

export default YTCard;
