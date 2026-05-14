import React from 'react';
import { Target, TrendingUp, Cpu, Globe } from 'lucide-react';
import { cn } from '../utils/cn';

const reasons = [
  { title: 'Global Structure', icon: Globe, desc: 'Enterprise-grade hosting and hybrid cloud architectures built for scalability.' },
  { title: 'Realistic 3D', icon: Cpu, desc: 'World-class rendering engine for product visualization and industrial twins.' },
  { title: 'Strategic Marketing', icon: Target, desc: 'Behavioral analytics mapping for maximum audience conversion.' },
  { title: 'ROI Focused', icon: TrendingUp, desc: 'Aggressive focus on high-yield digital ROI and brand dominance.' },
];

const WhyChooseUs = ({ className }) => {
  return (
    <section id="why" className={cn("py-16 md:py-24 bg-brand-surface relative overflow-hidden", className)}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">

          {/* Left side Content */}
          <div className="max-w-2xl space-y-12 lg:sticky lg:top-40">
            <div>
              <span className="gsap-stagger-item text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-sm block mb-6">
                [ Global Standing ]
              </span>
              <h2 className="gsap-stagger-item text-4xl md:text-6xl font-heading font-black text-brand-dark uppercase tracking-tighter leading-[1]">
                Why <span className="text-outline">Brands</span> <br />
                Choose Us
              </h2>
              <p className="gsap-stagger-item text-brand-dark/60 mt-4 text-lg md:text-xl font-sans font-medium leading-relaxed max-w-lg">
                We merge the technical complexity of an elite software firm with the creative mastery of a top-tier design studio.
              </p>
            </div>

            <div className="gsap-stagger-item pt-4 hidden lg:block">
              <button
                className="px-6 py-2 bg-brand-dark text-white rounded-full font-bold flex items-center gap-3 transition-transform hover:-translate-y-1"
                data-cursor="hover"
              >
                Our Approach
              </button>
            </div>
          </div>

          {/* Right side Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={i}
                  className={cn(
                    "gsap-stagger-item group bg-blue-500 p-4 md:p-6 transition-all duration-700 hover:bg-brand-dark hover:text-brand-surface",
                    i % 2 !== 0 ? 'sm:mt-20' : ''
                  )}
                >
                  <div className="mb-4 text-brand-dark group-hover:text-brand-accent transition-colors duration-500">
                    <Icon size={40} strokeWidth={1} />
                  </div>
                  <h4 className="font-heading text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors duration-500">
                    {reason.title}
                  </h4>
                  <p className="text-brand-dark/50 font-sans text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* <div className="gsap-stagger-item pt-8 lg:hidden">
            <button
              className="w-full py-5 bg-brand-dark text-white rounded-full font-bold transition-all"
              data-cursor="hover"
            >
              Our Approach
            </button>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
