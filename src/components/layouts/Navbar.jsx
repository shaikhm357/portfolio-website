import { NAV_LINKS } from "../../constants/portfolio";

const Navbar = ({ activeId }) => {
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
        borderBottom: "1px solid var(--line)",
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
        Weeb<span style={{ color: "var(--accent2)" }}>Coders</span>
      </div>
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
    </nav>
  );
};

export default Navbar;
