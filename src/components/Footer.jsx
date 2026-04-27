import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

/* ── Social SVGs ── */
const Facebook = (props) => (
  <svg {...props} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const Instagram = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const LinkedIn = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const Youtube = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" /></svg>
);

const TwitterX = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
);

/* ── Contact Details — update these to real values ── */
const CONTACT = {
  email: 'reachxgroup@gmail.com',
  phone: '+91 9123855424',
  whatsapp: 'https://wa.me/919123855424',
};

/* ── Social Links — replace hrefs with real profile URLs ── */
const socials = [
  { label: 'Instagram', href: 'https://instagram.com/reachxgroup', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/reachxgroup', Icon: LinkedIn },
  { label: 'YouTube', href: 'https://youtube.com/@reachxgroup', Icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/share/18eMz8GpH8/', Icon: Facebook },
];

/* ── Nav links — all point to real section IDs ── */
const companyLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book a Call', href: '#book' },
];

const serviceLinks = [
  { label: 'IT & Consulting', href: '#services' },
  { label: '3D Animation', href: '#services' },
  { label: 'Video Production', href: '#services' },
  { label: 'Industries We Serve', href: '#industry' },
];

/* ════════════════════════════════════════════════════════════ */
const Footer = ({ className }) => {
  return (
    <footer aria-label="Site footer" className={cn("bg-[#050505] text-white pt-12 md:pt-24 flex flex-col font-sans relative z-10", className)}>

      <style>{`
        .footer-mobile-contact { display: none; }
        @media (max-width: 767px) {
          .footer-mobile-contact { display: flex; }
          .footer-social-bar { display: none; }
        }
        @media (min-width: 768px) {
          .footer-mobile-contact { display: none !important; }
          .footer-social-bar { display: grid; }
        }
      `}</style>

      {/* ── MOBILE: Email + Phone at very top ── */}
      <div className="footer-mobile-contact flex-col gap-3 px-5 mb-8">
        <a
          href={`mailto:${CONTACT.email}`}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, padding: '14px 18px',
            textDecoration: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2c67f2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Mail size={15} color="#fff" />
            </div>
            <div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', margin: '0 0 2px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Email Us</p>
              <p style={{ fontSize: 14, color: '#fff', margin: 0, fontWeight: 600 }}>{CONTACT.email}</p>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </a>

        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, padding: '14px 18px',
            textDecoration: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Phone size={15} color="#fff" />
            </div>
            <div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', margin: '0 0 2px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Call Us</p>
              <p style={{ fontSize: 14, color: '#fff', margin: 0, fontWeight: 600 }}>{CONTACT.phone}</p>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </a>
      </div>

      {/* ── MAIN LINK GRID ── */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1.5fr_1.5fr_2.5fr] gap-8 md:gap-12 w-full">

          {/* Column 1 — Company */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg md:text-2xl font-medium tracking-tight mb-1 text-white">ReachX Group</h3>
            <ul className="flex flex-col gap-3 md:gap-4">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg md:text-2xl font-medium tracking-tight mb-1 text-white">Services</h3>
            <ul className="flex flex-col gap-3 md:gap-4">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social (desktop) */}
          <div className="hidden md:flex flex-col gap-6">
            <h3 className="text-2xl font-medium tracking-tight mb-2 text-white">Social Media</h3>
            <ul className="flex flex-col gap-4">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={`ReachX Group on ${label}`}
                    className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — CTA */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end justify-center w-full mt-4 md:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-5 md:text-right">
              <span className="block text-gray-500">Have an idea?</span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-sky-300 mt-2"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Let's Build.
              </motion.span>
            </h2>
            <a
              href="#book"
              className="relative overflow-hidden group bg-white text-black px-8 py-4 rounded-full font-semibold text-sm tracking-wide inline-block"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Schedule a Call →
              </span>
              <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
          </div>

        </div>

        {/* Mobile Social Row */}
        <div className="flex md:hidden gap-3 mt-10 flex-wrap">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={`ReachX Group on ${label}`}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 100, padding: '8px 16px 8px 10px',
                textDecoration: 'none',
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon width={14} height={14} className="text-white" />
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: Social / Contact Bar ── */}
      <div className="footer-social-bar w-full border-t border-b border-white/10 bg-[#050505]">
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-6 divide-x divide-white/10 text-[11px] uppercase font-semibold tracking-wider">

          <a href={`mailto:${CONTACT.email}`} className="flex items-center justify-between pl-12 pr-4 py-5 hover:bg-white/5 transition-colors h-full">
            <span className="text-white truncate">{CONTACT.email}</span>
            <div className="w-8 h-8 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 ml-2">
              <Mail size={13} className="text-white" />
            </div>
          </a>

          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center justify-between px-4 py-5 hover:bg-white/5 transition-colors h-full">
            <span className="text-white truncate whitespace-nowrap">{CONTACT.phone}</span>
            <div className="w-8 h-8 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 ml-2">
              <Phone size={13} className="text-white" />
            </div>
          </a>

          {socials.slice(0, 4).map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={`ReachX Group on ${label}`}
              className="flex items-center justify-between px-4 py-5 hover:bg-white/5 transition-colors h-full last:pr-12"
            >
              <span className="text-white">{label.toUpperCase()}</span>
              <div className="w-8 h-8 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 ml-2">
                <Icon width={13} height={13} className="text-white" />
              </div>
            </a>
          ))}

        </div>
      </div>

      {/* ── Bottom Copyright ── */}
      <div className="bg-[#020202]">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 text-[12px] text-gray-500">
          <p className="text-center md:text-left">© {new Date().getFullYear()} ReachX Group. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;