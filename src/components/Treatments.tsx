import React, { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { treatmentsData, treatmentCategories } from '../data/clinicData';
import { TreatmentItem } from '../types';

interface TreatmentsProps {
  onSelectTreatment: (treatment: TreatmentItem) => void;
  onBookTreatment: (treatmentTitle: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({
  onSelectTreatment,
  onBookTreatment
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All Treatments");

  const filteredTreatments = selectedCategory === "All Treatments"
    ? treatmentsData
    : treatmentsData.filter((t) => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-[#EEEAE3]/50 border-t border-[#DCD7CE] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                TREATMENT MENU
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1A]">
              Treatments designed around you.
            </h2>
            <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              Explore a considered range of aesthetic treatments, each approached with personalization, anatomical precision, and gentle care.
            </p>
          </div>

          {/* Quick Notice Badge */}
          <div className="text-left md:text-right">
            <span className="inline-block px-3 py-1.5 bg-[#F7F5F1] border border-[#DCD7CE] text-[11px] font-mono text-[#6F6D67] tracking-wider uppercase">
              06 Demo Categories
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {treatmentCategories.map((category) => (
            <button
              key={category}
              id={`treatment-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-[#171715] text-[#F7F5F1] border-[#171715]'
                  : 'bg-[#F7F5F1] text-[#6F6D67] border-[#DCD7CE] hover:border-[#1D1D1A] hover:text-[#1D1D1A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              onClick={() => onSelectTreatment(treatment)}
              className="group relative bg-[#F7F5F1] border border-[#DCD7CE] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(23,23,21,0.06)] cursor-pointer text-left"
            >
              {/* Image Container with Zoom and Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#171715]">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Number & Category Pill */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-[#171715]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest uppercase font-mono text-[#F7F5F1] border border-white/10">
                  <span className="text-[#A68B6A] font-semibold">{treatment.number}</span>
                  <span>/</span>
                  <span className="font-sans">{treatment.category}</span>
                </div>

                {/* Duration indicator */}
                <div className="absolute top-4 right-4 bg-[#F7F5F1]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-sans tracking-wider uppercase text-[#1D1D1A] border border-[#DCD7CE]">
                  {treatment.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1D1D1A] group-hover:text-[#A68B6A] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed line-clamp-2">
                    {treatment.shortDescription}
                  </p>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-[#DCD7CE]/60 flex items-center justify-between">
                  <span className="text-xs tracking-[0.18em] uppercase font-medium text-[#1D1D1A] group-hover:text-[#A68B6A] transition-colors flex items-center space-x-1.5">
                    <span>View Treatment</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookTreatment(treatment.title);
                    }}
                    className="p-1.5 rounded-full border border-[#DCD7CE] text-[#6F6D67] hover:text-[#171715] hover:border-[#171715] hover:bg-[#EEEAE3] transition-colors"
                    title="Book this treatment"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom Subtle Accent Bar on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A68B6A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6F6D67] font-light">
            All treatment protocols are customized following an in-depth clinical consultation.
          </p>
        </div>

      </div>
    </section>
  );
};
