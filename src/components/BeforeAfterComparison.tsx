import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  subtitle?: string;
  timeframe?: string;
  sessions?: string;
  clinicalNotes?: string;
  patientProfile?: string;
  aspectRatio?: string;
  showDetails?: boolean;
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  beforeImage,
  afterImage,
  title,
  subtitle,
  timeframe,
  sessions,
  clinicalNotes,
  patientProfile,
  aspectRatio = 'aspect-[4/3] sm:aspect-[16/10]',
  showDetails = true
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white border border-[#DCD7CE] shadow-sm overflow-hidden flex flex-col">
      {/* Visual Comparison Stage */}
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} overflow-hidden select-none cursor-ew-resize bg-[#EEEAE3]`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After Image (Full background) */}
        <img
          src={afterImage}
          alt={`After treatment - ${title}`}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          loading="lazy"
        />

        {/* After Label */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#171715]/85 backdrop-blur-sm border border-white/20 text-[#F7F5F1] text-[10px] uppercase tracking-[0.2em] font-semibold">
          After Results
        </div>

        {/* Before Image (Clipped layer) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={`Before treatment - ${title}`}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            loading="lazy"
          />
          {/* Before Label */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#171715]/85 backdrop-blur-sm border border-white/20 text-[#F7F5F1] text-[10px] uppercase tracking-[0.2em] font-semibold">
            Before
          </div>
        </div>

        {/* Draggable Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Central Handle Pill */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#171715] border-2 border-[#A68B6A] shadow-xl flex items-center justify-center text-white">
            <MoveHorizontal className="w-4 h-4 text-[#A68B6A]" />
          </div>
        </div>

        {/* Interactive Slider Input for full Keyboard / Screen Reader Accessibility */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          aria-label={`Before and after comparison slider for ${title}`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
        />

        {/* Subtle Hint Bar at bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[10px] text-white/90 uppercase tracking-wider pointer-events-none flex items-center space-x-1.5">
          <Sparkles className="w-3 h-3 text-[#A68B6A]" />
          <span>Drag or slide to compare</span>
        </div>
      </div>

      {/* Case Details & Medical Notes */}
      {showDetails && (
        <div className="p-6 bg-white space-y-3.5 border-t border-[#DCD7CE]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h4 className="font-serif text-lg text-[#1D1D1A] font-medium">
              {title}
            </h4>
            {timeframe && (
              <span className="text-[11px] font-medium text-[#A68B6A] uppercase tracking-wider">
                {timeframe}
              </span>
            )}
          </div>

          {(subtitle || patientProfile) && (
            <p className="text-xs text-[#6F6D67]">
              {patientProfile ? `Patient Case: ${patientProfile}` : subtitle}
            </p>
          )}

          {sessions && (
            <div className="inline-block px-2.5 py-1 bg-[#EEEAE3] text-[11px] text-[#1D1D1A] font-medium tracking-wide">
              Protocol: {sessions}
            </div>
          )}

          {clinicalNotes && (
            <p className="text-xs text-[#6F6D67] font-light leading-relaxed pt-1 border-t border-[#DCD7CE]/60">
              <strong className="text-[#1D1D1A] font-medium">Physician Note: </strong>
              {clinicalNotes}
            </p>
          )}

          <div className="pt-2 text-[10px] text-[#6F6D67]/80 italic">
            * Individual results may vary. Unretouched clinical documentation under standardized medical lighting.
          </div>
        </div>
      )}
    </div>
  );
};
