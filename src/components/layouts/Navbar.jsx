import { useState } from "react";
import { NAV_LINKS } from "../../constants/portfolio";

const Navbar = ({ activeId }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="site-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 40px",
        background: "rgba(13,33,55,.92)",
        borderBottom: mobileOpen ? "1px solid rgba(57, 255, 20, 0.3)" : "1px solid var(--line)",
        backdropFilter: "blur(8px)",
        zIndex: 100,
      }}
    >
      <div
        className="site-brand"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "1.1rem",
          color: "var(--accent)",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        SHAIKH&nbsp;<span style={{ color: "var(--accent2)" }}>MAHBOOB</span>
      </div>
      <button
        className="hamburger-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        style={{
          flexDirection: "column",
          gap: 5,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 4,
        }}
      >
        <span
          style={{
            display: "block",
            width: 24,
            height: 2,
            background: mobileOpen ? "orange" : "var(--text-dim)",
            transition: "all .2s",
            transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: 24,
            height: 2,
            background: mobileOpen ? "orange" : "var(--text-dim)",
            transition: "all .2s",
            opacity: mobileOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: 24,
            height: 2,
            background: mobileOpen ? "orange" : "var(--text-dim)",
            transition: "all .2s",
            transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}
        />
      </button>
      <ul
        style={{ display: "flex", gap: 28, listStyle: "none" }}
        className="hide-mobile"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={`nav-link${
                activeId === href.slice(1) ? " active" : ""
              }`}
              style={{
                color:
                  activeId === href.slice(1)
                    ? "var(--accent)"
                    : "var(--text-dim)",
                textDecoration: "none",
                fontSize: ".75rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                position: "relative",
              }}
            >
              {activeId === href.slice(1) && (
                <span style={{ color: "var(--accent)", marginRight: 4 }}>
                  //
                </span>
              )}
              {label}
            </a>
          </li>
        ))}
      </ul>
      {mobileOpen && (
        <ul
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(13,33,55,.96)",
            borderBottom: "1px solid var(--line)",
            listStyle: "none",
            padding: "16px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: activeId === href.slice(1) ? "var(--accent)" : "var(--text-dim)",
                  textDecoration: "none",
                  fontSize: ".8rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  display: "block",
                  padding: "8px 0",
                  borderBottom: "1px dashed rgba(44,100,150,.3)",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(57, 255, 20, 1)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    activeId === href.slice(1) ? "var(--accent)" : "var(--text-dim)")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
