/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { CourseLevel } from "../types";

interface NetworkCanvasProps {
  activeLevel: CourseLevel;
}

export default function NetworkCanvas({ activeLevel }: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });
  const parallaxRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Settings based on level
  const getLevelConfig = (level: CourseLevel) => {
    switch (level) {
      case "beginner":
        return {
          nodeCount: 35,
          connectionDistance: 130,
          speedMult: 0.4,
          glowIntensity: 2,
          lineColorPrefix: "rgba(34, 197, 94, ", // Greenish
          nodeColor: "rgba(34, 197, 94, 0.6)",
          showSecondaryGrid: false,
        };
      case "middle":
        return {
          nodeCount: 65,
          connectionDistance: 110,
          speedMult: 0.9,
          glowIntensity: 6,
          lineColorPrefix: "rgba(16, 185, 129, ", // Emerald Green
          nodeColor: "rgba(16, 185, 129, 0.8)",
          showSecondaryGrid: true,
        };
      case "senior":
        return {
          nodeCount: 110,
          connectionDistance: 95,
          speedMult: 1.6,
          glowIntensity: 12,
          lineColorPrefix: "rgba(6, 182, 212, ", // Cool Cyan-Green Satin
          nodeColor: "rgba(6, 182, 212, 0.9)",
          showSecondaryGrid: true,
        };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Track resize
    const handleResize = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);

    // Mouse interactions
    const handleMouseMove = (e: MouseMoveEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentMouseX = e.clientX - rect.left;
      const currentMouseY = e.clientY - rect.top;
      mouseRef.current.x = currentMouseX;
      mouseRef.current.y = currentMouseY;

      // Subtle feedback vector scaling based on screen bounds center focus
      parallaxRef.current.targetX = ((currentMouseX - width / 2) / (width / 2)) * -30;
      parallaxRef.current.targetY = ((currentMouseY - height / 2) / (height / 2)) * -30;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      parallaxRef.current.targetX = 0;
      parallaxRef.current.targetY = 0;
    };

    // Cast event to standard Typescript types
    type MouseMoveEvent = { clientX: number; clientY: number };
    window.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Node objects definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      originalRadius: number;
      pulseSpeed: number;
      pulsePhase: number;
      binaryChar: string;
    }

    const particles: Particle[] = [];
    const binarySymbols = ["0", "1", "<", ">", "{", "}", "[", "]", "+", "=", "λ", "ø"];

    // Initialize particles
    const initParticles = (count: number) => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const rad = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: rad,
          originalRadius: rad,
          pulseSpeed: Math.random() * 0.05 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          binaryChar: binarySymbols[Math.floor(Math.random() * binarySymbols.length)],
        });
      }
    };

    const config = getLevelConfig(activeLevel);
    initParticles(config.nodeCount);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate parallax offsets (lerp)
      parallaxRef.current.x += (parallaxRef.current.targetX - parallaxRef.current.x) * 0.06;
      parallaxRef.current.y += (parallaxRef.current.targetY - parallaxRef.current.y) * 0.06;

      // Get configuration details dynamically (this allows real-time slider interpolation response)
      const currentConfig = getLevelConfig(activeLevel);

      // Draw faint cybernetic HUD markers in corners
      ctx.strokeStyle = "rgba(34, 197, 94, 0.03)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Draw crosshair grids or corner frames if senior
      if (activeLevel === "senior") {
        ctx.arc(width / 2, height / 2, 200, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw background ambient system status
      ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
      ctx.font = "9px var(--font-mono)";
      ctx.fillText(`SYS.RENDER_LATENCY: <1ms  •  NODES: ${particles.length}  •  MODE: ${activeLevel.toUpperCase()}`, 24, height - 24);

      // Grid layout
      if (currentConfig.showSecondaryGrid) {
        ctx.strokeStyle = "rgba(34, 197, 94, 0.015)";
        ctx.beginPath();
        const step = 80;
        for (let x = 0; x < width; x += step) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += step) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();
      }

      // Update & Draw Particles
      particles.forEach((p, idx) => {
        p.pulsePhase += p.pulseSpeed;
        p.radius = Math.max(0.1, p.originalRadius + Math.sin(p.pulsePhase) * 1.2 * (activeLevel === "senior" ? 2 : 1));

        // Move particle
        p.x += p.vx * currentConfig.speedMult;
        p.y += p.vy * currentConfig.speedMult;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Calculates reactive depth factor (larger original radius scales the parallax more)
        const pDepth = p.originalRadius * 0.8;
        const rx = p.x + parallaxRef.current.x * pDepth;
        const ry = p.y + parallaxRef.current.y * pDepth;

        // Mouse collision - soft push (compared against active interactive mouse coordinate)
        const dx = rx - mouseRef.current.x;
        const dy = ry - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 4;
          p.y += Math.sin(angle) * force * 4;
        }

        // Updated reactive visual coordinates after potential soft push
        const finalRx = p.x + parallaxRef.current.x * pDepth;
        const finalRy = p.y + parallaxRef.current.y * pDepth;

        // Render point
        ctx.fillStyle = currentConfig.nodeColor;
        ctx.beginPath();
        ctx.arc(finalRx, finalRy, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // High spec option: Occasionally draw glowing binary text floating around nodes for senior mode
        if (activeLevel === "senior" && idx % 7 === 0) {
          ctx.fillStyle = "rgba(6, 182, 212, 0.35)";
          ctx.font = "10px var(--font-mono)";
          ctx.fillText(p.binaryChar, finalRx + 8, finalRy - 4);
        } else if (activeLevel === "middle" && idx % 10 === 0) {
          ctx.fillStyle = "rgba(16, 185, 129, 0.25)";
          ctx.font = "9px var(--font-mono)";
          ctx.fillText(p.binaryChar, finalRx + 8, finalRy - 4);
        }

        // Draw connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2Depth = p2.originalRadius * 0.8;
          const r2x = p2.x + parallaxRef.current.x * p2Depth;
          const r2y = p2.y + parallaxRef.current.y * p2Depth;

          const distx = finalRx - r2x;
          const disty = finalRy - r2y;
          const distance = Math.sqrt(distx * distx + disty * disty);

          if (distance < currentConfig.connectionDistance) {
            const alpha = (1 - distance / currentConfig.connectionDistance) * 0.45;
            ctx.strokeStyle = `${currentConfig.lineColorPrefix}${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(finalRx, finalRy);
            ctx.lineTo(r2x, r2y);
            ctx.stroke();

            // Sibling glow pulses along line pathways
            if (activeLevel === "senior" && Math.random() < 0.0006) {
              ctx.fillStyle = "#22d3ee";
              ctx.beginPath();
              ctx.arc((finalRx + r2x) / 2, (finalRy + r2y) / 2, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeLevel]);

  return (
    <canvas
      id="matrix-network-canvas"
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 transition-all duration-[2000ms] ease-in-out bg-black"
      style={{
        filter:
          activeLevel === "beginner"
            ? "hue-rotate(0deg) saturate(1)"
            : activeLevel === "middle"
            ? "hue-rotate(-5deg) saturate(1.2) contrast(1.05)"
            : "hue-rotate(45deg) saturate(1.6) contrast(1.1)", // Cyan shifting
      }}
    />
  );
}
