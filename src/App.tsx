import React, { useState, useEffect } from 'react';
import { initialClinicConfig } from './data/clinicData';
import { ClinicConfig, TreatmentItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Philosophy } from './components/Philosophy';
import { Treatments } from './components/Treatments';
import { TreatmentModal } from './components/TreatmentModal';
import { FeaturedTreatment } from './components/FeaturedTreatment';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ResultsSlider } from './components/ResultsSlider';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Journal } from './components/Journal';
import { ConsultationCTA } from './components/ConsultationCTA';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { DemoCustomizerModal } from './components/DemoCustomizerModal';
import { X } from 'lucide-react';

export default function App() {
  const [clinic, setClinic] = useState<ClinicConfig>(initialClinicConfig);
  const [accentColor, setAccentColor] = useState('#A68B6A');
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [prefilledTreatment, setPrefilledTreatment] = useState('');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Update dynamic CSS variable when accentColor changes
  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', accentColor);
  }, [accentColor]);

  const handleOpenBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setPrefilledTreatment(treatmentName);
    } else {
      setPrefilledTreatment('General Aesthetic Consultation');
    }
    setIsBookingModalOpen(true);
  };

  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F1] text-[#1D1D1A] flex flex-col relative font-sans selection:bg-[#A68B6A]/20 selection:text-[#1D1D1A]">
      
      {/* 1. Header & Navigation */}
      <Navbar
        clinic={clinic}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          clinic={clinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Philosophy & The Approach */}
        <Philosophy
          onLearnMore={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Treatment Menu & Categories */}
        <Treatments
          onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          onBookTreatment={(title) => handleOpenBooking(title)}
        />

        {/* 6. Featured Treatment Editorial Showcase */}
        <FeaturedTreatment
          onExplore={() => {
            const el = document.getElementById('treatments');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onBook={() => handleOpenBooking('Skin, reimagined Protocol')}
        />

        {/* 7. Why Choose Us (Dark Section) */}
        <WhyChooseUs />

        {/* 8. Before / After Demo Results Comparison Slider */}
        <ResultsSlider />

        {/* 9. About The Practice & Practitioner Placeholders */}
        <About
          clinic={clinic}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 10. Testimonials (Demo Client Experiences) */}
        <Testimonials />

        {/* 11. From The Journal (Editorial Insights) */}
        <Journal />

        {/* 12. Final Consultation CTA (Dark Section) */}
        <ConsultationCTA
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 13. On-Page Consultation Booking Form */}
        <ConsultationForm
          clinic={clinic}
          initialTreatment={prefilledTreatment}
        />

      </main>

      {/* 14. Luxury Footer */}
      <Footer
        clinic={clinic}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Treatment In-Depth Detail Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
      />

      {/* Interactive Booking Modal Dialog */}
      {isBookingModalOpen && (
        <div
          id="booking-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171715]/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsBookingModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#F7F5F1] border border-[#DCD7CE] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD7CE] bg-[#EEEAE3]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#A68B6A]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A]">
                  Reserve A Consultation • {clinic.name}
                </span>
              </div>
              <button
                id="close-booking-modal-btn"
                onClick={() => setIsBookingModalOpen(false)}
                className="p-1.5 text-[#6F6D67] hover:text-[#1D1D1A] transition-colors"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6">
              <ConsultationForm
                clinic={clinic}
                initialTreatment={prefilledTreatment}
                isModal={true}
                onCloseModal={() => setIsBookingModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Agency Sales Demo Customizer Modal */}
      <DemoCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        clinic={clinic}
        onUpdateClinic={(updated) => setClinic(updated)}
        accentColor={accentColor}
        onUpdateAccentColor={(color) => setAccentColor(color)}
      />

    </div>
  );
}
