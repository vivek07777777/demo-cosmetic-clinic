import React from 'react';
import { ClinicConfig } from '../types';
import { Instagram, Facebook, Linkedin, ArrowUp, Sparkles, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  clinic: ClinicConfig;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ clinic, onOpenCustomizer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#171715] text-[#F7F5F1] border-t border-white/10 pt-20 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif tracking-[0.22em] text-2xl font-medium text-[#F7F5F1] uppercase block">
                {clinic.name.split(' ')[0] || 'COSMETIC'}
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#A68B6A] uppercase font-medium block -mt-1">
                {clinic.name.split(' ').slice(1).join(' ') || 'AESTHETICS'}
              </span>
            </div>

            <p className="font-serif italic text-base sm:text-lg text-[#6F6D67] max-w-sm">
              Modern aesthetics. <br />
              Thoughtfully considered.
            </p>

            <p className="text-xs text-[#6F6D67] font-light max-w-sm leading-relaxed">
              A general-purpose demo website designed for luxury aesthetic medicine, medical spas, and cosmetic clinics.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenCustomizer}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/5 border border-white/15 text-[11px] text-[#A68B6A] uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demo Configuration Settings</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A68B6A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6F6D67]">
              {['Home', 'Treatments', 'The Approach', 'Results', 'About', 'Journal', 'Booking'].map((item) => {
                const id = item.toLowerCase().replace(/\s+/g, '-');
                const href = `#${id === 'booking' ? 'booking' : id === 'the-approach' ? 'approach' : id}`;
                return (
                  <li key={item}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(href);
                      }}
                      className="hover:text-[#F7F5F1] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Demo Location & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A68B6A]">
              Demo Information
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#6F6D67] font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#A68B6A] shrink-0 mt-0.5" />
                <span>{clinic.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#A68B6A] shrink-0" />
                <a href={`mailto:${clinic.email}`} className="hover:text-[#F7F5F1] transition-colors">
                  {clinic.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#A68B6A] shrink-0" />
                <span>{clinic.phone}</span>
              </div>
            </div>

            {/* Social placeholder links */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-[#6F6D67] block mb-2">
                Social Profiles (Demo Links)
              </span>
              <div className="flex space-x-3">
                <a
                  href={clinic.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-[#6F6D67] hover:text-[#F7F5F1] hover:border-white/30 transition-colors"
                  aria-label="Instagram Demo Link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={clinic.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-[#6F6D67] hover:text-[#F7F5F1] hover:border-white/30 transition-colors"
                  aria-label="Facebook Demo Link"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={clinic.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-[#6F6D67] hover:text-[#F7F5F1] hover:border-white/30 transition-colors"
                  aria-label="LinkedIn Demo Link"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F6D67]">
          <div>
            <p>© 2026 {clinic.name} — Demo Website Concept</p>
            <p className="text-[10px] text-[#6F6D67]/70 mt-0.5">
              Built as a customizable web design demonstration for cosmetic clinics & aesthetic medicine practices.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#6F6D67] hover:text-[#F7F5F1] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
