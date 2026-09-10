import React from 'react';
import { Link } from 'react-router-dom';
import { practitioners, safetyStandards, trustStats, approachPillars } from '../data/clinicData';
import { PageHero } from '../components/PageHero';
import {
  ShieldCheck,
  Award,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F1] text-[#1D1D1A]">
      
      {/* 1. Distinct Hero Section (40-50vh) */}
      <PageHero
        badge="Physician Leadership"
        headline="Board-Certified Medicine Rooted in Restraint and Science"
        supportingText="Meet the physicians, aesthetic nurse practitioners, and dermal specialists dedicated to natural, undetectable results."
        backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2000&q=85"
        ctaText="Book A Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Our Clinic & Specialists' }
        ]}
      />

      {/* 2. Clinic Mission & Medical Philosophy */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Foundational Philosophy</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1A] font-normal leading-tight">
              Anatomical Precision. <br />
              <span className="italic font-light">Restrained Artistry.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              <p>
                Cosmetic Aesthetics was founded on a firm clinical conviction: aesthetic medicine should never aim to alter your identity, but rather to reveal the most refreshed, harmonious version of your natural self.
              </p>
              <p>
                In an industry increasingly driven by social media trends and cookie-cutter treatments, our clinic operates with strict medical restraint. Every recommendation is informed by facial bone structure, skin barrier physiology, and long-term tissue health.
              </p>
              <p>
                We spend the necessary time with every patient to understand their lifestyle, anxieties, and aesthetic ideals—crafting phased roadmaps where enhancements remain completely invisible to the casual eye.
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#1D1D1A]">
                <ShieldCheck className="w-4 h-4 text-[#A68B6A]" />
                <span>Physician Supervised</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#1D1D1A]">
                <Award className="w-4 h-4 text-[#A68B6A]" />
                <span>100% Authentic Products</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] max-w-lg mx-auto overflow-hidden bg-[#EEEAE3] border border-[#DCD7CE] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Clinic Treatment Suite & Consultation Room"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F7F5F1] text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A68B6A] block">
                  San Francisco Medical Practice
                </span>
                <p className="font-serif text-lg text-white">
                  State-of-the-Art Clinical Suites Designed for Total Patient Comfort & Discretion
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Clinical Milestones Bar */}
      <section className="bg-[#EEEAE3] border-y border-[#DCD7CE] py-12">
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

      {/* 4. Board-Certified Practitioners Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 text-left">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Clinical Faculty & Specialists</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1A] font-normal leading-tight">
            Meet Our Medical Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
            Every practitioner on our team is formally credentialed, board-certified, and actively engaged in peer clinical training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {practitioners.map((practitioner) => (
            <div
              key={practitioner.id}
              className="bg-white border border-[#DCD7CE] shadow-sm flex flex-col overflow-hidden"
            >
              {/* Top Photo & Identity Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-6 sm:p-8 bg-[#FDFBF7] border-b border-[#DCD7CE]">
                <div className="sm:col-span-5">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#EEEAE3] border border-[#DCD7CE]">
                    <img
                      src={practitioner.image}
                      alt={practitioner.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="sm:col-span-7 flex flex-col justify-center space-y-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#A68B6A] block">
                    {practitioner.title}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1D1D1A] font-medium leading-snug">
                    {practitioner.name}
                  </h3>
                  <p className="text-xs text-[#6F6D67] font-light italic">
                    {practitioner.degrees}
                  </p>
                  
                  <div className="pt-2 text-xs text-[#1D1D1A] font-medium space-y-1">
                    <span className="block text-[10px] uppercase tracking-wider text-[#A68B6A]">
                      Board Certifications:
                    </span>
                    {practitioner.boardCertifications.map((cert, i) => (
                      <div key={i} className="flex items-center space-x-1.5 text-xs text-[#1D1D1A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B6A] shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-[#6F6D67]">
                    Experience: <strong>{practitioner.experienceYears}+ Years Clinical Practice</strong>
                  </div>
                </div>
              </div>

              {/* Bio & Clinical Focus */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                  {practitioner.bio}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#DCD7CE]/60">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1D1D1A] block">
                    Key Clinical Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {practitioner.clinicalFocus.map((focus, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#EEEAE3] text-[#1D1D1A] text-[11px] font-medium"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DCD7CE]/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#6F6D67]">
                    Accepting New Patients
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1A] hover:text-[#A68B6A] transition-colors"
                  >
                    Request Appointment →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. Rigorous Safety & Hygiene Standards (Deep Dark Section) */}
      <section className="py-24 bg-[#171715] text-[#F7F5F1] border-y border-white/10 text-left">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Accreditation & Hygiene Protocols</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F5F1] font-normal leading-tight">
              Hospital-Grade Facility Standards
            </h2>
            <p className="text-sm text-[#DCD7CE] font-light leading-relaxed">
              Patient safety is never a compromise. We adhere strictly to AAAASF ambulatory surgical safety benchmarks across every treatment room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyStandards.map((std) => (
              <div
                key={std.id}
                className="p-7 bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#A68B6A] block">
                    {std.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#F7F5F1] font-medium leading-snug">
                    {std.title}
                  </h3>
                  <p className="text-xs text-[#9B9890] font-light leading-relaxed">
                    {std.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-[#A68B6A] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{std.highlight}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="py-20 bg-[#EEEAE3] border-t border-[#DCD7CE]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
            <HeartHandshake className="w-4 h-4" />
            <span>Experience Personalized Care</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1A] font-normal leading-tight">
            Consult Directly with Our Medical Team
          </h2>
          <p className="text-sm text-[#6F6D67] font-light max-w-xl mx-auto leading-relaxed">
            Every aesthetic journey begins with an in-depth clinical conversation. Let us understand your goals and provide honest, scientific guidance.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-colors shadow-sm"
            >
              <span>Schedule Your Physician Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#A68B6A]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
