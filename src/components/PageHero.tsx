import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  badge?: string;
  headline: string;
  supportingText: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  breadcrumbs?: { label: string; href?: string }[];
  heightClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  headline,
  supportingText,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  breadcrumbs,
  heightClass = 'min-h-[44vh] sm:min-h-[48vh]'
}) => {
  return (
    <section className={`relative w-full ${heightClass} flex items-center justify-center overflow-hidden pt-28 pb-16`}>
      {/* Background Image with Object Cover */}
      <img
        src={backgroundImage}
        alt={headline}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dual Gradient Overlay: Darkening for text contrast + subtle warm clinical tint */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(18, 20, 23, 0.72) 0%, rgba(24, 26, 29, 0.58) 50%, rgba(23, 23, 21, 0.88) 100%)'
        }}
      />

      {/* Subtle architectural grain / line border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/15" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center text-[#F7F5F1] space-y-4">
        
        {/* Optional Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#DCD7CE]/80 mb-2">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3 h-3 text-[#A68B6A]" />}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#A68B6A] font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Optional Eyebrow / Badge */}
        {badge && (
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#A68B6A] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
            <span>{badge}</span>
          </div>
        )}

        {/* Short, reassuring headline (5-8 words) */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F7F5F1] tracking-tight font-normal leading-[1.15] max-w-3xl mx-auto">
          {headline}
        </h1>

        {/* One supporting sentence */}
        <p className="text-sm sm:text-base md:text-lg text-[#DCD7CE] font-light max-w-2xl mx-auto leading-relaxed">
          {supportingText}
        </p>

        {/* Action Button(s) */}
        {(ctaText || secondaryCtaText) && (
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="px-6 sm:px-7 py-3 bg-[#A68B6A] text-[#171715] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 shadow-lg"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                to={secondaryCtaLink}
                className="px-6 sm:px-7 py-3 bg-white/10 hover:bg-white/20 text-[#F7F5F1] border border-white/25 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 backdrop-blur-sm"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
