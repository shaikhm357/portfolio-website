import SectionHeader from "../ui_premitives/SectionHeader";
import { EXPERIENCE_DATA } from "../../constants/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="page-section band-section"
      style={{
        maxWidth: "100%",
        background: "rgba(10,25,44,.4)",
        padding: "100px 80px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader number="02" title="Experience" />
        <div style={{ display: "grid", gap: 22 }}>
          {EXPERIENCE_DATA.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="experience-card reveal"
              style={{
                border: "1px solid var(--line)",
                background: "rgba(13,33,55,.52)",
                padding: 28,
                position: "relative",
                overflow: "hidden",
                transition: "border-color .3s, transform .3s, box-shadow .3s",
              }}
            >
              <span
                className="card-corner"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 28px 28px 0",
                  borderColor: "transparent var(--accent2) transparent transparent",
                  opacity: 0.9,
                  transition: "border-color .3s",
                }}
              />
              <span
                className="card-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(79,195,247,.04) 0%, transparent 60%)",
                  opacity: 0,
                  transition: "opacity .3s",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 18,
                  flexWrap: "wrap",
                  marginBottom: 14,
                }}
              >
                <div>
                  <div
                    style={{
                      color: "var(--accent2)",
                      fontSize: ".62rem",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {job.company}
                  </div>
                  <h3
                    style={{
                      color: "var(--white)",
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1rem, 2vw, 1.35rem)",
                      letterSpacing: "1px",
                    }}
                  >
                    {job.role}
                  </h3>
                </div>
                <div
                  style={{
                    color: "var(--text-dim)",
                    fontSize: ".72rem",
                    letterSpacing: "1px",
                    textAlign: "right",
                    lineHeight: 1.7,
                  }}
                >
                  <div>{job.period}</div>
                  <div>{job.location}</div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 18,
                }}
              >
                {job.stack.map((item, index) => (
                  <span
                    key={item}
                    style={{
                      fontSize: ".58rem",
                      padding: "4px 8px",
                      border: "1px solid var(--line)",
                      color: index % 3 === 1 ? "var(--accent2)" : "var(--accent)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul
                style={{
                  display: "grid",
                  gap: 10,
                  listStyle: "none",
                  color: "var(--text)",
                  fontSize: ".8rem",
                  lineHeight: 1.7,
                }}
              >
                {job.points.map((point) => (
                  <li key={point} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: 8 }}>
                    <span style={{ color: "var(--accent2)" }}>//</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
