import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { featuredTreatmentInfo } from '../data/clinicData';

interface FeaturedTreatmentProps {
  onExplore: () => void;
  onBook: () => void;
}

export const FeaturedTreatment: React.FC<FeaturedTreatmentProps> = ({
  onExplore,
  onBook
}) => {
  return (
    <section id="featured-treatment" className="py-24 sm:py-32 bg-[#F7F5F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image with Asymmetrical Framing */}
          <div className="lg:col-span-7 relative">
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#EEEAE3] border border-[#DCD7CE] shadow-[0_24px_48px_rgba(23,23,21,0.06)]">
                <img
                  src={featuredTreatmentInfo.image}
                  alt="Featured Skin Treatment Reimagined"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#171715]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Offset Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#171715] text-[#F7F5F1] p-5 border border-white/10 shadow-xl max-w-[200px]">
                <div className="flex items-center space-x-2 text-[#A68B6A] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] tracking-widest uppercase font-mono">Protocol</span>
                </div>
                <div className="font-serif text-2xl font-light text-[#EEEAE3]">
                  {featuredTreatmentInfo.stat}
                </div>
                <div className="text-[11px] text-[#6F6D67] font-light mt-0.5">
                  {featuredTreatmentInfo.statLabel}
                </div>
              </div>

              {/* Minimal geometric background box */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border border-[#A68B6A]/30 -z-10 hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Editorial Typography & Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                {featuredTreatmentInfo.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.12] text-[#1D1D1A]">
              Skin, <span className="italic font-light text-[#A68B6A]">reimagined.</span>
            </h2>

            <p className="text-base text-[#6F6D67] font-light leading-relaxed">
              {featuredTreatmentInfo.description}
            </p>

            {/* Editorial Highlights */}
            <div className="space-y-3 pt-2">
              {featuredTreatmentInfo.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#1D1D1A]">
                  <Check className="w-4 h-4 text-[#A68B6A] shrink-0 mt-0.5" />
                  <span className="font-light">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="explore-featured-treatment-btn"
                onClick={onExplore}
                className="group px-6 py-3.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#A68B6A] active:scale-98 flex items-center space-x-2.5"
              >
                <span>Explore Treatment</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="book-featured-treatment-btn"
                onClick={onBook}
                className="px-6 py-3.5 border border-[#1D1D1A]/30 text-[#1D1D1A] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#EEEAE3] active:scale-98"
              >
                <span>Book Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
