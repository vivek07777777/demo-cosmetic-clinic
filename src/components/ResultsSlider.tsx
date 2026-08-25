import React, { useState, useRef, useCallback } from 'react';
import { comparisonCases } from '../data/clinicData';
import { Sparkles, MoveHorizontal, Info } from 'lucide-react';

export const ResultsSlider: React.FC = () => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = comparisonCases[activeCaseIdx] || comparisonCases[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="results" className="py-24 sm:py-32 bg-[#F7F5F1] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                CLINICAL OUTCOMES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1A]">
              Results should still feel like you.
            </h2>
            <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              Experience the visual definition of subtle transformation—designed to highlight your inherent features with understated refinement.
            </p>
          </div>

          {/* Demo Disclaimer Badge */}
          <div className="text-left md:text-right">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#EEEAE3] border border-[#DCD7CE] text-[11px] text-[#6F6D67]">
              <Info className="w-3.5 h-3.5 text-[#A68B6A]" />
              <span className="font-mono tracking-wider uppercase font-semibold">DEMO IMAGES &bull; FOR DISPLAY ONLY</span>
            </div>
          </div>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {comparisonCases.map((c, idx) => (
            <button
              key={c.id}
              id={`results-case-tab-${idx}`}
              onClick={() => {
                setActiveCaseIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border flex items-center space-x-2 whitespace-nowrap ${
                activeCaseIdx === idx
                  ? 'bg-[#171715] text-[#F7F5F1] border-[#171715]'
                  : 'bg-[#F7F5F1] text-[#6F6D67] border-[#DCD7CE] hover:border-[#1D1D1A]'
              }`}
            >
              <span>0{idx + 1}</span>
              <span>{c.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Slider Canvas */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              id="before-after-slider-container"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#EEEAE3] border border-[#DCD7CE] shadow-[0_20px_40px_rgba(23,23,21,0.06)] select-none cursor-ew-resize"
            >
              {/* After Image (Full Base) */}
              <img
                src={currentCase.afterImage}
                alt={`${currentCase.title} After Result Demo`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt={`${currentCase.title} Before Result Demo`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />
              </div>

              {/* Vertical Dividing Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#171715] border-2 border-[#A68B6A] shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                  <MoveHorizontal className="w-4 h-4 text-[#A68B6A]" />
                </div>
              </div>

              {/* Badges: Before & After */}
              <div className="absolute bottom-4 left-4 bg-[#171715]/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#F7F5F1] border border-white/10 pointer-events-none">
                Before Demo
              </div>
              <div className="absolute bottom-4 right-4 bg-[#171715]/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#F7F5F1] border border-white/10 pointer-events-none">
                After Demo
              </div>

              {/* Floating watermark */}
              <div className="absolute top-4 right-4 bg-[#F7F5F1]/85 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase font-mono tracking-widest text-[#6F6D67] border border-[#DCD7CE] pointer-events-none">
                Interactive Slider • Drag Left/Right
              </div>
            </div>

            {/* Slider Range Control for keyboard/touch accessibility */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#6F6D67] font-mono">
              <span>BEFORE (0%)</span>
              <input
                id="accessible-slider-range"
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-1/2 accent-[#A68B6A] cursor-pointer"
                aria-label="Comparison slider position"
              />
              <span>AFTER (100%)</span>
            </div>
          </div>

          {/* Right Column: Case Details */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="p-6 bg-[#EEEAE3] border border-[#DCD7CE] space-y-4">
              <div className="flex items-center space-x-2 text-[#A68B6A]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-mono uppercase tracking-widest">Protocol Case Study</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#1D1D1A]">
                  {currentCase.title}
                </h3>
                <p className="text-xs text-[#6F6D67] mt-1 font-light">
                  {currentCase.subtitle}
                </p>
              </div>

              <div className="space-y-2 py-3 border-y border-[#DCD7CE] text-xs">
                <div className="flex justify-between">
                  <span className="text-[#6F6D67]">Focus Area:</span>
                  <span className="font-medium text-[#1D1D1A]">{currentCase.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6F6D67]">Observation Timeframe:</span>
                  <span className="font-medium text-[#1D1D1A]">{currentCase.timeframe}</span>
                </div>
              </div>

              <p className="text-xs text-[#6F6D67] font-light leading-relaxed">
                {currentCase.note}
              </p>

              <div className="pt-2 text-[10px] text-[#6F6D67]/80 italic">
                * Individual responses and timelines vary. All protocols require clinical consultation.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
