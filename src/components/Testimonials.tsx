import React, { useState, useEffect } from 'react';
import { demoTestimonials } from '../data/clinicData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = demoTestimonials.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const current = demoTestimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-[#F7F5F1] relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Section Eyebrow */}
        <div className="inline-flex items-center space-x-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
          <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
            DEMO CLIENT EXPERIENCES
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1A] mb-12">
          Reflections on care.
        </h2>

        {/* Testimonial Box with Smooth Transitions */}
        <div className="relative min-h-[260px] sm:min-h-[220px] flex items-center justify-center">
          <div
            key={current.id}
            className="space-y-6 transition-all duration-700 ease-out animate-in fade-in"
          >
            {/* Subtle quote icon */}
            <div className="flex justify-center">
              <Quote className="w-8 h-8 text-[#A68B6A]/50 rotate-180" />
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#A68B6A] text-[#A68B6A]" />
              ))}
            </div>

            {/* Main Quote */}
            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#1D1D1A] max-w-3xl mx-auto leading-relaxed font-normal">
              "{current.quote}"
            </blockquote>

            {/* Client Attribution */}
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.22em] font-medium text-[#1D1D1A]">
                — {current.clientType}
              </p>
              <p className="text-[11px] font-mono text-[#6F6D67] uppercase tracking-wider">
                Experience Note: {current.treatment}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls & Progress Indicator */}
        <div className="mt-12 flex items-center justify-center space-x-6">
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="p-3 rounded-full border border-[#DCD7CE] hover:border-[#1D1D1A] hover:bg-[#EEEAE3] transition-colors text-[#1D1D1A]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots & Progress Bar */}
          <div className="flex items-center space-x-2.5">
            {demoTestimonials.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-1.5 bg-[#A68B6A]'
                    : 'w-1.5 h-1.5 bg-[#DCD7CE] hover:bg-[#6F6D67]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="p-3 rounded-full border border-[#DCD7CE] hover:border-[#1D1D1A] hover:bg-[#EEEAE3] transition-colors text-[#1D1D1A]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle Bottom Note */}
        <div className="mt-8 text-[11px] text-[#6F6D67]/80 font-light italic">
          * Demo client quotes created for website presentation and customizable for your clinic's authentic feedback.
        </div>

      </div>
    </section>
  );
};
