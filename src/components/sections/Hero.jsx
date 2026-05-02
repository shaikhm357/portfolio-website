import { HERO_DATA } from "../../constants/portfolio";
import Tag from "../ui_premitives/Tag";
import Button from "../ui_premitives/Button";

const heroImage =
  "https://media.licdn.com/dms/image/v2/D4D35AQGKSWAXgnkNSQ/profile-framedphoto-shrink_400_400/B4DZi6PuT1GgAg-/0/1755471341100?e=1778263200&v=beta&t=RlqXWI8Og1sE9mgw75oAVlsgn2S1oa2dOGsqzKQBJOc";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, .85fr)",
        alignItems: "center",
        gap: 56,
        padding: "100px 80px 60px",
        position: "relative",
        overflow: "hidden",
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
            position: "absolute",
            background: "var(--accent)",
            opacity: 0.06,
            animation: `pulse-line 4s ease-in-out ${s.delay} infinite`,
            pointerEvents: "none",
            ...s,
          }}
        />
      ))}

      {/* Main content */}
      <div className="hero-copy" style={{ maxWidth: 760, width: "100%", position: "relative" }}>
        <div
          className="hero-kicker anim-1"
          style={{
            fontSize: ".65rem",
            letterSpacing: "4px",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: 12,
            opacity: 0.7,
          }}
        >
          ◈ Portfolio — {HERO_DATA.role}
        </div>

        <h1
          className="hero-title anim-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 900,
            color: "var(--white)",
            lineHeight: 1.1,
            letterSpacing: "2px",
          }}
        >
          Building the &nbsp;
          <span style={{ color: "var(--accent)" }}>Web</span>, One
          <br />
          <span style={{ color: "var(--accent2)" }}>Component</span> at a Time.
        </h1>

        <p
          className="hero-subtitle anim-2"
          style={{
            fontFamily: "var(--font-editorial)",
            fontSize: "1.1rem",
            color: "var(--text-dim)",
            margin: "20px 0 32px",
            lineHeight: 1.6,
            maxWidth: 580,
          }}
        >
          {HERO_DATA.subtitle}
        </p>

        <div
          className="hero-tags anim-3"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 40,
          }}
        >
          {HERO_DATA.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div
          className="hero-actions anim-4"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#" variant="secondary" download>
            Download Resume ↓
          </Button>
        </div>
      </div>

      <aside className="hero-visual anim-2" aria-label="Developer profile preview">
        <div className="hero-image-shell">
          <img src={heroImage} alt="Developer workspace placeholder" />
          <span className="hero-scanline" />
        </div>
        <div className="hero-profession-card">
          <span className="hero-card-label">CURRENT ROLE</span>
          <strong>{HERO_DATA.role}</strong>
          <p>Frontend-focused MERN developer crafting clean product interfaces.</p>
          <div>
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
          </div>
        </div>
      </aside>

      {/* Decorative rotating blueprint circle */}
      <div
        className="hide-mobile"
        style={{
          position: "absolute",
          right: -40,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      >
        <div
          className="rotating-circle"
          style={{
            width: 320,
            height: 320,
            border: "1px solid var(--accent)",
            borderRadius: "50%",
            position: "relative",
            transform: "translateY(-50%)",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 20,
              border: "1px dashed var(--accent)",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 50,
              border: "1px solid var(--accent)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
