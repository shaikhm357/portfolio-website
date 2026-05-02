/**
 * WeebCoders — Developer Portfolio
 * React Single-File Component
 *
 * Architecture:
 *  ├── constants/         data.js (all static content)
 *  ├── hooks/             useScrollReveal, useSkillBars, useActiveNav
 *  ├── components/
 *  │   ├── layout/        Navbar, Footer, CursorDot
 *  │   ├── sections/      Hero, About, Projects, Skills, YouTube, Contact
 *  │   └── ui/            Tag, Button, ProjectCard, SkillBar, YTCard, SpecSheet
 *  └── App                root component
 *
 * All components are defined below in this single file for portability.
 * In a real project, split each component into its own file under src/components/.
 */

import { useState, useEffect, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS — all static content lives here, edit once
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

const HERO_DATA = {
  role: "MERN Stack Developer",
  headline: ["Building the", "Web, One", "Component at a Time."],
  accentWords: { "Web,": "accent", "Component": "accent2" },
  subtitle:
    "Full-stack developer with 4+ years of experience. DSA enthusiast. Anime aficionado. Crafting scalable digital systems where precision meets creativity — where otakus become engineers.",
  tags: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "DSA"],
};

const ABOUT_DATA = {
  paragraphs: [
    ["Hey — I'm a ", "MERN stack developer", " with 4+ years of experience building production-grade full-stack applications. I specialize in clean system architecture, performant APIs, and thoughtful UX that scales."],
    ["I run ", "WeebCoders", " — a YouTube channel at the intersection of anime culture and software engineering. The tagline says it all: ", '"Where Otakus Become Engineers."'],
    ["I believe in compounding over rushing. Every data structure I learn, every component I build, every video I ship — it's all part of a longer arc toward mastery."],
  ],
  specs: [
    { key: "Role", value: "Full-Stack Developer" },
    { key: "Stack", value: "MERN" },
    { key: "Experience", value: "4+ Years" },
    { key: "Channel", value: "WeebCoders" },
    { key: "Focus", value: "DSA + Product Interviews" },
    { key: "Timeline", value: "6–8 Month Roadmap" },
    { key: "Status", value: "◉ Open to Work", green: true },
  ],
};

const PROJECTS_DATA = [
  {
    num: "001",
    name: "WeebWallet",
    desc: "A personal finance tracker for creators — manage irregular income from YouTube, sponsorships & merch all in one dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Chart.js"],
    demo: "#",
    github: "#",
  },
  {
    num: "002",
    name: "DSA Visualizer",
    desc: "Interactive visualizations of sorting algorithms and data structures — built to learn and teach DSA concepts with anime-themed UX.",
    stack: ["React", "D3.js", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    num: "003",
    name: "OtakuAuth",
    desc: "Full-stack authentication system with JWT, refresh tokens, role-based access, and secure REST APIs. Production-ready boilerplate.",
    stack: ["Express", "MongoDB", "JWT", "bcrypt"],
    demo: "#",
    github: "#",
  },
];

const SKILLS_DATA = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", pct: 85 },
      { name: "JavaScript", pct: 80 },
      { name: "HTML / CSS", pct: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", pct: 78 },
      { name: "Express.js", pct: 75 },
      { name: "REST APIs", pct: 80 },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", pct: 72 },
      { name: "Git / GitHub", pct: 82 },
      { name: "DSA (JS)", pct: 50 },
    ],
  },
];

const YOUTUBE_DATA = {
  channel: {
    name: "WeebCoders",
    tagline: "Where Otakus Become Engineers — Anime-themed coding tutorials, DSA breakdowns & MERN stack deep dives.",
    url: "#",
  },
  videos: [
    { badge: "DSA", title: "Binary Search Explained With Naruto's Training Arc", meta: "12K views · 8 min", url: "#" },
    { badge: "MERN", title: "Build a Full Auth System in Node.js From Scratch", meta: "8.4K views · 22 min", url: "#" },
    { badge: "DSA", title: "Sliding Window Pattern — Every Problem Solved", meta: "15K views · 18 min", url: "#" },
    { badge: "React", title: "State Management: Context vs Redux vs Zustand", meta: "6.1K views · 14 min", url: "#" },
  ],
};

