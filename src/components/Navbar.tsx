/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Terminal } from "lucide-react";
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

  return (
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

      {/* Center Nav Anchors */}
      <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest text-gray-400 uppercase">
        <button
          onClick={onNavigateToLevel}
          className="hover:text-emerald-400 font-semibold transition-colors cursor-pointer"
        >
          {t.navbar.levels}
        </button>
        <button
          onClick={onNavigateToSyllabus}
          className="hover:text-emerald-400 font-semibold transition-colors cursor-pointer"
        >
          {t.navbar.syllabus}
        </button>
        <button
          onClick={onNavigateToFeatures}
          className="hover:text-emerald-400 font-semibold transition-colors cursor-pointer"
        >
          {t.navbar.features}
        </button>
      </div>

      {/* Admissions Pulse Status Badge */}
      <div className="flex items-center space-x-3">
        {/* Language Selection Segment Controller */}
        <div className="flex items-center bg-zinc-950/80 border border-white/10 rounded-lg p-0.5 text-[10px] sm:text-xs">
          <button
            id="lang-ro-btn"
            onClick={() => setLanguage("ro")}
            className={`px-2.5 py-1 rounded font-mono font-bold transition-all cursor-pointer ${
              language === "ro"
                ? "bg-emerald-500 text-black shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            RO
          </button>
          <button
            id="lang-ru-btn"
            onClick={() => setLanguage("ru")}
            className={`px-2.5 py-1 rounded font-mono font-bold transition-all cursor-pointer ${
              language === "ru"
                ? "bg-emerald-500 text-black shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            RU
          </button>
        </div>

        {/* Dynamic level badge */}
        <div className="hidden sm:inline-block font-mono text-[9px] uppercase border border-white/5 px-2.5 py-1 rounded bg-white/2">
          {t.navbar.target}: <span className="text-emerald-400">{activeLevel}</span>
        </div>

        {/* Pulsing indicator */}
        <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono font-bold text-emerald-400 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-[100%] w-[100%] rounded-full bg-emerald-400 opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-widest">{t.navbar.admissionOpen}</span>
        </div>
      </div>
    </nav>
  );
}
