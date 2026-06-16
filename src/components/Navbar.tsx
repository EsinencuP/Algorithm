/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, Layers, Sliders, Layout } from "lucide-react";
import { CourseLevel } from "../types";
import { useLanguage } from "../LanguageContext";

interface NavbarProps {
  activeLevel: CourseLevel;
  onNavigateToSyllabus: () => void;
  onNavigateToLevel: () => void;
  onNavigateToFeatures: () => void;
}

export default function Navbar({
  activeLevel,
  onNavigateToSyllabus,
  onNavigateToLevel,
  onNavigateToFeatures,
}: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (callback: () => void) => {
    setIsMobileMenuOpen(false);
    // Give time for transition to end before scrolling
    setTimeout(() => {
      callback();
    }, 250);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-16 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5 select-none animate-fade-in">
        {/* Brand logo */}
        <div className="flex items-center space-x-2.5 font-sans">
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-1.5 rounded text-emerald-400">
            <Terminal size={16} />
          </div>
          <span className="text-white font-bold text-lg tracking-wider font-sans">
            {t.navbar.logo}
          </span>
        </div>

        {/* Center Nav Anchors (Desktop/Tablet) */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest text-gray-400 uppercase">
          <button
            onClick={onNavigateToLevel}
            className="hover:text-emerald-400 font-semibold transition-colors cursor-pointer py-2 px-1"
          >
            {t.navbar.levels}
          </button>
          <button
            onClick={onNavigateToSyllabus}
            className="hover:text-emerald-400 font-semibold transition-colors cursor-pointer py-2 px-1"
          >
            {t.navbar.syllabus}
          </button>
          <button
            onClick={onNavigateToFeatures}
            className="hover:text-emerald-400 font-semibold transition-colors cursor-pointer py-2 px-1"
          >
            {t.navbar.features}
          </button>
        </div>

        {/* Admissions Status and Language Selectors */}
        <div className="flex items-center space-x-3">
          {/* Language Selection Segment Controller */}
          <div className="flex items-center bg-zinc-950/80 border border-white/10 rounded-lg p-0.5 text-[10px] sm:text-xs">
            <button
              id="lang-ro-btn"
              onClick={() => setLanguage("ro")}
              className={`px-3.5 py-2 sm:px-2.5 sm:py-1 rounded font-mono font-bold transition-all cursor-pointer min-h-[36px] sm:min-h-[unset] flex items-center justify-center`}
              style={{
                backgroundColor: language === "ro" ? "#10b981" : "transparent",
                color: language === "ro" ? "#000000" : "#a1a1aa",
                boxShadow: language === "ro" ? "0 0 10px rgba(16,185,129,0.3)" : "none",
              }}
            >
              RO
            </button>
            <button
              id="lang-ru-btn"
              onClick={() => setLanguage("ru")}
              className={`px-3.5 py-2 sm:px-2.5 sm:py-1 rounded font-mono font-bold transition-all cursor-pointer min-h-[36px] sm:min-h-[unset] flex items-center justify-center`}
              style={{
                backgroundColor: language === "ru" ? "#10b981" : "transparent",
                color: language === "ru" ? "#000000" : "#a1a1aa",
                boxShadow: language === "ru" ? "0 0 10px rgba(16,185,129,0.3)" : "none",
              }}
            >
              RU
            </button>
          </div>

          {/* Dynamic level badge */}
          <div className="hidden lg:inline-block font-mono text-[9px] uppercase border border-white/5 px-2.5 py-1.5 rounded bg-white/2">
            {t.navbar.target}: <span className="text-emerald-400">{activeLevel}</span>
          </div>

          {/* Pulsing indicator */}
          <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-2 sm:px-3 sm:py-1.5 rounded-lg text-[10px] md:text-xs font-mono font-bold text-emerald-400 shadow-[0_0_15px_rgba(34,197,94,0.15)] select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-widest hidden xs:inline">{t.navbar.admissionOpen}</span>
            <span className="tracking-widest xs:hidden">LIVE</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg border border-white/10 bg-zinc-950 text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Cyber Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden overflow-hidden flex flex-col justify-center px-8"
          >
            {/* Visual ambient matrix-grid nodes decoration floating in background */}
            <div className="absolute inset-0 bg-radial-at-t from-emerald-500/10 via-transparent to-transparent pointer-events-none opacity-40" />

            <div className="space-y-8 relative z-10 max-w-sm mx-auto w-full">
              {/* Header Label decoration inside menu */}
              <div className="border-b border-white/5 pb-4 mb-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-emerald-500 block uppercase mb-1">
                  SYS.INDEX_NAVIGATION
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  ALGORITHM // INTERFACE OVERLAY
                </span>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col space-y-4 font-sans">
                <button
                  onClick={() => handleMobileNav(onNavigateToLevel)}
                  className="flex items-center space-x-4 text-left group cursor-pointer"
                >
                  <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                      {t.navbar.levels}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">CHOOSE SYSTEM COMPLEXITY</span>
                  </div>
                </button>

                <button
                  onClick={() => handleMobileNav(onNavigateToSyllabus)}
                  className="flex items-center space-x-4 text-left group cursor-pointer"
                >
                  <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                    <Layers size={20} />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                      {t.navbar.syllabus}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">ADAPTIVE TIMELINE MAPPING</span>
                  </div>
                </button>

                <button
                  onClick={() => handleMobileNav(onNavigateToFeatures)}
                  className="flex items-center space-x-4 text-left group cursor-pointer"
                >
                  <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                    <Layout size={20} />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                      {t.navbar.features}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">CORE ADVANTAGE SPECIFICATIONS</span>
                  </div>
                </button>
              </div>

              {/* Level indicator footer inside mobile menu */}
              <div className="border-t border-white/5 pt-6 mt-4 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-500 uppercase">{t.navbar.target} PORTAL:</span>
                <span className="text-emerald-400 font-bold uppercase">{activeLevel}</span>
              </div>

              {/* Close Button UI explicitly labeled for access */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-zinc-900/50 hover:bg-zinc-900 text-gray-400 hover:text-white border border-white/5 py-3 rounded-xl text-xs tracking-widest uppercase font-mono transition-all duration-300 mt-4 cursor-pointer flex items-center justify-center space-x-2"
              >
                <X size={14} />
                <span>CLOSE INDEX</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
