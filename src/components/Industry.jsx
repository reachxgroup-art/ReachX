import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { id: 1, name: 'Micro private Banking and Financial Services', shortName: 'Banking & Financial', image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, name: 'Real Estate', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, name: 'Healthcare', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200' },
  { id: 4, name: 'Public Sector', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
  { id: 5, name: 'Utilities', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200' },
  { id: 6, name: 'Communication', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200' },
  { id: 7, name: 'Media', image: 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?auto=format&fit=crop&q=80&w=1200' },
  { id: 8, name: 'Retail', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200' },
  { id: 9, name: 'Education', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200' },
  { id: 10, name: 'Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200' },
  { id: 11, name: 'Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200' },
];

/* ─── Mobile Carousel ─────────────────────────────────── */
const MobileCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef(null);

  /* Track active card via rAF-throttled scroll listener */
  const onScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = scrollRef.current;
      if (!el) return;
      const cardWidth = el.scrollWidth / industries.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), industries.length - 1));
    });
  }, []);

  /* Scroll to card on dot tap */
  const scrollTo = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / industries.length;
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    // Existing scroll listener
    el.addEventListener('scroll', onScroll, { passive: true });
    
    // Auto-scroll logic
    let autoScrollTimer;
    let interactionTimeout;
    
    const startAutoScroll = () => {
      clearInterval(autoScrollTimer);
      autoScrollTimer = setInterval(() => {
        if (!scrollRef.current) return;
        const currentScroll = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.scrollWidth / industries.length;
        let nextIdx = Math.round(currentScroll / cardWidth) + 1;
        if (nextIdx >= industries.length) nextIdx = 0;
        scrollRef.current.scrollTo({ left: cardWidth * nextIdx, behavior: 'smooth' });
      }, 2500);
    };

    startAutoScroll();

    // Pause auto-scroll when user interacts
    const pauseAutoScroll = () => {
      clearInterval(autoScrollTimer);
      clearTimeout(interactionTimeout);
      // Restart after 3 seconds of idle
      interactionTimeout = setTimeout(startAutoScroll, 3000);
    };

    el.addEventListener('touchstart', pauseAutoScroll, { passive: true });
    el.addEventListener('touchmove', pauseAutoScroll, { passive: true });
    
    return () => {
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('touchstart', pauseAutoScroll);
      el.removeEventListener('touchmove', pauseAutoScroll);
      clearInterval(autoScrollTimer);
      clearTimeout(interactionTimeout);
    };
  }, [onScroll]);

  return (
    <div className="mt-2 pb-8">
      {/* Scroll track */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          gap: 12,
          paddingLeft: '5vw',
          paddingRight: '5vw',
          paddingBottom: 4,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          /* Smooth deceleration on iOS */
          WebkitScrollBehavior: 'smooth',
        }}
        className="hide-scrollbar"
      >
        {industries.map((item) => (
          <div
            key={item.id}
            style={{
              flexShrink: 0,
              width: '78vw',
              maxWidth: 300,
              aspectRatio: '4/3',
              borderRadius: 20,
              overflow: 'hidden',
              position: 'relative',
              scrollSnapAlign: 'center',
              /* GPU-promote each card for buttery compositing */
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          >
            <img
              src={item.image}
              alt={`${item.name} — industry served by ReachX Group`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                /* No extra scale — eliminates the jitter */
                display: 'block',
              }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
              zIndex: 1,
            }} />

            {/* Label */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              zIndex: 2, padding: '14px 16px',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            }}>
              <h3 style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.01em',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.15,
                paddingRight: 10,
              }}>
                {item.shortName || item.name}
              </h3>

              {/* Arrow pill */}
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reactive dot indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, marginTop: 14 }}>
        {industries.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              padding: 0,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: 6,
                width: i === activeIndex ? 20 : 6,
                borderRadius: 99,
                background: i === activeIndex ? '#0EA5E9' : 'rgba(12,26,46,0.18)',
                transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s ease',
              }}
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <p style={{
        textAlign: 'center', marginTop: 8,
        fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
        textTransform: 'uppercase', color: 'rgba(12,26,46,0.3)',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {activeIndex + 1} / {industries.length}
      </p>
    </div>
  );
};

/* ─── Main Section ────────────────────────────────────── */
const Industry = ({ className }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let decayTimeout;
      gsap.set(trackRef.current, { clearProps: 'x,xPercent' });

      const marquee = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: Math.max(15, industries.length * 2),
        ease: 'none',
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: document.body,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = Math.abs(self.getVelocity());
          gsap.to(marquee, { timeScale: 1 + v / 2000, duration: 0.4, ease: 'power1.out', overwrite: true });
          clearTimeout(decayTimeout);
          decayTimeout = setTimeout(() => {
            gsap.to(marquee, { timeScale: 1, duration: 1.2, ease: 'power2.out', overwrite: true });
          }, 250);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="industry"
      ref={sectionRef}
      className={cn('py-16 md:py-28 bg-sky-50 bg-brand-surface relative overflow-hidden', className)}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .mobile-industry  { display: none; }
        .desktop-industry { display: block; }
        @media (max-width: 767px) {
          .mobile-industry  { display: block; }
          .desktop-industry { display: none; }
        }
      `}</style>

      {/* Heading */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col justify-center items-center gap-8 md:gap-12 mb-8 lg:mb-16 relative z-20">
          <div className="max-w-6xl text-center flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-0 md:gap-y-2">
            {['Industries', 'We', 'Serve'].map((word, i) => (
              <div key={i} className="overflow-hidden inline-block py-1 md:py-2">
                <span
                  className="gsap-stagger-item font-[font6] leading-[0.85] text-blue-950 uppercase inline-block"
                  style={{ fontSize: 'clamp(2.4rem, 8vw, 8rem)' }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop GSAP marquee */}
      <div className="desktop-industry mt-8 w-full relative pb-12 md:pb-24">
        <div
          ref={trackRef}
          className="flex flex-nowrap gap-4 md:gap-6 w-max items-start"
          style={{ paddingLeft: '2rem' }}
        >
          {[...industries, ...industries].map((item, index) => (
            <motion.div
              key={`${item.id}-clone${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="group block relative shrink-0 w-[80vw] md:w-[35vw] lg:w-[23vw] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
              style={{ WebkitTransform: 'translate3d(0,0,0)', transform: 'translate3d(0,0,0)' }}
            >
              <div className="block relative w-full h-full bg-brand-dark/5" data-cursor="play">
                <img
                  src={item.image}
                  alt={`${item.name} — industry served by ReachX Group`}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <div className="absolute bottom-5 left-5 z-20 flex items-center overflow-hidden pr-4">
                  <span className="text-white text-xl font-light opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out mr-2">→</span>
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight ml-5 group-hover:ml-0 transition-all duration-300 ease-out leading-tight drop-shadow-md">
                    {item.shortName || item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile swipe carousel */}
      <div className="mobile-industry">
        <MobileCarousel />
      </div>
    </section>
  );
};

export default Industry;