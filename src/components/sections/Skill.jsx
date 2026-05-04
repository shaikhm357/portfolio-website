import SectionHeader from "../ui_premitives/SectionHeader";
import { SKILLS_DATA } from "../../constants/portfolio";
import { skillIcons } from "../../constants/skillIcons";
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
        {SKILLS_DATA.map(({ category, icon, color }) => {
          const IconComponent = skillIcons[icon];
          return (
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
              onMouseEnter={(e) => {
                e.currentTarget.querySelectorAll(".skill-bar-fill").forEach((bar, i) => {
                  const w = bar.getAttribute("data-width");
                  setTimeout(() => (bar.style.width = w + "%"), i * 80);
                });
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
                  borderColor: `transparent ${color || "var(--accent2)"} transparent transparent`,
                  opacity: 0.9,
                  transition: "border-color .3s",
                }}
              />
              <span
                className="card-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${color || "var(--accent2)"}08 0%, transparent 60%)`,
                  opacity: 0,
                  transition: "opacity .3s",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontSize: ".65rem",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: color || "var(--accent2)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  paddingBottom: 10,
                  borderBottom: `1px solid ${color}40`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textShadow: `0 0 8px ${color}60`,
                  filter: "brightness(1.3)",
                }}
              >
                {IconComponent && (
                  <IconComponent
                    size={18}
                    style={{ flexShrink: 0, filter: `drop-shadow(0 0 6px ${color})` }}
                    strokeWidth={3}
                  />
                )}
                {category}
              </div>
              {SKILLS_DATA.find((g) => g.category === category).items.map(({ name, pct }) => (
                <SkillBar key={name} name={name} pct={pct} color={color} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
