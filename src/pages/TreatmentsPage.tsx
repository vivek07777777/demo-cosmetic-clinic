import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { treatmentsData, treatmentCategories } from '../data/clinicData';
import { PageHero } from '../components/PageHero';
import { Clock, ShieldCheck, Sparkles, ArrowRight, ChevronRight, Calendar } from 'lucide-react';

export const TreatmentsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Treatments');

  const filteredTreatments = activeCategory === 'All Treatments'
    ? treatmentsData
    : treatmentsData.filter((t) => t.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(t.category.toLowerCase()));

  return (
    <div className="bg-[#F7F5F1] text-[#1D1D1A]">
      
      {/* 1. Distinct Hero Section (40-50vh) */}
      <PageHero
        badge="Clinical Services Menu"
        headline="Targeted Procedures Tailored to Your Facial Anatomy"
        supportingText="Explore our complete suite of physician-led injectable, laser, and regenerative protocols designed for natural balance."
        backgroundImage="https://images.unsplash.com/photo-1512290900672-1f4a9b40552b?auto=format&fit=crop&w=2000&q=85"
        ctaText="Book A Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Treatments & Services' }
        ]}
      />

      {/* 2. Medical Philosophy Teaser Bar */}
      <section className="bg-[#EEEAE3] border-b border-[#DCD7CE] py-6 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center space-x-3 text-xs text-[#1D1D1A] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#A68B6A] shrink-0" />
            <span>All injectable & energy treatments are administered strictly by Board-Certified Physicians and Certified Nurse Practitioners.</span>
          </div>
          <Link
            to="/about"
            className="text-xs uppercase tracking-wider text-[#A68B6A] hover:underline font-semibold shrink-0"
          >
            Review Clinical Credentials →
          </Link>
        </div>
      </section>

      {/* 3. Treatments Showcase & Filterable Grid */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Category Navigation Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-14 no-scrollbar gap-2">
          {treatmentCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all duration-200 border ${
                activeCategory === category
                  ? 'bg-[#171715] text-[#F7F5F1] border-[#171715] shadow-sm'
                  : 'bg-white text-[#6F6D67] border-[#DCD7CE] hover:border-[#1D1D1A] hover:text-[#1D1D1A]'
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
              className="bg-white border border-[#DCD7CE] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group text-left"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EEEAE3]">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-[#171715]/85 backdrop-blur-sm text-[#F7F5F1] text-[10px] uppercase tracking-[0.2em] font-medium">
                  {treatment.category}
                </div>
                {treatment.featured && (
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-[#A68B6A] text-[#171715] text-[10px] uppercase tracking-[0.15em] font-bold">
                    Signature
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A68B6A]">
                      {treatment.subtitle}
                    </span>
                    <span className="text-xs font-semibold text-[#1D1D1A]">
                      {treatment.startingPrice}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1D1D1A] font-medium leading-tight group-hover:text-[#A68B6A] transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                    {treatment.shortDescription}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2 space-y-1.5 border-t border-[#DCD7CE]/50">
                    <span className="text-[10px] uppercase tracking-wider text-[#1D1D1A] font-semibold block">
                      Targeted Concerns:
                    </span>
                    <ul className="text-xs text-[#6F6D67] space-y-1">
                      {treatment.suitableFor.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Metadata & Actions */}
                <div className="pt-4 border-t border-[#DCD7CE] space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#6F6D67]">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A68B6A]" />
                      <span>{treatment.duration}</span>
                    </div>
                    <span className="text-[11px] text-[#1D1D1A]">
                      Downtime: {treatment.downtime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 gap-2">
                    <Link
                      to={`/treatments/${treatment.id}`}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#1D1D1A] hover:text-[#A68B6A] transition-colors"
                    >
                      <span>Read Clinical Protocol</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#A68B6A]" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-3.5 py-1.5 bg-[#EEEAE3] hover:bg-[#171715] hover:text-[#F7F5F1] text-[#1D1D1A] text-[11px] uppercase tracking-wider font-medium transition-colors"
                    >
                      Book
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. Consultation Process Banner */}
      <section className="py-20 bg-[#EEEAE3] border-t border-[#DCD7CE]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
            <Calendar className="w-4 h-4" />
            <span>Uncertain Which Treatment Is Right for You?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1A] font-normal">
            Schedule a Diagnostic Facial Evaluation
          </h2>
          <p className="text-sm text-[#6F6D67] font-light max-w-xl mx-auto leading-relaxed">
            During your 45-minute consultation, our board-certified physicians assess your skin thickness, dynamic muscle vectors, and facial proportions to design a custom treatment plan.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-colors shadow-sm"
            >
              <span>Book An In-Depth Assessment</span>
              <ArrowRight className="w-4 h-4 text-[#A68B6A]" />
            </Link>
          </div>
          <p className="text-[11px] text-[#6F6D67] font-light">
            * Consultation fee ($100) is applied 100% toward any treatment scheduled within 90 days.
          </p>
        </div>
      </section>

    </div>
  );
};
