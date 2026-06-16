/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Terminal, ShieldCheck, Mail, Send, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSignedUp(true);
      setTimeout(() => setSignedUp(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-black/60 backdrop-blur-md py-12 px-4 sm:px-6 md:px-16 z-10 text-xs text-gray-500 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
        {/* Brand identity column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2.5">
            <div className="bg-emerald-500/10 border border-emerald-500/25 p-1.5 rounded text-emerald-400 flex items-center justify-center">
              <Terminal size={14} />
            </div>
            <span className="text-white font-bold text-sm tracking-wider">
              {t.navbar.logo}
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-[11px]">
            {t.footer.brandDescription}
          </p>
          <div className="text-[10px] text-gray-600 flex items-center space-x-1.5 pt-2">
            <ShieldCheck size={12} className="text-emerald-500 shrink-0" />
            <span>{t.footer.secureStack}</span>
          </div>
        </div>

        {/* Contact details column */}
        <div className="space-y-3">
          <span className="text-white text-xs font-bold tracking-widest block uppercase">
            {t.footer.contactHeading}
          </span>
          <div className="space-y-3 text-[11px] text-gray-400">
            <div className="flex items-start space-x-2">
              <MapPin size={12} className="text-emerald-400 mt-0.5 shrink-0" />
              <span className="leading-snug">{t.footer.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={12} className="text-emerald-400 shrink-0" />
              <a href={`tel:${t.footer.phone.replace(/[^+\d]/g, '')}`} className="hover:text-emerald-400 transition-colors min-h-[32px] flex items-center">
                {t.footer.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={12} className="text-emerald-400 shrink-0" />
              <a href={`mailto:${t.footer.email}`} className="hover:text-emerald-400 transition-colors min-h-[32px] flex items-center break-all">
                {t.footer.email}
              </a>
            </div>
          </div>
        </div>

        {/* Next cohort indices */}
        <div className="space-y-3">
          <span className="text-white text-xs font-bold tracking-widest block uppercase">
            {t.footer.nextCohorts}
          </span>
          <div className="space-y-2 text-[11px] text-gray-400">
            <div className="flex justify-between border-b border-white/5 pb-1 select-none">
              <span>CY-42 // COHORT</span>
              <span className="text-emerald-400 font-bold block">18.06.2026</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1 select-none">
              <span>CY-43 // COHORT</span>
              <span className="text-gray-500 block">01.08.2026</span>
            </div>
            <div className="flex justify-between pb-1 select-none">
              <span>CY-44 // COHORT</span>
              <span className="text-gray-500 block">15.10.2026</span>
            </div>
          </div>
        </div>

        {/* Tech references */}
        <div className="space-y-3">
          <span className="text-white text-xs font-bold tracking-widest block uppercase">
            {t.footer.referenceDocs}
          </span>
          <ul className="space-y-2 text-[11px] text-gray-400">
            <li>
              <a href="#level-selection-section" className="hover:text-emerald-400 transition-colors min-h-[32px] flex items-center">
                {t.footer.levelSelection}
              </a>
            </li>
            <li>
              <a href="#syllabus-timeline-section" className="hover:text-emerald-400 transition-colors min-h-[32px] flex items-center">
                {t.footer.moduleSchedulers}
              </a>
            </li>
            <li>
              <a href="#features-grid-section" className="hover:text-emerald-400 transition-colors min-h-[32px] flex items-center">
                {t.footer.supportPillars}
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors min-h-[32px] flex items-center">
                {t.footer.githubTemplate}
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe newsletter column */}
        <div className="space-y-3">
          <span className="text-white text-xs font-bold tracking-widest block uppercase">
            {t.footer.compilerNotifier}
          </span>
          <p className="text-gray-400 leading-relaxed text-[11px]">
            {t.footer.newsletterDescription}
          </p>

          <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
            <input
              id="compiler-notify-email"
              type="email"
              required
              placeholder={t.footer.notifyPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg pl-3 pr-10 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono min-h-[44px]"
            />
            <button
              id="notify-submit-btn"
              type="submit"
              className="absolute right-1 text-emerald-400 hover:text-emerald-300 p-2 cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]"
            >
              {signedUp ? (
                <span className="text-[10px] text-emerald-400 animate-pulse font-bold">{t.footer.readyBtn}</span>
              ) : (
                <Send size={14} />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Credit line copy */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] space-y-4 md:space-y-0">
        <div>
          {t.footer.rights}
        </div>
        <div className="flex space-x-6">
          <span>HOSTED BY CLOUD_CONTAINERS v3.12</span>
          <span>{t.footer.latitude}</span>
        </div>
      </div>
    </footer>
  );
}
