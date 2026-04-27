import React, { useRef, useEffect, useState } from "react";
import { cn } from "../utils/cn";

const Hero = ({ className }) => {
  const containerRef = useRef(null);

  const servicesData = [
    // {
    //   title: "",
    //   video: "videos/reachx.mp4",
    //   tags: [],
    //   // duration: 5000,
    // },
    {
      title: "IT & Tech Development",
      video: "videos/tech.mp4",
      tags: ["Web & App Development", "UI/UX Design", "Game Development", "AI/ML", "IT Consultation", "Industry Tech Solutions"],
    },
    {
      title: "3D Animation",
      video: "videos/3d.mp4",
      tags: ["3D Walkthrough", "Apartment Visualization", "3D Images", "360° Virtual Tour", "3D Interior Design", "Product Visualization"],
    },
    {
      title: "Video Production",
      video: "videos/video.mp4",
      tags: ["Brand & Marketing Shoot", "Marketing Cinematography", "Branding & Strategy", "Social Content"],
    },
  ];

  const [serviceIndex, setServiceIndex] = useState(0);
  const [tagIndex, setTagIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const currentService = servicesData[serviceIndex];

  useEffect(() => {
    if (!currentService.tags || currentService.tags.length === 0) {
      const timeout = setTimeout(() => {
        setServiceIndex((s) => (s < servicesData.length - 1 ? s + 1 : 0));
        setTagIndex(0);
      }, currentService.duration || 6000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 400);

      setTagIndex((prev) => {
        if (prev < currentService.tags.length - 1) {
          return prev + 1;
        } else {
          setServiceIndex((s) => (s < servicesData.length - 1 ? s + 1 : 0));
          return 0;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [currentService]);

  return (
    <section
      id="home"
      ref={containerRef}
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-black text-white flex flex-col justify-between",
        className
      )}
    >
      <style>{`
        @keyframes tagFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tag-animate {
          animation: tagFadeUp 0.4s ease forwards;
        }
        @keyframes titleSlide {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .title-animate {
          animation: titleSlide 0.5s ease forwards;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
        .scroll-bounce { animation: scrollBounce 1.8s ease-in-out infinite; }

        /* Dot pulse on active */
        .dot-active {
          background: #fff !important;
          transform: scale(1.2);
        }
      `}</style>

      {/* ── Background Video ── */}
      <video
        key={currentService.video}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src={currentService.video} type="video/mp4" />
      </video>

      {/* Dark gradient — stronger at bottom for mobile legibility */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.75) 100%)' }}
      />

      {/* ── Top Spacer (nav height) ── */}
      <div className="h-24 md:h-32 relative z-10 pointer-events-none" />

      {/* ── Center (empty flex spacer) ── */}
      <div className="relative z-10 flex-1 pointer-events-none" />

      {/* ══════════════════════════════════════
           DESKTOP layout (md and above)
      ══════════════════════════════════════ */}
      <div className="hidden md:flex relative z-20 w-full p-12 pb-16 flex-row justify-between items-end pointer-events-none">
        <div className="w-[70%] flex flex-col gap-8">
          {currentService.title && (
            <h1
              key={`title-${serviceIndex}`}
              className="font-[font6] text-[8rem] leading-[0.8] text-white title-animate"
            >
              {currentService.title}
            </h1>
          )}
          {currentService.tags && currentService.tags.length > 0 && (
            <div className="h-20 w-72 bg-black/20 backdrop-blur-[10px] p-4 flex items-center justify-center rounded-full">
              <h2
                key={`tag-${tagIndex}-${serviceIndex}`}
                className="font-[font6] text-2xl leading-[0.8] text-white text-center w-full tag-animate"
              >
                {currentService.tags[tagIndex]}
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
           MOBILE layout
      ══════════════════════════════════════ */}
      <div className="flex md:hidden relative z-20 w-full flex-col justify-end pb-24 pointer-events-none">

        {/* Service index dots */}
        <div className="flex gap-2 px-6 mb-5">
          {servicesData.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === serviceIndex ? 22 : 6,
                height: 6,
                borderRadius: 3,
                background: i === serviceIndex ? '#fff' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Title */}
        <div className="px-6 mb-4 overflow-hidden">
          {currentService.title && (
            <h1
              key={`m-title-${serviceIndex}`}
              className="font-[font6] leading-[0.85] text-white title-animate"
              style={{ fontSize: 'clamp(2.8rem, 13vw, 5rem)' }}
            >
              {currentService.title}
            </h1>
          )}
        </div>

        {/* Tag pill + scroll hint row */}
        <div className="px-6 flex items-center justify-between gap-3">
          {/* Animated tag */}
          {currentService.tags && currentService.tags.length > 0 ? (
            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 100,
                padding: '10px 20px',
                flex: 1,
                minWidth: 0,
              }}
            >
              <p
                key={`m-tag-${tagIndex}-${serviceIndex}`}
                className="font-[font6] text-white text-center tag-animate"
                style={{
                  fontSize: 16, lineHeight: 1, margin: 0,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}
              >
                {currentService.tags[tagIndex]}
              </p>
            </div>
          ) : (
            <div className="flex-1 min-w-0" />
          )}

          {/* Scroll hint */}
          <div
            className="scroll-bounce flex-shrink-0 flex flex-col items-center gap-1"
            style={{ opacity: 0.6 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="px-6 mt-4 mb-6 flex items-center gap-3 pointer-events-auto">
          <a
            href="#portfolio"
            className="flex-1 text-center font-semibold rounded-full py-3"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              fontSize: 13,
              letterSpacing: '0.02em',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </a>
          <a
            href="#book"
            className="flex-1 text-center font-semibold rounded-full py-3"
            style={{
              background: '#2c67f2',
              border: '1px solid #2c67f2',
              color: '#fff',
              fontSize: 13,
              letterSpacing: '0.02em',
              textDecoration: 'none',
            }}
          >
            Schedule Call
          </a>
        </div>

      </div>

      {/* ── Bottom Preview Card — DESKTOP ── */}
      <a
        href="https://tanzxstudio.reachxgroup.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block absolute bottom-5 right-5 w-[26%] h-60 bg-black/40 backdrop-blur-md overflow-hidden group cursor-pointer border border-white/10 rounded-2xl z-30"
      >
        <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <iframe src="https://tanzxstudio.reachxgroup.com/" title="Tanzzzx Studio preview" className="w-full h-full border-none" scrolling="no" />
        </div>
        <div className="relative w-full h-full p-5 pointer-events-none flex flex-col justify-between z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <div className="w-full flex justify-end">
            <div className="bg-black/50 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              <i className="ri-arrow-right-up-line text-2xl text-white" />
            </div>
          </div>
          <h1 className="font-[font6] text-3xl tracking-wide leading-[0.8] text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Tanzzzx Studio
          </h1>
        </div>
      </a>

      {/* ── Bottom Preview Card — MOBILE (compact strip) ── */}
      <a
        href="https://tanzxstudio.reachxgroup.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex md:hidden absolute bottom-5 left-5 right-5 z-30 items-center gap-4 overflow-hidden rounded-2xl border border-white/15 cursor-pointer"
        style={{
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(16px)',
          padding: '14px 18px',
        }}
      >
        {/* Thumbnail preview */}
        <div
          className="flex-shrink-0 rounded-xl overflow-hidden relative"
          style={{ width: 52, height: 52 }}
        >
          <div className="absolute inset-0 w-[400%] h-[400%] origin-top-left pointer-events-none opacity-80"
            style={{ transform: 'scale(0.25)' }}>
            <iframe src="https://tanzxstudio.reachxgroup.com/" title="preview" className="w-full h-full border-none" scrolling="no" />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
            margin: '0 0 3px', fontFamily: 'sans-serif',
          }}>
            Featured Work
          </p>
          <h3 className="font-[font6] text-white truncate"
            style={{ fontSize: 20, lineHeight: 1, margin: 0, letterSpacing: '0.04em' }}>
            Tanzzzx Studio
          </h3>
        </div>

        {/* Arrow */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full border border-white/20"
          style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.1)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Hero;
