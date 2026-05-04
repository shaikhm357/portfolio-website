import SectionHeader from "../ui_premitives/SectionHeader";
import { YOUTUBE_DATA } from "../../constants/portfolio";
import Button from "../ui_premitives/Button";
import YTCard from "../ui_premitives/YTCard";

const YouTube = () => {
  const { channel, videos } = YOUTUBE_DATA;
  return (
    <section
      id="youtube"
      className="page-section band-section"
      style={{
        maxWidth: "100%",
        background: "rgba(10,25,44,.4)",
        padding: "100px 80px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader number="07" title="YouTube / Blog" />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          className="grid-1-mobile youtube-grid"
        >
          {/* Channel banner — full width */}
          <div
            className="reveal"
            style={{
              gridColumn: "1 / -1",
              border: "1px solid var(--accent2)",
              padding: "28px 32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(255,152,0,.04)",
              position: "relative",
              overflow: "hidden",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -10,
                left: 16,
                background: "var(--bg)",
                padding: "0 8px",
                fontSize: ".6rem",
                letterSpacing: "3px",
                color: "var(--accent2)",
              }}
            >
              CHANNEL
            </span>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  color: "var(--accent2)",
                  letterSpacing: "2px",
                  marginBottom: 6,
                }}
              >
                {channel.name}
              </h3>
              <p
                style={{
                  fontSize: ".78rem",
                  color: "var(--text-dim)",
                  fontFamily: "var(--font-editorial)",
                }}
              >
                {channel.tagline}
              </p>
            </div>
            <Button
              href={channel.url}
              variant="secondary"
              style={{ whiteSpace: "nowrap" }}
            >
              Visit Channel →
            </Button>
          </div>

          {/* Video cards */}
          {videos.map((v) => (
            <YTCard key={v.title} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;
