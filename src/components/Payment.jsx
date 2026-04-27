import React, { useState } from 'react';
import { CreditCard, Check, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const plans = [
   { id: 'it', name: 'IT Infrastructure', num: '01', price: '4,999', features: ['Scalable Architecture', 'Cloud Integration', '24/7 Security'] },
   { id: 'video', name: 'Cinematic Video', num: '02', price: '3,499', features: ['4K Production', 'Pro VFX', 'Storytelling Strategy'] },
   { id: '3d', name: 'Industrial 3D', num: '03', price: '2,999', features: ['High-End Rendering', 'Digital Twin', 'Marketing Animation'] },
];

const Payment = ({ className }) => {
   const [selectedPlan, setSelectedPlan] = useState('it');

   return (
      <section id="payment" className={cn("py-32 md:py-48 bg-brand-surface border-t border-brand-dark/10 relative overflow-hidden", className)}>
         <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-20 items-stretch">

               {/* Plan Selection Area */}
               <div className="lg:w-1/2 space-y-12">
                  <div>
                     <span className="gsap-stagger-item text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-sm block mb-6">
                        [ Strategic Investment ]
                     </span>
                     <h2 className="gsap-stagger-item text-5xl md:text-8xl font-heading font-black text-brand-dark uppercase tracking-tighter leading-[0.9]">
                        Growth <br />
                        <span className="text-outline">Tiers</span>
                     </h2>
                     <p className="gsap-stagger-item text-brand-dark/60 mt-8 text-lg font-sans font-medium leading-relaxed max-w-sm">
                        Every investment is protected by our global performance guarantees and world-class industrial standards.
                     </p>
                  </div>

                  <div className="gsap-stagger-item flex flex-col gap-4 w-full">
                     {plans.map((plan) => (
                        <button
                           key={plan.id}
                           onClick={() => setSelectedPlan(plan.id)}
                           className={cn(
                              "px-6 md:px-10 py-6 md:py-8 rounded-[2rem] border transition-all duration-500 text-left flex items-center justify-between group",
                              selectedPlan === plan.id
                                 ? "bg-brand-dark border-brand-dark text-white"
                                 : "bg-transparent border-brand-dark/20 text-brand-dark hover:border-brand-dark"
                           )}
                           data-cursor="play"
                        >
                           <div className="flex flex-col gap-2">
                              <p className={cn("text-[10px] font-sans font-bold uppercase tracking-widest", selectedPlan === plan.id ? "text-brand-accent" : "text-brand-dark/50")}>
                                 Phase {plan.num}
                              </p>
                              <h4 className="text-xl md:text-3xl font-heading font-bold uppercase tracking-tighter">
                                 {plan.name}
                              </h4>
                           </div>

                           <div className="text-right">
                              <p className={cn("text-[10px] font-sans font-bold uppercase tracking-widest", selectedPlan === plan.id ? "text-white/50" : "text-brand-dark/50")}>
                                 Starting From
                              </p>
                              <h4 className="text-xl md:text-3xl font-heading font-bold uppercase tracking-tighter">
                                 ${plan.price}
                              </h4>
                           </div>
                        </button>
                     ))}
                  </div>
               </div>

               {/* Checkout Summary Area */}
               <div className="lg:w-1/2">
                  <div className="gsap-stagger-item bg-brand-surface-alt rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 h-full flex flex-col justify-between">
                     <div>
                        <div className="flex items-end justify-between mb-16 border-b border-brand-dark/10 pb-8">
                           <div>
                              <span className="text-[10px] font-sans font-bold text-brand-accent uppercase tracking-widest block mb-2">
                                 Selected Plan
                              </span>
                              <h3 className="text-4xl md:text-5xl font-heading font-black text-brand-dark uppercase tracking-tighter leading-[0.9]">
                                 {plans.find(p => p.id === selectedPlan).name}
                              </h3>
                           </div>
                           <h4 className="text-4xl md:text-5xl font-heading font-black text-brand-dark tracking-tighter">
                              ${plans.find(p => p.id === selectedPlan).price}
                           </h4>
                        </div>

                        <div className="space-y-6">
                           <p className="text-[10px] font-sans font-bold text-brand-dark/40 uppercase tracking-widest">Included Capabilities</p>
                           {plans.find(p => p.id === selectedPlan).features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-6">
                                 <div className="w-8 h-8 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-accent shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                 </div>
                                 <p className="text-brand-dark font-sans font-bold text-sm md:text-lg uppercase tracking-tight">
                                    {feature}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Secure Checkout Methods */}
                     <div className="mt-16 pt-8 border-t border-brand-dark/10">
                        <button
                           className="w-full py-6 md:py-8 bg-brand-dark text-white rounded-full font-heading font-bold text-xl md:text-2xl uppercase tracking-tighter flex items-center justify-between px-8 hover:bg-brand-accent transition-colors group"
                           data-cursor="play"
                        >
                           <span>Secure Checkout</span>
                           <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                        </button>
                        <p className="text-center text-[10px] font-sans font-bold text-brand-dark/40 uppercase tracking-[0.2em] mt-6">
                           Encrypted with 256-bit industrial protocol
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Payment;
