import React, { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const servicesData = [
  {
    id: "it",
    number: "01",
    title: "IT &",
    subtitle: "Consulting",
    tags: ["Web & App Development", "UI/UX Design", "Game Development", "AI/ML", "IT Consultation", "Industry Tech Solutions"],
  },
  {
    id: "3d",
    number: "02",
    title: "3D",
    subtitle: "Animation",
    tags: ["3D Walkthrough", "Apartment Visualization", "3D Images", "360° Virtual Tour", "3D Interior Design", "Product Visualization"],
  },
  {
    id: "video",
    number: "03",
    title: "Video",
    subtitle: "Production",
    tags: ["Brand & Marketing Shoot", "Marketing Cinematography", "Branding & Strategy", "Social Content"],
  },
];

const services = servicesData.map((item) => ({
  title: `${item.title} ${item.subtitle}`,
  sub: item.tags,
}));

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleServices = useCallback(() => setServicesOpen((prev) => !prev), []);

  const closeDropdown = useCallback(() => {
    setServicesOpen(false);
    setActiveService(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) closeDropdown();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeDropdown]);

  const handleCtaClick = useCallback(() => { window.open("https://marketplace.reachxgroup.com/", "_blank"); }, []);
  const handleScheduleClick = useCallback(() => { window.location.href = "#book"; }, []);

  const handleNavClick = useCallback((e, href) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-5">
      {/* Logo */}
      <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2">
        <img className="h-15 rounded-full" src="/logo/image.png" alt="ReachX Group Logo" />
      </a>

      {/* Desktop Pill Nav */}
      <div className="absolute left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl rounded-full px-2 py-1.5 hidden lg:flex items-center gap-0.5 shadow-xl shadow-black/30">
        <div ref={dropdownRef} className="relative">
          <button
            onClick={toggleServices}
            className={`flex items-center gap-1.5 px-[18px] py-2 rounded-full text-sm text-[#333] font-medium border-none cursor-pointer transition-colors ${servicesOpen ? "bg-gray-100" : "bg-transparent hover:bg-gray-100"}`}
          >
            Services
            <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none"
              style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div
            className="absolute top-[calc(100%+12px)] left-1/2 bg-white backdrop-blur-xl rounded-2xl p-3 min-w-[260px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] z-[200] transition-all duration-200"
            style={{
              opacity: servicesOpen ? 1 : 0,
              pointerEvents: servicesOpen ? "all" : "none",
              transform: servicesOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-10px)",
            }}
          >
            {services.map((s, index) => (
              <div key={s.title} onMouseEnter={() => setActiveService(index)}
                className={`flex justify-between items-center px-3.5 py-3 rounded-[10px] cursor-pointer transition-colors ${activeService === index ? "bg-gray-100" : "hover:bg-gray-100"}`}>
                <span className="text-sm font-semibold">{s.title}</span>
                <span className="text-xs opacity-60">›</span>
              </div>
            ))}
            {activeService !== null && (
              <div className="absolute top-3 left-full ml-3 bg-white backdrop-blur-xl rounded-2xl p-3 min-w-[220px] shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                {services[activeService].sub.map((item, idx) => (
                  <a key={idx} href="#services"
                    className="block px-3 py-2.5 rounded-lg text-[13px] text-[#333] no-underline hover:bg-gray-100 transition-colors"
                    onClick={closeDropdown}>{item}</a>
                ))}
              </div>
            )}
          </div>
        </div>

        {navLinks.map((link) => (
          <a key={link.name} href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="px-[18px] py-2 rounded-full text-sm text-[#333] no-underline hover:bg-gray-100 transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:flex gap-3">
        <button onClick={handleCtaClick}
          className="bg-black/20 hover:bg-black/50 text-white font-semibold rounded-full px-[22px] py-3 cursor-pointer transition-all duration-300 border border-white/60 hover:border-white hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-[1.03] active:scale-[0.97]">
          Company Portfolio
        </button>
        <button onClick={handleScheduleClick}
          className="bg-[#2c67f2] hover:bg-[#1a52d8] text-white font-semibold rounded-full px-[22px] py-3 border-none cursor-pointer transition-all duration-300 hover:shadow-[0_4px_20px_rgba(44,103,242,0.5)] hover:scale-[1.03] active:scale-[0.97]">
          Schedule call
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex justify-center items-center p-2 rounded-full bg-white/80 backdrop-blur shadow-sm z-[200]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation"
      >
        {mobileMenuOpen ? <X size={22} color="#333" /> : <Menu size={22} color="#333" />}
      </button>

      {/* ── Mobile Menu — Glassmorphism ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[150] lg:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Panel */}
      <div
        className={`fixed z-[160] lg:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
        style={{ top: 16, left: 16, right: 16 }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            borderRadius: 24,
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
            overflow: 'hidden',
          }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <img className="h-10 rounded-full" src="/logo/image.png" alt="ReachX Group Logo" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-full"
              style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer' }}
            >
              <X size={18} color="#fff" />
            </button>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '0 20px' }} />

          {/* Nav links */}
          <div className="flex flex-col px-3 py-2">
            {[...navLinks, { name: 'Services', href: '#services' }].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="flex items-center justify-between rounded-xl px-4 py-[14px] no-underline transition-all duration-150"
                style={{ color: '#fff' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' }}>{link.name}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '0 20px' }} />

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 px-4 py-5">
            <button
              onClick={() => { handleCtaClick(); setMobileMenuOpen(false); }}
              style={{
                width: '100%', fontWeight: 600, borderRadius: 100,
                padding: '15px', fontSize: 15, cursor: 'pointer',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#fff', letterSpacing: '0.01em',
              }}
            >
              Company Portfolio
            </button>
            <button
              onClick={() => { handleScheduleClick(); setMobileMenuOpen(false); }}
              style={{
                width: '100%', fontWeight: 600, borderRadius: 100,
                padding: '15px', fontSize: 15, cursor: 'pointer',
                background: '#2c67f2', border: 'none',
                color: '#fff', letterSpacing: '0.01em',
              }}
            >
              Schedule Call →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
