/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Sliders, Award, Zap, Cpu, Code2, Hourglass, TrendingUp } from "lucide-react";
import { CourseLevel, LevelInfo, TechStackItem } from "../types";
import { useLanguage } from "../LanguageContext";

interface LevelSelectorProps {
  activeLevel: CourseLevel;
  onLevelChange: (level: CourseLevel) => void;
}

export default function LevelSelector({
  activeLevel,
  onLevelChange,
}: LevelSelectorProps) {
  const { t } = useLanguage();
  const currentInfo = t.levelSelector.levels[activeLevel];

  // Helper to render responsive SVG complex networks reflecting selected complexity
  const renderSVGGraph = (level: CourseLevel) => {
    switch (level) {
      case "beginner":
        return (
          <svg className="w-full h-full text-emerald-500/20" viewBox="0 0 200 200">
            <motion.circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" animate={{ r: [15, 18, 15] }} transition={{ repeat: Infinity, duration: 2 }} />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <circle cx="150" cy="50" r="4" fill="currentColor" />
            <circle cx="50" cy="150" r="4" fill="currentColor" />
            <circle cx="150" cy="150" r="4" fill="currentColor" />
            <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
            <line x1="150" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="150" x2="100" y2="100" stroke="currentColor" strokeWidth="1" />
            <line x1="150" y1="150" x2="100" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
          </svg>
        );
      case "middle":
        return (
          <svg className="w-full h-full text-emerald-400/20" viewBox="0 0 200 200">
            {/* Multi-layered nested circles and connected rings */}
            <motion.circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="1" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} />
            <circle cx="100" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="40" cy="40" r="5" fill="currentColor" />
            <circle cx="160" cy="40" r="5" fill="currentColor" />
            <circle cx="160" cy="160" r="5" fill="currentColor" />
            <circle cx="40" cy="160" r="5" fill="currentColor" />
            <circle cx="100" cy="30" r="4" fill="currentColor" />
            <circle cx="170" cy="100" r="4" fill="currentColor" />
            <circle cx="100" cy="170" r="4" fill="currentColor" />
            <circle cx="30" cy="100" r="4" fill="currentColor" />
            {/* Dynamic node mesh */}
            <path d="M 40 40 L 100 30 L 160 40 L 170 100 L 160 160 L 100 170 L 40 160 L 30 100 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <path d="M 100 100 L 40 40 M 100 100 L 160 40 M 100 100 L 160 160 M 100 100 L 40 160" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4" />
          </svg>
        );
      case "senior":
        return (
          <svg className="w-full h-full text-cyan-400/25" viewBox="0 0 200 200">
            {/* Complex dense cyber pattern like an optical aperture or microchip */}
            <g transform="translate(100,100)">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <g key={angle} transform={`rotate(${angle})`}>
                  <line x1="15" y1="0" x2="85" y2="0" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="45" cy="0" r="3" fill="currentColor" />
                  <circle cx="85" cy="0" r="1.5" fill="currentColor" />
                  <path d="M 45 0 L 60 15 L 80 15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                </g>
              ))}
              <motion.circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="1" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
              <circle cx="0" cy="0" r="5" fill="currentColor" className="text-cyan-400" />
            </g>
          </svg>
        );
    }
  };

  const currentComplexity = activeLevel === "beginner" ? t.levelSelector.complexityB : activeLevel === "middle" ? t.levelSelector.complexityM : t.levelSelector.complexityS;

  return (
    <section id="level-selection-section" className="relative max-w-7xl mx-auto px-6 md:px-16 py-24 z-10">
      {/* Label and descriptive tag */}
      <div className="mb-14 text-center md:text-left animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {t.levelSelector.title}
        </h2>
        <p className="text-gray-400 max-w-xl text-base min-h-[48px] sm:min-h-[36px]">
          {t.levelSelector.tagline}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side Info Hub (7 columns width) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          {/* Customized horizontal slider container */}
          <div className="relative glassmorphism rounded-xl p-2 flex items-center justify-between border border-white/5 w-full">
            {/* Sliding highlight indicator bubble using Framer motion Layout */}
            <div className="absolute inset-0 p-2 z-0 pointer-events-none">
              <div className="grid grid-cols-3 h-full w-full">
                <div className="col-span-1 relative h-full w-full">
                  {activeLevel === "beginner" && (
                    <motion.div
                      layoutId="active-bg-slider"
                      className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/40 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
                <div className="col-span-1 relative h-full w-full">
                  {activeLevel === "middle" && (
                    <motion.div
                      layoutId="active-bg-slider"
                      className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/40 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
                <div className="col-span-1 relative h-full w-full">
                  {activeLevel === "senior" && (
                    <motion.div
                      layoutId="active-bg-slider"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/40 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Custom interactive Buttons that act as the solid points of the slider */}
            <button
              id="slider-beg"
              onClick={() => onLevelChange("beginner")}
              className={`flex-1 text-center py-3.5 px-2 relative z-10 font-mono text-[11px] sm:text-xs tracking-wider uppercase font-semibold transition-colors duration-300 pointer-events-auto cursor-pointer whitespace-nowrap ${
                activeLevel === "beginner" ? "text-emerald-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.levelSelector.levels.beginner.title}
            </button>
            <button
              id="slider-mid"
              onClick={() => onLevelChange("middle")}
              className={`flex-1 text-center py-3.5 px-2 relative z-10 font-mono text-[11px] sm:text-xs tracking-wider uppercase font-semibold transition-colors duration-300 pointer-events-auto cursor-pointer whitespace-nowrap ${
                activeLevel === "middle" ? "text-emerald-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.levelSelector.levels.middle.title}
            </button>
            <button
              id="slider-sen"
              onClick={() => onLevelChange("senior")}
              className={`flex-1 text-center py-3.5 px-2 relative z-10 font-mono text-[11px] sm:text-xs tracking-wider uppercase font-semibold transition-colors duration-300 pointer-events-auto cursor-pointer whitespace-nowrap ${
                activeLevel === "senior" ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.levelSelector.levels.senior.title}
            </button>
          </div>

          {/* Sliding native Range slider widget underneath to make tactile sliding actions possible */}
          <div className="flex items-center space-x-4 pl-1">
            <span className="text-[10px] text-gray-500 font-mono">{t.levelSelector.dragMesh}</span>
            <input
              id="fluid-level-drag"
              type="range"
              min="0"
              max="2"
              step="1"
              value={activeLevel === "beginner" ? "0" : activeLevel === "middle" ? "1" : "2"}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "0") onLevelChange("beginner");
                if (val === "1") onLevelChange("middle");
                if (val === "2") onLevelChange("senior");
              }}
              className="flex-1 accent-emerald-500 bg-white/5 rounded-lg h-1.5 cursor-ew-resize opacity-60 hover:opacity-100 transition-opacity"
            />
            <span className="text-[10px] font-mono text-emerald-400">
              {activeLevel.toUpperCase()}
            </span>
          </div>

          {/* Dynamic Content Details Card with AnimatePresence Slider transition */}
          <div className="glassmorphic-glow rounded-2xl p-6 md:p-8 border border-white/5 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLevel}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.45 }}
              >
                {/* Meta details */}
                <div className="text-[10px] font-mono mb-2 tracking-widest text-emerald-400 font-semibold uppercase min-h-[16px]">
                  {currentInfo.subTitle}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 min-h-[36px]">
                  {currentInfo.title} {t.levelSelector.syllabusFocus}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 min-h-[120px] sm:min-h-[96px] md:min-h-[80px]">
                  {currentInfo.description}
                </p>

                {/* Grid details (Salary target / Duration indicator) */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 border-t border-white/5 pt-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className={`w-5 h-5 mt-0.5 ${currentInfo.highlightColor} shrink-0`} />
                    <div className="min-h-[44px]">
                      <span className="text-xs text-gray-500 block font-mono whitespace-nowrap">{t.levelSelector.salaryVector}</span>
                      <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">{currentInfo.salaryLevel}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Hourglass className={`w-5 h-5 mt-0.5 ${currentInfo.highlightColor} shrink-0`} />
                    <div className="min-h-[44px]">
                      <span className="text-xs text-gray-500 block font-mono whitespace-nowrap">{t.levelSelector.courseDepth}</span>
                      <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">{currentInfo.termDuration}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Horizontal Pill Tags */}
                <div>
                  <h4 className="text-xs font-mono text-gray-500 tracking-wider mb-3 uppercase">
                    {t.levelSelector.coreTechHeading}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {currentInfo.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="bg-black/40 border border-white/5 rounded-lg p-3 hover:border-emerald-500/25 transition-all"
                      >
                        <span className={`text-[11px] font-mono font-bold block mb-0.5 ${currentInfo.highlightColor}`}>
                          {tech.name}
                        </span>
                        <span className="text-[9px] text-gray-500 leading-tight block">
                          {tech.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side Visual Module (5 columns width) */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          {/* Dynamic reactive SVG representation */}
          <div className="glassmorphism rounded-2xl p-6 md:p-8 aspect-square relative flex items-center justify-center border border-white/5 overflow-hidden">
            {/* Absolute indicator */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-gray-500">
              [STRUCTURAL_ALGORITHM_VISUALIZATION]
            </div>

            <div className="w-56 h-56 relative">
              {renderSVGGraph(activeLevel)}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
              <span>{t.levelSelector.latencyLabel}: 0.12ms</span>
              <span>{t.levelSelector.complexityLabel}: {currentComplexity}</span>
            </div>
          </div>

          {/* Project Box Showcase */}
          <div className="bg-gradient-to-r from-zinc-950 to-emerald-950/10 border border-white/5 rounded-2xl p-6 min-h-[230px] sm:min-h-[190px] md:min-h-[175px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLevel}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2 text-[10px] font-mono text-amber-500 mb-2">
                  <Cpu size={12} />
                  <span>{t.levelSelector.projectBadge}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {currentInfo.featuredProject.name}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {currentInfo.featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentInfo.featuredProject.specs.map((spec, sidx) => (
                    <span
                      key={sidx}
                      className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono px-2 py-0.5 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
