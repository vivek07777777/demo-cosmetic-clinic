import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { comparisonCases } from '../data/clinicData';
import { PageHero } from '../components/PageHero';
import { BeforeAfterComparison } from '../components/BeforeAfterComparison';
import { Sparkles, ShieldCheck, ArrowRight, Calendar, Info } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Laser & Skin', 'Injectables', 'Injectables & RF'];

  const filteredCases = selectedFilter === 'All'
    ? comparisonCases
    : comparisonCases.filter((c) => c.treatmentType === selectedFilter || c.treatmentType.includes(selectedFilter));

  return (
    <div className="bg-[#F7F5F1] text-[#1D1D1A]">
      
      {/* 1. Distinct Hero Section (40-50vh) */}
      <PageHero
        badge="Clinical Documentation"
        headline="Documented Patient Outcomes & Natural Transformations"
        supportingText="Review unretouched before-and-after case studies showcasing our commitment to anatomical balance."
        backgroundImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=85"
        ctaText="Book A Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Clinical Results & Gallery' }
        ]}
      />

      {/* 2. Mandatory Medical Transparency & Disclaimer Strip */}
      <section className="bg-[#EEEAE3] border-b border-[#DCD7CE] py-6 px-6 sm:px-8 text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3 text-xs text-[#6F6D67] font-light leading-relaxed max-w-4xl">
            <Info className="w-4 h-4 text-[#A68B6A] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1D1D1A] font-medium">Standardized Medical Photography: </strong>
              All images depict actual patients treated at Cosmetic Aesthetics. Photographs are taken under calibrated clinical lighting without digital retouching, beauty filters, or deceptive camera angles. Individual outcomes depend on baseline anatomical structure, tissue elasticity, and post-procedure compliance.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#1D1D1A] shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#A68B6A]" />
            <span>100% Unretouched Cases</span>
          </div>
        </div>
      </section>

      {/* 3. Filterable Gallery Grid */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center space-x-2 pb-14 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 border ${
                selectedFilter === cat
                  ? 'bg-[#171715] text-[#F7F5F1] border-[#171715] shadow-sm'
                  : 'bg-white text-[#6F6D67] border-[#DCD7CE] hover:border-[#1D1D1A] hover:text-[#1D1D1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid (Each with full interactive slider & physician note) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCases.map((c) => (
            <div key={c.id} className="text-left">
              <BeforeAfterComparison
                beforeImage={c.beforeImage}
                afterImage={c.afterImage}
                title={c.title}
                subtitle={c.subtitle}
                timeframe={c.timeframe}
                sessions={c.sessions}
                clinicalNotes={c.clinicalNotes}
                patientProfile={c.patientProfile}
              />
              
              {/* Linked Treatment CTA */}
              {c.treatmentId && (
                <div className="pt-3 px-1 flex items-center justify-between text-xs">
                  <Link
                    to={`/treatments/${c.treatmentId}`}
                    className="text-[#A68B6A] hover:text-[#1D1D1A] font-medium uppercase tracking-wider transition-colors flex items-center space-x-1"
                  >
                    <span>View Treatment Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="text-[#6F6D67] hover:text-[#1D1D1A] uppercase tracking-wider"
                  >
                    Inquire About This Case
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* 4. Consultation CTA */}
      <section className="py-20 bg-[#EEEAE3] border-t border-[#DCD7CE]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
            <Calendar className="w-4 h-4" />
            <span>Evaluate Your Candidacy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1A] font-normal">
            Ready to Discuss Your Aesthetic Goals?
          </h2>
          <p className="text-sm text-[#6F6D67] font-light max-w-xl mx-auto leading-relaxed">
            Schedule a private consultation with our board-certified physicians. We will review your anatomy and share additional case studies tailored to your specific facial profile.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-colors shadow-sm"
            >
              <span>Book An In-Person Evaluation</span>
              <ArrowRight className="w-4 h-4 text-[#A68B6A]" />
            </Link>
          </div>
          <p className="text-[11px] text-[#6F6D67] font-light">
            * All consultations are confidential and conducted in private medical suites.
          </p>
        </div>
      </section>

    </div>
  );
};
