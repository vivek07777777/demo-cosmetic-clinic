import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface PhilosophyProps {
  onLearnMore?: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onLearnMore }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="approach" className="py-24 sm:py-32 bg-[#F7F5F1] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Label and Statement Heading */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                THE APPROACH
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#1D1D1A]">
              Subtle by design. <br />
              <span className="italic text-[#A68B6A] font-light">Personal</span> by nature.
            </h2>

            <div className="pt-6 hidden lg:block">
              <div className="p-6 bg-[#EEEAE3] border border-[#DCD7CE] text-left">
                <p className="font-serif italic text-lg text-[#1D1D1A] leading-relaxed">
                  "True aesthetics is not about changing your appearance—it is about restoring the rested balance and effortless confidence that belongs to you."
                </p>
                <div className="mt-4 flex items-center space-x-3 text-xs text-[#6F6D67] font-medium tracking-wider uppercase">
                  <span className="w-4 h-px bg-[#A68B6A]" />
                  <span>Clinical Philosophy Note</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraph and Editorial Insights */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <p className="text-base sm:text-lg text-[#1D1D1A] font-light leading-relaxed">
              We believe aesthetic medicine should be an extension of thoughtful self-care. Rather than following transient trends or standardized formulas, every protocol at LUMÉRA begins with understanding your unique facial geometry and skin biology.
            </p>

            <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              Our clinical team specializes in micro-dosed, phased treatments that preserve natural mobility and facial expression. By combining scientific precision with an artistic eye for proportion, we deliver results that are noticeable only in how refreshed, balanced, and confident you look.
            </p>

            {/* Philosophy Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#DCD7CE]">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#1D1D1A]">
                  <Sparkles className="w-4 h-4 text-[#A68B6A]" />
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold">Anatomical Harmony</h4>
                </div>
                <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                  Treatments calibrated to complement your unique bone structure and dynamic expressions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#1D1D1A]">
                  <ShieldCheck className="w-4 h-4 text-[#A68B6A]" />
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold">Considered Phasing</h4>
                </div>
                <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                  Progressive treatments scheduled carefully to allow natural tissue recovery and seamless integration.
                </p>
              </div>
            </div>

            {/* Expanded Content Toggle for Demo */}
            {expanded && (
              <div className="p-6 bg-[#EEEAE3]/80 border border-[#DCD7CE] space-y-4 animate-in fade-in duration-500">
                <h4 className="font-serif text-xl text-[#1D1D1A]">The 3 Pillars of Luméra Care</h4>
                <div className="space-y-3 text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                  <p><strong>1. Comprehensive Facial Mapping:</strong> We analyze light reflection, tissue volume, and skin texture under high-definition clinical lighting.</p>
                  <p><strong>2. Conservative Treatment Calibration:</strong> We prioritize understated refinement, giving you time to evaluate the subtle transformation.</p>
                  <p><strong>3. Transparent Communication:</strong> We discuss recovery timelines, ingredient profiles, and realistic milestones before starting.</p>
                </div>
              </div>
            )}

            <div className="pt-2">
              <button
                id="philosophy-discover-btn"
                onClick={() => {
                  setExpanded(!expanded);
                  if (onLearnMore) onLearnMore();
                }}
                className="group inline-flex items-center space-x-2.5 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-[#1D1D1A] hover:text-[#A68B6A] transition-colors pb-1 border-b border-[#1D1D1A] hover:border-[#A68B6A]"
              >
                <span>{expanded ? 'Show Less Philosophy' : 'Discover our philosophy'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
