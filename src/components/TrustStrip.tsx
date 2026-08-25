import React from 'react';
import { trustItems } from '../data/clinicData';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-strip" className="border-y border-[#DCD7CE] bg-[#EEEAE3]/60 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#DCD7CE]">
          {trustItems.map((item, idx) => (
            <div
              key={item.id}
              id={`trust-item-${idx}`}
              className="px-4 lg:px-8 first:pl-0 last:pr-0 pt-4 sm:pt-0 group flex flex-col justify-center text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-[#A68B6A] tracking-wider">0{idx + 1}</span>
                <span className="h-px w-4 bg-[#DCD7CE] group-hover:w-8 group-hover:bg-[#A68B6A] transition-all duration-300" />
              </div>
              <h3 className="text-xs sm:text-[13px] font-medium tracking-[0.18em] uppercase text-[#1D1D1A] mt-2 group-hover:text-[#A68B6A] transition-colors">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#6F6D67] font-light mt-1">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
