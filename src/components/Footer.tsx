import React from 'react';
import { Link } from 'react-router-dom';
import { ClinicConfig } from '../types';
import { Instagram, Facebook, Linkedin, ArrowUp, MapPin, Mail, Phone, ShieldCheck, Clock } from 'lucide-react';

interface FooterProps {
  clinic: ClinicConfig;
}

export const Footer: React.FC<FooterProps> = ({ clinic }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#171715] text-[#F7F5F1] border-t border-white/10 pt-20 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Mission Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif tracking-[0.22em] text-2xl font-medium text-[#F7F5F1] uppercase">
                  COSMETIC
                </span>
                <span className="font-serif tracking-[0.22em] text-2xl font-light text-[#A68B6A] uppercase">
                  AESTHETICS
                </span>
              </div>
              <span className="text-[9px] tracking-[0.35em] text-[#A68B6A] uppercase font-semibold block mt-0.5">
                BOARD-CERTIFIED DERMATOLOGY & MEDICINE
              </span>
            </div>

            <p className="font-serif italic text-base text-[#DCD7CE] max-w-sm leading-snug">
              Modern aesthetic medicine. <br />
              Guided by science, restrained by art.
            </p>

            <p className="text-xs text-[#9B9890] font-light max-w-sm leading-relaxed">
              Our physician-led practice is dedicated to delivering natural, harmonious facial rejuvenation, restorative laser therapies, and healthy aging protocols.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-[#A68B6A]">
              <ShieldCheck className="w-4 h-4 text-[#A68B6A] shrink-0" />
              <span>Full Medical Director Supervision on Premises</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A68B6A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9B9890]">
              <li>
                <Link to="/" className="hover:text-[#F7F5F1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-[#F7F5F1] transition-colors">
                  All Treatments
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F7F5F1] transition-colors">
                  About Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F7F5F1] transition-colors">
                  Before & After Results
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F7F5F1] transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A68B6A]">
              Key Clinical Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9B9890]">
              <li>
                <Link to="/treatments/botox-neuromodulators" className="hover:text-[#F7F5F1] transition-colors">
                  Neuromodulators (Botox & Dysport)
                </Link>
              </li>
              <li>
                <Link to="/treatments/dermal-fillers" className="hover:text-[#F7F5F1] transition-colors">
                  Dermal Fillers & Biostimulators
                </Link>
              </li>
              <li>
                <Link to="/treatments/laser-resurfacing" className="hover:text-[#F7F5F1] transition-colors">
                  Sciton® Halo™ Fractional Laser
                </Link>
              </li>
              <li>
                <Link to="/treatments/rf-microneedling" className="hover:text-[#F7F5F1] transition-colors">
                  Morpheus8® RF Microneedling
                </Link>
              </li>
              <li>
                <Link to="/treatments/chemical-peels" className="hover:text-[#F7F5F1] transition-colors">
                  Clinical Chemical Peels
                </Link>
              </li>
              <li>
                <Link to="/treatments/body-regenerative" className="hover:text-[#F7F5F1] transition-colors">
                  Non-Surgical Body Sculpting
                </Link>
              </li>
            </ul>
          </div>

          {/* Location, Hours & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A68B6A]">
              Clinic & Concierge
            </h4>
            
            <div className="space-y-3 text-xs text-[#9B9890] font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#A68B6A] shrink-0 mt-0.5" />
                <span>{clinic.address}, {clinic.city}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#A68B6A] shrink-0" />
                <a href={`tel:${clinic.phone}`} className="hover:text-[#F7F5F1] transition-colors font-mono">
                  {clinic.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#A68B6A] shrink-0" />
                <a href={`mailto:${clinic.email}`} className="hover:text-[#F7F5F1] transition-colors">
                  {clinic.email}
                </a>
              </div>
              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#A68B6A] shrink-0 mt-0.5" />
                <span>{clinic.operatingHours}</span>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-2">
              <div className="flex space-x-3">
                <a
                  href={clinic.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-[#9B9890] hover:text-[#F7F5F1] hover:border-white/30 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={clinic.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-[#9B9890] hover:text-[#F7F5F1] hover:border-white/30 transition-colors"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={clinic.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-[#9B9890] hover:text-[#F7F5F1] hover:border-white/30 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Medical Disclaimers & Regulatory Notice */}
        <div className="py-8 border-b border-white/10 text-[11px] text-[#6F6D67] space-y-2 leading-relaxed font-light">
          <p>
            <strong className="text-[#DCD7CE] font-medium">Medical Notice:</strong> The information provided on this website is for general educational and informational purposes only and does not constitute formal medical diagnosis, prognosis, or medical advice. All cosmetic treatments, prescription therapies, and minimally invasive procedures require an individualized in-person clinical consultation with a licensed medical practitioner to determine candidacy.
          </p>
          <p>
            <strong className="text-[#DCD7CE] font-medium">Results Disclaimer:</strong> Individual results may vary depending on patient age, anatomical presentation, skin condition, metabolic rate, and post-procedure compliance. Unretouched photographs represent real patients under standardized clinical lighting.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9B9890]">
          <div>
            <p>© {new Date().getFullYear()} {clinic.name}. All Rights Reserved.</p>
            <p className="text-[10px] text-[#6F6D67] mt-0.5">
              Board-Certified Medical Aesthetics • AAAASF Compliant Facility Standards
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#9B9890] hover:text-[#F7F5F1] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
