import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, Check, Palette, Code, Building, Phone, Mail, MapPin } from 'lucide-react';
import { ClinicConfig } from '../types';
import { initialClinicConfig } from '../data/clinicData';

interface DemoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinic: ClinicConfig;
  onUpdateClinic: (updated: ClinicConfig) => void;
  accentColor: string;
  onUpdateAccentColor: (color: string) => void;
}

const colorPresets = [
  { name: 'Champagne Bronze (Default)', hex: '#A68B6A' },
  { name: 'Warm Rosewood', hex: '#9E746F' },
  { name: 'Muted Olive Sage', hex: '#7D8876' },
  { name: 'Tuscan Ochre', hex: '#B5945B' },
  { name: 'Nordic Slate', hex: '#5E6B7A' }
];

const sampleClinics = [
  {
    name: 'COSMETIC AESTHETICS',
    city: 'Metropolitan District',
    phone: '+00 000 000 0000',
    email: 'hello@example.com',
    address: '123 Example Avenue, Suite 400',
  },
  {
    name: 'ELYSIAN FACIAL INSTITUTE',
    city: 'Mayfair, London',
    phone: '+44 20 7946 0912',
    email: 'concierge@elysianfacial.demo',
    address: '42 Berkeley Square, Mayfair',
  },
  {
    name: 'AURA MEDICAL SPA',
    city: 'Beverly Hills, CA',
    phone: '+1 (310) 555-0182',
    email: 'care@auramedical.demo',
    address: '9400 Wilshire Blvd, Suite 800',
  }
];

