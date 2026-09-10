import React from 'react';
import { Link } from 'react-router-dom';
import { ClinicConfig, TreatmentItem } from '../types';
import { trustStats, treatmentsData, approachPillars, safetyStandards, comparisonCases, testimonials } from '../data/clinicData';
import { BeforeAfterComparison } from '../components/BeforeAfterComparison';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Calendar,
  Sparkles,
  Clock,
  Star,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  clinic: ClinicConfig;
}

export const HomePage: React.FC<HomePageProps> = ({ clinic }) => {
  // Top 3 featured treatments for the condensed teaser
  const featuredTreatments = treatmentsData.slice(0, 3);
  const featuredCase = comparisonCases[0];

  return (
    <div className="bg-[#F7F5F1] text-[#1D1D1A]">
      
      {/* 1. Elevated Editorial Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F7F5F1] to-[#F2EFEA] pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 border-b border-[#DCD7CE]/70">
        
        {/* Subtle Architectural Atmosphere */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A68B6A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-80 h-80 bg-[#DCD7CE]/40 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Clinical Authority & Proposition */}
            <div className="lg:col-span-7 space-y-7 text-left">
              
              {/* Clinical Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-[#EEEAE3] border border-[#DCD7CE] text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold text-[#6F6D67]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
                <span>Physician-Led Aesthetic Dermatology &bull; San Francisco</span>
              </div>

              {/* Commanding Editorial Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[66px] text-[#1D1D1A] font-normal tracking-tight leading-[1.08]">
                Modern Aesthetics. <br />
                <span className="italic font-light text-[#A68B6A]">
                  Anatomically Defined.
                </span>
              </h1>

              {/* Nuanced Supporting Copy */}
              <p className="text-base sm:text-lg text-[#6F6D67] font-light leading-relaxed max-w-xl">
                A discreet medical practice dedicated to nuanced facial harmonization. We pair advanced laser resurfacing with ultrasound-guided injectables to reveal refreshed, undetectable vitality—never altered or overfilled.
              </p>

              {/* Action Cluster */}
              <div className="pt-2 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <Link
                    to="/contact"
                    id="hero-book-btn"
                    className="px-7 py-3.5 bg-[#171715] hover:bg-[#A68B6A] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm flex items-center justify-center space-x-2 group"
                  >
                    <Calendar className="w-4 h-4 text-[#A68B6A] group-hover:text-[#171715] transition-colors" />
                    <span>Book Clinical Consultation</span>
                  </Link>

                  <Link
                    to="/treatments"
                    id="hero-explore-btn"
                    className="px-7 py-3.5 bg-white hover:bg-[#EEEAE3] text-[#1D1D1A] border border-[#DCD7CE] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View All Protocols</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A68B6A]" />
                  </Link>
                </div>

                {/* Consultation Transparency Reassurance */}
                <p className="text-xs text-[#6F6D67] font-light flex items-center space-x-2 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B6A] shrink-0" />
                  <span>Includes full VISIA® 3D complexion scan. Consultation fee credited toward your treatment.</span>
                </p>
              </div>

              {/* Physician Endorsement Strip */}
              <div className="pt-6 border-t border-[#DCD7CE]/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#6F6D67]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#A68B6A]" />
                  <span className="font-medium text-[#1D1D1A]">Board-Certified MDs</span>
                  <span className="text-[#6F6D67] font-light">(Stanford & Johns Hopkins)</span>
                </div>
                <div className="hidden sm:inline text-[#DCD7CE]">&bull;</div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#A68B6A]" />
                  <span className="font-medium text-[#1D1D1A]">AAAASF Accredited</span>
                  <span className="text-[#6F6D67] font-light">Surgical Suite</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Frame with Real Clinical Reassurance Badges */}
            <div className="lg:col-span-5 relative">
              
              {/* Main Visual Container */}
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Backing Architectural Border */}
                <div className="absolute -inset-2.5 bg-[#EEEAE3] border border-[#DCD7CE] -rotate-1 rounded-xs pointer-events-none" />

                {/* Image Frame */}
                <div className="relative bg-white p-2.5 sm:p-3 border border-[#DCD7CE] shadow-xl">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#EEEAE3]">
                    <img
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=88"
                      alt="Luminous, natural facial rejuvenation outcome"
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Subtle Overlay Badge */}
                    <div className="absolute top-3 left-3 bg-[#171715]/85 backdrop-blur-xs text-[#F7F5F1] px-3 py-1 text-[9px] uppercase tracking-[0.24em] font-medium">
                      Unretouched Patient Standard
                    </div>
                  </div>

                  {/* Caption Bar under image */}
                  <div className="pt-2.5 pb-1 px-1 flex items-center justify-between text-[11px] text-[#6F6D67]">
                    <span className="font-serif italic text-[#1D1D1A]">Subtle. Restrained. Measured.</span>
                    <span className="text-[10px] tracking-wider uppercase text-[#A68B6A] font-semibold">450 Sutter St, Suite 1420</span>
                  </div>
                </div>

                {/* Floating Badge 1: 100% Physician Performed (Top Right Offset) */}
                <div className="absolute -top-5 -right-3 sm:-right-6 bg-white border border-[#DCD7CE] shadow-lg p-3 sm:p-3.5 max-w-[210px] hidden sm:block text-left">
                  <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-[#A68B6A] font-semibold">
                    <Sparkles className="w-3 h-3 text-[#A68B6A]" />
                    <span>Clinical Standard</span>
                  </div>
                  <p className="text-xs font-semibold text-[#1D1D1A] mt-0.5">100% Physician Performed</p>
                  <p className="text-[10px] text-[#6F6D67] font-light mt-0.5 leading-tight">All injectable protocols executed exclusively by Board-Certified MDs.</p>
                </div>

                {/* Floating Badge 2: Patient Satisfaction Metric (Bottom Left Offset) */}
                <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-[#171715] text-[#F7F5F1] border border-white/10 shadow-xl p-3.5 max-w-[230px] hidden sm:block text-left">
                  <div className="flex items-center space-x-1 text-[#A68B6A] text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                    <span className="text-[10px] font-mono text-[#DCD7CE] ml-1">4.98 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-[#DCD7CE] italic font-light mt-1.5 leading-snug">
                    "The most natural result I have ever received. Zero artificial fullness."
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-[#A68B6A] font-medium mt-1">
                    Verified Patient &bull; Jawline & Laser
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Clinical Stats Bar */}
      <section className="bg-[#EEEAE3] border-y border-[#DCD7CE] py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#DCD7CE]">
            {trustStats.map((item) => (
              <div key={item.id} className="text-center px-4 pt-4 sm:pt-0">
                <span className="font-serif text-3xl sm:text-4xl text-[#1D1D1A] font-medium block">
                  {item.metric}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#1D1D1A] font-semibold block mt-1">
                  {item.title}
                </span>
                <span className="text-[11px] text-[#6F6D67] font-light block mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Top Treatments Teaser (Condensed Preview) */}
      <section className="py-24 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Targeted Clinical Procedures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1A] font-normal leading-tight">
              Featured Aesthetic Protocols
            </h2>
            <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              Every procedure is customized to your individual facial anatomy, bone structure, and long-term skin health goals.
            </p>
          </div>

          <Link
            to="/treatments"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A] hover:text-[#A68B6A] transition-colors pb-1 border-b border-[#1D1D1A] hover:border-[#A68B6A] shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Condensed Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTreatments.map((treatment) => (
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
                <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-[#171715]/80 backdrop-blur-sm text-[#F7F5F1] text-[10px] uppercase tracking-[0.2em] font-medium">
                  {treatment.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#A68B6A] block">
                    {treatment.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1D1D1A] font-medium leading-snug group-hover:text-[#A68B6A] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-[#6F6D67] font-light line-clamp-3 leading-relaxed">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCD7CE]/60 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#6F6D67]">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A68B6A]" />
                      <span>{treatment.duration}</span>
                    </div>
                    <span className="font-medium text-[#1D1D1A]">{treatment.startingPrice}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      to={`/treatments/${treatment.id}`}
                      className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1D1D1A] hover:text-[#A68B6A] transition-colors flex items-center space-x-1"
                    >
                      <span>Treatment Details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#A68B6A]" />
                    </Link>
                    <Link
                      to="/contact"
                      className="text-[11px] uppercase tracking-wider text-[#A68B6A] hover:underline"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner linking to full treatments */}
        <div className="mt-12 text-center">
          <Link
            to="/treatments"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-colors"
          >
            <span>Explore Complete Treatment Menu</span>
            <ArrowRight className="w-4 h-4 text-[#A68B6A]" />
          </Link>
        </div>
      </section>

      {/* 4. Value Proposition & Philosophy (Condensed Teaser) */}
      <section className="py-24 bg-[#EEEAE3] border-y border-[#DCD7CE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>The Medical Approach</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1A] font-normal leading-tight">
                Subtle by Design. <br />
                <span className="italic font-light">Personal by Nature.</span>
              </h2>
              <p className="text-sm text-[#6F6D67] font-light leading-relaxed">
                In an era dominated by over-filled trends and aggressive alterations, our clinic stands firmly for aesthetic restraint. We believe that true luxury in cosmetic medicine lies in invisible enhancement—leaving you looking refreshed, rested, and undeniably yourself.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A] hover:text-[#A68B6A] transition-colors pb-1 border-b border-[#1D1D1A]"
                >
                  <span>Meet Our Specialists & Credentials</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 4 Pillars preview */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {approachPillars.map((pillar) => (
                <div key={pillar.number} className="p-6 bg-white border border-[#DCD7CE] shadow-sm space-y-2.5">
                  <span className="font-serif text-2xl text-[#A68B6A] font-medium block">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif text-lg text-[#1D1D1A] font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Before & After Results Teaser */}
      <section className="py-24 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Documented Transformations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1A] font-normal leading-tight">
              Real Patients. Verified Results.
            </h2>
            <p className="text-sm text-[#6F6D67] font-light leading-relaxed">
              Explore documented clinical outcomes showcasing our commitment to anatomical balance and natural aesthetic harmony.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A] hover:text-[#A68B6A] transition-colors pb-1 border-b border-[#1D1D1A] hover:border-[#A68B6A] shrink-0"
          >
            <span>View Full Clinical Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <BeforeAfterComparison
            beforeImage={featuredCase.beforeImage}
            afterImage={featuredCase.afterImage}
            title={featuredCase.title}
            subtitle={featuredCase.subtitle}
            timeframe={featuredCase.timeframe}
            sessions={featuredCase.sessions}
            clinicalNotes={featuredCase.clinicalNotes}
            patientProfile={featuredCase.patientProfile}
          />

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 px-7 py-3 bg-white border border-[#DCD7CE] hover:border-[#1D1D1A] text-[#1D1D1A] text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
            >
              <span>Explore All Patient Case Studies ({comparisonCases.length})</span>
              <ArrowRight className="w-4 h-4 text-[#A68B6A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us & Clinical Standards (Obsidian Section) */}
      <section className="py-24 bg-[#171715] text-[#F7F5F1] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Medical Safety & Ethics</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F5F1] font-normal leading-tight">
              Why Patients Entrust Their Care to Us
            </h2>
            <p className="text-sm text-[#DCD7CE] font-light leading-relaxed">
              We operate under the most stringent medical facility standards, prioritizing patient safety, authentic pharmaceuticals, and transparent guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {safetyStandards.map((std) => (
              <div
                key={std.id}
                className="p-6 bg-white/5 border border-white/10 hover:border-[#A68B6A]/50 transition-colors space-y-3"
              >
                <div className="text-[10px] uppercase font-mono tracking-wider text-[#A68B6A]">
                  {std.category}
                </div>
                <h3 className="font-serif text-lg text-[#F7F5F1] font-medium leading-snug">
                  {std.title}
                </h3>
                <p className="text-xs text-[#9B9890] font-light leading-relaxed">
                  {std.description}
                </p>
                <div className="pt-2 flex items-center space-x-1.5 text-[11px] text-[#A68B6A] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{std.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-[#F7F5F1] border border-white/20 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <span>Read Full Clinical Accreditation & Protocols</span>
              <ArrowRight className="w-4 h-4 text-[#A68B6A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Preview */}
      <section className="py-24 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#A68B6A]" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1A] font-normal leading-tight">
            Reflections from Our Patients
          </h2>
          <p className="text-sm text-[#6F6D67] font-light leading-relaxed">
            Unsolicited patient reviews detailing their comfort, consultation experience, and long-term results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-white border border-[#DCD7CE] shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-[#A68B6A]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A68B6A]" />
                  ))}
                </div>
                <blockquote className="text-sm text-[#1D1D1A] font-light leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#DCD7CE]/60">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1A] block">
                      {testimonial.patientName}
                    </span>
                    <span className="text-[11px] text-[#6F6D67] block">
                      {testimonial.treatment}
                    </span>
                  </div>
                  {testimonial.practitionerSeen && (
                    <span className="text-[10px] font-mono text-[#A68B6A]">
                      {testimonial.practitionerSeen}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final Call to Action Banner */}
      <section className="py-20 bg-[#EEEAE3] border-t border-[#DCD7CE]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
            <Calendar className="w-4 h-4" />
            <span>Begin Your Aesthetic Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1A] font-normal leading-tight">
            Schedule Your Comprehensive Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#6F6D67] font-light max-w-xl mx-auto leading-relaxed">
            Meet with our board-certified physicians for an unhurried evaluation of your facial architecture, skin health, and personalized rejuvenation roadmap.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#171715] hover:bg-[#A68B6A] text-[#F7F5F1] text-xs uppercase tracking-[0.22em] font-medium transition-colors shadow-md"
            >
              Reserve Consultation
            </Link>
            <a
              href={`tel:${clinic.phone}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#DCD7CE] hover:border-[#1D1D1A] text-[#1D1D1A] text-xs uppercase tracking-[0.22em] font-medium transition-colors"
            >
              Call Concierge: {clinic.phone}
            </a>
          </div>
          <p className="text-[11px] text-[#6F6D67] font-light">
            * {clinic.consultationFee}
          </p>
        </div>
      </section>

    </div>
  );
};
