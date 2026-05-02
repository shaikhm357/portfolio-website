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
      <SectionHeader number="03" title="Skills" />
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
            className="skill-group reveal"
            style={{
              padding: 24,
              border: "1px solid var(--line)",
              background: "rgba(13,33,55,.4)",
            }}
          >
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
