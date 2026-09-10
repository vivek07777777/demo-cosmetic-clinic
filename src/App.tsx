import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { initialClinicConfig } from './data/clinicData';
import { ClinicConfig } from './types';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [clinic] = useState<ClinicConfig>(initialClinicConfig);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', '#A68B6A');
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F7F5F1] text-[#1D1D1A] flex flex-col relative font-sans selection:bg-[#A68B6A]/20 selection:text-[#1D1D1A]">
        {/* Persistent Top Navigation Bar */}
        <Navbar clinic={clinic} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage clinic={clinic} />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:id" element={<TreatmentDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage clinic={clinic} />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer clinic={clinic} />
      </div>
    </BrowserRouter>
  );
}