export const DemoCustomizerModal: React.FC<DemoCustomizerModalProps> = ({
  isOpen,
  onClose,
  clinic,
  onUpdateClinic,
  accentColor,
  onUpdateAccentColor
}) => {
  const [tempConfig, setTempConfig] = useState<ClinicConfig>({ ...clinic });
  const [activeTab, setActiveTab] = useState<'branding' | 'code' | 'presets'>('branding');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateClinic(tempConfig);
    onClose();
  };

  const handleApplyPreset = (preset: typeof sampleClinics[0]) => {
    setTempConfig({
      ...tempConfig,
      name: preset.name,
      city: preset.city,
      phone: preset.phone,
      email: preset.email,
      address: preset.address
    });
  };

  const handleReset = () => {
    setTempConfig({ ...initialClinicConfig });
    onUpdateClinic({ ...initialClinicConfig });
    onUpdateAccentColor('#A68B6A');
  };

  return (
    <div
      id="demo-customizer-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171715]/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F7F5F1] border border-[#DCD7CE] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD7CE] bg-[#EEEAE3]">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-4 h-4 text-[#A68B6A]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A]">
              Agency Sales Demo Controller
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6F6D67] hover:text-[#1D1D1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#DCD7CE] bg-[#F7F5F1] px-6 text-xs">
          <button
            onClick={() => setActiveTab('branding')}
            className={`py-3 px-4 uppercase tracking-widest font-medium border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'branding'
                ? 'border-[#A68B6A] text-[#1D1D1A]'
                : 'border-transparent text-[#6F6D67] hover:text-[#1D1D1A]'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Clinic Identity</span>
          </button>
          <button
            onClick={() => setActiveTab('presets')}
            className={`py-3 px-4 uppercase tracking-widest font-medium border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'presets'
                ? 'border-[#A68B6A] text-[#1D1D1A]'
                : 'border-transparent text-[#6F6D67] hover:text-[#1D1D1A]'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Style & Color Presets</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 uppercase tracking-widest font-medium border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'code'
                ? 'border-[#A68B6A] text-[#1D1D1A]'
                : 'border-transparent text-[#6F6D67] hover:text-[#1D1D1A]'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Data Structure Architecture</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
          
          {activeTab === 'branding' && (
            <form onSubmit={handleSave} className="space-y-5">
              <div className="p-3.5 bg-[#EEEAE3] border-l-2 border-[#A68B6A] text-xs text-[#6F6D67]">
                <strong className="text-[#1D1D1A]">Sales Pitch Feature:</strong> Test replacing the clinic name and details live during a client presentation to show how easily this turnkey design adapts to their practice.
              </div>

              {/* Quick Sample Presets */}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#6F6D67] block mb-2">
                  Quick Load Demo Clinics:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sampleClinics.map((sample) => (
                    <button
                      key={sample.name}
                      type="button"
                      onClick={() => handleApplyPreset(sample)}
                      className="px-3 py-1.5 bg-[#EEEAE3] border border-[#DCD7CE] text-xs text-[#1D1D1A] hover:border-[#1D1D1A] transition-colors"
                    >
                      {sample.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form inputs */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium">
                    Clinic Brand Name
                  </label>
                  <input
                    type="text"
                    value={tempConfig.name}
                    onChange={(e) => setTempConfig({ ...tempConfig, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DCD7CE] focus:border-[#A68B6A] text-sm text-[#1D1D1A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={tempConfig.phone}
                      onChange={(e) => setTempConfig({ ...tempConfig, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DCD7CE] focus:border-[#A68B6A] text-sm text-[#1D1D1A]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium">
                      Email Address
                    </label>
                    <input
                      type="text"
                      value={tempConfig.email}
                      onChange={(e) => setTempConfig({ ...tempConfig, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DCD7CE] focus:border-[#A68B6A] text-sm text-[#1D1D1A]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider text-[#1D1D1A] font-medium">
                    Address / Suite
                  </label>
                  <input
                    type="text"
                    value={tempConfig.address}
                    onChange={(e) => setTempConfig({ ...tempConfig, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DCD7CE] focus:border-[#A68B6A] text-sm text-[#1D1D1A]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 border border-[#DCD7CE] text-xs uppercase tracking-wider text-[#6F6D67] hover:text-[#1D1D1A]"
                >
                  Reset Defaults
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#171715] text-[#F7F5F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A68B6A] transition-colors"
                >
                  Apply Live
                </button>
              </div>
            </form>
          )}

          {activeTab === 'presets' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1D1D1A]">
                  Select Accent Palette Tone
                </h4>
                <p className="text-xs text-[#6F6D67] font-light">
                  Instantly tune the signature gold/bronze accent tone to match different luxury aesthetic brand identities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.hex}
                      onClick={() => onUpdateAccentColor(preset.hex)}
                      className={`p-3.5 border text-left flex items-center justify-between transition-all ${
                        accentColor === preset.hex
                          ? 'border-[#1D1D1A] bg-[#EEEAE3]'
                          : 'border-[#DCD7CE] bg-[#F7F5F1] hover:border-[#1D1D1A]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className="w-5 h-5 rounded-full border border-black/20 shrink-0"
                          style={{ backgroundColor: preset.hex }}
                        />
                        <div>
                          <span className="text-xs font-medium text-[#1D1D1A] block">{preset.name}</span>
                          <span className="text-[10px] font-mono text-[#6F6D67]">{preset.hex}</span>
                        </div>
                      </div>
                      {accentColor === preset.hex && <Check className="w-4 h-4 text-[#1D1D1A]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#EEEAE3] border border-[#DCD7CE] text-xs text-[#6F6D67] space-y-1">
                <span className="font-semibold text-[#1D1D1A] block">Curated Luxury Color Harmonization:</span>
                <p>Primary Canvas: <span className="font-mono text-[#1D1D1A]">#F7F5F1</span> • Secondary Stone: <span className="font-mono text-[#1D1D1A]">#EEEAE3</span> • Obsidian Dark: <span className="font-mono text-[#1D1D1A]">#171715</span></p>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1A]">
                  Central Config File: /src/data/clinicData.ts
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`// Central clinic data configuration in /src/data/clinicData.ts`);
                    setCopiedCode(true);
                    setTimeout(() => setCopiedCode(false), 2000);
                  }}
                  className="text-[11px] text-[#A68B6A] uppercase font-mono tracking-wider hover:underline"
                >
                  {copiedCode ? 'Copied to clipboard' : 'Copy config note'}
                </button>
              </div>

              <div className="p-4 bg-[#171715] text-[#EEEAE3] font-mono text-xs overflow-x-auto space-y-2 border border-white/10 max-h-64">
                <p className="text-[#A68B6A]">// Centralized configuration allows instant rebranding without layout changes</p>
                <pre>{`export const initialClinicConfig = {
  name: "${tempConfig.name}",
  phone: "${tempConfig.phone}",
  email: "${tempConfig.email}",
  address: "${tempConfig.address}",
  operatingHours: "Mon – Sat: 9:00 AM – 6:00 PM",
  // All treatments, doctors, testimonials, articles and before/after cases
  // are cleanly organized in typed data collections.
};`}</pre>
              </div>

              <p className="text-xs text-[#6F6D67] font-light">
                This architecture ensures clean separation between visual presentation and clinic data for seamless handoff to any cosmetic clinic.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#EEEAE3] border-t border-[#DCD7CE] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-[#6F6D67] hover:text-[#1D1D1A]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
