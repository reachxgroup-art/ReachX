import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const BASE_URL = "https://reachxmarketplace.onrender.com";

const testimonialsData = [
  {
    name: 'Rahul Mehta',
    role: 'CEO, Mehta Infra Pvt. Ltd.',
    content: 'They built our entire corporate website and 3D walkthrough for our upcoming residential project in Pune. The visualizations were so realistic that our pre-launch bookings went through the roof. Exceptional work.',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Mehta&background=0D8ABC&color=fff&size=128'
  },
  {
    name: 'Priya Nair',
    role: 'Founder, Nair Wellness Studio',
    content: 'Our brand identity and social media content was completely transformed. The team understood our Kerala roots and blended it beautifully with a modern aesthetic. Clients compliment our branding every single day.',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Nair&background=EA580C&color=fff&size=128'
  },
  {
    name: 'Arjun Kapoor',
    role: 'Director, Kapoor Real Estate',
    content: 'The 3D apartment visualizations and 360° virtual tours they created for our Delhi NCR project saved us lakhs in physical model costs. Buyers could experience the flat before it was even built. Game changer.',
    avatar: 'https://ui-avatars.com/api/?name=Arjun+Kapoor&background=2563EB&color=fff&size=128'
  },
  {
    name: 'Sneha Agarwal',
    role: 'Marketing Head, Agarwal Foods',
    content: 'We needed a product video for our new snack launch and the output was cinematic — far beyond what we expected from a digital agency. The video went viral on Instagram within 3 days of posting.',
    avatar: 'https://ui-avatars.com/api/?name=Sneha+Agarwal&background=9333EA&color=fff&size=128'
  },
  {
    name: 'Vikram Sharma',
    role: 'CTO, TechBharat Solutions',
    content: 'We outsourced our entire web platform development to them and they delivered on time, under budget, with clean code. The UI/UX is something our enterprise clients consistently praise. Highly recommended.',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Sharma&background=059669&color=fff&size=128'
  },
  {
    name: 'Ananya Reddy',
    role: 'Owner, Reddy Jewellers Hyderabad',
    content: 'Our e-commerce site and product photography shoot was handled end to end. The attention to detail in showcasing our gold and diamond jewellery online boosted our Diwali season sales by over 40%.',
    avatar: 'https://ui-avatars.com/api/?name=Ananya+Reddy&background=DB2777&color=fff&size=128'
  },
  {
    name: 'Rohit Bansal',
    role: 'MD, Bansal Construction Group',
    content: 'From brand identity to a full 3D walkthrough of our Jaipur township, they handled everything professionally. Their team is responsive, creative, and genuinely invested in your project\'s success.',
    avatar: 'https://ui-avatars.com/api/?name=Rohit+Bansal&background=4F46E5&color=fff&size=128'
  },
  {
    name: 'Meera Iyer',
    role: 'Co-Founder, Iyer Organic Farms',
    content: 'They created a beautiful brand film for our organic produce startup that captured the essence of sustainable farming. The storytelling was authentic and helped us secure two major retail partnerships.',
    avatar: 'https://ui-avatars.com/api/?name=Meera+Iyer&background=D97706&color=fff&size=128'
  }
];

const rowOne = testimonialsData.slice(0, 4);
const rowTwo = testimonialsData.slice(4, 8);

/* ─── DESKTOP CARD ── */
const TestimonialCard = ({ quote }) => (
  <div className="w-[350px] md:w-[450px] shrink-0 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300 transform-gpu relative group">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/5 group-hover:to-transparent pointer-events-none transition-all duration-500" />
    <div className="flex gap-1.5 text-amber-400">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
    </div>
    <p className="text-slate-600 font-sans text-base md:text-lg leading-relaxed flex-1">"{quote.content}"</p>
    <div className="flex items-center gap-4 mt-4 pt-6 border-t border-slate-100">
      <img src={quote.avatar} alt={quote.name} className="w-12 h-12 rounded-full border border-slate-200 object-cover" />
      <div className="flex flex-col">
        <h4 className="font-bold text-slate-900 leading-tight">{quote.name}</h4>
        <p className="text-brand-accent text-sm font-medium">{quote.role}</p>
      </div>
    </div>
  </div>
);

