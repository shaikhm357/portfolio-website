import { useCallback, useState, useRef } from "react";
import Button from "../ui_premitives/Button";
import { CONTACT_DATA } from "../../constants/portfolio";
import SectionHeader from "../ui_premitives/SectionHeader";

const WEBHOOK_URL = "https://hook.eu1.make.com/51bcjc32db5o6t5mm3bilzozf3e8st3x";
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_SUBMIT_INTERVAL = 30000;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const ALLOWED_CHARS = /^[a-zA-Z0-9\s.,!?'"@#$%&*()\-+/=:;<>{}[\]\\_|~`]+$/;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const lastSubmitRef = useRef(0);

  const sanitize = (str) => str.replace(/<[^>]*>/g, "");

  const validate = useCallback(() => {
    const errs = {};
    const name = sanitize(form.name).trim();
    const email = sanitize(form.email).trim();
    const message = sanitize(form.message).trim();

    if (!name || name.length < 2) errs.name = "Name must be at least 2 characters";
    if (name.length > MAX_NAME_LENGTH) errs.name = "Name is too long";
    if (!ALLOWED_CHARS.test(name)) errs.name = "Name contains invalid characters";

    if (!email) errs.email = "Email is required";
    if (email.length > MAX_EMAIL_LENGTH) errs.email = "Email is too long";
    if (!EMAIL_REGEX.test(email)) errs.email = "Invalid email format";

    if (!message) errs.message = "Message is required";
    if (message.length < 10) errs.message = "Message must be at least 10 characters";
    if (message.length > MAX_MESSAGE_LENGTH) errs.message = "Message is too long";
    if (!ALLOWED_CHARS.test(message)) errs.message = "Message contains invalid characters";

    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }, [form]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const sanitized = sanitize(value);
    setForm((prev) => ({ ...prev, [name]: sanitized }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");

      if (!validate()) return;

      const now = Date.now();
      if (now - lastSubmitRef.current < MIN_SUBMIT_INTERVAL) {
        setError("Please wait before sending another message");
        return;
      }
      lastSubmitRef.current = now;

      setSubmitting(true);
      try {
        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: sanitize(form.name).trim(),
            email: sanitize(form.email).trim(),
            message: sanitize(form.message).trim(),
            timestamp: new Date().toISOString(),
          }),
        });
        if (!response.ok) throw new Error("Failed to send");
        setSent(true);
        setForm({ message: "" });
        setTimeout(() => setSent(false), 4000);
      } catch {
        setError("Failed to transmit. Please try again.");
        setTimeout(() => setError(""), 4000);
      } finally {
        setSubmitting(false);
      }
    },
    [form, validate]
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
      label: "Phone",
      value: CONTACT_DATA.phone,
      href: `tel:${CONTACT_DATA.phone.replace(/-/g, "")}`,
      color: "#00E5FF",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: CONTACT_DATA.email,
      href: `mailto:${CONTACT_DATA.email}`,
      color: "#00E5FF",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: CONTACT_DATA.github,
      href: `https://${CONTACT_DATA.github}`,
      color: "#00E5FF",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.958-.866 1.756-.444 3.835-.444 5.59 0 1.95.544 2.95.866 2.95.866.652 1.652.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: CONTACT_DATA.linkedin,
      href: `https://www.${CONTACT_DATA.linkedin}`,
      color: "#00E5FF",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "Location",
      value: CONTACT_DATA.location,
      href: "#",
      color: "#00E5FF",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: "Resume",
      value: "Download Resume ",
      href: CONTACT_DATA.resume,
      download: true,
      color: "rgba(57, 255, 20, 1)",
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
                  color: fieldErrors[name] ? "var(--red-mark)" : "orange",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 8,
                  fontWeight: 700,
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
                style={{
                  ...inputStyle,
                  borderColor: fieldErrors[name] ? "var(--red-mark)" : undefined,
                }}
                required
              />
              {fieldErrors[name] && (
                <span style={{ fontSize: ".65rem", color: "var(--red-mark)", marginTop: 4, display: "block" }}>
                  {fieldErrors[name]}
                </span>
              )}
            </div>
          ))}
          <div>
            <label
              style={{
                fontSize: ".62rem",
                letterSpacing: "3px",
                color: fieldErrors.message ? "var(--red-mark)" : "orange",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
                fontWeight: 700,
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
              style={{
                ...inputStyle,
                height: 120,
                resize: "none",
                borderColor: fieldErrors.message ? "var(--red-mark)" : undefined,
              }}
              required
            />
            {fieldErrors.message && (
              <span style={{ fontSize: ".65rem", color: "var(--red-mark)", marginTop: 4, display: "block" }}>
                {fieldErrors.message}
              </span>
            )}
          </div>
          {error && (
            <span style={{ fontSize: ".72rem", color: "var(--red-mark)", display: "block" }}>
              {error}
            </span>
          )}
          <Button
            type="submit"
            variant="primary"
            style={{ alignSelf: "flex-start" }}
            disabled={submitting}
          >
            {submitting ? "Transmitting..." : sent ? "Transmitted ✓" : "Transmit Message →"}
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
              fontSize: ".75rem",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "var(--accent2)",
            }}
          >
            CONTACT NODE
          </span>
          {contactItems.map(({ label, value, href, download, icon, color }) => (
            <div
              key={label}
              style={{
                padding: label === "Resume" ? "16px" : "14px 0",
                borderBottom: label === "Resume" ? "none" : "1px dashed rgba(44,100,150,.3)",
                display: "flex",
                flexDirection: "column",
                gap: label === "Resume" ? 10 : 4,
                ...(label === "Resume" && {
                  background: "rgba(13,33,55,.6)",
                  border: "1px solid var(--line)",
                  borderRadius: 8,
                  marginTop: 10,
                  cursor: "pointer",
                  transition: "background .2s, border-color .2s",
                }),
              }}
              {...(label === "Resume" && {
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "rgba(57, 255, 20, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(57, 255, 20, 1)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "rgba(13,33,55,.6)";
                  e.currentTarget.style.borderColor = "var(--line)";
                },
                onClick: () => {
                  const a = document.createElement("a");
                  a.href = href;
                  a.download = "Sr_Developer_Mahboob.pdf";
                  a.click();
                },
              })}
            >
              <span
                style={{
                  fontSize: ".6rem",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color,
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textShadow: `0 0 8px ${color}60`,
                  filter: "brightness(1.2)",
                }}
              >
                {icon && (
                  <span style={{ filter: `drop-shadow(0 0 6px ${color})` }}>
                    {icon}
                  </span>
                )}
                {label}
              </span>
              <span style={{ fontSize: ".82rem", color: "var(--accent)" }}>
                {href === "#" ? (
                  value
                ) : download ? (
                  <span style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(57, 255, 20, 1)" }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ animation: "downloadBounce 1.5s ease-in-out infinite" }}
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {value}
                  </span>
                ) : (
                  <a
                    href={href}
                    style={{ color: "inherit", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                  >
                    {value}
                  </a>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
