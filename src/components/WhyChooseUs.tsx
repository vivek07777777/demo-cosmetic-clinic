import React, { useState } from 'react';
import { approachPillars } from '../data/clinicData';
import { Plus, Minus, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);
  const [expandedIdx, setExpandedIdx] = useState<number>(0);

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-[#171715] text-[#F7F5F1] relative overflow-hidden">
      {/* Background subtle geometric line */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full border-x border-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-6 space-y-3 text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#A68B6A] uppercase">
                WHY LUMÉRA
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#F7F5F1]">
              Care that begins <br />
              <span className="italic text-[#A68B6A] font-light">with listening.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 text-left lg:text-right">
            <p className="text-sm sm:text-base text-[#6F6D67] font-light max-w-md lg:ml-auto leading-relaxed">
              We treat aesthetic medicine as an enduring partnership built upon unhurried dialogue, anatomical respect, and patient comfort.
            </p>
          </div>
        </div>

        {/* 4 Interactive Accordion / Hover Items */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {approachPillars.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;
            const isExpanded = expandedIdx === idx;

            return (
              <div
                key={pillar.number}
                id={`why-choose-pillar-${idx}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)}
                className={`group py-8 sm:py-10 transition-all duration-500 cursor-pointer text-left ${
                  isHovered || isExpanded ? 'bg-white/[0.02] pl-2 sm:pl-4' : 'pl-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Number & Accent Line */}
                  <div className="lg:col-span-2 flex items-center space-x-4">
                    <span className="font-mono text-sm sm:text-base text-[#6F6D67] group-hover:text-[#A68B6A] transition-colors">
                      {pillar.number}
                    </span>
                    <span
                      className={`h-px transition-all duration-500 ${
                        isHovered || isExpanded ? 'w-12 bg-[#A68B6A]' : 'w-6 bg-white/20'
                      }`}
                    />
                  </div>

                  {/* Title & Preview */}
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F5F1] group-hover:text-[#A68B6A] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Expanded Detail / Toggle */}
                  <div className="lg:col-span-4 lg:pt-1">
                    <div
                      className={`text-xs text-[#EEEAE3]/80 font-light leading-relaxed transition-all duration-300 ${
                        isExpanded ? 'opacity-100 max-h-32' : 'opacity-0 lg:opacity-70 max-h-0 lg:max-h-32 overflow-hidden'
                      }`}
                    >
                      <div className="flex items-start space-x-2 pt-2 lg:pt-0">
                        <Check className="w-3.5 h-3.5 text-[#A68B6A] shrink-0 mt-0.5" />
                        <span>{pillar.details}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expand icon for mobile */}
                  <div className="lg:col-span-1 flex justify-end lg:pt-2">
                    <button
                      className="p-2 text-[#6F6D67] group-hover:text-[#F7F5F1] transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <Minus className="w-4 h-4 text-[#A68B6A]" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
