import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { countries } from "../data/countries";

const interestOptions = ["Exhibiting", "Sponsoring", "Partnering", "Speaking"];

function encodeFormData(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

function newChallenge() {
  return { a: Math.floor(Math.random() * 8) + 1, b: Math.floor(Math.random() * 8) + 1 };
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
  const [agreedError, setAgreedError] = useState(false);
  const [challenge, setChallenge] = useState(newChallenge);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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

    if (botField.trim() !== "") {
      setSubmitted(true);
      return;
    }
    if (!agreed) {
      setAgreedError(true);
      return;
    }
    setAgreedError(false);

    if (parseInt(captchaAnswer, 10) !== challenge.a + challenge.b) {
      setCaptchaError(true);
      setChallenge(newChallenge());
      setCaptchaAnswer("");
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

  const inputClass =
    "w-full bg-ink-soft border border-ink-line rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-amber transition-colors";
  const labelClass = "block text-xs font-mono uppercase tracking-wideish text-bone/50 mb-2";

  return (
    <section id="contact" className="bg-ink-soft border-y border-ink-line py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-[820px] mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-semibold text-3xl sm:text-4xl tracking-tightest text-center mb-12"
        >
          Fill in the brief
        </motion.h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center border border-amber/40 rounded-2xl py-16 px-8"
          >
            <p className="font-display text-2xl text-bone mb-2">
              Thanks, {form.firstName || "there"}.
            </p>
            <p className="text-bone/60">We've got your message and will be in touch shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-bone mb-6">
                Personal Info
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="sara@yourcompany.sa"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Sara"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Al Mansoori"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Job Title *</label>
                  <input
                    required
                    type="text"
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleChange}
                    placeholder="Marketing Manager"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+966 50 123 4567"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Country of Residence</label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select a country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Company Name *</label>
                  <input
                    required
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Your Company LLC"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-bone mb-6">
                Interested In
              </h3>
              <div className="flex flex-wrap gap-3">
                {interestOptions.map((opt) => {
                  const active = interests.includes(opt);
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleInterest(opt)}
                      className={`px-5 py-2.5 rounded-full text-sm border transition-colors ${
                        active
                          ? "bg-amber text-ink border-amber"
                          : "bg-transparent text-bone/60 border-ink-line hover:border-amber/50"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Honeypot field — hidden from real users */}
            <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
              <label htmlFor="bot-field">Don't fill this out</label>
              <input
                type="text"
                id="bot-field"
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass}>
                What is {challenge.a} + {challenge.b}? *
              </label>
              <input
                required
                type="text"
                inputMode="numeric"
                value={captchaAnswer}
                onChange={(e) => {
                  setCaptchaAnswer(e.target.value);
                  setCaptchaError(false);
                }}
                placeholder="Your answer"
                className={`${inputClass} max-w-[160px] ${captchaError ? "border-red-400" : ""}`}
              />
              {captchaError && (
                <p className="text-red-400 text-xs mt-2">
                  That's not quite right — try the new sum below.
                </p>
              )}
            </div>

            <div
              className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                agreedError
                  ? "border-red-400 bg-red-400/5"
                  : agreed
                  ? "border-amber/40 bg-amber/5"
                  : "border-ink-line bg-ink"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setAgreed((a) => !a);
                  setAgreedError(false);
                }}
                className={`mt-0.5 shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  agreed ? "bg-amber border-amber" : "border-bone/40"
                }`}
                aria-pressed={agreed}
                aria-label="Accept privacy terms"
              >
                {agreed && (
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-ink" fill="none">
                    <path
                      d="M3 8.5 6.5 12 13 4.5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <div>
                <label className="text-sm font-medium text-bone">
                  I accept the Privacy Terms <span className="text-amber">*</span>
                </label>
                <p className="text-xs text-bone/50 mt-1">
                  Required to submit this form — check the box above to confirm.
                </p>
                {agreedError && (
                  <p className="text-red-400 text-xs font-medium mt-2">
                    Please accept the privacy terms to continue.
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-wideish bg-amber text-ink px-10 py-4 rounded-full hover:bg-bone transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
            {submitError && (
              <p className="text-red-400 text-sm">
                Something went wrong sending that — please try again, or email us directly at
                info@connectspotexhibitions.com.
              </p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}
