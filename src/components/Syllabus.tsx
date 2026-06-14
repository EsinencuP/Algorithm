/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Calendar, BookOpen, Laptop, CheckCircle, Flame, Layers } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface SyllabusProps {
  weeklyHours: number;
  startDate: string;
}

export default function Syllabus({ weeklyHours, startDate }: SyllabusProps) {
  const [expandedId, setExpandedId] = useState<string | null>("m1");
  const { t, language } = useLanguage();

  const syllabusModules = t.syllabus.modules;

  // Dynamic date recalculation sequencer
  const calculateModuleTimelines = () => {
    const datesRecord: Record<string, { start: string; end: string; durationWeeks: number }> = {};
    let currentStart = new Date(startDate);
    if (isNaN(currentStart.getTime())) {
      currentStart = new Date();
    }

    syllabusModules.forEach((mod) => {
      const weeksNeeded = Math.ceil(mod.baseHours / weeklyHours);
      const startCopy = new Date(currentStart);

      const endCopy = new Date(startCopy);
      endCopy.setDate(endCopy.getDate() + weeksNeeded * 7 - 1);

      datesRecord[mod.id] = {
        start: startCopy.toLocaleDateString(language === "ro" ? "ro" : "ru", { month: "short", day: "numeric" }),
        end: endCopy.toLocaleDateString(language === "ro" ? "ro" : "ru", { month: "short", day: "numeric", year: "numeric" }),
        durationWeeks: weeksNeeded,
      };

      // Set the next start to the day after
      const nextStart = new Date(endCopy);
      nextStart.setDate(nextStart.getDate() + 1);
      currentStart = nextStart;
    });

    return datesRecord;
  };

  const projectedDates = calculateModuleTimelines();

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="syllabus-timeline-section" className="relative max-w-5xl mx-auto px-6 md:px-16 py-20 z-10 scroll-mt-24">
      {/* Title block */}
      <div className="flex flex-col items-center justify-center text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-mono mb-4">
          <Layers size={12} className="animate-pulse" />
          <span>{t.syllabus.adaptiveLearningFlow}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
          {t.syllabus.title}
        </h2>
        <p className="text-gray-400 max-w-xl text-xs sm:text-base">
          {t.syllabus.description}
        </p>
      </div>

      {/* Accordion List Container with glowing green timeline line */}
      <div className="relative pl-6 md:pl-12">
        {/* Glowing timeline bar */}
        <div className="absolute left-[7px] md:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500 via-green-600/30 to-zinc-900 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>

        <div className="space-y-8">
          {syllabusModules.map((module, idx) => {
            const isExpanded = expandedId === module.id;
            const dates = projectedDates[module.id];

            return (
              <div key={module.id} className="relative group">
                {/* Node marker on the line */}
                <div
                  onClick={() => toggleExpand(module.id)}
                  className={`absolute -left-[24px] md:-left-[43px] top-[14px] w-[14px] h-[14px] md:w-[22px] md:h-[22px] rounded-full border-2 transition-all duration-300 z-20 cursor-pointer flex items-center justify-center ${
                    isExpanded
                      ? "bg-emerald-500 border-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.7)] scale-110"
                      : "bg-black border-zinc-700 hover:border-emerald-500 hover:bg-emerald-950/40"
                  }`}
                >
                  {isExpanded && (
                    <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-black"></span>
                  )}
                </div>

                {/* Main Card */}
                <div
                  className={`transition-all duration-300 rounded-2xl p-5 md:p-6 border ${
                    isExpanded
                      ? "glassmorphic-glow border-emerald-500/20 shadow-[0_0_30px_rgba(0,0,0,0.4)]"
                      : "glassmorphism border-white/5 hover:border-white/10"
                  }`}
                >
                  <div
                    onClick={() => toggleExpand(module.id)}
                    className="flex justify-between items-center cursor-pointer select-none"
                  >
                    <div className="flex-1 pr-4">
                      {/* Subtitle / Phase */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[9px] font-mono tracking-widest text-emerald-400/80 font-bold uppercase">
                          {module.phase}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono">
                          • {module.baseHours} {t.syllabus.standardHours}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400 font-sans">
                        {module.title}
                      </h3>
                    </div>

                    {/* Completion week status indicators */}
                    <div className="flex items-center space-x-3">
                      <div className="hidden sm:flex flex-col items-end text-right font-mono text-[9px] text-gray-500">
                        <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                          <Calendar size={10} className="mr-1" />
                          <span>{dates?.start} - {dates?.end}</span>
                        </span>
                        <span>({dates?.durationWeeks} {t.syllabus.weeksTotal})</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-emerald-400" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Responsive block for dates showing up on mobile only underneath title */}
                  <div className="flex sm:hidden items-center space-x-1.5 font-mono text-[10px] text-emerald-400 font-semibold mt-2 border-t border-white/5 pt-2">
                    <Calendar size={10} />
                    <span>{dates?.start} - {dates?.end} ({dates?.durationWeeks} {language === "ro" ? "săpt." : "нед."})</span>
                  </div>

                  {/* Expandable Module detail */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-zinc-800/60 mt-4 pt-4 space-y-6">
                          {/* Brief module summary */}
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            {module.description}
                          </p>

                          {/* 4 grid sections: Theory, Practice, Homework, Group Work */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-950/50 p-4 rounded-xl border border-white/5 font-mono text-[11px]">
                            {/* THEORY */}
                            <div className="space-y-1">
                              <span className="text-gray-500 block uppercase text-[10px]">{t.syllabus.theory}</span>
                              <span className="text-white font-semibold flex items-center">
                                <BookOpen size={12} className="text-emerald-400 mr-1.5" />
                                {module.hoursTheory} {language === "ro" ? "ore" : "часов"}
                              </span>
                            </div>

                            {/* PRACTICE */}
                            <div className="space-y-1">
                              <span className="text-gray-500 block uppercase text-[10px]">{t.syllabus.practice}</span>
                              <span className="text-white font-semibold flex items-center">
                                <Laptop size={12} className="text-emerald-400 mr-1.5" />
                                {module.hoursPractice} {language === "ro" ? "ore" : "часов"}
                              </span>
                            </div>

                            {/* HOMEWORK */}
                            <div className="space-y-1">
                              <span className="text-gray-500 block uppercase text-[10px]">{t.syllabus.homework}</span>
                              <span className="text-white font-semibold flex items-center">
                                <CheckCircle size={12} className="text-emerald-400 mr-1.5" />
                                {module.hoursHomework} {language === "ro" ? "ore" : "часов"}
                              </span>
                            </div>

                            {/* GROUP WORK */}
                            <div className="space-y-1">
                              <span className="text-gray-500 block uppercase text-[10px]">{t.syllabus.groupWork}</span>
                              <span className="text-white font-semibold flex items-center">
                                <Flame size={12} className="text-emerald-400 mr-1.5" />
                                {module.hoursGroupWork} {language === "ro" ? "ore" : "часов"}
                              </span>
                            </div>
                          </div>

                          {/* Sub lessons vertical timeline */}
                          <div>
                            <h4 className="text-xs font-mono text-gray-400 tracking-wider mb-2.5 uppercase">
                              {t.syllabus.lectureSandbox}
                            </h4>
                            <div className="space-y-2 pl-1">
                              {module.detailedLessons.map((lesson, idx) => (
                                <div key={idx} className="flex items-start space-x-2.5 text-xs">
                                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></div>
                                  <span className="text-gray-300 leading-relaxed">{lesson}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
