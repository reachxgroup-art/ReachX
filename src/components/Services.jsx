import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 'it',
    number: '01',
    title: 'IT &',
    subtitle: 'Consulting',
    tags: ['Web & App Development', 'UI/UX Design', 'Game Development', 'AI/ML', 'IT Consultation', 'Industry Tech Solutions'],
    desc: 'Our enterprise IT consulting services bridge the gap between complex technological infrastructure and strategic business objectives. We build scalable, high-performance systems designed to elevate your operational capabilities.',
    stat: { value: '200+', label: 'Projects Delivered' },
    accentColor: '#0ea5e9',
    bgStyle: 'light',
    link: '#portfolio',
  },
  {
    id: '3d',
    number: '02',
    title: '3D',
    subtitle: 'Animation',
    tags: ['3D Walkthrough', 'Apartment Visualization', '3D Images', '360° Virtual Tour', '3D Interior Design', 'Product Visualization'],
    desc: 'Immersive, hyper-realistic 3D environments and motion graphics. We transform abstract concepts into breathtaking visual realities, pushing the boundaries of digital art to build unforgettable brand experiences.',
    stat: { value: '100%', label: 'Client Satisfaction' },
    accentColor: '#0284c7',
    bgStyle: 'mid',
    link: 'https://tanzzzx-studio.netlify.app/',
    poweredBy: 'Powered by Tanzzzx Studio',
  },
  {
    id: 'video',
    number: '03',
    title: 'Video',
    subtitle: 'Production',
    tags: ['Brand & Marketing Shoot', 'Marketing Cinematography', 'Branding & Strategy', 'Social Content'],
    desc: "Cinematic storytelling that captivates and converts. We handle everything from high-end commercial production to social-first video campaigns, delivering visually stunning narratives that cement your brand's authority.",
    stat: { value: '50M+', label: 'Views Generated' },
    accentColor: '#38bdf8',
    bgStyle: 'dark',
    link: 'https://tanzzzx-studio.netlify.app/',
    poweredBy: 'Powered by Tanzzzx Studio',
  },
];

const cardTheme = {
  light: {
    bg: '#f0f9ff',
    text: '#0c1a2e',
    muted: '#64748b',
    border: 'rgba(14,165,233,0.15)',
    pill: 'rgba(14,165,233,0.08)',
    pillText: '#0369a1',
    statBg: 'rgba(14,165,233,0.07)',
    arrowBg: '#0c1a2e',
    arrowColor: '#fff',
    descColor: '#94a3b8',
    discoverColor: '#94a3b8',
    glowColor: '#0ea5e9',
    glowOpacity: 0.06,
    shadow: '0 24px 80px rgba(14,165,233,0.10), 0 4px 24px rgba(0,0,0,0.06)',
  },
  dark: {
    bg: '#0c1a2e',
    text: '#f0f9ff',
    muted: '#94a3b8',
    border: 'rgba(56,189,248,0.15)',
    pill: 'rgba(56,189,248,0.10)',
    pillText: 'white',
    statBg: 'rgba(56,189,248,0.08)',
    arrowBg: '#e0f2fe',
    arrowColor: '#0c1a2e',
    descColor: 'rgba(186,230,253,0.6)',
    discoverColor: '#94a3b8',
    glowColor: '#0284c7',
    glowOpacity: 0.12,
    shadow: '0 24px 80px rgba(0,0,0,0.35), 0 4px 24px rgba(0,0,0,0.2)',
  },
  mid: {
    bg: '#082040',
    text: '#e0f2fe',
    muted: '#7dd3fc',
    border: 'rgba(56,189,248,0.2)',
    pill: 'rgba(56,189,248,0.12)',
    pillText: 'white',
    statBg: 'rgba(56,189,248,0.08)',
    arrowBg: '#e0f2fe',
    arrowColor: '#0c1a2e',
    descColor: 'rgba(186,230,253,0.6)',
    discoverColor: '#7dd3fc',
    glowColor: '#38bdf8',
    glowOpacity: 0.12,
    shadow: '0 24px 80px rgba(0,0,0,0.35), 0 4px 24px rgba(0,0,0,0.2)',
  },
};

