/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Users2, CalendarDays, Award, ChevronRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface FeatureCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  key?: string;
}

function FeatureCard({ icon, title, badge, description, bullets }: FeatureCardProps) {
  const [coords, setCoords] = useState({ rX: 0, rY: 0, sX: 0, sY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x - width / 2) / (width / 2);
    const yPct = (y - height / 2) / (height / 2);

    const maxTilt = 8; // Restrain to a premium, subtle 8 degrees
    setCoords({
      rX: -yPct * maxTilt,
      rY: xPct * maxTilt,
      sX: x,
      sY: y
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ rX: 0, rY: 0, sX: 0, sY: 0 });
  };

  const shouldApplyTilt = isHovered && !isTouchDevice;

  return (
    <div
      className="perspective-1000 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative transition-all duration-300 rounded-3xl p-5 md:p-8 border glassmorphism cursor-pointer overflow-hidden h-full flex flex-col justify-between"
        style={{
          transform: shouldApplyTilt
            ? `rotateX(${coords.rX}deg) rotateY(${coords.rY}deg) scale(1.02)`
            : `rotateX(0deg) rotateY(0deg) scale(1)`,
          boxShadow: shouldApplyTilt
            ? "0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.15)"
            : "0 4px 20px rgba(0, 0, 0, 0.4)",
          borderColor: shouldApplyTilt
            ? "rgba(16, 185, 129, 0.35)"
            : "rgba(255, 255, 255, 0.04)"
        }}
      >
        {/* Apple-style Cursor Light Shine Overlay */}
        {shouldApplyTilt && (
          <div
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
            style={{
              background: `radial-gradient(circle 200px at ${coords.sX}px ${coords.sY}px, rgba(16, 185, 129, 0.15), transparent 80%)`
            }}
          />
        )}

        {/* Content Block */}
        <div>
          {/* Header block with icon and tag badge */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="p-3 bg-zinc-900 border border-white/5 rounded-2xl text-emerald-400">
              {icon}
            </div>
            <span className="text-[9px] font-mono border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {badge}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-sans">
            {title}
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 md:min-h-[96px] lg:min-h-[110px]">
            {description}
          </p>
        </div>

        {/* Bullet points mapping */}
        <div className="space-y-3 pt-4 border-t border-white/5">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs">
              <ChevronRight size={12} className="text-emerald-500 shrink-0" />
              <span className="text-gray-300 font-mono text-[11px]">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeatureGrid() {
  const { t } = useLanguage();

  const getCardIcon = (id: string) => {
    switch (id) {
      case "individual":
        return <Users2 size={24} />;
      case "schedule":
        return <CalendarDays size={24} />;
      case "access":
        return <Award size={24} />;
      default:
        return <Award size={24} />;
    }
  };

  const cards = t.featureGrid.cards;

  return (
    <section id="features-grid-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-24 z-10 scroll-mt-24">
      {/* Title block */}
      <div className="mb-10 md:mb-14 text-center md:text-left animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
          {t.featureGrid.title}
        </h2>
        <p className="text-gray-400 max-w-xl text-sm sm:text-base">
          {t.featureGrid.description}
        </p>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            id={card.id}
            icon={getCardIcon(card.id)}
            title={card.title}
            badge={card.badge}
            description={card.description}
            bullets={card.bullets}
          />
        ))}
      </div>
    </section>
  );
}