const CONTACT_DATA = {
  email: "hello@weebcoders.dev",
  github: "github.com/weebcoders",
  linkedin: "linkedin.com/in/weebcoders",
  youtube: "youtube.com/@WeebCoders",
  resume: "#",
};

// ─────────────────────────────────────────────────────────────────────────────
// STYLES — CSS-in-JS style object (mirrors original CSS variables)
// ─────────────────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Special+Elite&display=swap');

  :root {
    --blue: #1a3a5c;
    --light-blue: #2d6a9f;
    --line: #2a6496;
    --accent: #4fc3f7;
    --accent2: #ff9800;
    --bg: #0d2137;
    --paper: #0b1e33;
    --text: #a8d8f0;
    --text-dim: #5a8db0;
    --white: #d6eeff;
    --red-mark: #e74c3c;
    --font-mono: 'Share Tech Mono', monospace;
    --font-display: 'Orbitron', monospace;
    --font-editorial: 'Special Elite', cursive;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--font-mono);
    overflow-x: hidden;
    cursor: crosshair;
  }

  /* Blueprint grid */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(44,106,158,.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(44,106,158,.15) 1px, transparent 1px),
      linear-gradient(rgba(44,106,158,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(44,106,158,.05) 1px, transparent 1px);
    background-size: 80px 80px, 80px 80px, 20px 20px, 20px 20px;
    pointer-events: none;
    z-index: 0;
  }

  #root { position: relative; z-index: 1; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--line); }
  ::-webkit-scrollbar-thumb:hover { background: var(--accent); }

  /* Reveal animation */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* Cursor dot */
  #cursor-dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 8px var(--accent);
    transition: left .05s, top .05s;
  }

  /* Hero rotating circle */
  @keyframes rotate-slow {
    from { transform: translateY(-50%) rotate(0deg); }
    to   { transform: translateY(-50%) rotate(360deg); }
  }
  .rotating-circle { animation: rotate-slow 30s linear infinite; }

  /* Pulse lines */
  @keyframes pulse-line {
    0%, 100% { opacity: .04; }
    50% { opacity: .12; }
  }

  /* Fade up */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .anim-1 { animation: fadeInUp .8s ease forwards; }
  .anim-2 { animation: fadeInUp .8s ease .2s both; }
  .anim-3 { animation: fadeInUp .8s ease .4s both; }
  .anim-4 { animation: fadeInUp .8s ease .6s both; }

  /* Skill bar */
  .skill-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--light-blue), var(--accent));
    width: 0;
    transition: width 1.5s cubic-bezier(.16,1,.3,1);
    position: relative;
  }
  .skill-bar-fill::after {
    content: '';
    position: absolute;
    right: 0; top: -2px;
    width: 2px; height: 8px;
    background: var(--accent);
    box-shadow: 0 0 8px var(--accent);
  }

  /* Project card hover */
  .project-card { transition: border-color .3s, transform .3s, box-shadow .3s; }
  .project-card:hover { border-color: var(--accent) !important; transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,.3); }
  .project-card:hover .card-corner { border-color: transparent var(--accent) transparent transparent !important; }
  .project-card:hover .card-glow { opacity: 1 !important; }

  /* YT card hover */
  .yt-card { transition: border-color .3s, transform .3s; }
  .yt-card:hover { border-color: var(--accent2) !important; transform: translateY(-2px); }

  /* Tag hover */
  .tag-el:hover { border-color: var(--accent) !important; color: var(--accent) !important; background: rgba(79,195,247,.05) !important; }

  /* Nav link hover */
  .nav-link { transition: color .2s; }
  .nav-link:hover { color: var(--accent) !important; }
  .nav-link.active { color: var(--accent) !important; }

  /* Btn hover */
  .btn-primary:hover { background: var(--white) !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(79,195,247,.3); }
  .btn-secondary:hover { background: rgba(79,195,247,.08) !important; transform: translateY(-2px); }

  /* Form */
  .form-input:focus, .form-textarea:focus {
    border-color: var(--accent) !important;
    box-shadow: 0 0 0 1px rgba(79,195,247,.1);
    outline: none;
  }

  @media (max-width: 768px) {
    .hide-mobile { display: none !important; }
    .stack-mobile { flex-direction: column !important; }
    .grid-1-mobile { grid-template-columns: 1fr !important; }
    body { cursor: auto; }
    #cursor-dot { display: none; }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * useScrollReveal — attaches IntersectionObserver to elements with class "reveal"
 * and adds "visible" class when they enter the viewport.
 */
function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * useSkillBars — animates skill bar fills to their target width
 * when the skill group enters the viewport.
 */
function useSkillBars() {
  useEffect(() => {
    const groups = document.querySelectorAll(".skill-group");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              const w = bar.getAttribute("data-width");
              setTimeout(() => (bar.style.width = w + "%"), 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    groups.forEach((g) => observer.observe(g));
    return () => observer.disconnect();
  }, []);
}

/**
 * useActiveNav — highlights the nav link corresponding to the current scroll section.
 */
function useActiveNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return activeId;
}

/**
 * useCursorDot — moves the cursor dot element to follow mouse position.
 */
function useCursorDot() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    if (!dot) return;
    const move = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────────
// UI PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

/** Tag — small bordered keyword chip used in hero and stack lists */
function Tag({ children, style = {} }) {
  return (
    <span
      className="tag-el"
      style={{
        padding: "6px 14px",
        border: "1px solid var(--line)",
        fontSize: ".7rem",
        letterSpacing: "2px",
        color: "var(--text-dim)",
        textTransform: "uppercase",
        position: "relative",
        cursor: "default",
        transition: "all .2s",
        ...style,
      }}
    >
      {/* Blueprint corner marks */}
      <span style={{ position: "absolute", top: -3, left: -3, width: 6, height: 6, borderTop: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }} />
      <span style={{ position: "absolute", bottom: -3, right: -3, width: 6, height: 6, borderBottom: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }} />
      {children}
    </span>
  );
}

/** Button — primary (filled) and secondary (outline) variants */
function Button({ children, href, variant = "primary", style = {}, ...props }) {
  const clip = "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))";
  const base = {
    padding: "12px 28px",
    fontFamily: "var(--font-mono)",
    fontSize: ".8rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    display: "inline-block",
    clipPath: clip,
    transition: "all .2s",
    ...style,
  };
  const variants = {
    primary: { background: "var(--accent)", color: "var(--bg)", fontWeight: "bold" },
    secondary: { background: "transparent", color: "var(--accent)", border: "1px solid var(--accent)" },
  };
  const combined = { ...base, ...variants[variant] };
  const className = variant === "primary" ? "btn-primary" : "btn-secondary";

  return href ? (
    <a href={href} className={className} style={combined} {...props}>{children}</a>
  ) : (
    <button className={className} style={combined} {...props}>{children}</button>
  );
}

/** SectionHeader — numbered section title with bottom accent line */
function SectionHeader({ number, title }) {
  return (
    <div className="reveal" style={{ marginBottom: 60, position: "relative" }}>
      <div style={{ fontSize: ".65rem", letterSpacing: "4px", color: "var(--accent2)", textTransform: "uppercase", marginBottom: 8 }}>
        ◈ SECTION — {number}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          fontWeight: 700,
          color: "var(--white)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          position: "relative",
          display: "inline-block",
        }}
      >
        {title}
        <span style={{ position: "absolute", bottom: -12, left: 0, width: 60, height: 2, background: "var(--accent)" }} />
      </h2>
    </div>
  );
}

