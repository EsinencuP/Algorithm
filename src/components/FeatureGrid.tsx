/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Users2, CalendarDays, Award, ChevronRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface FeatureCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  key?: string | number;
}

function FeatureCard({ icon, title, badge, description, bullets }: FeatureCardProps) {
  // Use state to implement the 3D mouse tilt interaction
  const [coords, setCoords] = useState({ rX: 0, rY: 0, sX: 0, sY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Standardize coordinates relative to center
    const xPct = (x - width / 2) / (width / 2); // Ranges from -1 to 1
    const yPct = (y - height / 2) / (height / 2); // Ranges from -1 to 1

    // Apply tilt angles
    const maxTilt = 12; // Maximum tilt degrees
    setCoords({
      rX: -yPct * maxTilt,
      rY: xPct * maxTilt,
      sX: x, // Direct mouse X offset
      sY: y  // Direct mouse Y offset
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ rX: 0, rY: 0, sX: 0, sY: 0 });
  };

  return (
    <div
      className="perspective-1000 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative transition-all duration-300 rounded-3xl p-6 md:p-8 border glassmorphism cursor-pointer overflow-hidden h-full flex flex-col justify-between"
        style={{
          transform: isHovered
            ? `rotateX(${coords.rX}deg) rotateY(${coords.rY}deg) scale(1.025)`
            : `rotateX(0deg) rotateY(0deg) scale(1)`,
          boxShadow: isHovered
            ? "0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.15)"
            : "0 4px 20px rgba(0, 0, 0, 0.4)",
          borderColor: isHovered
            ? "rgba(16, 185, 129, 0.35)"
            : "rgba(255, 255, 255, 0.04)"
        }}
      >
        {/* Apple-style Cursor Light Shine Overlay */}
        {isHovered && (
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
          <div className="flex items-center justify-between mb-8">
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

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 min-h-[120px] sm:min-h-[100px] md:min-h-[140px] lg:min-h-[110px]">
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
    <section id="features-grid-section" className="relative max-w-7xl mx-auto px-6 md:px-16 py-24 z-10 scroll-mt-24">
      {/* Title block */}
      <div className="mb-14 text-center md:text-left animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
          {t.featureGrid.title}
        </h2>
        <p className="text-gray-400 max-w-xl text-base">
          {t.featureGrid.description}
        </p>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
