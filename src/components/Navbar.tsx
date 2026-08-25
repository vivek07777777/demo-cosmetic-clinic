import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { ClinicConfig } from '../types';

interface NavbarProps {
  clinic: ClinicConfig;
  onOpenBooking: () => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  clinic,
  onOpenBooking,
  onOpenCustomizer
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'treatments', 'approach', 'results', 'about', 'journal', 'booking'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Treatments', href: '#treatments', id: 'treatments' },
    { name: 'The Approach', href: '#approach', id: 'approach' },
    { name: 'Results', href: '#results', id: 'results' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Journal', href: '#journal', id: 'journal' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#F7F5F1]/90 backdrop-blur-md border-b border-[#DCD7CE] shadow-[0_2px_12px_rgba(23,23,21,0.04)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo / Clinic Name */}
          <a
            href="#home"
            id="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex flex-col text-left transition-transform duration-300 active:scale-98"
          >
            <span className="font-serif tracking-[0.22em] text-lg sm:text-xl font-medium text-[#1D1D1A] group-hover:text-[#A68B6A] transition-colors uppercase">
              {clinic.name.split(' ')[0] || 'COSMETIC'}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#6F6D67] -mt-1 uppercase font-medium">
              {clinic.name.split(' ').slice(1).join(' ') || 'AESTHETICS'}
            </span>
          </a>

          {/* Desktop Navigation Center */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-[13px] font-medium tracking-wider uppercase transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#1D1D1A]'
                      : 'text-[#6F6D67] hover:text-[#1D1D1A]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#A68B6A] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <button
              id="nav-customizer-btn"
              onClick={onOpenCustomizer}
              className="px-3.5 py-2 text-xs uppercase tracking-widest text-[#6F6D67] hover:text-[#1D1D1A] border border-[#DCD7CE] hover:border-[#A68B6A] transition-all duration-300 rounded-none flex items-center space-x-1.5 bg-[#F7F5F1]/60"
              title="Customize Clinic Info for Demo"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A68B6A]" />
              <span className="hidden md:inline">Demo Config</span>
            </button>

            <button
              id="nav-book-consultation-btn"
              onClick={onOpenBooking}
              className="relative group px-5 py-2.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[#A68B6A] hover:shadow-lg active:scale-98 flex items-center space-x-2"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1D1A] focus:outline-none focus:ring-1 focus:ring-[#A68B6A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        id="mobile-fullscreen-menu"
        className={`fixed inset-0 z-40 bg-[#171715] text-[#F7F5F1] transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="space-y-6">
          <p className="text-[11px] tracking-[0.25em] text-[#A68B6A] uppercase font-medium">
            Menu Navigation
          </p>
          <div className="space-y-4 flex flex-col">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-3xl font-light text-[#F7F5F1] hover:text-[#A68B6A] transition-colors py-1 flex items-center justify-between border-b border-white/10"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans tracking-widest text-[#6F6D67]">0{idx + 1}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-white/10">
          <div className="flex flex-col gap-3">
            <button
              id="mobile-booking-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#A68B6A] text-[#171715] font-medium tracking-[0.16em] uppercase text-xs flex items-center justify-center space-x-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="mobile-customizer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="w-full py-3 border border-white/20 text-[#EEEAE3] text-xs uppercase tracking-widest flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A68B6A]" />
              <span>Customize Demo Data</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-[#6F6D67] space-y-1">
            <p className="text-white/80">{clinic.address}</p>
            <p>{clinic.phone} • {clinic.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};