/** SkillBar — labelled progress bar with animated fill */
function SkillBar({ name, pct }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".72rem", color: "var(--text)", marginBottom: 6, letterSpacing: "1px" }}>
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
        {/* Segment overlay */}
        <span
          style={{
            position: "absolute", left: 0, top: 0, width: "100%", height: "100%",
            background: "repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(13,33,55,.8) 9px, rgba(13,33,55,.8) 10px)",
            zIndex: 2,
          }}
        />
        <div className="skill-bar-fill" data-width={pct} />
      </div>
    </div>
  );
}

/** ProjectCard — bordered card with corner accent, stack chips, and links */
function ProjectCard({ project }) {
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
          position: "absolute", top: 0, right: 0,
          width: 0, height: 0,
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
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(79,195,247,.04) 0%, transparent 60%)",
          opacity: 0,
          transition: "opacity .3s",
          pointerEvents: "none",
        }}
      />

      <div style={{ fontSize: ".6rem", letterSpacing: "3px", color: "var(--accent2)", marginBottom: 12 }}>
        PROJECT // 00{project.num}
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--white)", marginBottom: 10, letterSpacing: "1px" }}>
        {project.name}
      </h3>
      <p style={{ fontSize: ".8rem", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: 20 }}>{project.desc}</p>

      {/* Stack chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
        {project.stack.map((s) => (
          <span key={s} style={{ fontSize: ".6rem", padding: "3px 8px", border: "1px solid var(--line)", color: "var(--text-dim)", letterSpacing: "1px", textTransform: "uppercase" }}>
            {s}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 16 }}>
        <a href={project.demo} style={{ fontSize: ".7rem", letterSpacing: "2px", color: "var(--accent)", textDecoration: "none", textTransform: "uppercase" }}>→ Live Demo</a>
        <a href={project.github} style={{ fontSize: ".7rem", letterSpacing: "2px", color: "var(--accent)", textDecoration: "none", textTransform: "uppercase" }}>→ GitHub</a>
      </div>
    </div>
  );
}

/** YTCard — video / blog post card */
function YTCard({ video }) {
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
      <span style={{ display: "inline-block", fontSize: ".6rem", letterSpacing: "3px", color: "var(--accent2)", border: "1px solid var(--accent2)", padding: "2px 8px", marginBottom: 14, textTransform: "uppercase" }}>
        {video.badge}
      </span>
      <div style={{ fontFamily: "var(--font-display)", fontSize: ".85rem", color: "var(--white)", lineHeight: 1.5, marginBottom: 10, letterSpacing: ".5px" }}>
        {video.title}
      </div>
      <div style={{ fontSize: ".68rem", color: "var(--text-dim)", letterSpacing: "1px" }}>{video.meta}</div>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Navbar — fixed top bar with logo and navigation links */
function Navbar({ activeId }) {
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 40px",
        background: "rgba(13,33,55,.92)",
        borderBottom: "1px solid var(--line)",
        backdropFilter: "blur(8px)",
        zIndex: 100,
      }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.1rem", color: "var(--accent)", letterSpacing: "3px", textTransform: "uppercase" }}>
        Weeb<span style={{ color: "var(--accent2)" }}>Coders</span>
      </div>
      <ul style={{ display: "flex", gap: 28, listStyle: "none" }} className="hide-mobile">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={`nav-link${activeId === href.slice(1) ? " active" : ""}`}
              style={{ color: activeId === href.slice(1) ? "var(--accent)" : "var(--text-dim)", textDecoration: "none", fontSize: ".75rem", letterSpacing: "2px", textTransform: "uppercase", position: "relative" }}
            >
              {activeId === href.slice(1) && <span style={{ color: "var(--accent)", marginRight: 4 }}>//</span>}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Footer */
function Footer() {
  return (
    <footer
      style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid var(--line)",
        padding: "28px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: ".68rem", color: "var(--text-dim)", letterSpacing: "2px",
      }}
    >
      <div>◈ <span style={{ color: "var(--accent)" }}>WEEBCODERS</span> — PORTFOLIO v2.0</div>
      <div className="hide-mobile">DRAFTED ON BLUEPRINT PAPER &nbsp;·&nbsp; ALL RIGHTS RESERVED © 2026</div>
    </footer>
  );
}

/** CursorDot — the glowing dot that follows the mouse */
function CursorDot() {
  return <div id="cursor-dot" />;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Hero — full-viewport landing section */
function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "flex-start",
        padding: "100px 80px 60px",
        position: "relative", overflow: "hidden",
        maxWidth: "100%",
      }}
    >
      {/* Animated vertical/horizontal accent lines */}
      {[
        { width: 1, height: "100%", left: "25%", delay: "0s" },
        { width: 1, height: "100%", left: "50%", delay: ".8s" },
        { width: 1, height: "100%", left: "75%", delay: "1.6s" },
        { width: "100%", height: 1, top: "33%", delay: ".4s" },
        { width: "100%", height: 1, top: "66%", delay: "1.2s" },
      ].map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute", background: "var(--accent)", opacity: .06,
            animation: `pulse-line 4s ease-in-out ${s.delay} infinite`,
            pointerEvents: "none",
            ...s,
          }}
        />
      ))}

      {/* Main content */}
      <div style={{ maxWidth: 900, width: "100%", position: "relative" }}>
        <div className="anim-1" style={{ fontSize: ".65rem", letterSpacing: "4px", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12, opacity: .7 }}>
          ◈ Portfolio — {HERO_DATA.role}
        </div>

        <h1
          className="anim-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 900, color: "var(--white)",
            lineHeight: 1.1, letterSpacing: "2px",
          }}
        >
          Building the<br />
          <span style={{ color: "var(--accent)" }}>Web</span>, One<br />
          <span style={{ color: "var(--accent2)" }}>Component</span> at a Time.
        </h1>

        <p className="anim-2" style={{ fontFamily: "var(--font-editorial)", fontSize: "1.1rem", color: "var(--text-dim)", margin: "20px 0 32px", lineHeight: 1.6, maxWidth: 580 }}>
          {HERO_DATA.subtitle}
        </p>

        <div className="anim-3" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
          {HERO_DATA.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <div className="anim-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Button href="#projects" variant="primary">View Projects</Button>
          <Button href="#" variant="secondary" download>Download Resume ↓</Button>
        </div>
      </div>

      {/* Decorative rotating blueprint circle */}
      <div
        className="hide-mobile"
        style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", opacity: .12, pointerEvents: "none" }}
      >
        <div
          className="rotating-circle"
          style={{
            width: 320, height: 320,
            border: "1px solid var(--accent)",
            borderRadius: "50%",
            position: "relative",
            transform: "translateY(-50%)",
          }}
        >
          <span style={{ position: "absolute", inset: 20, border: "1px dashed var(--accent)", borderRadius: "50%" }} />
          <span style={{ position: "absolute", inset: 50, border: "1px solid var(--accent)", borderRadius: "50%" }} />
        </div>
      </div>
    </section>
  );
}

