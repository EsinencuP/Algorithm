/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";
import { CourseLevel } from "../types";
import { useLanguage } from "../LanguageContext";

interface HeroProps {
  onStartNavigate: () => void;
  onSyllabusNavigate: () => void;
  activeLevel: CourseLevel;
}

export default function Hero({
  onStartNavigate,
  onSyllabusNavigate,
  activeLevel,
}: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="hero-section" className="relative min-h-[100dvh] md:h-screen w-full flex flex-col justify-end px-4 sm:px-6 md:px-16 pt-24 pb-12 md:pb-24 z-10 select-none overflow-hidden">
      {/* HUD Header Decorator (Left Top) */}
      <div className="absolute top-6 left-4 sm:left-6 md:left-16 flex items-center space-x-6 text-[10px] sm:text-xs text-gray-500 font-mono tracking-[0.15em] pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-gray-300 font-semibold font-sans">{t.navbar.admissionOpen}</span>
        </div>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">ALGORITHM // INFORMATICS v4.5</span>
      </div>

      {/* Hero content container */}
      <div className="max-w-4xl text-left w-full mt-auto">
        {/* Animated Phase Pill */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-950/40 to-black border border-emerald-500/25 px-2.5 py-1.5 rounded-md mb-4 sm:mb-6"
        >
          <Terminal size={12} className="text-emerald-400" />
          <span className="text-[9px] sm:text-xs font-mono text-emerald-400 tracking-wider">
            {t.hero.phases[activeLevel]}
          </span>
        </motion.div>

        {/* Cinematic Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight xs:tracking-tighter leading-tight xs:leading-none mb-4 sm:mb-6 font-sans uppercase"
        >
          <span className="text-white block">{t.hero.code}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 block glowing-text drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]">
            {t.hero.beyond}
          </span>
        </motion.h1>

        {/* Elite Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-xs sm:text-base md:text-xl text-gray-400 max-w-xl mb-6 sm:mb-10 font-normal leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* Value metrics before CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-3 gap-2 sm:gap-8 max-w-lg mb-6 sm:mb-10 border-t border-white/5 pt-4 sm:pt-6 font-mono text-[9px] sm:text-xs text-gray-500"
        >
          <div className="flex flex-col">
            <span className="text-emerald-400 text-xs sm:text-base font-bold block mb-0.5 sm:mb-1">
              96%
            </span>
            <span className="leading-tight block">{t.hero.graduatesHired}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-emerald-400 text-xs sm:text-base font-bold block mb-0.5 sm:mb-1">
              1:1
            </span>
            <span className="leading-tight block">{t.hero.expertMentorship}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-yellow-500 text-xs sm:text-base font-bold block mb-0.5 sm:mb-1">
              4.9/5
            </span>
            <span className="leading-tight block">{t.hero.ratingOnG2}</span>
          </div>
        </motion.div>

        {/* Staggered Floating CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col xs:flex-row items-stretch xs:items-center space-y-3 xs:space-y-0 xs:space-x-4 max-w-md"
        >
          <button
            id="start-journey-cta"
            onClick={onStartNavigate}
            className="group relative flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] cursor-pointer text-xs sm:text-sm"
          >
            <span>{t.hero.startJourney}</span>
            <ArrowRight
              size={16}
              className="text-black transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            id="view-syllabus-cta"
            onClick={onSyllabusNavigate}
            className="flex items-center justify-center space-x-2 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/20 text-white font-medium px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 cursor-pointer text-xs sm:text-sm"
          >
            <span>{t.hero.viewSyllabus}</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator Bottom Center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-45 hidden sm:flex">
        <span className="text-[10px] font-mono tracking-widest text-emerald-400/80 mb-2">
          {t.hero.exploreMatrix}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-5 w-3 rounded-full border border-white/20 flex justify-center pt-1"
        >
          <div className="h-1.5 w-1 rounded-full bg-emerald-400"></div>
        </motion.div>
      </div>
    </section>
  );
}
