import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import 'remixicon/fonts/remixicon.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industry from './components/Industry';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Payment from './components/Payment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.075,              // Snappier feel — higher value = less drag
      smoothWheel: true,
      wheelMultiplier: 1.2,     // Faster desktop scroll response
      smoothTouch: true,
      touchMultiplier: 2.0,     // Faster swipe response on mobile
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useGSAP(() => {
    if (!appReady) return;

    // 1. Azurio-style universal reveal animation for elements within sections
    const sections = gsap.utils.toArray('section:not(#home)');

    sections.forEach((section) => {
      // Exclude images inside marquee or slider from this global stagger to prevent huge delays
      const elements = section.querySelectorAll('h2:not(.no-stagger), h3:not(.no-stagger), p:not(.no-stagger), .gsap-stagger-item, img:not(.no-stagger)');
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: {
              amount: 0.4
            },
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // No stacked-pin transitions — removed to eliminate phantom scroll gaps

  }, { scope: main, dependencies: [appReady] });

  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/" element={
        <>
          {/* <Preloader onComplete={() => setAppReady(true)} /> */}
          <WhatsAppButton />

          <div ref={main} className="min-h-screen bg-brand-surface font-sans text-brand-dark relative z-0">
            <Navbar />
            {/* main container acts as stacking context parent */}
            <main className="w-full relative">
              <Hero />
              <About />
              <Services />
              <Industry />
              <Portfolio />
              {/* <Process /> */}
              <WhyChooseUs />
              <Testimonials />
              <Booking />
              {/* <Payment /> */}
              {/* <Contact /> */}
            </main>
            <Footer />
          </div>
        </>
      } />
    </Routes>
  );
}

export default App;
