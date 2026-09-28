import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon, TwitterIcon } from "./icons/SocialIcons";
import logoWhite from "../assets/CPLogo_white.png";
import logoColor from "../assets/CPLogo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/our-services" },
  { label: "Our Events", to: "/our-events" },
  { label: "News & Insights", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoWhite} alt="Connect Spot Exhibitions" className="h-9 w-auto" />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="hidden sm:inline-flex items-center px-6 py-2.5 border border-bone/40 text-bone text-xs font-display uppercase tracking-widest rounded-full hover:border-amber hover:text-amber transition-colors"
          >
            Contact Us
          </Link>
          <button
            className="text-bone z-50 relative"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Backdrop — click to close */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel — capped at 1/3 of the screen width */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-1/3 min-w-[240px] max-w-sm bg-ink border-l border-ink-line shadow-2xl transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start justify-center min-h-full gap-6 px-8 py-24">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg sm:text-xl font-display ${isActive ? "text-amber" : "text-bone"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-5 mt-6">
            <a href="#" aria-label="LinkedIn" className="text-bone/70">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-bone/70">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-bone/70">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="X" className="text-bone/70">
              <TwitterIcon className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
