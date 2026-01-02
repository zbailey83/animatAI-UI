'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';

const text = "CREATIVE VISION";

interface Particle {
  id: number;
  char: string;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
}

export default function KineticTypographyReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isExploded, setIsExploded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Create particles from text
    const chars = text.split('');
    const newParticles: Particle[] = chars.map((char, i) => ({
      id: i,
      char,
      x: 0,
      y: 0,
      originalX: i * 60 - (chars.length * 60) / 2,
      originalY: 0
    }));
    setParticles(newParticles);
  }, []);

  const explode = () => {
    if (isExploded) return;
    setIsExploded(true);

    // GSAP explosion animation
    particles.forEach((particle, i) => {
      const angle = (Math.PI * 2 * i) / particles.length;
      const distance = 300 + Math.random() * 200;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      gsap.to(`#particle-${i}`, {
        x,
        y,
        rotation: Math.random() * 720 - 360,
        scale: Math.random() * 2 + 0.5,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: i * 0.02
      });
    });

    // Reform after explosion
    setTimeout(() => {
      particles.forEach((particle, i) => {
        gsap.to(`#particle-${i}`, {
          x: particle.originalX,
          y: particle.originalY,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
          delay: i * 0.03
        });
      });
      setIsExploded(false);
    }, 2000);
  };

  const wave = () => {
    particles.forEach((particle, i) => {
      gsap.to(`#particle-${i}`, {
        y: -50,
        duration: 0.5,
        ease: 'power2.out',
        delay: i * 0.05,
        yoyo: true,
        repeat: 1
      });
    });
  };

  const glitch = () => {
    particles.forEach((particle, i) => {
      const timeline = gsap.timeline();

      for (let j = 0; j < 5; j++) {
        timeline.to(`#particle-${i}`, {
          x: particle.originalX + (Math.random() * 20 - 10),
          y: particle.originalY + (Math.random() * 20 - 10),
          duration: 0.05,
          ease: 'none'
        });
      }

      timeline.to(`#particle-${i}`, {
        x: particle.originalX,
        y: particle.originalY,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  };

  return (
    <div className="relative min-h-screen bg-bg-app flex items-center justify-center overflow-hidden py-24">
      {/* Technical Grid */}
      <div className="absolute inset-0 technical-grid opacity-20" />

      {/* Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-[600px] h-[600px] bg-accent-blue blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-mono text-accent-blue tracking-wider uppercase mb-2">
            Kinetic Typography
          </h2>
          <p className="text-text-secondary">
            Powered by GSAP Timeline Animations
          </p>
        </motion.div>

        {/* Particle Container */}
        <div
          ref={containerRef}
          className="relative h-[200px] flex items-center justify-center mb-16"
        >
          {particles.map((particle, i) => (
            <motion.div
              key={particle.id}
              id={`particle-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, type: 'spring' }}
              className="absolute text-7xl md:text-9xl font-bold cursor-pointer select-none"
              style={{
                x: particle.originalX,
                y: particle.originalY,
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
              }}
              onMouseEnter={() => {
                gsap.to(`#particle-${i}`, {
                  scale: 1.3,
                  color: '#3b82f6',
                  duration: 0.3,
                  ease: 'power2.out'
                });
              }}
              onMouseLeave={() => {
                gsap.to(`#particle-${i}`, {
                  scale: 1,
                  color: 'var(--text-primary)',
                  duration: 0.3,
                  ease: 'power2.out'
                });
              }}
            >
              {particle.char === ' ' ? '\u00A0' : particle.char}
            </motion.div>
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={explode}
            disabled={isExploded}
            className="tech-btn-primary px-8 py-4 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Explode & Reform
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={wave}
            className="glass-card px-8 py-4 rounded-xl font-medium hover:border-accent-blue transition-colors"
          >
            Wave Effect
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={glitch}
            className="glass-card px-8 py-4 rounded-xl font-medium hover:border-accent-green transition-colors"
          >
            Glitch Mode
          </motion.button>
        </div>

        {/* Technical Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 glass-panel inline-block px-6 py-3"
        >
          <p className="font-mono text-xs text-text-muted tracking-wider">
            GSAP Timeline • Elastic Easing • Particle System
          </p>
        </motion.div>
      </div>
    </div>
  );
}
