import React from 'react';
import { cn } from '../utils/cn';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Intensive market research and competitive auditing to define your digital edge. We establish the foundational truth of your brand.',
    tags: ['Brand Audit', 'User Personas', 'Tech Stack']
  },
  {
    num: '02',
    title: 'Orchestration',
    desc: 'High-fidelity UI/UX design, cinematic storyboards, and 3D conceptualization. The visual language takes pure form.',
    tags: ['Prototyping', 'VFX Layout', 'Motion Design']
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'Advanced software engineering and broadcast-grade production pipelines. Precision coding meets artistic vision.',
    tags: ['Cloud Scaling', '4K Rendering', 'Clean Code']
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Deployment at scale with real-time performance monitoring and data refinement. Ensuring global market dominance.',
    tags: ['Optimization', 'Market Dominance', 'Support']
  },
];

const Process = ({ className }) => {
  return (
    <section id="process" className={cn("py-32 md:py-48 bg-brand-surface border-t border-brand-dark/10 relative overflow-hidden", className)}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between mb-24 md:mb-40 gap-12">
          <div className="max-w-3xl">
            <span className="gsap-stagger-item text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-sm block mb-6">
              [ Our Methodology ]
            </span>
            <h2 className="gsap-stagger-item text-5xl md:text-7xl lg:text-[8rem] font-heading font-black text-brand-dark uppercase tracking-tighter leading-[0.9]">
              Creative <br />
              <span className="text-outline">Process</span>
            </h2>
          </div>
          <div className="max-w-md md:pt-12">
            <p className="gsap-stagger-item text-brand-dark/50 text-lg md:text-xl font-sans font-medium leading-relaxed">
              We follow a rigid yet creative industrial process to guarantee world-class results for global enterprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">

          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[1px] bg-brand-dark/10" />

          {steps.map((step, index) => (
            <div key={index} className="gsap-stagger-item relative group md:pt-8" data-cursor="hover">
              <div className="mb-8 md:mb-16">
                <span className="text-6xl md:text-8xl font-heading font-black text-brand-dark/10 group-hover:text-brand-accent transition-colors duration-700">
                  {step.num}
                </span>
              </div>

              <div className="hidden md:block absolute top-[56px] left-6 w-2 h-2 bg-brand-surface border border-brand-dark rounded-full group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:scale-150 transition-all duration-500 z-10" />

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6 tracking-tight uppercase group-hover:text-brand-accent transition-colors duration-500">
                {step.title}
              </h3>

              <p className="text-brand-dark/50 text-sm md:text-base font-sans leading-relaxed mb-8 pr-4">
                {step.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-brand-surface-alt border border-brand-dark/10 text-[10px] font-sans font-bold text-brand-dark/70 uppercase tracking-widest rounded-full group-hover:border-brand-accent/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
