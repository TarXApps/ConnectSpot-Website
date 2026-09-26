import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon, TwitterIcon } from "./icons/SocialIcons";
import logoWhite from "../assets/CPLogo_white.png";

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-ink-line pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          <div>
            <img src={logoWhite} alt="Connect Spot Exhibitions" className="h-9 w-auto mb-4" />
            <p className="text-bone/60 text-sm leading-relaxed max-w-xs">
              Building exhibitions and conferences that connect businesses, people and ideas
              across the region.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wide text-amber mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-bone/70">
              <li><Link to="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber transition-colors">About Us</Link></li>
              <li><Link to="/our-services" className="hover:text-amber transition-colors">Our Services</Link></li>
              <li><Link to="/our-events" className="hover:text-amber transition-colors">Our Events</Link></li>
              <li><Link to="/news" className="hover:text-amber transition-colors">News & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-amber transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wide text-amber mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-bone/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber" />
                Riyadh, Saudi Arabia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-amber" />
                <a href="tel:+966564319472" className="hover:text-amber transition-colors">
                  +966 56 431 9472
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-amber" />
                <a href="mailto:info@connectspotexhibitions.com" className="hover:text-amber transition-colors">
                  info@connectspotexhibitions.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wide text-amber mb-4">Follow us</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-bone/70 hover:text-amber transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-bone/70 hover:text-amber transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-bone/70 hover:text-amber transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="X" className="text-bone/70 hover:text-amber transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-bone/40">
            © {new Date().getFullYear()} Connect Spot Exhibitions. All rights reserved.
          </p>
          <p className="text-xs text-bone/40">Riyadh, Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
}
