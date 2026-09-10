import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { treatmentsData, comparisonCases } from '../data/clinicData';
import { PageHero } from '../components/PageHero';
import { BeforeAfterComparison } from '../components/BeforeAfterComparison';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export const TreatmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const treatment = treatmentsData.find((t) => t.id === id);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  // Find linked before/after case if available
  const linkedCase = comparisonCases.find(
    (c) => c.id === treatment.beforeAfterCaseId || c.treatmentId === treatment.id
  ) || comparisonCases[0];

  return (
    <div className="bg-[#F7F5F1] text-[#1D1D1A]">
      
      {/* 1. Dedicated Treatment Hero */}
      <PageHero
        badge={treatment.category}
        headline={treatment.title}
        supportingText={treatment.shortDescription}
        backgroundImage={treatment.image}
        ctaText="Book Consultation for This Procedure"
        ctaLink="/contact"
        secondaryCtaText="All Treatments"
        secondaryCtaLink="/treatments"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Treatments', href: '/treatments' },
          { label: treatment.title }
        ]}
      />

      {/* 2. Key Metadata Strip */}
      <section className="bg-[#EEEAE3] border-b border-[#DCD7CE] py-6 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="border-r border-[#DCD7CE]/70 pr-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#6F6D67] block">
              Investment
            </span>
            <span className="text-base sm:text-lg font-serif font-medium text-[#1D1D1A]">
              {treatment.startingPrice}
            </span>
          </div>

          <div className="border-r border-[#DCD7CE]/70 pr-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#6F6D67] block">
              Procedure Duration
            </span>
            <span className="text-base sm:text-lg font-serif font-medium text-[#1D1D1A]">
              {treatment.duration}
            </span>
          </div>

          <div className="border-r border-[#DCD7CE]/70 pr-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#6F6D67] block">
              Convalescence / Downtime
            </span>
            <span className="text-base sm:text-lg font-serif font-medium text-[#1D1D1A]">
              {treatment.downtime}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#6F6D67] block">
              Clinical Administration
            </span>
            <span className="text-base sm:text-lg font-serif font-medium text-[#1D1D1A]">
              Board-Certified MD / NP
            </span>
          </div>
        </div>
      </section>

      {/* 3. Main Content Grid (Two Columns: Details + Sticky Consultation Card) */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Section A: What It Is & Clinical Overview */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Clinical Overview</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1A] font-normal leading-tight">
                About the Procedure
              </h2>
              <p className="text-base sm:text-lg text-[#1D1D1A] font-light leading-relaxed">
                {treatment.fullDescription}
              </p>
            </div>

            {/* Section B: Who It's For / Candidacy */}
            <div className="p-8 bg-white border border-[#DCD7CE] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A68B6A] block">
                  Patient Candidacy
                </span>
                <h3 className="font-serif text-2xl text-[#1D1D1A] font-medium">
                  Ideal Indications & Concerns
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                You may be an ideal candidate for {treatment.title} if you present with any of the following concerns:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {treatment.suitableFor.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#1D1D1A]">
                    <CheckCircle2 className="w-4 h-4 text-[#A68B6A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section C: How It Works / Mechanism */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A68B6A] block">
                  Mechanism of Action
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1A] font-medium">
                  How the Protocol Works
                </h3>
              </div>
              <div className="space-y-3">
                {treatment.howItWorks.map((point, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#DCD7CE] flex items-start space-x-4">
                    <span className="font-mono text-xs text-[#A68B6A] font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section D: Step-by-Step Clinical Protocol */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A68B6A] block">
                  Treatment Steps
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1A] font-medium">
                  What to Expect During Your Session
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatment.protocolSteps.map((step) => (
                  <div key={step.step} className="p-6 bg-white border border-[#DCD7CE] space-y-2">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#A68B6A] font-bold">
                      Step {step.step}
                    </span>
                    <h4 className="font-serif text-lg text-[#1D1D1A] font-medium">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section E: Downtime & Recovery Timeline */}
            <div className="p-8 bg-white border border-[#DCD7CE] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A68B6A] block">
                  Convalescence & Aftercare
                </span>
                <h3 className="font-serif text-2xl text-[#1D1D1A] font-medium">
                  Expected Recovery Timeline
                </h3>
              </div>
              <div className="space-y-4 pt-2">
                {treatment.recoveryTimeline.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-4 border-b border-[#DCD7CE]/60 last:border-0 last:pb-0">
                    <span className="w-40 font-mono text-xs font-semibold text-[#1D1D1A] shrink-0">
                      {item.time}
                    </span>
                    <span className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                      {item.expectations}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section F: Before & After Photos for this treatment */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A68B6A] block">
                  Documented Outcomes
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1A] font-medium">
                  Patient Before & After Results
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6D67] font-light">
                  Standardized clinical documentation for patients undergoing our {treatment.title} protocol.
                </p>
              </div>

              <BeforeAfterComparison
                beforeImage={linkedCase.beforeImage}
                afterImage={linkedCase.afterImage}
                title={linkedCase.title}
                subtitle={linkedCase.subtitle}
                timeframe={linkedCase.timeframe}
                sessions={linkedCase.sessions}
                clinicalNotes={linkedCase.clinicalNotes}
                patientProfile={linkedCase.patientProfile}
              />
            </div>

            {/* Section G: Clinical FAQs */}
            {treatment.faqs && treatment.faqs.length > 0 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A68B6A] block">
                    Patient Questions
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1A] font-medium">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, i) => (
                    <div key={i} className="p-6 bg-white border border-[#DCD7CE] space-y-2.5">
                      <div className="flex items-start space-x-2 text-sm sm:text-base font-serif font-medium text-[#1D1D1A]">
                        <HelpCircle className="w-4 h-4 text-[#A68B6A] shrink-0 mt-1" />
                        <span>{faq.question}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Main Booking Card */}
              <div className="p-6 sm:p-8 bg-[#171715] text-[#F7F5F1] border border-white/10 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-white/15 pb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#A68B6A] block">
                    Reserve Treatment
                  </span>
                  <h3 className="font-serif text-2xl text-[#F7F5F1] font-medium">
                    Schedule Your Assessment
                  </h3>
                  <p className="text-xs text-[#9B9890] font-light leading-relaxed">
                    A personalized diagnostic session with our board-certified physicians to map your candidacy for {treatment.title}.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-[#DCD7CE]">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-[#9B9890]">Pricing:</span>
                    <span className="font-medium text-white">{treatment.startingPrice}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-[#9B9890]">Duration:</span>
                    <span>{treatment.duration}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-[#9B9890]">Downtime:</span>
                    <span>{treatment.downtime}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#9B9890]">Consultation Fee:</span>
                    <span className="text-[#A68B6A] font-medium">$100 (100% Credited)</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-3.5 bg-[#A68B6A] hover:bg-white text-[#171715] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation</span>
                  </Link>

                  <a
                    href="tel:+14158903420"
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-[#F7F5F1] border border-white/20 text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A68B6A]" />
                    <span>Call Concierge</span>
                  </a>
                </div>

                <div className="text-[10px] text-[#9B9890] font-light leading-relaxed pt-2 border-t border-white/10">
                  Strictly administered by board-certified physicians and certified aesthetic nurse specialists.
                </div>
              </div>

              {/* Safety & Compliance Card */}
              <div className="p-6 bg-[#EEEAE3] border border-[#DCD7CE] space-y-3">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#1D1D1A]">
                  <ShieldCheck className="w-4 h-4 text-[#A68B6A]" />
                  <span>Medical Standards</span>
                </div>
                <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                  All injectables and laser protocols use 100% direct-manufacturer authentic pharmaceuticals, Class-B vacuum sterilization, and conservative anatomical dosing.
                </p>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-wider text-[#A68B6A] hover:underline font-semibold block pt-1"
                >
                  Learn About Our Safety Standards →
                </Link>
              </div>

              {/* Back to Treatments */}
              <div>
                <Link
                  to="/treatments"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#6F6D67] hover:text-[#1D1D1A] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to All Treatments</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
