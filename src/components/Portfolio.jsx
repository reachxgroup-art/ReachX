import React, { useRef, useEffect } from 'react';
import { cn } from '../utils/cn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATIC_TOTAL = 5; // always show 5 project cards + 1 CTA

/* ── Static project data ── */
const PROJECTS = [
  {
    _id: '1',
    title: 'Brand Identity Design',
    category: 'Branding',
    createdAt: '2024-03-15T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop',
  },
  {
    _id: '2',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    createdAt: '2024-01-20T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop',
  },
  {
    _id: '3',
    title: 'Mobile App UI/UX',
    category: 'UI/UX Design',
    createdAt: '2023-11-10T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop',
  },
  {
    _id: '4',
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    createdAt: '2023-09-05T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop',
  },
  {
    _id: '5',
    title: 'Corporate Web Redesign',
    category: 'Web Design',
    createdAt: '2023-07-18T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop',
  },
];
const TOTAL_ITEMS = STATIC_TOTAL + 1;

/* ─────────────────────────────────────────────────────────────────── */
const Portfolio = ({ className }) => {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const projects = PROJECTS;

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getVisible = () => 2;
      const getGap = () => 20;
      const getPad = () => 48;

      const getCardW = () => {
        return (window.innerWidth - 2 * getPad() - (getVisible() - 1) * getGap()) / getVisible();
      };

      const getScrollDist = () => {
        return (TOTAL_ITEMS - getVisible()) * (getCardW() + getGap());
      };

      const applyWidths = () => {
        const w = getCardW();
        track.querySelectorAll('.pf-card').forEach((c) => {
          c.style.width = `${w}px`;
          c.style.flexShrink = '0';
        });
      };

      applyWidths();

      const tween = gsap.to(track, {
        x: () => -getScrollDist(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${getScrollDist()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: applyWidths,
          onUpdate: (self) => {
            if (counterRef.current) {
              const visible = getVisible();
              const idx = Math.round(self.progress * (TOTAL_ITEMS - visible));
              counterRef.current.textContent =
                `${String(Math.min(idx + 1, TOTAL_ITEMS)).padStart(2, '0')} / ${String(TOTAL_ITEMS).padStart(2, '0')}`;
            }
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "x" });
        track.querySelectorAll('.pf-card').forEach((c) => {
          c.style.width = "";
          c.style.flexShrink = "";
        });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="portfolio"
      className={cn('relative bg-white', className)}
    >
      {/* ── CSS helpers ── */}
      <style>{`
        /* card image zoom */
        .pf-card .pf-img   { transition: transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94); }
        .pf-card:hover .pf-img { transform: scale(1.06); }

        /* title slide-up on hover (desktop only) */
        @media (min-width: 768px) {
          .pf-card .pf-title  { transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
          .pf-card:hover .pf-title { transform: translateY(-6px); }
          .portfolio-container { height: 100vh; }
          .pf-scroll-parent { overflow: hidden; }
        }

        @media (max-width: 767px) {
          .portfolio-container { height: auto; min-height: 100vh; }
          .pf-scroll-parent {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding-bottom: 20px;
          }
          .pf-scroll-parent::-webkit-scrollbar { display: none; }
          .pf-track { width: max-content; }
          .pf-card {
            width: 85vw;
            height: clamp(380px, 60vh, 500px);
            scroll-snap-align: center;
            flex-shrink: 0;
          }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════
          Full-viewport pinned section — works on ALL screen sizes
      ═══════════════════════════════════════════════════════════ */}
      <div
        ref={pinRef}
        className="flex flex-col w-full overflow-hidden portfolio-container"
      >
        {/* ── Top chrome: heading + counter ── */}
        <div className="shrink-0 flex items-end justify-between mt-12 md:mt-15 px-5 md:px-12 pt-8 md:pt-10 pb-4 md:pb-5">
          {/* Heading */}
          <a href="#book" className="group flex flex-wrap gap-x-3 md:gap-x-4 gap-y-0 cursor-pointer">
            {['Some', 'of', 'Our', 'Work'].map((w, i) => (
              <div key={i} className="overflow-hidden inline-block py-0.5">
                <span
                  className="font-[font6] leading-[0.88] text-blue-950 uppercase inline-block
                             group-hover:text-sky-600 transition-colors duration-500"
                  style={{ fontSize: 'clamp(2.1rem, 6.5vw, 7rem)' }}
                >
                  {w}
                </span>
              </div>
            ))}
          </a>

          {/* Right: counter + progress + "More" button */}
          <div className="flex flex-col items-end gap-0 md:gap-3 shrink-0 pb-0.5 md:pb-1">
            {/* slide counter */}
            {/* <span
              ref={counterRef}
              className="font-sans font-bold text-brand-dark/30 text-[10px] md:text-xs tracking-[0.2em] tabular-nums"
            >
              01 / {String(TOTAL_ITEMS).padStart(2, '0')}
            </span> */}
            {/* thin progress bar */}
            {/* <div className="w-16 md:w-32 h-[2px] bg-brand-dark/10 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-sky-500 rounded-full"
                style={{ width: '0%', transition: 'width 0.08s linear' }}
              />
            </div> */}

            {/* More projects button */}
            <a
              href="https://marketplace.reachxgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 md:gap-2 border border-brand-dark/15 rounded-full
                         px-3.5 md:px-5 py-1.5 md:py-2 text-brand-dark font-sans font-semibold text-[14px] md:text-lg tracking-wide
                         hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300"
            >
              <span >More Projects</span>

              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Thin divider */}
        <div className="shrink-0 mx-5 md:mx-12 h-px bg-brand-dark/8 mb-4 md:mb-5" />

        {/* ── Card track ── */}
        <div className="flex-1 px-5 md:px-12 pb-6 md:pb-10 pf-scroll-parent">
          <div
            ref={trackRef}
            className="flex gap-3 md:gap-5 h-full pf-track"
            style={{ willChange: 'transform' }}
          >
            {/* ── 5 Project cards ── */}
            {projects.map((project, i) => (
              <a
                key={project._id || i}
                href="https://marketplace.reachxgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pf-card group relative overflow-hidden rounded-2xl md:rounded-3xl block shrink-0 h-full cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="pf-img absolute inset-0 w-full h-full object-cover"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent z-10 pointer-events-none" />

                {/* Top pills row */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 z-20 flex items-center justify-between">
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)',
                    background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
                    padding: '5px 14px', borderRadius: 100,
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}>
                    {project.category}
                  </span>
                  <span className="hidden md:inline" style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
                    color: 'rgba(255,255,255,0.45)',
                  }}>
                    {new Date(project.createdAt).getFullYear()}
                  </span>
                </div>

                {/* Index number — large watermark */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]
                             font-[font6] select-none pointer-events-none
                             opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-700"
                  style={{ fontSize: 'clamp(6rem, 18vw, 20rem)', color: '#fff', lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Bottom title */}
                <div className="pf-title absolute bottom-5 md:bottom-7 left-5 md:left-7 right-5 md:right-7 z-20 flex items-end justify-between">
                  <h3
                    className="text-white font-sans font-bold tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2.8rem)' }}
                  >
                    {project.title}
                  </h3>
                  {/* Arrow */}
                  <div className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/15 backdrop-blur-md
                                  border border-white/20 flex items-center justify-center
                                  md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0
                                  transition-all duration-400">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* ── CTA card — last in track ── */}
            <a
              href="#book"
              className="pf-card group relative shrink-0 overflow-hidden rounded-2xl md:rounded-3xl h-full
                         flex flex-col items-center justify-center cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #0a2e6e 0%, #1a56db 55%, #3b82f6 100%)',
              }}
            >
              {/* radial shine */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 35% 35%, rgba(255,255,255,0.22) 0%, transparent 62%)' }}
              />
              {/* decorative circles */}
              <div className="absolute -top-10 md:-top-14 -right-10 md:-right-14 w-36 md:w-56 h-36 md:h-56 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 rounded-full bg-black/5 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 px-6 md:px-8 text-center">
                <p className="text-white font-sans font-bold leading-tight"
                  style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.8rem)' }}
                >
                  Have a{' '}
                  <em className="font-serif font-normal italic">Project</em>
                  {' '}in mind?
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span
                    className="bg-white font-sans font-bold rounded-full
                               group-hover:bg-orange-50 group-hover:shadow-2xl group-hover:-translate-y-1
                               transition-all duration-300"
                    style={{
                      fontSize: 'clamp(12px, 1.4vw, 14px)',
                      padding: 'clamp(10px, 1.3vw, 13px) clamp(28px, 3.5vw, 38px)',
                      color: '#1a56db', letterSpacing: '0.02em',
                    }}
                  >
                    Let's Talk
                  </span>

                  <a
                    href="https://marketplace.reachxgroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 font-sans font-semibold rounded-full
                               border border-white/40 bg-white/20 text-white hover:bg-white/40 hover:border-white/70
                               transition-all duration-300"
                    style={{
                      fontSize: 'clamp(11px, 1.3vw, 13px)',
                      padding: 'clamp(10px, 1.3vw, 13px) clamp(20px, 2.5vw, 28px)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Watch More Projects
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="translate-y-[0.5px]"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </a>

            {/* right breathing room */}
            <div className="shrink-0 w-2 md:w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
