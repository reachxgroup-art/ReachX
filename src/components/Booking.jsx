import React, { useState, useEffect, useRef } from 'react';
import {
  Video, Clock, DollarSign, ArrowUpRight, ChevronLeft,
  Mic2, Monitor, Box, Sparkles, CheckCircle2, ChevronDown, Phone
} from 'lucide-react';
import { cn } from '../utils/cn';
import gsap from 'gsap';

const COLORS = {
  skyBlue: '#0EA5E9',
  skyLight: '#E0F2FE',
  skyMid: '#38BDF8',
  darkBlue: '#0C1A3A',
  navyBlue: '#0F2D5E',
  white: '#FFFFFF',
  offWhite: '#F8FAFC',
  border: '#E2E8F0',
  muted: '#94A3B8',
  dark: '#0A0A0A',
};

const services = [
  {
    title: 'IT & Software Architecture',
    icon: Monitor,
    tag: 'Engineering',
    desc: 'System design, scalable infrastructure & tech strategy',
  },
  {
    title: 'Industrial 3D Animation',
    icon: Box,
    tag: 'Animation',
    desc: 'Technical visualisation & product animation',
  },
  {
    title: 'Video Production',
    icon: Mic2,
    tag: 'Creative',
    desc: 'Brand storytelling through high-end video content',
  },
  {
    title: 'Others',
    icon: Sparkles,
    desc: 'Let us know what you need',
  },
];

const Badge = ({ children }) => (
  <span
    style={{
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: COLORS.skyBlue,
      background: COLORS.skyLight,
      padding: '3px 10px',
      borderRadius: 99,
    }}
  >
    {children}
  </span>
);

const MetaPill = ({ icon: Icon, value, href }) => (
  <a
    href={href || undefined}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      padding: '10px 14px',
      background: COLORS.white,
      border: '1px solid ' + COLORS.border,
      borderRadius: 99,
      textDecoration: 'none',
      width: '100%',
    }}
  >
    <Icon size={14} color={COLORS.skyBlue} strokeWidth={1.8} />
    <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.darkBlue, whiteSpace: 'nowrap' }}>
      {value}
    </span>
  </a>
);

const MetaCard = ({ icon: Icon, label, value, href }) => (
  <a
    href={href || undefined}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 20px',
      background: COLORS.white,
      border: '1px solid ' + COLORS.border,
      borderRadius: 16,
      textDecoration: 'none',
    }}
  >
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: COLORS.skyLight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Icon size={20} color={COLORS.skyBlue} strokeWidth={1.5} />
    </div>
    <div>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLORS.muted, margin: 0 }}>
        {label}
      </p>
      <p style={{ fontSize: 15, fontWeight: 700, color: COLORS.darkBlue, margin: '2px 0 0', letterSpacing: '-0.01em' }}>
        {value}
      </p>
    </div>
  </a>
);

const ServiceCard = ({ service, onClick }) => {
  const Icon = service.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(service.title)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        padding: '16px 18px',
        background: hovered ? COLORS.darkBlue : COLORS.white,
        border: '1px solid ' + (hovered ? COLORS.darkBlue : COLORS.border),
        borderRadius: 16,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          background: hovered ? 'rgba(14,165,233,0.18)' : COLORS.skyLight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.25s',
        }}
      >
        <Icon size={20} color={hovered ? COLORS.skyMid : COLORS.skyBlue} strokeWidth={1.5} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: hovered ? COLORS.skyMid : COLORS.muted, margin: '0 0 3px' }}>
          {service.tag}
        </p>
        <p style={{ fontSize: 14, fontWeight: 700, color: hovered ? COLORS.white : COLORS.darkBlue, margin: 0, letterSpacing: '-0.01em' }}>
          {service.title}
        </p>
        <p style={{ fontSize: 11, color: hovered ? 'rgba(255,255,255,0.55)' : COLORS.muted, margin: '2px 0 0', lineHeight: 1.4 }}>
          {service.desc}
        </p>
      </div>

      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 99,
          background: hovered ? COLORS.skyBlue : COLORS.offWhite,
          border: '1px solid ' + (hovered ? COLORS.skyBlue : COLORS.border),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.25s',
        }}
      >
        <ArrowUpRight size={14} color={hovered ? COLORS.white : COLORS.muted} strokeWidth={2} />
      </div>
    </button>
  );
};

