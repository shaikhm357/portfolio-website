import SectionHeader from "../ui_premitives/SectionHeader";
import { SKILLS_DATA } from "../../constants/portfolio";
import { useSkillBars } from "../../hooks/useSkillBars";
import SkillBar from "../ui_premitives/Skillbar";

const Skill = () => {
  useSkillBars();
  return (
    <section
      id="skills"
      className="page-section"
      style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader number="04" title="Skills" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 32,
        }}
        className="skills-grid"
      >
        {SKILLS_DATA.map(({ category, items }) => (
            <div
              key={category}
              className="skill-group skill-card reveal"
              style={{
                padding: 24,
                border: "1px solid var(--line)",
                background: "rgba(13,33,55,.4)",
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
                fontSize: ".65rem",
                letterSpacing: "3px",
                color: "var(--accent2)",
                textTransform: "uppercase",
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: "1px solid var(--line)",
              }}
            >
              {category}
            </div>
            {items.map(({ name, pct }) => (
              <SkillBar key={name} name={name} pct={pct} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
