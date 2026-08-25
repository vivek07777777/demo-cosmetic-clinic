import React, { useState, useEffect } from 'react';
import { BookingFormData, ClinicConfig } from '../types';
import { CheckCircle2, Calendar, Clock, Sparkles, Send, RefreshCw } from 'lucide-react';
import { treatmentsData } from '../data/clinicData';

interface ConsultationFormProps {
  clinic: ClinicConfig;
  initialTreatment?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  clinic,
  initialTreatment = '',
  isModal = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    treatmentInterest: initialTreatment || 'General Aesthetic Consultation',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatmentInterest: initialTreatment }));
    }
  }, [initialTreatment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      treatmentInterest: 'General Aesthetic Consultation',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      notes: ''
    });
  };

  return (
    <div
      id="booking"
      className={`${isModal ? 'p-0' : 'py-24 sm:py-32 bg-[#F7F5F1] border-t border-[#DCD7CE]'}`}
    >
      <div className={`${isModal ? 'w-full' : 'max-w-4xl mx-auto px-6 sm:px-8'}`}>
        
        {/* Section Heading (if on-page) */}
        {!isModal && (
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                RESERVE YOUR TIME
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1A]">
              Request a Consultation
            </h2>
            <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              Complete the form below to initiate your 1-on-1 personalized assessment with our clinical team.
            </p>
          </div>
        )}

        <div className="bg-[#EEEAE3]/80 border border-[#DCD7CE] p-6 sm:p-10 shadow-[0_16px_36px_rgba(23,23,21,0.04)] text-left">
          
          {isSubmitted && submittedData ? (
            /* Polished Demo Success Confirmation */
            <div className="space-y-6 text-center py-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 rounded-full bg-[#A68B6A]/15 text-[#A68B6A] flex items-center justify-center mx-auto border border-[#A68B6A]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-[#A68B6A] uppercase font-semibold">
                  DEMO REQUEST CONFIRMED
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1A]">
                  Thank you, {submittedData.fullName || 'Valued Guest'}.
                </h3>
                <p className="text-sm text-[#6F6D67] max-w-md mx-auto font-light leading-relaxed">
                  Your consultation request has been received. In a live deployment, our clinical concierge would contact you via phone or email to confirm your preferred appointment slot.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-5 bg-[#F7F5F1] border border-[#DCD7CE] text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#DCD7CE]/60 pb-2">
                  <span className="text-[#6F6D67]">Selected Care:</span>
                  <span className="font-medium text-[#1D1D1A]">{submittedData.treatmentInterest}</span>
                </div>
                <div className="flex justify-between border-b border-[#DCD7CE]/60 pb-2">
                  <span className="text-[#6F6D67]">Requested Date:</span>
                  <span className="font-medium text-[#1D1D1A]">{submittedData.preferredDate || 'Flexible / Next Available'}</span>
                </div>
                <div className="flex justify-between border-b border-[#DCD7CE]/60 pb-2">
                  <span className="text-[#6F6D67]">Preferred Window:</span>
                  <span className="font-medium text-[#1D1D1A]">{submittedData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6F6D67]">Contact Email:</span>
                  <span className="font-medium text-[#1D1D1A]">{submittedData.email || 'Provided'}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  id="reset-booking-form-btn"
                  onClick={handleReset}
                  className="px-6 py-3 border border-[#1D1D1A]/40 text-[#1D1D1A] text-xs uppercase tracking-widest hover:bg-[#F7F5F1] transition-colors flex items-center space-x-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Request</span>
                </button>

                {isModal && onCloseModal && (
                  <button
                    onClick={onCloseModal}
                    className="px-6 py-3 bg-[#171715] text-white text-xs uppercase tracking-widest hover:bg-[#A68B6A] transition-colors"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#F7F5F1] border border-[#DCD7CE] focus:border-[#A68B6A] focus:outline-none text-sm text-[#1D1D1A] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#F7F5F1] border border-[#DCD7CE] focus:border-[#A68B6A] focus:outline-none text-sm text-[#1D1D1A] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="e.g. +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#F7F5F1] border border-[#DCD7CE] focus:border-[#A68B6A] focus:outline-none text-sm text-[#1D1D1A] transition-colors"
                  />
                </div>

                {/* Treatment Interest */}
                <div className="space-y-2">
                  <label
                    htmlFor="treatmentInterest"
                    className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium"
                  >
                    Treatment Interest
                  </label>
                  <select
                    id="treatmentInterest"
                    value={formData.treatmentInterest}
                    onChange={(e) => setFormData({ ...formData, treatmentInterest: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#F7F5F1] border border-[#DCD7CE] focus:border-[#A68B6A] focus:outline-none text-sm text-[#1D1D1A] transition-colors"
                  >
                    <option value="General Aesthetic Consultation">General Aesthetic Consultation (1-on-1)</option>
                    {treatmentsData.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.category}: {t.title}
                      </option>
                    ))}
                    <option value="Skin Health & Barrier Assessment">Skin Health & Barrier Assessment</option>
                    <option value="Other / Unsure">Other / Unsure (Discuss in Consultation)</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium"
                  >
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#F7F5F1] border border-[#DCD7CE] focus:border-[#A68B6A] focus:outline-none text-sm text-[#1D1D1A] transition-colors"
                    />
                  </div>
                </div>

                {/* Preferred Time Window */}
                <div className="space-y-2">
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium"
                  >
                    Preferred Time Slot
                  </label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#F7F5F1] border border-[#DCD7CE] focus:border-[#A68B6A] focus:outline-none text-sm text-[#1D1D1A] transition-colors"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM - 6:30 PM)</option>
                  </select>
                </div>

              </div>

              {/* Message / Goals */}
              <div className="space-y-2">
                <label
                  htmlFor="notes"
                  className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium"
                >
                  Specific Goals or Questions (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Tell us what you would like to discuss or any questions you have regarding your skin or treatments..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F7F5F1] border border-[#DCD7CE] focus:border-[#A68B6A] focus:outline-none text-sm text-[#1D1D1A] transition-colors resize-none"
                />
              </div>

              {/* Privacy and demo disclaimer */}
              <div className="flex items-start space-x-2 text-[11px] text-[#6F6D67] font-light">
                <Sparkles className="w-3.5 h-3.5 text-[#A68B6A] shrink-0 mt-0.5" />
                <span>
                  Consultations are confidential and conducted in private treatment suites. No medical records are stored by this demo website.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  id="submit-consultation-form-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-all duration-300 flex items-center justify-center space-x-3 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <span>Request Consultation</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
