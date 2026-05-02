import { useCallback, useState } from "react";
import Button from "../ui_premitives/Button";
import { CONTACT_DATA } from "../../constants/portfolio";
import SectionHeader from "../ui_premitives/SectionHeader";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // TODO: wire up your form service (EmailJS, Formspree, etc.)
      console.log("Form submitted:", form);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    },
    [form]
  );

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
    {
      label: "Email",
      value: CONTACT_DATA.email,
      href: `mailto:${CONTACT_DATA.email}`,
    },
    { label: "GitHub", value: CONTACT_DATA.github, href: "#" },
    { label: "LinkedIn", value: CONTACT_DATA.linkedin, href: "#" },
    { label: "YouTube", value: CONTACT_DATA.youtube, href: "#" },
    {
      label: "Resume",
      value: "Download PDF ↓",
      href: CONTACT_DATA.resume,
      download: true,
    },
  ];

  return (
    <section
      id="contact"
      className="page-section"
      style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionHeader number="05" title="Contact" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
        }}
        className="grid-1-mobile"
      >
        {/* Form */}
        <form
          className="reveal"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          {[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Your name",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "your@email.com",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label
                style={{
                  fontSize: ".62rem",
                  letterSpacing: "3px",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 8,
                }}
              >
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
            <label
              style={{
                fontSize: ".62rem",
                letterSpacing: "3px",
                color: "var(--accent)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
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
          <Button
            type="submit"
            variant="primary"
            style={{ alignSelf: "flex-start" }}
          >
            {sent ? "Transmitted ✓" : "Transmit Message →"}
          </Button>
        </form>

        {/* Contact info */}
        <div
          className="contact-panel reveal"
          style={{
            padding: 28,
            border: "1px solid var(--line)",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -10,
              left: 16,
              background: "var(--bg)",
              padding: "0 8px",
              fontSize: ".6rem",
              letterSpacing: "3px",
              color: "var(--accent)",
            }}
          >
            CONTACT NODE
          </span>
          {contactItems.map(({ label, value, href, download }) => (
            <div
              key={label}
              style={{
                padding: "14px 0",
                borderBottom: "1px dashed rgba(44,100,150,.3)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: ".6rem",
                  letterSpacing: "3px",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </span>
              <span style={{ fontSize: ".82rem", color: "var(--accent)" }}>
                <a
                  href={href}
                  download={download}
                  style={{ color: "inherit", textDecoration: "none" }}
                  onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  {value}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
