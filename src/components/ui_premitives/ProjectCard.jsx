const ProjectCard = ({ project }) => {
  return (
    <div
      className="project-card reveal"
      style={{
        border: "1px solid var(--line)",
        padding: 28,
        position: "relative",
        background: "rgba(13,33,55,.5)",
        overflow: "hidden",
      }}
    >
      {/* Corner notch */}
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
          borderColor: "transparent var(--line) transparent transparent",
          transition: "border-color .3s",
        }}
      />
      {/* Hover gradient */}
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
          fontSize: ".6rem",
          letterSpacing: "3px",
          color: "var(--accent2)",
          marginBottom: 12,
        }}
      >
        PROJECT // 00{project.num}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          color: "var(--white)",
          marginBottom: 10,
          letterSpacing: "1px",
        }}
      >
        {project.name}
      </h3>
      <p
        style={{
          fontSize: ".8rem",
          color: "var(--text-dim)",
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {project.desc}
      </p>

      {/* Stack chips */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}
      >
        {project.stack.map((s) => (
          <span
            key={s}
            style={{
              fontSize: ".6rem",
              padding: "3px 8px",
              border: "1px solid var(--line)",
              color: "var(--text-dim)",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 16 }}>
        <a
          href={project.demo}
          style={{
            fontSize: ".7rem",
            letterSpacing: "2px",
            color: "var(--accent)",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          → Live Demo
        </a>
        <a
          href={project.github}
          style={{
            fontSize: ".7rem",
            letterSpacing: "2px",
            color: "var(--accent)",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          → GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
