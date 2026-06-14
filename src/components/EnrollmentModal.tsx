/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { X, Cpu, Sparkles, Shield } from "lucide-react";
import { CourseLevel } from "../types";
import { useLanguage } from "../LanguageContext";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeLevel: CourseLevel;
  weeklyHours: number;
  startDate: string;
}

export default function EnrollmentModal({
  isOpen,
  onClose,
  activeLevel,
  weeklyHours,
  startDate,
}: EnrollmentModalProps) {
  const { t, language } = useLanguage();
  const [enrollName, setEnrollName] = useState("");
  const [enrollEmail, setEnrollEmail] = useState("");
  const [enrollSuccessReady, setEnrollSuccessReady] = useState(false);

  if (!isOpen) return null;

  const submitEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (enrollName && enrollEmail) {
      setEnrollSuccessReady(true);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after closure transition finishes
    setTimeout(() => {
      setEnrollSuccessReady(false);
      setEnrollName("");
      setEnrollEmail("");
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Body Case */}
      <motion.div
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-zinc-950 border border-emerald-500/30 rounded-2xl max-w-md w-full p-6 md:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.25)] z-10 font-mono text-[11px]"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 cursor-pointer"
        >
          <X size={18} />
        </button>

        {!enrollSuccessReady ? (
          <form onSubmit={submitEnrollment} className="space-y-6">
            {/* Title */}
            <div className="flex items-center space-x-2 text-emerald-400 border-b border-white/5 pb-4">
              <Cpu size={14} />
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 font-sans">
                {t.modal.initiateEnroll}
              </span>
            </div>

            <div className="bg-zinc-900 border border-white/5 p-4 rounded-lg space-y-2 text-gray-400">
              <div>
                {t.modal.cohort}: <span className="text-white font-mono">CY-42</span>
              </div>
              <div>
                {t.modal.selectedSector}:{" "}
                <span className="text-emerald-400 uppercase font-bold">
                  {t.hero.phases[activeLevel].split("//")[1]?.trim() || activeLevel}
                </span>
              </div>
              <div>
                {t.modal.estimatedTerm}:{" "}
                <span className="text-white">
                  {Math.ceil(280 / weeklyHours)} {t.modal.weeksLabel} ({weeklyHours} H/
                  {language === "ro" ? "săpt." : "нед."})
                </span>
              </div>
            </div>

            {/* Name field */}
            <div className="space-y-1.5">
              <label htmlFor="student-full-name" className="text-[10px] text-gray-500 uppercase tracking-wider block">
                {t.modal.operatorName}
              </label>
              <input
                id="student-full-name"
                type="text"
                required
                placeholder={t.modal.operatorPlaceholder}
                value={enrollName}
                onChange={(e) => setEnrollName(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 text-xs"
              />
            </div>

            {/* Email field */}
            <div className="space-y-1.5">
              <label htmlFor="student-comms-address" className="text-[10px] text-gray-500 uppercase tracking-wider block">
                {t.modal.commsAddress}
              </label>
              <input
                id="student-comms-address"
                type="email"
                required
                placeholder={t.modal.commsPlaceholder}
                value={enrollEmail}
                onChange={(e) => setEnrollEmail(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 text-xs"
              />
            </div>

            {/* Submission prompt */}
            <button
              id="submit-matrix-enroll"
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 cursor-pointer shadow-[0_0_15px_rgba(34,197,94,0.2)] font-sans"
            >
              <Sparkles size={14} />
              <span>{t.modal.registerBtn}</span>
            </button>

            <div className="text-[9px] text-zinc-600 text-center leading-normal">
              {t.modal.footerDisclaimer}
            </div>
          </form>
        ) : (
          <div className="text-center py-8 space-y-6">
            {/* Grid Success Badge */}
            <div className="mx-auto w-14 h-14 bg-emerald-500/10 border border-emerald-400 rounded-full flex items-center justify-center text-emerald-400 glowing-pulse">
              <Shield size={24} />
            </div>

            <div className="space-y-2">
              <h3 className="text-md font-bold text-white uppercase tracking-widest font-sans">
                {t.modal.successTitle}
              </h3>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-sm mx-auto">
                {t.modal.successMessage} <span className="text-white font-bold">{enrollName}</span>.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/5 p-4 rounded-lg text-left text-[10px] space-y-1.5 text-zinc-400">
              <div className="text-emerald-400 font-bold uppercase mb-1">{t.modal.ticketLabel} #331A8</div>
              <div>OPERATOR: {enrollEmail}</div>
              <div>
                {t.modal.sectorsReserved}:{" "}
                {t.hero.phases[activeLevel].split("//")[1]?.trim() || activeLevel.toUpperCase()}
              </div>
              <div>
                {t.modal.launchMatrix}: {startDate}
              </div>
              <div>
                {t.modal.timingAssignment}: {weeklyHours} Hrs/{language === "ro" ? "Week" : "Нед"}
              </div>
            </div>

            <button
              id="close-enroll-modal"
              onClick={handleClose}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 py-3 rounded-lg text-xs tracking-wider uppercase cursor-pointer"
            >
              {t.modal.close}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
