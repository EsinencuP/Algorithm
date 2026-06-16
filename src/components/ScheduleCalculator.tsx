/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sliders, Calendar, Flame, GraduationCap, Clock } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface ScheduleCalculatorProps {
  weeklyHours: number;
  onHoursChange: (hours: number) => void;
  startDate: string;
  onStartDateChange: (date: string) => void;
  totalCourseHours: number;
}

export default function ScheduleCalculator({
  weeklyHours,
  onHoursChange,
  startDate,
  onStartDateChange,
  totalCourseHours,
}: ScheduleCalculatorProps) {
  const { t, language } = useLanguage();

  // Compute total weeks needed
  const totalWeeks = Math.ceil(totalCourseHours / weeklyHours);

  // Compute graduation date
  const getGraduationDate = () => {
    let start = new Date(startDate);
    if (isNaN(start.getTime())) {
      start = new Date();
    }
    start.setDate(start.getDate() + totalWeeks * 7);
    return start.toLocaleDateString(language === "ro" ? "ro" : "ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get dynamic custom badges based on weekly hours intensity
  const getIntensityInfo = (hours: number) => {
    if (hours <= 6) {
      return {
        label: t.scheduleCalculator.intensities.casual.label,
        color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
        desc: t.scheduleCalculator.intensities.casual.desc,
      };
    } else if (hours <= 12) {
      return {
        label: t.scheduleCalculator.intensities.balanced.label,
        color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
        desc: t.scheduleCalculator.intensities.balanced.desc,
      };
    } else if (hours <= 18) {
      return {
        label: t.scheduleCalculator.intensities.grindcore.label,
        color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
        desc: t.scheduleCalculator.intensities.grindcore.desc,
      };
    } else {
      return {
        label: t.scheduleCalculator.intensities.overload.label,
        color: "text-red-500 border-red-500/30 bg-red-500/5",
        desc: t.scheduleCalculator.intensities.overload.desc,
      };
    }
  };

  const intensity = getIntensityInfo(weeklyHours);

  return (
    <div className="relative glassmorphic-glow rounded-3xl p-4 sm:p-6 md:p-8 border border-white/5 animate-fade-in">
      <div className="absolute top-4 right-4 text-[10px] font-mono text-emerald-400 flex items-center space-x-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        <span>{t.scheduleCalculator.liveIndicator}</span>
      </div>

      <div className="flex items-center space-x-3 mb-6">
        <GraduationCap className="text-emerald-400 w-6 h-6" />
        <h3 className="text-xl font-bold text-white tracking-tight font-sans">
          {t.scheduleCalculator.title}
        </h3>
      </div>

      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8">
        {t.scheduleCalculator.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Dial controls */}
        <div className="space-y-6">
          {/* Slider for Hours */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-500">{t.scheduleCalculator.weeklyAllocation}</span>
              <span className="text-emerald-400 font-bold text-sm">
                {weeklyHours} {language === "ro" ? "Ore / Săpt." : "Часов / Нед."}
              </span>
            </div>
            <input
              id="weekly-hours-slider"
              type="range"
              min="4"
              max="24"
              value={weeklyHours}
              onChange={(e) => onHoursChange(parseInt(e.target.value))}
              className="w-full accent-emerald-500 h-2 bg-white/5 rounded-lg cursor-ew-resize min-h-[44px]"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>{t.scheduleCalculator.minLabel}</span>
              <span>{t.scheduleCalculator.maxLabel}</span>
            </div>
          </div>

          {/* Date Picker Input */}
          <div className="space-y-2">
            <label htmlFor="course-start-date" className="block text-xs font-mono text-gray-500">
              {t.scheduleCalculator.commencementDate}
            </label>
            <div className="relative">
              <input
                id="course-start-date"
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-xs text-white font-mono focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 min-h-[44px]"
              />
            </div>
          </div>
        </div>

        {/* Right Dynamic outputs summary */}
        <div className="bg-black/30 border border-white/5 p-4 sm:p-5 rounded-2xl flex flex-col justify-between h-full space-y-4">
          <div>
            <span className="text-[10px] font-mono text-gray-500 block uppercase">
              {t.scheduleCalculator.studyIntensityProfile}
            </span>
            <div className="flex items-center space-x-2 mt-1.5 mb-2">
              <span className={`inline-block border text-[10px] font-mono px-2 py-0.5 rounded font-bold ${intensity.color} whitespace-nowrap`}>
                {intensity.label}
              </span>
              <Flame size={12} className={weeklyHours > 12 ? "text-amber-500 animate-pulse" : "text-gray-500"} />
            </div>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              {intensity.desc}
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-gray-500 block text-[9px] uppercase whitespace-nowrap overflow-hidden text-ellipsis">{t.scheduleCalculator.totalDuration}</span>
              <span className="text-white text-sm font-bold block mt-1">
                {totalWeeks} {language === "ro" ? "Săptămâni" : "Недель"}
              </span>
              <span className="text-[10px] text-gray-600 block">({totalCourseHours} {t.scheduleCalculator.totalHours})</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[9px] uppercase whitespace-nowrap overflow-hidden text-ellipsis">{t.scheduleCalculator.gradVector}</span>
              <span className="text-emerald-400 text-sm font-bold block mt-1 leading-snug break-words">
                {getGraduationDate()}
              </span>
              <span className="text-[10px] text-gray-600 block">{t.scheduleCalculator.paceLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
