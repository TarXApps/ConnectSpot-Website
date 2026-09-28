import { Link } from "react-router-dom";
import logoWhite from "../assets/CPLogo_white.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/our-services" },
  { label: "Our Events", to: "/our-events" },
  { label: "News & Insights", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

const socialLabels = ["LinkedIn", "Instagram", "Facebook", "X"];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-line pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div>
            <img src={logoWhite} alt="Connect Spot Exhibitions" className="h-7 w-auto mb-4" />
            <p className="text-bone/40 text-sm max-w-xs">
              A decade of building events that move markets.
            </p>
          </div>

          <div>
            <p className="eyebrow text-bone/40 mb-4">Quick Links</p>
            <nav className="grid grid-cols-2 gap-x-10 gap-y-3">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-sm text-bone/60 hover:text-amber transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="eyebrow text-bone/40 mb-4">Contact</p>
            <div className="text-sm text-bone/60 space-y-2 max-w-xs">
              <p>Connect Spot Exhibitions</p>
              <p className="text-bone/50">Riyadh, Saudi Arabia</p>
              <a
                href="tel:+966564319472"
                className="block hover:text-amber transition-colors"
              >
                +966 56 431 9472
              </a>
              <a
                href="mailto:info@connectspotexhibitions.com"
                className="block hover:text-amber transition-colors"
              >
                info@connectspotexhibitions.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-5">
            {socialLabels.map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs font-mono text-bone/40 hover:text-amber transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-xs font-mono text-bone/40 hover:text-amber transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-xs text-bone/30 font-mono">
              Copyright © {new Date().getFullYear()} Connect Spot Exhibitions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
