import React, { useState } from 'react';
import { journalArticles } from '../data/clinicData';
import { ArrowUpRight, Clock } from 'lucide-react';
import { JournalArticle } from '../types';
import { ArticleModal } from './ArticleModal';

export const Journal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-[#EEEAE3]/50 border-t border-[#DCD7CE] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B6A]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6F6D67] uppercase">
                EDITORIAL & INSIGHTS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1A]">
              From the journal.
            </h2>
            <p className="text-sm sm:text-base text-[#6F6D67] font-light leading-relaxed">
              Perspectives on skin health, patient preparation, and modern aesthetic philosophies.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs tracking-widest text-[#6F6D67] uppercase font-mono">
              Clinical Insights
            </span>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalArticles.map((article) => (
            <article
              key={article.id}
              id={`journal-card-${article.id}`}
              onClick={() => setSelectedArticle(article)}
              className="group bg-[#F7F5F1] border border-[#DCD7CE] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(23,23,21,0.06)] text-left"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#171715]">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-[#171715]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-[#F7F5F1] border border-white/10">
                  {article.category}
                </div>

                {/* Read time pill */}
                <div className="absolute top-4 right-4 bg-[#F7F5F1]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-sans tracking-wider uppercase text-[#1D1D1A] flex items-center space-x-1 border border-[#DCD7CE]">
                  <Clock className="w-3 h-3 text-[#A68B6A]" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1D1D1A] group-hover:text-[#A68B6A] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6D67] font-light leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-[#DCD7CE]/60 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] font-medium text-[#1D1D1A] group-hover:text-[#A68B6A] transition-colors flex items-center space-x-1.5">
                    <span>Read article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>

              {/* Bottom Gold Indicator */}
              <div className="h-[2px] bg-[#A68B6A] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
