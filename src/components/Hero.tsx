import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ClinicConfig } from '../types';

interface HeroProps {
  clinic: ClinicConfig;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ clinic, onOpenBooking }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const scrollToTreatments = () => {
    const target = document.getElementById('treatments');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-36 pb-16 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden bg-[#F7F5F1]"
    >
      {/* Subtle architectural background grid line accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full border-x border-[#DCD7CE]/60 flex justify-between">
          <div className="w-1/3 border-r border-[#DCD7CE]/30 hidden lg:block h-full" />
          <div className="w-1/3 border-r border-[#DCD7CE]/30 hidden lg:block h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography and CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 text-left">
            
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-[#EEEAE3] border border-[#DCD7CE]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                  {clinic.tagline || 'MODERN AESTHETICS • REFINED RESULTS'}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div
              className={`transition-all duration-900 delay-150 ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-[4.2rem] font-normal leading-[1.08] text-[#1D1D1A] tracking-[-0.01em]">
                Confidence, <br />
                <span className="italic font-light text-[#A68B6A] serif">beautifully</span> refined.
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <div
              className={`transition-all duration-900 delay-300 ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-base sm:text-lg text-[#6F6D67] font-light leading-relaxed max-w-xl">
                {clinic.subTagline ||
                  'Personalized aesthetic treatments designed around your features, goals and individual beauty.'}
              </p>
            </div>

            {/* Dual CTA Buttons */}
            <div
              className={`pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-900 delay-500 ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="group px-7 py-4 bg-[#171715] text-[#F7F5F1] text-xs sm:text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#A68B6A] hover:shadow-xl active:scale-98 flex items-center justify-center space-x-3"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                id="hero-explore-btn"
                onClick={scrollToTreatments}
                className="px-7 py-4 border border-[#1D1D1A]/30 text-[#1D1D1A] text-xs sm:text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#1D1D1A] hover:bg-[#EEEAE3] active:scale-98 flex items-center justify-center space-x-2"
              >
                <span>Explore Treatments</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Key Assurance Indicators */}
            <div
              className={`pt-4 border-t border-[#DCD7CE] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6F6D67] transition-all duration-900 delay-700 ease-out ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B6A]" />
                <span>Doctor-led consultation</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B6A]" />
                <span>Natural-outcome philosophy</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B6A]" />
                <span>Private & serene suites</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large High-Quality Editorial Visual with Floating Info Card */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end pt-2 sm:pt-4 lg:pt-6">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative overflow-hidden bg-[#EEEAE3] shadow-[0_20px_50px_rgba(23,23,21,0.08)] border border-[#DCD7CE]">
                
                {/* Main Hero Editorial Image */}
                <div
                  className="overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full"
                  style={{
                    transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <img
                    id="hero-main-image"
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85"
                    alt="LUMÉRA AESTHETICS Editorial Clinical Treatment"
                    className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                      isLoaded ? 'scale-100' : 'scale-105'
                    }`}
                  />
                  {/* Subtle tonal overlay for editorial richness */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Information Card */}
                <div
                  id="hero-floating-card"
                  className={`absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-[#F7F5F1]/95 backdrop-blur-md p-5 border border-[#DCD7CE] shadow-lg transition-all duration-1000 delay-800 ease-out transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transform: `translate3d(${-mousePos.x * 12}px, ${-mousePos.y * 12}px, 0)`,
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A68B6A] mt-1 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1D1D1A]">
                        Personalized Care
                      </p>
                      <p className="font-serif text-base italic text-[#6F6D67] mt-0.5">
                        Designed around you.
                      </p>
                      <p className="text-[11px] text-[#6F6D67] mt-1 font-light leading-relaxed">
                        Dedicated 1-on-1 facial balance and skin health protocols.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Badge: Demo Sample Notice */}
                <div className="absolute top-4 right-4 bg-[#171715]/75 backdrop-blur-sm px-3 py-1 border border-white/10 text-[10px] tracking-widest text-[#EEEAE3] uppercase font-light">
                  Demo Layout
                </div>

              </div>

              {/* Minimalist offset aesthetic geometry */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-[#A68B6A]/40 -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
