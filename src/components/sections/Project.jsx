import SectionHeader from "../ui_premitives/SectionHeader";
import { PROJECTS_DATA } from "../../constants/portfolio";
import ProjectCard from "../ui_premitives/ProjectCard";

const Project = () => {
  return (
    <section
      id="projects"
      className="page-section band-section"
      style={{
        maxWidth: "100%",
        background: "rgba(10,25,44,.4)",
        padding: "100px 80px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader number="03" title="Projects" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
          className="projects-grid"
        >
          {PROJECTS_DATA.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