const ArrowIcon = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/* ─── DESKTOP CARD (unchanged) ─────────────────────────────────── */
const ServiceCard = ({ card, index }) => {
  const t = cardTheme[card.bgStyle];

  const handlePillEnter = (e) => {
    e.target.style.background = card.accentColor;
    e.target.style.color = '#fff';
    e.target.style.borderColor = card.accentColor;
  };
  const handlePillLeave = (e) => {
    e.target.style.background = t.pill;
    e.target.style.color = t.pillText;
    e.target.style.borderColor = t.border;
  };
  const handleBtnEnter = (e) => {
    const circle = e.currentTarget.querySelector('.arrow-circle');
    circle.style.transform = 'scale(1.12)';
    circle.style.background = card.accentColor;
  };
  const handleBtnLeave = (e) => {
    const circle = e.currentTarget.querySelector('.arrow-circle');
    circle.style.transform = 'scale(1)';
    circle.style.background = t.arrowBg;
  };

  return (
    <div
      className="service-card"
      style={{
        position: 'sticky',
        top: `calc(8vh + ${index * 90}px)`,
        zIndex: index + 10,
        backgroundColor: t.bg,
        borderRadius: 36,
        padding: '52px 56px',
        border: `1px solid ${t.border}`,
        boxShadow: t.shadow,
        overflow: 'hidden',
        transition: 'transform 0.4s ease',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      <div style={{
        position: 'absolute', top: -140, right: -140,
        width: 480, height: 480,
        background: `radial-gradient(circle, ${t.glowColor} 0%, transparent 70%)`,
        opacity: t.glowOpacity * 2,
        pointerEvents: 'none',
        transform: 'translateZ(0)',
      }} />

      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6 md:gap-0">
        <div>
          <div className="text-[11px] font-bold uppercase mb-3.5"
            style={{ letterSpacing: '0.25em', color: card.accentColor, fontFamily: "'DM Sans', sans-serif" }}>
            [ {card.number} ]
          </div>
          <h3 className="m-0 leading-none">
            <span style={{
              display: 'block', fontSize: 'clamp(40px, 7vw, 104px)',
              fontWeight: 400, color: t.text, letterSpacing: '0.03em',
              fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.92,
            }}>{card.title}</span>
            <span style={{
              display: 'block', fontSize: 'clamp(40px, 7vw, 104px)',
              fontWeight: 400, color: t.muted, letterSpacing: '0.03em',
              opacity: 0.5, fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.92,
            }}>{card.subtitle}</span>
          </h3>
          {card.poweredBy && (
            <div className="mt-2.5 text-sm md:text-[15px] font-medium text-white" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.02em' }}>
              {card.poweredBy}
            </div>
          )}
        </div>

        <div className="text-center rounded-[20px] flex-shrink-0"
          style={{ padding: '20px 28px', background: t.statBg, border: `1px solid ${t.border}`, minWidth: 120 }}>
          <div style={{
            fontSize: 28, fontWeight: 800, color: card.accentColor,
            fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1, letterSpacing: '0.04em',
          }}>{card.stat.value}</div>
          <div style={{
            fontSize: 11, color: t.muted, marginTop: 6,
            letterSpacing: '0.08em', fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
          }}>{card.stat.label}</div>
        </div>
      </div>

      <div className="h-px mb-9" style={{ background: t.border }} />

      <div className="flex flex-wrap gap-2.5 mb-9">
        {card.tags.map(tag => (
          <span key={tag} className="pill cursor-pointer"
            style={{
              padding: '9px 20px', borderRadius: 100, background: t.pill, color: t.pillText,
              fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', border: `1px solid ${t.border}`,
              transition: 'all 0.25s', fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={handlePillEnter}
            onMouseLeave={handlePillLeave}>{tag}</span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <p style={{
          margin: 0, maxWidth: 560, fontSize: 16, lineHeight: 1.75,
          color: t.descColor, fontWeight: 400, fontFamily: "'DM Sans', sans-serif",
        }}>{card.desc}</p>
        <a href={card.link} target={card.link?.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer"
          className="flex items-center gap-3.5 flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
          style={{ textDecoration: 'none' }}
          onMouseEnter={handleBtnEnter} onMouseLeave={handleBtnLeave}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: t.discoverColor, fontFamily: "'DM Sans', sans-serif",
          }}>Discover More</span>
          <div className="arrow-circle flex items-center justify-center flex-shrink-0"
            style={{ width: 44, height: 44, borderRadius: '50%', background: t.arrowBg, transition: 'all 0.3s ease' }}>
            <ArrowIcon color={t.arrowColor} />
          </div>
        </a>
      </div>
    </div>
  );
};

/* ─── MOBILE CARD ───────────────────────────────────────────────── */
const MobileServiceCard = ({ card }) => {
  const t = cardTheme[card.bgStyle];
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: t.bg,
      borderRadius: 28,
      padding: '28px 24px 24px',
      border: `1px solid ${t.border}`,
      boxShadow: t.shadow,
      overflow: 'hidden',
      overflowY: 'auto',
      position: 'relative',
      transform: 'translateZ(0)',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 300, height: 300,
        background: `radial-gradient(circle, ${t.glowColor} 0%, transparent 70%)`,
        opacity: (t.glowOpacity + 0.04) * 2,
        pointerEvents: 'none',
        transform: 'translateZ(0)',
      }} />

      {/* Number + Stat row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
          color: card.accentColor, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase',
        }}>[ {card.number} ]</span>

        <div style={{
          padding: '8px 14px', borderRadius: 12,
          background: t.statBg, border: `1px solid ${t.border}`,
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 18, fontWeight: 800, color: card.accentColor,
            fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1, letterSpacing: '0.04em',
          }}>{card.stat.value}</div>
          <div style={{
            fontSize: 9, color: t.muted, marginTop: 3,
            letterSpacing: '0.07em', fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
            textTransform: 'uppercase',
          }}>{card.stat.label}</div>
        </div>
      </div>

      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <span style={{
          display: 'block', fontSize: 64, fontWeight: 400,
          color: t.text, letterSpacing: '0.03em',
          fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.88,
        }}>{card.title}</span>
        <span style={{
          display: 'block', fontSize: 64, fontWeight: 400,
          color: t.muted, letterSpacing: '0.03em', opacity: 0.45,
          fontFamily: "'Bebas Neue', sans-serif", lineHeight: 0.88,
        }}>{card.subtitle}</span>
        {card.poweredBy && (
          <div style={{
            marginTop: 10, fontSize: 13, fontWeight: 500, letterSpacing: '0.01em',
            color: card.accentColor, fontFamily: "'DM Sans', sans-serif",
          }}>
            {card.poweredBy}
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: t.border, marginBottom: 16 }} />

      {/* Tags — show first 3, rest behind expand */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
        {card.tags.slice(0, expanded ? card.tags.length : 3).map(tag => (
          <span key={tag} style={{
            padding: '6px 14px', borderRadius: 100,
            background: t.pill, color: t.pillText,
            fontSize: 11, fontWeight: 600, letterSpacing: '0.02em',
            border: `1px solid ${t.border}`, fontFamily: "'DM Sans', sans-serif",
          }}>{tag}</span>
        ))}
        {!expanded && card.tags.length > 3 && (
          <button onClick={() => setExpanded(true)} style={{
            padding: '6px 14px', borderRadius: 100,
            background: 'transparent', color: card.accentColor,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.02em',
            border: `1px solid ${card.accentColor}`, fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer',
          }}>+{card.tags.length - 3} more</button>
        )}
      </div>

      {/* Desc */}
      <p style={{
        margin: '0 0 20px', fontSize: 13, lineHeight: 1.7,
        color: t.descColor, fontWeight: 400, fontFamily: "'DM Sans', sans-serif",
      }}>{card.desc}</p>

      {/* CTA */}
      <a href={card.link} target={card.link?.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
        textDecoration: 'none'
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: t.discoverColor,
          fontFamily: "'DM Sans', sans-serif",
        }}>Discover More</span>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: t.arrowBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ArrowIcon color={t.arrowColor} />
        </div>
      </a>
    </div>
  );
};

/* ─── MOBILE CAROUSEL (GSAP pinned horizontal scroll) ───────────── */
const MobileCarousel = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollTimerRef = useRef(null);
  const interactionTimeoutRef = useRef(null);

  const TOTAL = servicesData.length;

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    const targetCard = cards[index];
    if (targetCard) {
      track.scrollTo({ left: targetCard.offsetLeft - 20, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIndex - 1 < 0 ? TOTAL - 1 : activeIndex - 1;
    scrollToIndex(nextIdx);
    pauseAutoScrollTemporarily();
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % TOTAL;
    scrollToIndex(nextIdx);
    pauseAutoScrollTemporarily();
  };

  const pauseAutoScrollTemporarily = () => {
    if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(startAutoScroll, 4000);
  };

  const startAutoScroll = () => {
    if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
    autoScrollTimerRef.current = setInterval(() => {
      if (!trackRef.current) return;
      const cards = Array.from(trackRef.current.children);
      
      let closestIdx = 0;
      let minDiff = Infinity;
      cards.forEach((card, idx) => {
        const diff = Math.abs(card.offsetLeft - trackRef.current.scrollLeft - 20);
        if (diff < minDiff) { minDiff = diff; closestIdx = idx; }
      });

      let nextIdx = closestIdx + 1;
      if (nextIdx >= TOTAL) nextIdx = 0;
      
      scrollToIndex(nextIdx);
    }, 3000);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Manual scroll tracker updates the dots
    let isScrolling;
    const handleScroll = () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        if (!trackRef.current) return;
        const cards = Array.from(trackRef.current.children);
        let closestIdx = 0;
        let minDiff = Infinity;
        cards.forEach((card, idx) => {
          const diff = Math.abs(card.offsetLeft - trackRef.current.scrollLeft - 20);
          if (diff < minDiff) { minDiff = diff; closestIdx = idx; }
        });
        setActiveIndex(closestIdx);
      }, 50);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });

    startAutoScroll();

    const onInteraction = () => pauseAutoScrollTemporarily();
    track.addEventListener('touchstart', onInteraction, { passive: true });
    track.addEventListener('touchmove', onInteraction, { passive: true });

    return () => {
      track.removeEventListener('scroll', handleScroll);
      track.removeEventListener('touchstart', onInteraction);
      track.removeEventListener('touchmove', onInteraction);
      if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px' }}
    >
      {/* ── Header ── */}
      <div style={{
        flexShrink: 0,
        padding: '28px 20px 16px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
        <h2 style={{
          margin: 0, lineHeight: 0.9,
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2.6rem, 11vw, 5rem)',
          color: '#0c1a2e',
          letterSpacing: '0.03em',
        }}>
          Our<br />
          <span style={{ color: '#0ea5e9' }}>Services</span>
        </h2>

        {/* Card counter */}
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.18em',
          color: servicesData[activeIndex]?.accentColor || '#0ea5e9',
          transition: 'color 0.3s',
        }}>
          {String(activeIndex + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
        </span>
      </div>

      {/* ── Thin progress bar ── */}
      <div style={{
        flexShrink: 0, height: 2,
        background: 'rgba(14,165,233,0.12)',
        margin: '0 20px 16px',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <div
          style={{
            height: '100%',
            background: servicesData[activeIndex]?.accentColor || '#0ea5e9',
            width: `${((activeIndex + 1) / TOTAL) * 100}%`,
            transition: 'width 0.3s ease, background 0.3s',
          }}
        />
      </div>

      {/* ── Card track ── */}
      <div style={{ flex: 1, padding: '0 0 24px 0' }}>
        <div
          ref={trackRef}
          className="hide-scrollbar"
          style={{
            display: 'flex',
            gap: 14,
            padding: '0 20px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
          }}
        >
          {servicesData.map((card, i) => (
            <div key={card.id} className="svc-mobile-card" style={{ 
              width: 'calc(100vw - 40px)', 
              height: 'auto',
              minHeight: '400px',
              flexShrink: 0,
              scrollSnapAlign: 'center',
              transform: 'translateZ(0)',
              willChange: 'transform',
            }}>
              <MobileServiceCard card={card} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Dot indicators + Arrows ── */}
      <div style={{
        flexShrink: 0,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 24,
        paddingBottom: 24,
      }}>
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          aria-label="Previous card"
          style={{
            background: 'rgba(14,165,233,0.08)',
            border: '1px solid rgba(14,165,233,0.15)',
            borderRadius: '50%',
            width: 42,
            height: 42,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: servicesData[activeIndex]?.accentColor || '#0ea5e9',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(14,165,233,0.08)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = servicesData[activeIndex]?.accentColor;
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(14,165,233,0.08)';
            e.currentTarget.style.color = servicesData[activeIndex]?.accentColor || '#0ea5e9';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8 }}>
          {servicesData.map((card, i) => (
            <div
              key={card.id}
              style={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === activeIndex ? card.accentColor : 'rgba(14,165,233,0.18)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => {
                scrollToIndex(i);
                pauseAutoScrollTemporarily();
              }}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          aria-label="Next card"
          style={{
            background: 'rgba(14,165,233,0.08)',
            border: '1px solid rgba(14,165,233,0.15)',
            borderRadius: '50%',
            width: 42,
            height: 42,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: servicesData[activeIndex]?.accentColor || '#0ea5e9',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(14,165,233,0.08)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = servicesData[activeIndex]?.accentColor;
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(14,165,233,0.08)';
            e.currentTarget.style.color = servicesData[activeIndex]?.accentColor || '#0ea5e9';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

/* ─── MAIN SECTION ──────────────────────────────────────────────── */
const Services = ({ className = '' }) => {
  const marqueeRef = useRef(null);

  return (
    <section
      id="services"
      data-noscale={true}
      className={`relative w-full bg-sky-50 ${className}`}
      style={{ paddingBottom: '15vh', fontFamily: "'DM Sans', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .service-card:hover { transform: translateY(-3px); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 22s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease both; }
        @keyframes fadeUpDelay { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up-delay { animation: fadeUpDelay 0.7s ease 0.18s both; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Hide mobile-only by default */
        .mobile-carousel { display: none; }

        @media (max-width: 767px) {
          .desktop-cards    { display: none !important; }
          .desktop-marquee  { display: none !important; }
          .mobile-carousel  { display: block !important; }
          section#services  { padding-bottom: 0 !important; }
        }
      `}</style>

      {/* ── DESKTOP marquee (hidden on mobile) ── */}
      <div className="desktop-marquee overflow-hidden py-[8px] mb-2">
        <div ref={marqueeRef} className="marquee-track flex w-max">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0 px-8">
              <span className="font-[font6] mt-10 text-7xl md:text-[15rem]"
                style={{
                  color: i % 2 === 0 ? 'transparent' : '#0c1a2e',
                  WebkitTextStroke: i % 2 === 0 ? '2px #0c1a2e' : 'none',
                  fontFamily: "'Bebas Neue', sans-serif",
                }}>
                {i % 2 === 0 ? 'Our' : 'Services'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP sticky cards ── */}
      <div className="desktop-cards max-w-[1360px] mx-auto px-12">
        <div className="relative flex flex-col gap-7">
          {servicesData.map((card, index) => (
            <ServiceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* ── MOBILE carousel ── */}
      <div className="mobile-carousel">
        <MobileCarousel />
      </div>
    </section>
  );
};

export default Services;