/* ─── MOBILE TESTIMONIAL CARD ── */
const MobileTestimonialCard = ({ quote }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: 20,
      padding: '24px 20px',
      border: '1px solid rgba(0,0,0,0.07)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: '100%',
      scrollSnapAlign: 'center',
      flexShrink: 0,
    }}
  >
    {/* Stars */}
    <div style={{ display: 'flex', gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>

    {/* Quote */}
    <p style={{ fontSize: 14, lineHeight: 1.75, color: '#475569', margin: 0, fontFamily: 'sans-serif' }}>
      "{quote.content}"
    </p>

    {/* Author */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 14, borderTop: '1px solid #f1f5f9' }}>
      <img src={quote.avatar} alt={quote.name}
        style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '1px solid #e2e8f0' }} />
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{quote.name}</div>
        <div style={{ fontSize: 12, color: '#0ea5e9', fontWeight: 500 }}>{quote.role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [logoPage, setLogoPage] = useState(0);
  const [clientLogos, setClientLogos] = useState([]);
  const trackRef = useRef(null);

  // Fetch client logos from backend
  useEffect(() => {
    fetch(`${BASE_URL}/client/get`)
      .then((res) => res.json())
      .then((data) => {
        // Each client object has an `image` field with the URL
        const list = Array.isArray(data) ? data : (Array.isArray(data?.clients) ? data.clients : []);
        const logos = list.map((c) => c.image).filter(Boolean);
        setClientLogos(logos);
      })
      .catch((err) => console.error('Failed to fetch client logos:', err));
  }, []);

  // Desktop logo pagination (4 per page)
  const desktopItemsPerPage = 4;
  const desktopTotalPages = Math.max(1, Math.ceil(clientLogos.length / desktopItemsPerPage));

  // Mobile logo pagination (6 per page in 2x3 grid)
  const mobileItemsPerPage = 6;
  const mobileTotalPages = Math.max(1, Math.ceil(clientLogos.length / mobileItemsPerPage));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % desktopTotalPages);
      setLogoPage((prev) => (prev + 1) % mobileTotalPages);
    }, 4000);
    return () => clearInterval(timer);
  }, [desktopTotalPages, mobileTotalPages]);

  const nextLogo = () => setCurrentPage((p) => (p + 1) % desktopTotalPages);
  const prevLogo = () => setCurrentPage((p) => (p - 1 + desktopTotalPages) % desktopTotalPages);

  const nextTestimonial = () => setMobileIndex((p) => (p + 1) % testimonialsData.length);
  const prevTestimonial = () => setMobileIndex((p) => (p - 1 + testimonialsData.length) % testimonialsData.length);

  const currentLogos = clientLogos.slice(currentPage * desktopItemsPerPage, (currentPage + 1) * desktopItemsPerPage);
  const mobileLogos = clientLogos.slice(logoPage * mobileItemsPerPage, (logoPage + 1) * mobileItemsPerPage);

  return (
    <section id="testimonials" className="py-16 md:py-22 bg-[#f8f9fa] relative overflow-hidden">
      <style>{`
        .mobile-testimonials { display: none; }
        .desktop-testimonials { display: block; }
        .mobile-logo-grid { display: none; }
        .desktop-logo-grid { display: block; }

        @media (max-width: 767px) {
          .mobile-testimonials { display: block; }
          .desktop-testimonials { display: none; }
          .mobile-logo-grid { display: block; }
          .desktop-logo-grid { display: none; }
        }
      `}</style>

      <div className="max-w-[1800px] mx-auto px-4 md:px-12 flex flex-col items-center">

        {/* ── Section Header ── */}
        <div className="w-full text-center z-10 relative px-4 md:px-12 pt-4 pb-8 md:py-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-heading font-bold text-[#2A3342] mb-3 tracking-tight">
            Clients we are proud of
          </h2>
          <p className="text-[#556987] font-sans text-sm md:text-base mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            We've had the privilege of working with businesses across India — from real estate developers and jewellers to tech startups and food brands. Here's what they have to say.
          </p>

          {/* ── DESKTOP Logo Slider ── */}
          <div className="desktop-logo-grid relative max-w-4xl mx-auto px-6 md:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-row flex-nowrap gap-6"
              >
                {currentLogos.map((logoUrl, index) => (
                  <div key={`${currentPage}-${index}`}
                    className="flex-1 flex flex-col items-center gap-2">
                    <div style={{
                      width: 170, height: 120,
                      borderRadius: '10%',
                      border: '2px solid #e2e8f0',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                      overflow: 'hidden',
                      background: 'white/10',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'box-shadow 0.2s',
                    }}>
                      <img
                        src={logoUrl}
                        alt={`Trusted client of ReachX Group`}
                        style={{ width: '80%', height: '80%', objectFit: 'contain', opacity: 0.9 }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <button onClick={prevLogo}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md text-slate-500 hover:text-slate-800 transition-all z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextLogo}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md text-slate-500 hover:text-slate-800 transition-all z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* ── MOBILE Logo Grid (2×3) ── */}
          <div className="mobile-logo-grid">
            <AnimatePresence mode="wait">
              <motion.div
                key={logoPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -40) setLogoPage((p) => (p + 1) % mobileTotalPages);
                  else if (offset.x > 40) setLogoPage((p) => (p - 1 + mobileTotalPages) % mobileTotalPages);
                }}
              >
                {mobileLogos.map((logoUrl, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{
                      width: 82, height: 72,
                      borderRadius: '10%',
                      border: '2px solid #e2e8f0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      overflow: 'hidden',
                      background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto',
                    }}>
                      <img src={logoUrl} alt={`Trusted client of ReachX Group`}
                      style={{ width: '82%', height: '82%', objectFit: 'contain', opacity: 0.9 }} />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Mobile logo dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
              {[...Array(mobileTotalPages)].map((_, i) => (
                <button key={i} onClick={() => setLogoPage(i)} style={{
                  width: i === logoPage ? 20 : 6, height: 6, borderRadius: 3,
                  background: i === logoPage ? '#0ea5e9' : 'rgba(14,165,233,0.25)',
                  border: 'none', padding: 0, cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Testimonials Header ── */}
        <div className="mb-10 md:mb-32 text-center max-w-4xl mx-auto px-4">
          <p className="text-brand-accent font-bold tracking-wider uppercase text-xs md:text-base mb-3 inline-block px-4 py-1.5 rounded-full bg-brand-accent/10">
            Client Success
          </p>
          <h2 className="text-3xl md:text-7xl font-heading font-bold tracking-tighter leading-[1.05] text-slate-900 mt-2">
            Trusted by visions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-600">shaping the future</span>
          </h2>
        </div>
      </div>

      {/* ── DESKTOP Marquee ── */}
      <div className="desktop-testimonials w-full relative flex flex-col gap-6 md:gap-8 overflow-hidden z-10"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex w-max shrink-0">
          <motion.div className="flex gap-6 md:gap-8 px-3 md:px-4 shrink-0"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}>
            {[...rowOne, ...rowOne, ...rowOne, ...rowOne].map((quote, idx) => (
              <TestimonialCard key={`row1-${idx}`} quote={quote} />
            ))}
          </motion.div>
        </div>
        <div className="flex w-max shrink-0">
          <motion.div className="flex gap-6 md:gap-8 px-3 md:px-4 shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}>
            {[...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo].map((quote, idx) => (
              <TestimonialCard key={`row2-${idx}`} quote={quote} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE Testimonials — single card paginated ── */}
      <div className="mobile-testimonials px-5 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={mobileIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) nextTestimonial();
              else if (offset.x > 50) prevTestimonial();
            }}
          >
            <MobileTestimonialCard quote={testimonialsData[mobileIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Nav + dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <button onClick={prevTestimonial} style={{
            width: 40, height: 40, borderRadius: '50%', background: '#fff',
            border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <ChevronLeft size={18} color="#64748b" />
          </button>

          <div style={{ display: 'flex', gap: 6 }}>
            {testimonialsData.map((_, i) => (
              <button key={i} onClick={() => setMobileIndex(i)} style={{
                width: i === mobileIndex ? 20 : 6, height: 6, borderRadius: 3,
                background: i === mobileIndex ? '#0ea5e9' : 'rgba(14,165,233,0.25)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>

          <button onClick={nextTestimonial} style={{
            width: 40, height: 40, borderRadius: '50%', background: '#fff',
            border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <ChevronRight size={18} color="#64748b" />
          </button>
        </div>

        {/* Counter */}
        <div style={{ textAlign: 'center', marginTop: 10, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', color: '#94a3b8', textTransform: 'uppercase' }}>
          {mobileIndex + 1} / {testimonialsData.length}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;