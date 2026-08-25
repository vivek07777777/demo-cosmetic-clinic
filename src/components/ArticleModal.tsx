import React from 'react';
import { X, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { JournalArticle } from '../types';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      id="journal-article-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171715]/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F7F5F1] border border-[#DCD7CE] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCD7CE] bg-[#EEEAE3]">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A68B6A]">
              {article.category}
            </span>
          </div>
          <button
            id="close-article-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#6F6D67] hover:text-[#1D1D1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-left">
          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1A] leading-tight">
              {article.title}
            </h2>
            <div className="flex items-center space-x-4 text-xs text-[#6F6D67] font-mono">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#A68B6A]" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#A68B6A]" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Lead Image */}
          <div className="aspect-[16/9] w-full overflow-hidden bg-[#EEEAE3] border border-[#DCD7CE]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 pt-2 text-[#1D1D1A] font-light leading-relaxed text-sm sm:text-base">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Editorial Signoff */}
          <div className="pt-6 border-t border-[#DCD7CE] flex items-center justify-between text-xs text-[#6F6D67]">
            <span>LUMÉRA AESTHETICS • Editorial Series</span>
            <span className="italic">Customizable Clinic Blog</span>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-[#EEEAE3] border-t border-[#DCD7CE] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-[#1D1D1A] hover:text-[#A68B6A] flex items-center space-x-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
