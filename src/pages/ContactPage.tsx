import React, { useState } from 'react';
import { ClinicConfig, BookingFormData } from '../types';
import { treatmentsData, practitioners } from '../data/clinicData';
import { PageHero } from '../components/PageHero';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Car
} from 'lucide-react';

interface ContactPageProps {
  clinic: ClinicConfig;
}

export const ContactPage: React.FC<ContactPageProps> = ({ clinic }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredPractitioner: 'No Preference / First Available',
    treatmentInterest: treatmentsData[0].title,
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    previousAestheticHistory: 'First-time patient at this clinic',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clinical dispatch processing
    setTimeout(() => {
      const randomRef = 'CA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#F7F5F1] text-[#1D1D1A]">
      
      {/* 1. Distinct Hero Section (40-50vh) */}
      <PageHero
        badge="Appointments & Consultations"
        headline="Begin Your Personal Aesthetic Consultation"
        supportingText="Schedule an unhurried clinical assessment with our board-certified physicians in our San Francisco practice."
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85"
        ctaText="Book Online Below"
        ctaLink="#booking-form-anchor"
        secondaryCtaText={`Call ${clinic.phone}`}
        secondaryCtaLink={`tel:${clinic.phone}`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact & Location' }
        ]}
      />

      {/* 2. Main Consultation Booking Section */}
      <section id="booking-form-anchor" className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#DCD7CE] shadow-sm p-8 sm:p-10 space-y-8">
              
              <div className="space-y-2 border-b border-[#DCD7CE] pb-6">
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A68B6A] font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Confidential Intake</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1D1A] font-medium">
                  Request Your Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed">
                  Please provide your details below. Our patient concierge will contact you within 24 business hours to confirm your appointment time.
                </p>
              </div>

              {isSubmitted ? (
                /* Success State */
                <div className="p-8 bg-[#FDFBF7] border border-[#A68B6A]/40 text-center space-y-5 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#A68B6A]/15 text-[#A68B6A] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase font-mono tracking-widest text-[#A68B6A]">
                      Consultation Request Received
                    </span>
                    <h3 className="font-serif text-2xl text-[#1D1D1A] font-medium">
                      Thank You, {formData.fullName}
                    </h3>
                    <p className="text-xs text-[#6F6D67] max-w-md mx-auto leading-relaxed font-light">
                      Your appointment request has been logged under Reference ID: <strong className="font-mono text-[#1D1D1A]">{bookingRef}</strong>.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#DCD7CE] text-xs text-[#1D1D1A] text-left space-y-2 max-w-md mx-auto">
                    <div><strong>Selected Treatment:</strong> {formData.treatmentInterest}</div>
                    <div><strong>Practitioner Preference:</strong> {formData.preferredPractitioner}</div>
                    <div><strong>Preferred Time:</strong> {formData.preferredTime}</div>
                  </div>

                  <p className="text-xs text-[#6F6D67] font-light max-w-md mx-auto">
                    Our concierge coordinator will call or email you at <strong className="text-[#1D1D1A]">{formData.email}</strong> to finalize paperwork and calendar slot.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-widest font-medium hover:bg-[#A68B6A] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Interactive Booking Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="eleanor@example.com"
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      />
                    </div>
                  </div>

                  {/* Phone & Practitioner */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (415) 000-0000"
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="preferredPractitioner" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Preferred Practitioner
                      </label>
                      <select
                        id="preferredPractitioner"
                        name="preferredPractitioner"
                        value={formData.preferredPractitioner}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      >
                        <option value="No Preference / First Available">No Preference / First Available</option>
                        {practitioners.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.title})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Treatment of Interest & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="treatmentInterest" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Treatment of Interest
                      </label>
                      <select
                        id="treatmentInterest"
                        name="treatmentInterest"
                        value={formData.treatmentInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      >
                        <option value="General Facial Assessment">General Facial Assessment & Roadmap</option>
                        {treatmentsData.map((t) => (
                          <option key={t.id} value={t.title}>
                            {t.title} ({t.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="preferredDate" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Target Date Preference
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      />
                    </div>
                  </div>

                  {/* Time Window & Aesthetic History */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="preferredTime" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Preferred Time of Day
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      >
                        <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                        <option value="Midday (12:00 PM – 3:00 PM)">Midday (12:00 PM – 3:00 PM)</option>
                        <option value="Late Afternoon (3:00 PM – 6:00 PM)">Late Afternoon (3:00 PM – 6:00 PM)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="previousAestheticHistory" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                        Aesthetic Experience
                      </label>
                      <select
                        id="previousAestheticHistory"
                        name="previousAestheticHistory"
                        value={formData.previousAestheticHistory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A]"
                      >
                        <option value="First-time patient at this clinic">First-time patient (Never had cosmetic procedures)</option>
                        <option value="Experienced with injectables/lasers">Experienced with aesthetic procedures elsewhere</option>
                        <option value="Returning patient">Returning patient at Cosmetic Aesthetics</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Aesthetic Goals */}
                  <div className="space-y-1.5">
                    <label htmlFor="notes" className="text-xs uppercase tracking-wider font-medium text-[#1D1D1A] block">
                      Aesthetic Goals or Specific Concerns (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Interested in addressing forehead lines while keeping natural movement; inquiring about downtime before an event next month."
                      className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#DCD7CE] focus:border-[#1D1D1A] focus:outline-none text-xs sm:text-sm text-[#1D1D1A] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#171715] hover:bg-[#A68B6A] text-[#F7F5F1] text-xs uppercase tracking-[0.22em] font-semibold transition-colors duration-300 shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? 'Transmitting Request...' : 'Confirm Consultation Request'}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#6F6D67] text-center font-light">
                    * {clinic.consultationFee}
                  </p>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Clinic Information, Map & Policies (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="p-8 bg-white border border-[#DCD7CE] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl text-[#1D1D1A] font-medium border-b border-[#DCD7CE] pb-4">
                Clinic Concierge & Location
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#6F6D67] font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#A68B6A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#1D1D1A] font-medium block">Address:</strong>
                    <span>{clinic.address}</span>
                    <span className="block">{clinic.city}</span>
                    <span className="text-[11px] text-[#A68B6A] block mt-0.5 font-normal">
                      Located inside the historic 450 Sutter Medical-Dental Building
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#A68B6A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#1D1D1A] font-medium block">Concierge Telephone:</strong>
                    <a href={`tel:${clinic.phone}`} className="text-[#1D1D1A] hover:text-[#A68B6A] font-mono">
                      {clinic.phone}
                    </a>
                    <span className="text-[11px] text-[#6F6D67] block">Direct physician line available for post-procedure patients</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#A68B6A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#1D1D1A] font-medium block">Email Inquiries:</strong>
                    <a href={`mailto:${clinic.email}`} className="text-[#1D1D1A] hover:text-[#A68B6A]">
                      {clinic.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#A68B6A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#1D1D1A] font-medium block">Operating Hours:</strong>
                    <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                    <span className="block text-[11px] text-[#6F6D67]">Sunday: Closed (Emergency on-call coverage for active post-ops)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Visual Map Card */}
            <div className="p-6 bg-white border border-[#DCD7CE] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1A]">
                  Directions & Parking
                </span>
                <Car className="w-4 h-4 text-[#A68B6A]" />
              </div>

              {/* Graphical architectural representation of location */}
              <div className="relative aspect-[16/9] bg-[#EEEAE3] border border-[#DCD7CE] overflow-hidden flex items-center justify-center text-center p-4">
                <img
                  src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=85"
                  alt="Sutter Street San Francisco"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 border border-[#DCD7CE] shadow-md max-w-xs">
                  <span className="font-serif text-sm font-semibold text-[#1D1D1A] block">
                    450 Sutter Medical Center
                  </span>
                  <span className="text-[11px] text-[#6F6D67] block mt-0.5">
                    Suite 1800 (18th Floor)
                  </span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-[10px] uppercase tracking-wider font-semibold text-[#A68B6A] hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                Valet parking is available directly within the 450 Sutter garage. Alternatively, the Sutter-Stockton Garage is located one block away.
              </p>
            </div>

            {/* Consultation Policies & Expectation */}
            <div className="p-6 bg-[#EEEAE3] border border-[#DCD7CE] space-y-3">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#1D1D1A]">
                <ShieldCheck className="w-4 h-4 text-[#A68B6A]" />
                <span>Consultation Policy</span>
              </div>
              <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                <strong>Fee Credit:</strong> Our comprehensive medical assessment fee ($100) is credited 100% toward any treatment performed or scheduled within 90 days.
              </p>
              <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                <strong>Cancellation Courtesy:</strong> We kindly request at least 48 hours notice for cancellations or rescheduling to offer the dedicated appointment slot to patients on our waitlist.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
