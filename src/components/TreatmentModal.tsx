import React from 'react';
import { X, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { TreatmentItem } from '../types';

interface TreatmentModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment
}) => {
  if (!treatment) return null;

  return (
    <div
      id="treatment-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171715]/75 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F7F5F1] border border-[#DCD7CE] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD7CE] bg-[#EEEAE3]">
          <div className="flex items-center space-x-2.5">
            <span className="text-[11px] font-mono text-[#A68B6A] font-medium tracking-wider">
              {treatment.number}
            </span>
            <span className="h-3 w-px bg-[#DCD7CE]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#6F6D67] font-semibold">
              {treatment.category}
            </span>
          </div>
          <button
            id="close-treatment-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#6F6D67] hover:text-[#1D1D1A] hover:bg-[#DCD7CE]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Image & Title Preview */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#171715] border border-[#DCD7CE]">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] tracking-widest text-[#A68B6A] uppercase font-semibold">
                  Demo Treatment Overview
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  {treatment.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Treatment Narrative Description */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A]">
              Treatment Overview
            </h4>
            <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Quick Fact Metrics */}
          <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#DCD7CE] bg-[#EEEAE3]/40 p-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#A68B6A]" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#6F6D67]">Typical Duration</span>
                <span className="text-xs sm:text-sm font-medium text-[#1D1D1A]">{treatment.duration}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-[#A68B6A]" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#6F6D67]">Downtime</span>
                <span className="text-xs sm:text-sm font-medium text-[#1D1D1A]">{treatment.downtime}</span>
              </div>
            </div>
          </div>

          {/* Suitable For List */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A]">
              Ideal Candidates & Focus Areas
            </h4>
            <ul className="space-y-2">
              {treatment.suitableFor.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-[#6F6D67]">
                  <Check className="w-3.5 h-3.5 text-[#A68B6A] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Demo Disclaimer Note */}
          <div className="p-3 bg-[#EEEAE3] border-l-2 border-[#A68B6A] text-[11px] text-[#6F6D67]">
            <span className="font-semibold text-[#1D1D1A]">Demo Template Notice:</span> This is a customizable treatment sample. Treatment descriptions, parameters, and pricing can be updated in clinic configuration.
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#EEEAE3] border-t border-[#DCD7CE] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-[#6F6D67] hover:text-[#1D1D1A] transition-colors"
          >
            Close
          </button>
          <button
            id="modal-book-this-treatment-btn"
            onClick={() => {
              onBookTreatment(treatment.title);
              onClose();
            }}
            className="px-5 py-2.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#A68B6A] transition-colors flex items-center space-x-2"
          >
            <span>Book Consultation For This</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
