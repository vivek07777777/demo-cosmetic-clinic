import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ConsultationCTAProps {
  onOpenBooking: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-[#171715] text-[#F7F5F1] relative overflow-hidden text-center">
      {/* Subtle architectural lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full border-x border-white/20 flex justify-center">
          <div className="w-px h-full bg-white/20" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/5 border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#A68B6A]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#A68B6A] uppercase">
            BEGIN YOUR JOURNEY
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F7F5F1] leading-tight">
          Ready to make it <br />
          <span className="italic text-[#A68B6A] font-light">personal?</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#6F6D67] font-light max-w-xl mx-auto leading-relaxed">
          Begin with a consultation designed around your goals. We take the time to evaluate, listen, and build a treatment plan tailored specifically to you.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col items-center space-y-4">
          <button
            id="cta-book-consultation-btn"
            onClick={onOpenBooking}
            className="group px-9 py-4 bg-[#A68B6A] text-[#171715] text-xs sm:text-sm uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-[#F7F5F1] hover:shadow-2xl active:scale-98 flex items-center space-x-3"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <p className="text-xs text-[#6F6D67] tracking-wider uppercase font-light">
            No commitment. Just a conversation.
          </p>
        </div>

      </div>
    </section>
  );
};