const StepDots = ({ active }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    {[1, 2].map((n) => (
      <div
        key={n}
        style={{
          height: 6,
          width: active === n ? 22 : 6,
          borderRadius: 99,
          background: active === n ? COLORS.skyBlue : COLORS.border,
          transition: 'all 0.3s',
        }}
      />
    ))}
  </div>
);

const IncludedAccordion = () => {
  const [open, setOpen] = useState(false);
  const items = [
    'Strategic vision alignment',
    'Technology & tooling review',
    'Custom roadmap outline',
    'Zero-commitment consultation',
  ];

  return (
    <div
      style={{
        background: COLORS.white,
        border: '1px solid ' + COLORS.border,
        borderRadius: 16,
        overflow: 'hidden',
        marginTop: 12,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLORS.muted }}>
          What's included
        </span>
        <ChevronDown
          size={15}
          color={COLORS.muted}
          strokeWidth={2}
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}
        />
      </button>
      {open && (
        <div style={{ padding: '0 16px 14px' }}>
          {items.map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
              <CheckCircle2 size={13} color={COLORS.skyBlue} strokeWidth={2} />
              <span style={{ fontSize: 12, color: COLORS.darkBlue, fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Booking = ({ className }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const stepRef = useRef(null);

  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const sn = ar[1];
          const q = ar[2];
          if (!cal.ns[sn]) {
            cal.ns[sn] = p.bind(null, cal);
            p(cal, ['init', { origin: q }]);
          }
          return cal.ns[sn];
        }
        return p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('ui', {
      theme: 'light',
      styles: { branding: { brandColor: COLORS.skyBlue } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });

    window.Cal('preload', { calLink: 'subrata-haldar-faaj3q/let-s-build' });
  }, []);

  useEffect(() => {
    if (activeStep === 2 && selectedService) {
      const targetId =
        window.innerWidth >= 1024
          ? '#cal-booking-embed-desktop'
          : '#cal-booking-embed-mobile';

      window.Cal('inline', {
        elementOrSelector: targetId,
        calLink: 'subrata-haldar-faaj3q/let-s-build',
        config: { theme: 'light', notes: 'Selected Topic: ' + selectedService },
      });
    }
  }, [activeStep, selectedService]);

  const animateOut = (cb) => {
    gsap.to(stepRef.current, {
      opacity: 0,
      y: -16,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: cb,
    });
  };

  const animateIn = () => {
    gsap.fromTo(
      stepRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
    );
  };

  const handleServiceSelect = (title) => {
    animateOut(() => {
      setSelectedService(title);
      setActiveStep(2);
      animateIn();
    });
  };

  const handleBack = () => {
    animateOut(() => {
      setActiveStep(1);
      animateIn();
    });
  };

  const backButton = (
    <button
      onClick={handleBack}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: COLORS.muted,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.darkBlue)}
      onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
    >
      <ChevronLeft size={14} strokeWidth={2.5} />
      Back
    </button>
  );

  return (
    <section
      id="book"
      className={cn('py-10 md:py-24', className)}
      style={{ background: COLORS.offWhite, fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">

        {/* Section label */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}
          className="md:mb-16"
        >
          <div style={{ width: 32, height: 1, background: COLORS.skyBlue }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.skyBlue }}>
            Book a Session
          </span>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden flex flex-col gap-5">

          <div className="font-[font6]">
            <h2
              style={{
                fontSize: 'clamp(2.6rem, 12vw, 4rem)',
                fontWeight: 800,
                color: COLORS.darkBlue,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                margin: '0 0 10px',
              }}
            >
              Book<br />
              <span style={{ WebkitTextStroke: '2px ' + COLORS.darkBlue, color: 'transparent' }}>
                Session
              </span>
            </h2>
          </div>

          {/* Meta pills — 2-column grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, paddingBottom: 4 }}>
            <MetaPill icon={Video} value="Discovery Call" />
            <MetaPill icon={Clock} value="45 Minutes" />
            <MetaPill icon={DollarSign} value="Free" />
            <MetaPill icon={Phone} value="+91 91238 55424" href="tel:+919123855424" />
          </div>

          {/* Booking card — mobile */}
          <div
            style={{
              background: COLORS.white,
              border: '1px solid ' + COLORS.border,
              borderRadius: 28,
              overflow: 'hidden',
              minHeight: 480,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="p-5 flex items-center justify-between border-b"
              style={{ borderColor: COLORS.border }}
            >
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.muted, margin: '0 0 4px' }}>
                  Step {activeStep} of 2
                </p>
                <p style={{ fontSize: 15, fontWeight: 700, color: COLORS.darkBlue, margin: 0, letterSpacing: '-0.01em' }}>
                  {activeStep === 1 ? 'Choose your focus area' : 'Select a time slot'}
                </p>
              </div>
              <StepDots active={activeStep} />
            </div>

            <div ref={stepRef} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {activeStep === 1 && (
                <div className="p-4 flex flex-col gap-3">
                  {services.map((s) => (
                    <ServiceCard key={s.title} service={s} onClick={handleServiceSelect} />
                  ))}
                </div>
              )}
              {activeStep === 2 && (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    className="px-5 py-3 border-b flex items-center justify-between"
                    style={{ borderColor: COLORS.border }}
                  >
                    {backButton}
                    <Badge>{selectedService}</Badge>
                  </div>
                  <div style={{ flex: 1, minHeight: 520 }}>
                    <div
                      id="cal-booking-embed-mobile"
                      data-lenis-prevent="true"
                      className="relative"
                      style={{ width: '100%', height: '100%', minHeight: 520 }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none z-0">
                        <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-sky-500 animate-spin" />
                        <span className="text-sm text-slate-400 font-medium">Loading calendar...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <IncludedAccordion />

          <p style={{ fontSize: 11, color: COLORS.muted, textAlign: 'center', margin: '4px 0 0' }}>
            No credit card required · Free 45-minute session · Cancel anytime
          </p>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:flex items-start gap-16">

          {/* Left info panel */}
          <div className="font-[font6] text-7xl w-[380px] shrink-0 sticky top-10">
            <h2
              style={{
                fontWeight: 800,
                color: COLORS.darkBlue,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                margin: '0 0 16px',
              }}
            >
              Book<br />
              <span style={{ WebkitTextStroke: '2px ' + COLORS.darkBlue, color: 'transparent' }}>
                Session
              </span>
            </h2>

            <div className="font-[font1]" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              <MetaCard icon={Video} label="Session Type" value="Discovery Call" />
              <MetaCard icon={Clock} label="Duration" value="45 Minutes" />
              <MetaCard icon={DollarSign} label="Session Fees" value="Free" />
              <MetaCard icon={Phone} label="Phone" value="+91 91238 55424" href="tel:+919123855424" />
            </div>

            <div
              style={{
                padding: '20px 24px',
                background: COLORS.white,
                border: '1px solid ' + COLORS.border,
                borderRadius: 18,
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLORS.muted, margin: '0 0 5px' }}>
                What's included
              </p>
              {[
                'Strategic vision alignment',
                'Technology & tooling review',
                'Custom roadmap outline',
                'Zero-commitment consultation',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0' }}>
                  <CheckCircle2 size={15} color={COLORS.skyBlue} strokeWidth={2} />
                  <span style={{ fontSize: 13, color: COLORS.darkBlue, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right booking card */}
          <div className="flex-1">
            <div
              style={{
                background: COLORS.white,
                border: '1px solid ' + COLORS.border,
                borderRadius: 28,
                overflow: 'hidden',
                minHeight: 680,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="p-8 flex items-center justify-between border-b"
                style={{ borderColor: COLORS.border }}
              >
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.muted, margin: '0 0 4px' }}>
                    Step {activeStep} of 2
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: COLORS.darkBlue, margin: 0, letterSpacing: '-0.01em' }}>
                    {activeStep === 1 ? 'Choose your focus area' : 'Select a time slot'}
                  </p>
                </div>
                <StepDots active={activeStep} />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {activeStep === 1 && (
                  <div className="p-8 flex flex-col gap-3">
                    {services.map((s) => (
                      <ServiceCard key={s.title} service={s} onClick={handleServiceSelect} />
                    ))}
                  </div>
                )}
                {activeStep === 2 && (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div
                      className="px-8 py-4 border-b flex items-center justify-between"
                      style={{ borderColor: COLORS.border }}
                    >
                      {backButton}
                      <Badge>{selectedService}</Badge>
                    </div>
                    <div style={{ flex: 1, minHeight: 560 }}>
                      <div
                        id="cal-booking-embed-desktop"
                        data-lenis-prevent="true"
                        className="relative"
                        style={{ width: '100%', height: '100%', minHeight: 560 }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none z-0">
                          <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-sky-500 animate-spin" />
                          <span className="text-sm text-slate-400 font-medium">Loading calendar...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p style={{ fontSize: 12, color: COLORS.muted, textAlign: 'center', marginTop: 16 }}>
              No credit card required · Free 45-minute session · Cancel anytime
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Booking;