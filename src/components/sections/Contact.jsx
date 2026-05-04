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
        setForm({ name: "", email: "", message: "" });
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
    },
    {
      label: "Email",
      value: CONTACT_DATA.email,
      href: `mailto:${CONTACT_DATA.email}`,
    },
    { label: "GitHub", value: CONTACT_DATA.github, href: `https://${CONTACT_DATA.github}` },
    { label: "LinkedIn", value: CONTACT_DATA.linkedin, href: `https://www.${CONTACT_DATA.linkedin}` },
    { label: "Location", value: CONTACT_DATA.location, href: "#" },
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
                  color: fieldErrors[name] ? "var(--red-mark)" : "var(--accent)",
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
                color: fieldErrors.message ? "var(--red-mark)" : "var(--accent)",
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
                {href === "#" ? (
                  value
                ) : (
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
