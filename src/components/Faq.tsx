/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-16 z-10">
      <div className="mb-10 text-center md:text-left animate-fade-in">
        <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-amber-500 bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10 mb-3 animate-pulse">
          <HelpCircle size={10} />
          <span>{t.faq.knowledgeBasis}</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans">
          {t.faq.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 font-sans">
        <div className="bg-zinc-950/40 border border-white/5 p-5 sm:p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-white mb-2 font-sans flex items-center space-x-2">
            <span className="text-emerald-400">Q.</span>
            <span>{t.faq.q1}</span>
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans mt-2">
            {t.faq.a1}
          </p>
        </div>

        <div className="bg-zinc-950/40 border border-white/5 p-5 sm:p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-white mb-2 font-sans flex items-center space-x-2">
            <span className="text-emerald-400">Q.</span>
            <span>{t.faq.q2}</span>
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans mt-2">
            {t.faq.a2}
          </p>
        </div>

        <div className="bg-zinc-950/40 border border-white/5 p-5 sm:p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-white mb-2 font-sans flex items-center space-x-2">
            <span className="text-emerald-400">Q.</span>
            <span>{t.faq.q3}</span>
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans mt-2">
            {t.faq.a3}
          </p>
        </div>

        <div className="bg-zinc-950/40 border border-white/5 p-5 sm:p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-white mb-2 font-sans flex items-center space-x-2">
            <span className="text-emerald-400">Q.</span>
            <span>{t.faq.q4}</span>
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans mt-2">
            {t.faq.a4}
          </p>
        </div>
      </div>
    </section>
  );
}
