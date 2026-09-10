import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { ClinicConfig } from '../types';

interface NavbarProps {
  clinic: ClinicConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ clinic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll threshold for elevated shadow / blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'About Us', path: '/about' },
    { name: 'Results', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5F1]/95 backdrop-blur-md shadow-xs border-b border-[#DCD7CE] py-3 sm:py-3.5'
            : 'bg-[#F7F5F1]/90 backdrop-blur-sm border-b border-[#DCD7CE]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo on Left */}
            <Link
              to="/"
              id="nav-logo"
              className="group flex items-center space-x-1.5 sm:space-x-2 text-left transition-colors"
            >
              <span className="font-serif tracking-[0.2em] sm:tracking-[0.24em] text-lg sm:text-2xl font-medium text-[#1D1D1A] group-hover:text-[#A68B6A] transition-colors uppercase">
                COSMETIC
              </span>
              <span className="font-serif tracking-[0.2em] sm:tracking-[0.24em] text-lg sm:text-2xl font-light text-[#A68B6A] uppercase">
                CLINIC
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 lg:space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-xs uppercase tracking-[0.18em] font-medium transition-colors py-1.5 px-1 ${
                      isActive
                        ? 'text-[#1D1D1A] font-semibold'
                        : 'text-[#6F6D67] hover:text-[#1D1D1A]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#A68B6A]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Actions on Far Right */}
            <div className="hidden sm:flex items-center">
              {/* Prominent Book Consultation Button */}
              <Link
                to="/contact"
                id="nav-book-btn"
                className="flex items-center space-x-2 px-5 py-2.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#A68B6A] transition-colors duration-300 shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#A68B6A]" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
              <Link
                to="/contact"
                className="px-3 py-1.5 bg-[#171715] text-[#F7F5F1] text-[11px] uppercase tracking-wider font-medium sm:hidden"
              >
                Book
              </Link>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#1D1D1A] hover:text-[#A68B6A] transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-30 bg-[#171715]/60 backdrop-blur-sm lg:hidden pt-24 pb-8 px-6 animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-md mx-auto bg-[#F7F5F1] border border-[#DCD7CE] shadow-2xl p-6 sm:p-8 space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pb-4 border-b border-[#DCD7CE]">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#A68B6A] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Medical Aesthetics Practice</span>
              </div>
              <p className="text-xs text-[#6F6D67] mt-1 font-light">
                {clinic.address}, {clinic.city}
              </p>
            </div>

            <nav className="space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-2.5 px-3 border-b border-[#DCD7CE]/50 text-sm uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? 'text-[#1D1D1A] font-bold bg-[#EEEAE3]/60'
                        : 'text-[#6F6D67] hover:text-[#1D1D1A]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#A68B6A]" />
                </NavLink>
              ))}
            </nav>

            <div className="pt-2 space-y-3">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#A68B6A]" />
                <span>Book A Consultation</span>
              </Link>

              <a
                href={`tel:${clinic.phone}`}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-white border border-[#DCD7CE] text-xs uppercase tracking-[0.15em] text-[#1D1D1A] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#A68B6A]" />
                <span>Call {clinic.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
