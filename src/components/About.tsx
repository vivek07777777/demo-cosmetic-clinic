import React, { useState } from 'react';
import { practitionerPlaceholders } from '../data/clinicData';
import { ArrowRight, UserCheck, Stethoscope, Sparkles } from 'lucide-react';
import { ClinicConfig } from '../types';

interface AboutProps {
  clinic: ClinicConfig;
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ clinic, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'team'>('story');

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#EEEAE3]/60 border-t border-[#DCD7CE] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                ABOUT THE PRACTICE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1A]">
              An aesthetic experience, <br />
              <span className="italic text-[#A68B6A] font-light">designed around you.</span>
            </h2>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center space-x-2 bg-[#F7F5F1] p-1 border border-[#DCD7CE]">
            <button
              id="about-tab-story"
              onClick={() => setActiveTab('story')}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                activeTab === 'story'
                  ? 'bg-[#171715] text-[#F7F5F1]'
                  : 'text-[#6F6D67] hover:text-[#1D1D1A]'
              }`}
            >
              Our Sanctuary
            </button>
            <button
              id="about-tab-team"
              onClick={() => setActiveTab('team')}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                activeTab === 'team'
                  ? 'bg-[#171715] text-[#F7F5F1]'
                  : 'text-[#6F6D67] hover:text-[#1D1D1A]'
              }`}
            >
              Practitioners & Team
            </button>
          </div>
        </div>

        {/* Tab 1: Clinic Narrative & Imagery */}
        {activeTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image: Clinic Atmosphere */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden bg-[#171715] border border-[#DCD7CE] shadow-[0_20px_40px_rgba(23,23,21,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85"
                  alt="LUMÉRA Aesthetic Sanctuary Interior"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[10px] tracking-widest uppercase font-mono text-[#A68B6A]">
                    Designed for Serenity
                  </span>
                  <p className="font-serif text-xl sm:text-2xl mt-1">
                    Tranquil treatment suites crafted for privacy and calm.
                  </p>
                </div>
              </div>

              {/* Offset decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#A68B6A]/40 -z-10 hidden sm:block" />
            </div>

            {/* Right Column: Philosophy Narrative */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-base sm:text-lg text-[#1D1D1A] font-light leading-relaxed">
                At <span className="font-semibold">{clinic.name}</span>, every consultation begins with understanding what you want to achieve. We believe aesthetic care should never feel rushed or transactional.
              </p>

              <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
                Founded on the premise that true beauty is deeply individual, our clinic brings together medical precision and bespoke artistry. We take pride in creating an environment where questions are welcomed, expectations are guided with honesty, and your comfort is the ultimate priority.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#DCD7CE]">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F5F1] border border-[#DCD7CE] flex items-center justify-center text-[#A68B6A] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1D1D1A]">
                      Bespoke Clinical Roadmaps
                    </h4>
                    <p className="text-xs text-[#6F6D67] font-light mt-0.5">
                      No pre-packaged plans. Every sequence of care is tailored to your lifestyle and personal goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F5F1] border border-[#DCD7CE] flex items-center justify-center text-[#A68B6A] shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1D1D1A]">
                      Dedicated Aftercare & Check-Ins
                    </h4>
                    <p className="text-xs text-[#6F6D67] font-light mt-0.5">
                      Direct post-treatment communication ensuring you feel completely supported through recovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-6">
                <button
                  id="about-meet-team-btn"
                  onClick={() => setActiveTab('team')}
                  className="group inline-flex items-center space-x-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#1D1D1A] hover:text-[#A68B6A] transition-colors pb-1 border-b border-[#1D1D1A] hover:border-[#A68B6A]"
                >
                  <span>Meet the team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  id="about-book-btn"
                  onClick={onOpenBooking}
                  className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#6F6D67] hover:text-[#1D1D1A] transition-colors"
                >
                  Schedule Visit
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Customizable Practitioner Placeholders */}
        {activeTab === 'team' && (
          <div className="space-y-8 text-left animate-in fade-in duration-500">
            {/* Demo Header Banner */}
            <div className="p-4 bg-[#F7F5F1] border border-[#DCD7CE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <Stethoscope className="w-5 h-5 text-[#A68B6A]" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1A]">
                    Practitioner Profile Placeholders
                  </span>
                  <p className="text-xs text-[#6F6D67] font-light">
                    Easily replace practitioner names, credentials, portraits, and clinical bios for your clinic.
                  </p>
                </div>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest bg-[#EEEAE3] px-2.5 py-1 text-[#6F6D67] border border-[#DCD7CE]">
                Editable Component
              </span>
            </div>

            {/* Practitioner Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practitionerPlaceholders.map((doc) => (
                <div
                  key={doc.id}
                  id={`practitioner-card-${doc.id}`}
                  className="bg-[#F7F5F1] border border-[#DCD7CE] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start text-left shadow-[0_8px_24px_rgba(23,23,21,0.04)]"
                >
                  {/* Photo */}
                  <div className="relative w-full sm:w-36 aspect-[3/4] sm:aspect-square overflow-hidden bg-[#EEEAE3] border border-[#DCD7CE] shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.placeholderTitle}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2 bg-[#171715]/80 px-2 py-0.5 text-[9px] uppercase font-mono text-white">
                      Placeholder
                    </div>
                  </div>

                  {/* Information */}
                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#A68B6A] uppercase font-semibold">
                        {doc.role}
                      </span>
                      <h3 className="font-serif text-2xl text-[#1D1D1A]">
                        {doc.placeholderTitle}
                      </h3>
                      <p className="text-xs text-[#6F6D67] italic mt-0.5">
                        {doc.credentialsPlaceholder}
                      </p>
                    </div>

                    <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                      {doc.bio}
                    </p>

                    <div className="pt-2 border-t border-[#DCD7CE]">
                      <span className="text-[10px] uppercase tracking-wider text-[#1D1D1A] font-medium block mb-1">
                        Focus Areas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {doc.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-[#EEEAE3] text-[10px] text-[#6F6D67] border border-[#DCD7CE]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-colors"
              >
                Request Practitioner Consultation
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
