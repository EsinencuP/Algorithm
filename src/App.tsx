/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { CourseLevel } from "./types";
import NetworkCanvas from "./components/NetworkCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LevelSelector from "./components/LevelSelector";
import ScheduleCalculator from "./components/ScheduleCalculator";
import Syllabus from "./components/Syllabus";
import FeatureGrid from "./components/FeatureGrid";
import Faq from "./components/Faq";
import ConversionBanner from "./components/ConversionBanner";
import EnrollmentModal from "./components/EnrollmentModal";
import Footer from "./components/Footer";
import { useLanguage } from "./LanguageContext";

export default function App() {
  const { t, language } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<CourseLevel>("beginner");
  const [weeklyHours, setWeeklyHours] = useState<number>(10);
  const [startDate, setStartDate] = useState<string>("2026-06-18");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Transition state on language swap
  const [isLangTransitioning, setIsLangTransitioning] = useState(false);
  const prevLanguageRef = useRef(language);

  React.useEffect(() => {
    if (language !== prevLanguageRef.current) {
      setIsLangTransitioning(true);
      const timer = setTimeout(() => {
        setIsLangTransitioning(false);
        prevLanguageRef.current = language;
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [language]);

  // Section Refs for smooth kinetic scrolling
  const levelRef = useRef<HTMLDivElement | null>(null);
  const syllabusRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStartEnrollment = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* 1. Global Interactive Graphic Canvas Background */}
      <NetworkCanvas activeLevel={activeLevel} />

      {/* 2. Glassmorphic Sticky Header Navigation */}
      <Navbar
        activeLevel={activeLevel}
        onNavigateToLevel={() => scrollToSection(levelRef)}
        onNavigateToSyllabus={() => scrollToSection(syllabusRef)}
        onNavigateToFeatures={() => scrollToSection(featuresRef)}
      />

      <div className={`transition-all duration-300 ease-in-out ${isLangTransitioning ? "opacity-20 blur-[1px] scale-[0.998]" : "opacity-100 blur-0 scale-100"}`}>
        {/* 3. Immersive Bottom-Left Anchored "Sentinel" Hero Section */}
        <Hero
          activeLevel={activeLevel}
          onStartNavigate={() => scrollToSection(levelRef)}
          onSyllabusNavigate={() => scrollToSection(syllabusRef)}
        />

      {/* Ambient Radial Mesh divider */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent"></div>

      {/* 4. Horizontal Level Selector (Xiaomi Mimo Style) */}
      <div ref={levelRef} className="scroll-mt-24">
        <LevelSelector
          activeLevel={activeLevel}
          onLevelChange={(level) => setActiveLevel(level)}
        />
      </div>

      {/* 5. Pace & Timeline Adaptability Engine Block (Индивидуальный подход) */}
      <div ref={syllabusRef} className="relative z-10 w-full scroll-mt-24">
        {/* Decorative Grid Line Segment */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16">
          <ScheduleCalculator
            weeklyHours={weeklyHours}
            onHoursChange={(h) => setWeeklyHours(h)}
            startDate={startDate}
            onStartDateChange={(d) => setStartDate(d)}
            totalCourseHours={280} // Combined base modules duration
          />
        </div>

        {/* 6. Recalculated Syllabus Modules Timeline list */}
        <Syllabus weeklyHours={weeklyHours} startDate={startDate} />
      </div>

      {/* 7. Feature Options Grid ("Smart" Tilting Blocks) */}
      <div ref={featuresRef} className="scroll-mt-24">
        <FeatureGrid />
      </div>

      {/* 8. Advanced Informatics FAQ Section (Highly polished QA) */}
      <Faq />

      {/* 9. Bottom High-Contrast Conversion Banner */}
      <ConversionBanner onStartEnrollment={handleStartEnrollment} />

      {/* 10. Cyber Technical Footer */}
      <Footer />
    </div>

    {/* 11. Custom Immersive Enrollment Popup Modal (Tactile Credential Simulator) */}
    <AnimatePresence>
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeLevel={activeLevel}
        weeklyHours={weeklyHours}
        startDate={startDate}
      />
    </AnimatePresence>
    </div>
  );
}
