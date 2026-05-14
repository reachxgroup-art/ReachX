import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { cn } from '../utils/cn';

/* ─────────────────────────────────────────
   About Section — Fully Responsive
───────────────────────────────────────── */
const About = ({ className }) => {
  return (
    <section
      id="about"
      className={cn(
        'relative overflow-hidden bg-white',
        'py-8 md:py-12',
        className
      )}
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-50/70 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">

        {/* ══════════════════════════════════════════
            DESKTOP ≥ 1024px — 70 / 30 split
        ══════════════════════════════════════════ */}
        <div className="hidden lg:flex gap-5 items-stretch min-h-[580px]">

          {/* ── LEFT PANEL 70% ── */}
          <div
            className="flex rounded-3xl overflow-hidden border border-slate-100/80 shadow-[0_4px_40px_-8px_rgba(14,165,233,0.10)] bg-white"
            style={{ flex: '0 0 70%', minWidth: 0 }}
          >
            {/* Text content — 58% of left panel  (LEFT) */}
            <div
              className="flex flex-col justify-center px-8 xl:px-12 2xl:px-14 py-8 bg-white border-r border-slate-100"
              style={{ flex: '0 0 58%', minWidth: 0 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-brand-accent" />
                <span className="text-brand-accent font-sans font-bold tracking-[0.22em] uppercase text-[11px]">
                  Our Story
                </span>
              </div>

              <h2 className="font-heading font-black text-brand-dark leading-[1.05] tracking-tighter uppercase mb-4 text-7xl">
                Building<br />
                Digital<br />
                <span className="text-outline">Empires</span>
              </h2>

              <div className="flex gap-4 mb-5">
                <div className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-brand-primary to-brand-secondary self-stretch" />
                <p className="text-brand-dark/60 font-sans font-medium text-[0.9rem] leading-[1.75]">
                  We are more than a creative agency. We are the architectural
                  backbone for global brands looking to dominate their digital landscape.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  {
                    Icon: Target,
                    title: 'Our Mission',
                    body: 'Democratize elite digital production and complex software infrastructure for modern brands.',
                  },
                  {
                    Icon: Lightbulb,
                    title: 'Our Vision',
                    body: 'Become the quintessential bridge between raw creative concept and industrial execution.',
                  },
                ].map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="group p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:border-brand-primary/60 hover:bg-sky-50/80 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <h4 className="font-heading font-bold text-[11px] uppercase tracking-wide text-brand-dark">
                        {title}
                      </h4>
                    </div>
                    <p className="text-brand-dark/55 text-[12px] font-sans leading-[1.65]">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tree image — 42% of left panel  (MIDDLE) */}
            <div
              className="relative flex items-center justify-center bg-white"
              style={{ flex: '0 0 42%', minWidth: 0 }}
            >
              {/* <div className="absolute top-0 left-0 w-24 h-24 bg-brand-primary/5 rounded-br-[60px]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-primary/5 rounded-tl-[40px]" /> */}
              <img
                src="/logo/tree.png"
                alt="ReachX Group company structure — web development, 3D animation, AI/ML and IT consulting services"
                loading="lazy"
                className="relative w-full h-full object-contain p-6 z-10"
              />
            </div>
          </div>


          {/* ── RIGHT PANEL 30% — Founder's Deck ── */}
          <div
            className="flex flex-col rounded-3xl overflow-hidden border border-sky-100/80 shadow-[0_4px_40px_-8px_rgba(14,165,233,0.12)] bg-white"
            style={{ flex: '0 0 30%', minWidth: 0 }}
          >
            <div className="relative px-6 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary overflow-hidden">
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
              <div className="absolute top-3 right-8 w-8 h-8 rounded-full bg-white/10" />
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5">ReachX Group</p>
                  <h3 className="font-heading font-black text-white text-[1.05rem] uppercase tracking-wider leading-tight">
                    Founder's Deck
                  </h3>
                </div>
                <TrendingUp className="w-5 h-5 text-white/60" />
              </div>
            </div>

            <div className="relative w-full" style={{ aspectRatio: '9/16', maxHeight: '300px' }}>
              <img
                src="/logo/profilepic.png"
                alt="Subrata Haldar — Founder and Director of ReachX Group"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/95 via-white/60 to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center z-10">
                <div className="flex items-center gap-2">
                  <p className="font-heading font-black text-brand-dark text-xl leading-tight tracking-tight">
                    Subrata Haldar
                  </p>
                  <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shadow">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-brand-primary font-sans font-semibold text-[11px] uppercase tracking-[0.18em] mt-0.5">
                  Founder &amp; Director
                </p>
              </div>
            </div>

            <div className="mx-6 my-0">
              <div className="h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
            </div>

            <div className="px-6 pt-3 pb-4 flex-1 overflow-y-auto">
              <p className="text-brand-dark font-sans text-[0.78rem] leading-[1.65]">
                Subrata Haldar is driven by a strong foundation of strategic thinking and an unwavering commitment to customer satisfaction, shaping every decision with clarity and purpose.<br /><br />
                He initiated Reachon with the vision of transforming how people learn through AI, laying the cornerstone of ReachX Group and its future digital ecosystem.<br /><br />
                From a hostel room at National Institute of Technology Bhopal, this journey began with a simple yet powerful vision — to turn ideas into reality and build scalable digital ventures that create lasting impact.
              </p>
            </div>
          </div>
        </div>
        {/* ── end desktop ── */}


        {/* ══════════════════════════════════════════
            TABLET  768px – 1023px
        ══════════════════════════════════════════ */}
        <div className="hidden md:flex lg:hidden flex-col gap-6">

          <div className="flex items-center gap-2">
            <div className="w-5 h-px bg-brand-accent" />
            <span className="text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-[11px]">
              Our Story
            </span>
          </div>

          <h2 className="font-heading font-black text-brand-dark leading-[1.05] tracking-tighter uppercase text-5xl">
            Building Digital<br />
            <span className="text-outline">Empires</span>
          </h2>

          {/* Two-column: tree + text */}
          <div className="grid grid-cols-2 gap-5 rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-white">
            {/* Tree image */}
            <div className="bg-gradient-to-br from-[#EDF5FF] to-[#F0F8FF] flex items-center justify-center min-h-[280px]">
              <img
                src="/logo/tree.png"
                alt="ReachX Group company structure — web development, 3D animation, AI/ML and IT consulting services"
                loading="lazy"
                className="w-full h-full object-contain p-6 max-h-[320px]"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center py-6 pr-6 pl-4">
              <div className="flex gap-3 mb-4">
                <div className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-brand-primary to-brand-secondary self-stretch" />
                <p className="text-brand-dark/60 font-sans font-medium text-[0.88rem] leading-[1.75]">
                  We are the architectural backbone for global brands looking to dominate their digital landscape.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { Icon: Target, title: 'Mission', body: 'Democratize elite digital production for modern brands.' },
                  { Icon: Lightbulb, title: 'Vision', body: 'Bridge raw creative concept and industrial execution.' },
                ].map(({ Icon, title, body }) => (
                  <div key={title} className="p-3 rounded-2xl border border-slate-100 bg-slate-50/60">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3 text-brand-primary" />
                      </div>
                      <h4 className="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-dark">{title}</h4>
                    </div>
                    <p className="text-brand-dark/55 text-[11px] font-sans leading-[1.6]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Founder card — tablet: horizontal layout */}
          <div className="rounded-3xl overflow-hidden border border-sky-100 shadow-sm bg-white">
            <div className="relative px-6 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary overflow-hidden">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-white/10" />
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5">ReachX Group</p>
                  <h3 className="font-heading font-black text-white text-sm uppercase tracking-widest">Founder's Deck</h3>
                </div>
                <TrendingUp className="w-4 h-4 text-white/60" />
              </div>
            </div>
            <div className="flex">
              {/* Portrait */}
              <div className="shrink-0 w-[180px] flex flex-col bg-gradient-to-br from-[#EDF5FF] to-[#F0F8FF]">
                <img
                  src="/logo/profilepic.png"
                  alt="Subrata Haldar — Founder and Director of ReachX Group"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                  style={{ display: 'block', flex: '1' }}
                />
                <div className="flex flex-col items-center py-2 px-2 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <p className="font-heading font-black text-brand-dark text-[11px] leading-tight text-center">Subrata Haldar</p>
                    <div className="w-3.5 h-3.5 rounded-full bg-brand-primary flex items-center justify-center shadow shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" className="w-2 h-2">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-brand-primary font-sans font-semibold text-[8px] uppercase tracking-[0.12em] mt-0.5 text-center">
                    Founder &amp; Director
                  </p>
                </div>
              </div>
              {/* Bio */}
              <div className="flex-1 px-5 py-5 flex items-center">
                <p className="text-brand-dark/60 font-sans text-[0.8rem] leading-[1.7]">
                  Subrata Haldar is driven by a strong foundation of strategic thinking and an unwavering commitment to customer satisfaction.<br /><br />
                  He initiated Reachon with the vision of transforming how people learn through AI, laying the cornerstone of ReachX Group.<br /><br />
                  From a hostel room at NIT Bhopal, this journey began with a simple yet powerful vision — to build scalable digital ventures that create lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ── end tablet ── */}


        {/* ══════════════════════════════════════════
            MOBILE  < 768px
        ══════════════════════════════════════════ */}
        <div className="flex flex-col gap-6 md:hidden">

          {/* Label */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-px bg-brand-accent" />
            <span className="text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-[11px]">
              Our Story
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading font-black text-brand-dark leading-[1.05] tracking-tighter uppercase text-[clamp(2.8rem,12vw,4rem)]">
            Building<br />
            Digital<br />
            <span className="text-outline">Empires</span>
          </h2>

          {/* Tree image — full width, fixed aspect ratio, never cropped */}
          <div className="w-full rounded-2xl overflow-hidden border border-slate-100 bg-gradient-to-br from-[#EDF5FF] to-[#F0F8FF]">
              <img
                src="/logo/tree.png"
                alt="ReachX Group company structure diagram featuring web development, 3D animation, AI/ML and IT consulting service branches"
                loading="lazy"
                className="w-full h-auto object-contain p-4"
                style={{ display: 'block' }}
              />
          </div>

          {/* Body */}
          <div className="flex gap-4">
            <div className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-brand-primary to-brand-secondary self-stretch" />
            <p className="text-brand-dark/60 font-sans font-medium text-[0.95rem] leading-relaxed">
              We are more than a creative agency. We are the architectural backbone for global
              brands looking to dominate their digital landscape.
            </p>
          </div>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
            {[
              { Icon: Target, title: 'Our Mission', body: 'To democratize elite digital production and complex software infrastructure for modern brands.' },
              { Icon: Lightbulb, title: 'Our Vision', body: 'To become the quintessential bridge between raw creative concept and industrial execution.' },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-brand-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-[11px] uppercase tracking-wide text-brand-dark">{title}</h4>
                </div>
                <p className="text-brand-dark/55 text-[12px] font-sans leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Founder card — mobile */}
          <div className="rounded-3xl overflow-hidden border border-sky-100 shadow-sm bg-white">
            <div className="relative px-6 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary overflow-hidden">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-white/10" />
              <div className="flex items-center justify-between relative z-10">
                <h3 className="font-heading font-black text-white text-sm uppercase tracking-widest">
                  Founder's Deck
                </h3>
                <TrendingUp className="w-4 h-4 text-white/60" />
              </div>
            </div>

            {/* Portrait — full image, no cropping, name below */}
            <div className="w-full bg-gradient-to-br from-[#EDF5FF] to-[#F0F8FF]">
              <img
                src="/logo/profilepic.png"
                alt="Subrata Haldar — Founder and Director of ReachX Group"
                loading="lazy"
                className="w-full h-auto object-cover"
                style={{ display: 'block', maxHeight: '320px' }}
              />
            </div>
            {/* Name plate below image */}
            <div className="flex flex-col items-center py-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <p className="font-heading font-black text-brand-dark text-lg leading-tight">Subrata Haldar</p>
                <div className="w-4 h-4 rounded-full bg-brand-primary flex items-center justify-center shadow">
                  <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-brand-primary font-sans font-semibold text-[10px] uppercase tracking-[0.18em] mt-0.5">
                Founder &amp; Director
              </p>
            </div>

            <div className="px-5 py-4">
              <p className="text-brand-dark/60 text-[0.82rem] font-sans leading-relaxed">
                Subrata Haldar is driven by a strong foundation of strategic thinking and an unwavering commitment to customer satisfaction, shaping every decision with clarity and purpose.<br /><br />
                He initiated Reachon with the vision of transforming how people learn through AI, laying the cornerstone of ReachX Group and its future digital ecosystem.<br /><br />
                From a hostel room at National Institute of Technology Bhopal, this journey began with a simple yet powerful vision — to turn ideas into reality and build scalable digital ventures that create lasting impact.
              </p>
            </div>
          </div>

        </div>
        {/* ── end mobile ── */}

      </div>
    </section>
  );
};

export default About;