import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

const Contact = ({ className }) => {
   return (
      <section id="contact" className="py-12 md:py-16 relative overflow-hidden bg-brand-surface-alt">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

               {/* Left: Contact Info */}
               <div className="space-y-16 lg:sticky">
                  <div>
                     <span className="gsap-stagger-item text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-sm block mb-6">
                        [ Connect ]
                     </span>
                     <h2 className="gsap-stagger-item text-6xl md:text-8xl font-heading font-black text-brand-dark uppercase tracking-tighter leading-[0.9]">
                        Let's Talk <br />
                        <span className="text-outline">Ideas</span>
                     </h2>
                     <p className="gsap-stagger-item text-brand-dark/60 mt-8 text-lg font-sans font-medium leading-relaxed max-w-sm">
                        Connect with our engineering and design architects to map out your digital future.
                     </p>
                  </div>

                  <div className="gsap-stagger-item space-y-10 border-t border-brand-dark/10 pt-10">
                     <div className="group cursor-pointer block">
                        <p className="text-[10px] font-sans font-bold text-brand-dark/40 uppercase tracking-widest mb-2">Inquiries</p>
                        <p className="text-3xl font-heading font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                           hello@studio.ad
                        </p>
                     </div>
                     <div className="group cursor-pointer block">
                        <p className="text-[10px] font-sans font-bold text-brand-dark/40 uppercase tracking-widest mb-2">Location</p>
                        <p className="text-3xl font-heading font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                           75 Creative Blvd, NY
                        </p>
                     </div>
                  </div>
               </div>

               {/* Right: Minimal Form */}
               <div className="gsap-stagger-item h-full">
                  <form className="space-y-16 pt-2 md:pt-8">

                     <div className="group relative">
                        <input
                           type="text"
                           placeholder="Your Name*"
                           required
                           className="w-full bg-transparent border-b-2 border-brand-dark/20 py-6 text-2xl font-heading font-bold text-brand-dark focus:border-brand-dark outline-none placeholder:text-brand-dark/30 transition-colors peer"
                        />
                     </div>

                     <div className="group relative">
                        <input
                           type="email"
                           placeholder="Email Address*"
                           required
                           className="w-full bg-transparent border-b-2 border-brand-dark/20 py-6 text-2xl font-heading font-bold text-brand-dark focus:border-brand-dark outline-none placeholder:text-brand-dark/30 transition-colors peer"
                        />
                     </div>

                     <div className="group relative">
                        <textarea
                           rows="3"
                           placeholder="Project Details*"
                           required
                           className="w-full bg-transparent border-b-2 border-brand-dark/20 py-6 text-2xl font-heading font-bold text-brand-dark focus:border-brand-dark outline-none placeholder:text-brand-dark/30 transition-colors resize-none"
                        ></textarea>
                     </div>

                     <div className="pt-2">
                        <button
                           className="flex items-center gap-4 text-3xl font-heading font-bold uppercase tracking-tighter text-brand-dark hover:text-brand-accent transition-colors group"
                           data-cursor="play"
                        >
                           Send Message
                           <span className="w-16 h-16 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition-all">
                              <ArrowUpRight size={24} />
                           </span>
                        </button>
                     </div>

                  </form>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Contact;