/** About — bio text + spec sheet */
function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader number="01" title="About Me" />
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}
        className="grid-1-mobile"
      >
        {/* Bio */}
        <div className="reveal">
          {ABOUT_DATA.paragraphs.map((segments, i) => (
            <p key={i} style={{ color: "var(--text)", lineHeight: 1.9, marginBottom: 16, fontSize: ".9rem" }}>
              {segments.map((seg, j) =>
                j % 2 === 1
                  ? <span key={j} style={{ color: "var(--accent)" }}>{seg}</span>
                  : seg
              )}
            </p>
          ))}
        </div>

        {/* Spec sheet */}
        <div
          className="reveal"
          style={{ border: "1px solid var(--line)", padding: 28, position: "relative" }}
        >
          <span style={{ position: "absolute", top: -10, left: 16, background: "var(--bg)", padding: "0 8px", fontSize: ".6rem", letterSpacing: "3px", color: "var(--accent2)" }}>
            SPEC SHEET — REV.02
          </span>
          {ABOUT_DATA.specs.map(({ key, value, green }) => (
            <div
              key={key}
              style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px dashed rgba(44,100,150,.3)", fontSize: ".75rem" }}
            >
              <span style={{ color: "var(--text-dim)", letterSpacing: "1px" }}>{key}</span>
              <span style={{ color: green ? "#4caf50" : "var(--white)", textAlign: "right" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Projects — card grid of featured work */
function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ maxWidth: "100%", background: "rgba(10,25,44,.4)", padding: "100px 80px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader number="02" title="Projects" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {PROJECTS_DATA.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Skills — grouped progress bar lists */
function SkillsSection() {
  useSkillBars();
  return (
    <section id="skills" style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader number="03" title="Skills" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
        {SKILLS_DATA.map(({ category, items }) => (
          <div
            key={category}
            className="skill-group reveal"
            style={{ padding: 24, border: "1px solid var(--line)", background: "rgba(13,33,55,.4)" }}
          >
            <div style={{ fontSize: ".65rem", letterSpacing: "3px", color: "var(--accent2)", textTransform: "uppercase", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--line)" }}>
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
}

/** YouTube — channel banner + video cards */
function YouTubeSection() {
  const { channel, videos } = YOUTUBE_DATA;
  return (
    <section
      id="youtube"
      style={{ maxWidth: "100%", background: "rgba(10,25,44,.4)", padding: "100px 80px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader number="04" title="YouTube / Blog" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-1-mobile">

          {/* Channel banner — full width */}
          <div
            className="reveal"
            style={{
              gridColumn: "1 / -1",
              border: "1px solid var(--accent2)",
              padding: "28px 32px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "rgba(255,152,0,.04)",
              position: "relative", overflow: "hidden",
              flexWrap: "wrap", gap: 16,
            }}
          >
            <span style={{ position: "absolute", top: -10, left: 16, background: "var(--bg)", padding: "0 8px", fontSize: ".6rem", letterSpacing: "3px", color: "var(--accent2)" }}>
              CHANNEL
            </span>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--accent2)", letterSpacing: "2px", marginBottom: 6 }}>
                {channel.name}
              </h3>
              <p style={{ fontSize: ".78rem", color: "var(--text-dim)", fontFamily: "var(--font-editorial)" }}>{channel.tagline}</p>
            </div>
            <Button href={channel.url} variant="secondary" style={{ whiteSpace: "nowrap" }}>Visit Channel →</Button>
          </div>

          {/* Video cards */}
          {videos.map((v) => <YTCard key={v.title} video={v} />)}
        </div>
      </div>
    </section>
  );
}

/** Contact — form + contact info panel */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // TODO: wire up your form service (EmailJS, Formspree, etc.)
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }, [form]);

  const inputStyle = {
    width: "100%",
    background: "rgba(13,33,55,.8)",
    border: "1px solid var(--line)",
    color: "var(--white)",
    fontFamily: "var(--font-mono)",
    fontSize: ".82rem",
    padding: "12px 16px",
    outline: "none",
    transition: "border-color .2s",
  };

  const contactItems = [
    { label: "Email", value: CONTACT_DATA.email, href: `mailto:${CONTACT_DATA.email}` },
    { label: "GitHub", value: CONTACT_DATA.github, href: "#" },
    { label: "LinkedIn", value: CONTACT_DATA.linkedin, href: "#" },
    { label: "YouTube", value: CONTACT_DATA.youtube, href: "#" },
    { label: "Resume", value: "Download PDF ↓", href: CONTACT_DATA.resume, download: true },
  ];

  return (
    <section id="contact" style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <SectionHeader number="05" title="Contact" />
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}
        className="grid-1-mobile"
      >
        {/* Form */}
        <form className="reveal" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Your name" },
            { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label style={{ fontSize: ".62rem", letterSpacing: "3px", color: "var(--accent)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                {label}
              </label>
              <input
                className="form-input"
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                style={inputStyle}
                required
              />
            </div>
          ))}
          <div>
            <label style={{ fontSize: ".62rem", letterSpacing: "3px", color: "var(--accent)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
              Message
            </label>
            <textarea
              className="form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Let's build something..."
              style={{ ...inputStyle, height: 120, resize: "none" }}
              required
            />
          </div>
          <Button type="submit" variant="primary" style={{ alignSelf: "flex-start" }}>
            {sent ? "Transmitted ✓" : "Transmit Message →"}
          </Button>
        </form>

        {/* Contact info */}
        <div
          className="reveal"
          style={{ padding: 28, border: "1px solid var(--line)", position: "relative" }}
        >
          <span style={{ position: "absolute", top: -10, left: 16, background: "var(--bg)", padding: "0 8px", fontSize: ".6rem", letterSpacing: "3px", color: "var(--accent)" }}>
            CONTACT NODE
          </span>
          {contactItems.map(({ label, value, href, download }) => (
            <div
              key={label}
              style={{ padding: "14px 0", borderBottom: "1px dashed rgba(44,100,150,.3)", display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span style={{ fontSize: ".6rem", letterSpacing: "3px", color: "var(--text-dim)", textTransform: "uppercase" }}>{label}</span>
              <span style={{ fontSize: ".82rem", color: "var(--accent)" }}>
                <a href={href} download={download} style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => e.target.style.textDecoration = "underline"} onMouseLeave={e => e.target.style.textDecoration = "none"}>
                  {value}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────────────────────────────────────

/**
 * App — root component
 *
 * Injects global styles, mounts all layout and section components,
 * and activates all scroll/interaction hooks.
 */
export default function App() {
  const activeId = useActiveNav();
  useScrollReveal();
  useCursorDot();

  return (
    <>
      {/* Inject global styles */}
      <style>{CSS}</style>

      <CursorDot />
      <Navbar activeId={activeId} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <YouTubeSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
