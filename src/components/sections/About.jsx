import SectionHeader from "../ui_premitives/SectionHeader";
import { ABOUT_DATA } from "../../constants/portfolio";

const About = () => {
  return (
    <section
      id="about"
      className="page-section"
      style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader number="01" title="About Me" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
        }}
        className="grid-1-mobile"
      >
        {/* Bio */}
        <div className="reveal">
          {ABOUT_DATA.paragraphs.map((segments, i) => (
            <p
              key={i}
              style={{
                color: "var(--text)",
                lineHeight: 1.9,
                marginBottom: 16,
                fontSize: ".9rem",
              }}
            >
              {segments.map((seg, j) =>
                j % 2 === 1 ? (
                  <span key={j} style={{ color: "var(--accent)" }}>
                    {seg}
                  </span>
                ) : (
                  seg
                )
              )}
            </p>
          ))}
        </div>

        {/* Spec sheet */}
        <div
          className="spec-card reveal"
          style={{
            border: "1px solid var(--line)",
            padding: 28,
            position: "relative",
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
            SPEC SHEET — REV.02
          </span>
          {ABOUT_DATA.specs.map(({ key, value, green }) => (
            <div
              key={key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px dashed rgba(44,100,150,.3)",
                fontSize: ".75rem",
              }}
            >
              <span style={{ color: "var(--text-dim)", letterSpacing: "1px" }}>
                {key}
              </span>
              <span
                style={{
                  color: green ? "#4caf50" : "var(--white)",
                  textAlign: "right",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
