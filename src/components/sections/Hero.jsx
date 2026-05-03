import { useEffect, useState } from "react";
import { CONTACT_DATA, HERO_DATA } from "../../constants/portfolio";
import Tag from "../ui_premitives/Tag";
import Button from "../ui_premitives/Button";
import heroImage from "../../assets/h1.jpg";

const Hero = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [headlinePhase, setHeadlinePhase] = useState("typing");

  const activeHeadline = HERO_DATA.headline[headlineIndex];

  useEffect(() => {
    const isComplete = visibleLength === activeHeadline.length;
    const delay =
      headlinePhase === "holding"
        ? 1700
        : headlinePhase === "exiting"
        ? 560
        : 76;

    const timer = window.setTimeout(() => {
      if (headlinePhase === "typing" && isComplete) {
        setHeadlinePhase("holding");
        return;
      }

      if (headlinePhase === "holding") {
        setHeadlinePhase("exiting");
        return;
      }

      if (headlinePhase === "exiting") {
        setHeadlineIndex(
          (current) => (current + 1) % HERO_DATA.headline.length
        );
        setVisibleLength(0);
        setHeadlinePhase("typing");
        return;
      }

      setVisibleLength((current) =>
        Math.min(current + 1, activeHeadline.length)
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [activeHeadline.length, headlinePhase, visibleLength]);

  const renderCursor = () => (
    <span className="typing-cursor" aria-hidden="true" />
  );

  const renderTypedHeadline = () => {
    let wordIndex = 0;

    let letterOffset = 0;

    return activeHeadline.split(/(\s+)/).map((part, index) => {
      if (!part.trim()) {
        const start = letterOffset;
        const end = start + part.length;
        const visibleChars = Math.max(
          0,
          Math.min(visibleLength - start, part.length)
        );
        const hasCursor = visibleLength >= start && visibleLength < end;
        letterOffset = end;

        return (
          <span className="typing-space" key={`space-${index}`}>
            {part.slice(0, visibleChars)}
            {hasCursor && renderCursor()}
            <span className="typing-hidden" aria-hidden="true">
              {part.slice(visibleChars)}
            </span>
          </span>
        );
      }

      const tone = ["white", "blue", "orange"][wordIndex % 3];
      wordIndex += 1;
      const start = letterOffset;
      const end = start + part.length;
      const visibleLetters = Math.max(
        0,
        Math.min(visibleLength - start, part.length)
      );
      letterOffset = end;

      return (
        <span
          className={`typing-word typing-word-${tone}`}
          key={`${part}-${index}`}
        >
          <span>{part.slice(0, visibleLetters)}</span>
          {visibleLength >= start && visibleLength < end && renderCursor()}
          <span className="typing-hidden" aria-hidden="true">
            {part.slice(visibleLetters)}
          </span>
        </span>
      );
    });
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.35fr) minmax(280px, .65fr)",
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
      <div
        className="hero-copy"
        style={{ maxWidth: 920, width: "100%", position: "relative" }}
      >
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
          className={`hero-title typewriter-title is-${headlinePhase} anim-1`}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.35rem, 4.8vw, 4.35rem)",
            fontWeight: 900,
            color: "var(--white)",
            lineHeight: 1.1,
            letterSpacing: "2px",
          }}
        >
          <span className="typing-text" aria-live="polite">
            {renderTypedHeadline()}
          </span>
          {visibleLength === activeHeadline.length && renderCursor()}
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
          <Button href={CONTACT_DATA.resume} variant="secondary" download>
            Download Resume ↓
          </Button>
        </div>
      </div>

      <aside
        className="hero-visual anim-2"
        aria-label="Developer profile preview"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          position: "relative",
        }}
      >
        <div className="hero-image-shell">
          <img src={heroImage} alt="Developer workspace placeholder" />
          <span className="hero-scanline" />
        </div>
        <div className="hero-profession-card">
          <span className="hero-card-label">CURRENT ROLE</span>
          <strong>{HERO_DATA.role}</strong>
          <p>
            Enterprise SaaS engineer building secure APIs, AI workflows, and
            production platforms.
          </p>
          <div>
            <span>React</span>
            <span>Node</span>
            <span>Postgres</span>
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
