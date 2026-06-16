/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Code } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface ConversionBannerProps {
  onStartEnrollment: () => void;
}

export default function ConversionBanner({ onStartEnrollment }: ConversionBannerProps) {
  const { t } = useLanguage();

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-24 z-10 text-center scroll-mt-24">
      <div className="bg-gradient-to-b from-zinc-900 to-black/80 border border-emerald-500/15 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.06)] animate-fade-in">
        {/* Subtle green ambient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full"></div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 font-sans">
          {t.conversionBanner.title}
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-sans">
          {t.conversionBanner.description}{" "}
          <span className="text-emerald-400 font-bold font-mono uppercase">
            {t.conversionBanner.dateHighlight}
          </span>
          .
        </p>

        <button
          id="compile-cta-btn"
          onClick={onStartEnrollment}
          className="group relative inline-flex items-center space-x-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-4 sm:px-10 sm:py-5 text-sm sm:text-base rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] cursor-pointer font-sans"
        >
          <Code size={18} />
          <span>{t.conversionBanner.cta}</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
