import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { countries } from "../data/countries";

const interestOptions = ["Exhibiting", "Sponsoring", "Partnering", "Speaking"];

function encodeFormData(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function ContactSection() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    country: "",
    companyName: "",
  });
  const [interests, setInterests] = useState([]);
  const [botField, setBotField] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const challenge = useMemo(() => {
    return { a: Math.floor(Math.random() * 8) + 1, b: Math.floor(Math.random() * 8) + 1 };
  }, [submitted]);

  const toggleInterest = (opt) => {
    setInterests((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError(false);

    if (!agreed) {
      setSubmitError(true);
      return;
    }
    if (parseInt(captchaAnswer, 10) !== challenge.a + challenge.b) {
      setSubmitError(true);
      return;
    }

    setSubmitting(true);

    fetch("/send-form.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({
        ...form,
        interests: interests.join(", "),
        "bot-field": botField,
        challenge_a: challenge.a,
        challenge_b: challenge.b,
        captcha_answer: captchaAnswer,
      }),
    })
      .then((res) => res.json().catch(() => ({ success: res.ok })))
      .then((data) => {
        setSubmitting(false);
        if (data.success) {
          setSubmitted(true);
        } else {
          setSubmitError(true);
        }
      })
      .catch(() => {
        setSubmitting(false);
        setSubmitError(true);
      });
  };

  if (submitted) {
    return (
      <div className="p-10 rounded-2xl bg-ink-soft border border-ink-line text-center">
        <h3 className="font-display text-2xl font-semibold mb-3">Thank you.</h3>
        <p className="text-bone/70">
          We've received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-ink border border-ink-line text-bone placeholder:text-bone/40 focus:outline-none focus:border-amber transition-colors";
  const labelClass = "block text-sm text-bone/70 mb-2";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-2xl bg-ink-soft border border-ink-line space-y-6"
    >
      {/* Honeypot field — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label>
          Don't fill this out if you're human:
          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>First Name</label>
          <input
            required
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Fatima"
          />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Al-Rashid"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Email</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="fatima@company.com"
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+966 5X XXX XXXX"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Job Title</label>
          <input
            required
            type="text"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            className={inputClass}
            placeholder="Marketing Director"
          />
        </div>
        <div>
          <label className={labelClass}>Company Name</label>
          <input
            required
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Company LLC"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Country of Residence</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a country</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>I'm interested in</label>
        <div className="flex flex-wrap gap-3">
          {interestOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => toggleInterest(opt)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                interests.includes(opt)
                  ? "bg-amber text-ink border-amber"
                  : "border-ink-line text-bone/70 hover:border-amber"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass}>
          What's {challenge.a} + {challenge.b}?
        </label>
        <input
          required
          type="number"
          value={captchaAnswer}
          onChange={(e) => setCaptchaAnswer(e.target.value)}
          className={inputClass}
          placeholder="Your answer"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-bone/60">
        <input
          required
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1"
        />
        I agree to be contacted by Connect Spot Exhibitions regarding my enquiry.
      </label>

      {submitError && (
        <p className="text-sm text-red-400">
          Something went wrong — please check the form and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-4 bg-amber text-ink font-display font-semibold tracking-wide rounded-full hover:bg-bone transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}
