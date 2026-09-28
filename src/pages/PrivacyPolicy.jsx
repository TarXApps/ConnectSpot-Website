import PageHeader from "../components/PageHeader";

const sections = [
  {
    heading: "1. Who We Are",
    body: [
      "This website is operated by Connect Spot Exhibitions (\"Connect Spot\", \"we\", \"us\", or \"our\"), an event management and exhibitions company based in Riyadh, Saudi Arabia.",
      "This Privacy Policy explains how we collect, use, disclose and protect the personal information of visitors to connectspotexhibitions.com and anyone who submits an enquiry through our contact form.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "When you fill in our contact form, we collect the information you choose to provide, which may include: your full name, email address, phone number, job title, company name, country of residence, and details about what you're interested in (exhibiting, sponsoring, partnering, or speaking).",
      "We may also automatically collect limited technical information when you browse our site, such as your IP address, browser type, device type, and general usage data (pages visited, time on site), typically through standard web server logs and analytics tools.",
      "We do not knowingly collect sensitive personal data (such as health information, financial account details, or government ID numbers) through this website.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "We use the information you provide to:",
    ],
    list: [
      "Respond to your enquiry and communicate with you about our events, services, and partnership opportunities.",
      "Provide you with information you have requested, such as event details or sponsorship packages.",
      "Improve our website, services, and the experience we offer to visitors and clients.",
      "Meet legal, regulatory, and contractual obligations where applicable.",
    ],
  },
  {
    heading: "4. How We Share Your Information",
    body: [
      "We do not sell or rent your personal information to third parties.",
      "We may share your information with trusted service providers who help us operate our business — for example, email delivery services or website hosting providers — solely for the purpose of fulfilling the functions described in this policy.",
      "We may disclose information if required to do so by law, or to protect the rights, property, or safety of Connect Spot Exhibitions, our clients, or others.",
    ],
  },
  {
    heading: "5. Communication Channels",
    body: [
      "If you contact us via WhatsApp, phone, or email using the details on this site, that conversation is subject to the privacy practices of the relevant platform (for example, WhatsApp's own privacy policy) in addition to this policy.",
    ],
  },
  {
    heading: "6. Cookies & Similar Technologies",
    body: [
      "Our website may use cookies or similar technologies to remember your preferences and understand how visitors use our site. You can control or disable cookies through your browser settings; doing so may affect how parts of the site function.",
    ],
  },
  {
    heading: "7. Data Retention",
    body: [
      "We retain the information you submit for as long as necessary to respond to your enquiry, maintain our business relationship with you, and comply with applicable legal and accounting requirements. When it is no longer needed, we take reasonable steps to delete or anonymise it.",
    ],
  },
  {
    heading: "8. Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect the personal information we hold from unauthorised access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "9. Your Rights",
    body: [
      "Depending on your location, you may have the right to:",
    ],
    list: [
      "Ask us what personal information we hold about you.",
      "Request that we correct inaccurate information.",
      "Request that we delete your personal information, subject to legal or legitimate business requirements.",
      "Withdraw any consent you previously gave us and opt out of further communications at any time.",
    ],
    after: [
      "To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    heading: "10. Children's Privacy",
    body: [
      "Our website and services are intended for business and professional use and are not directed at children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "11. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The \"Last updated\" date below indicates when this policy was last revised.",
    ],
  },
  {
    heading: "12. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your information, please contact us:",
    ],
    contact: true,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        heading="Privacy Policy"
        body="How Connect Spot Exhibitions collects, uses and protects your information."
      />

      <section className="bg-ink pt-6 pb-16 lg:pt-8 lg:pb-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <p className="text-bone/40 text-sm font-mono mb-12">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-semibold text-bone mb-4">
                  {s.heading}
                </h2>
                <div className="space-y-3 text-bone/60 text-sm leading-relaxed">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="list-disc pl-5 space-y-2">
                      {s.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {s.after && s.after.map((p, i) => <p key={i}>{p}</p>)}
                  {s.contact && (
                    <div className="mt-4 space-y-1">
                      <p>Connect Spot Exhibitions</p>
                      <p>Riyadh, Saudi Arabia</p>
                      <a
                        href="mailto:info@connectspotexhibitions.com"
                        className="text-amber hover:underline"
                      >
                        info@connectspotexhibitions.com
                      </a>
                      <br />
                      <a
                        href="tel:+966564319472"
                        className="text-amber hover:underline"
                      >
                        +966 56 431 9472
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
