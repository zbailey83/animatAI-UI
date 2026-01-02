'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Layer {
  id: number;
  depth: number;
  content: string;
  color: string;
  icon: string;
}

const layers: Layer[] = [
  { id: 1, depth: 0.1, content: 'Background Layer', color: 'from-blue-900/20 to-purple-900/20', icon: '◆' },
  { id: 2, depth: 0.3, content: 'Mid Layer', color: 'from-purple-800/30 to-pink-800/30', icon: '◇' },
  { id: 3, depth: 0.5, content: 'Content Layer', color: 'from-pink-700/40 to-orange-700/40', icon: '○' },
  { id: 4, depth: 0.7, content: 'Foreground', color: 'from-orange-600/50 to-red-600/50', icon: '●' },
];

export default function ParallaxScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP ScrollTrigger for additional effects
    const ctx = gsap.context(() => {
      // Floating particles
      gsap.utils.toArray('.particle').forEach((particle: any, i) => {
        gsap.to(particle, {
          y: -100 - (i * 50),
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          }
        });
      });

      // Rotating elements
      gsap.to('.rotate-element', {
        rotation: 360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        }
      });

      // Scale effect on center content
      gsap.to('.scale-element', {
        scale: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-zinc-950"
      style={{ height: '300vh' }}
    >
      {/* Fixed viewport container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Technical Grid */}
        <div className="absolute inset-0 technical-grid opacity-20" />

        {/* Parallax Layers */}
        {layers.map((layer, index) => (
          <ParallaxLayer
            key={layer.id}
            layer={layer}
            progress={smoothProgress}
            index={index}
          />
        ))}

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <motion.div
            className="scale-element text-center"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1, 0.5, 0]),
            }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6"
              style={{
                y: useTransform(smoothProgress, [0, 1], [0, -200]),
              }}
            >
              <span className="text-gradient">Parallax</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto px-6"
              style={{
                y: useTransform(smoothProgress, [0, 1], [0, -150]),
              }}
            >
              Multi-layer depth scrolling with GSAP ScrollTrigger
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
            >
              <div className="w-full h-full bg-accent-blue rounded-full blur-sm" />
            </div>
          ))}
        </div>

        {/* Rotating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="rotate-element absolute top-1/4 left-1/4 w-64 h-64 border border-accent-blue/20 rounded-full" />
          <div className="rotate-element absolute bottom-1/4 right-1/4 w-96 h-96 border border-accent-green/20 rounded-full" style={{ animationDelay: '1s' }} />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50"
          style={{
            opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
          }}
        >
          <div className="glass-panel px-6 py-3 flex items-center gap-3">
            <span className="font-mono text-xs text-text-muted tracking-wider uppercase">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 4v12m0 0l-4-4m4 4l4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-blue"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-800 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-blue to-accent-green"
            style={{ scaleX: smoothProgress, transformOrigin: '0%' }}
          />
        </div>

        {/* Technical Info */}
        <motion.div
          className="absolute top-6 left-6 glass-panel px-4 py-2 z-50"
          style={{
            opacity: useTransform(smoothProgress, [0.8, 1], [1, 0]),
          }}
        >
          <p className="font-mono text-xs text-text-muted tracking-wider">
            SCROLL: <motion.span>{useTransform(smoothProgress, (v) => Math.round(v * 100))}</motion.span>%
          </p>
        </motion.div>
      </div>
    </div>
  );
}

interface ParallaxLayerProps {
  layer: Layer;
  progress: any;
  index: number;
}

function ParallaxLayer({ layer, progress, index }: ParallaxLayerProps) {
  const y = useTransform(progress, [0, 1], [0, -500 * layer.depth]);
  const opacity = useTransform(
    progress,
    [0, 0.5, 1],
    [0.3 + (index * 0.1), 1, 0.3]
  );
  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    [1, 1 + (layer.depth * 0.3), 1]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        y,
        opacity,
        scale,
        zIndex: index * 10,
      }}
    >
      <div className={`relative w-full max-w-4xl mx-auto px-6`}>
        <motion.div
          className={`glass-card p-12 bg-gradient-to-br ${layer.color} backdrop-blur-xl`}
          style={{
            x: useTransform(progress, [0, 1], [
              index % 2 === 0 ? -100 : 100,
              index % 2 === 0 ? 100 : -100
            ]),
          }}
        >
          <div className="corner-brackets" />

          <div className="flex items-center gap-6">
            <motion.div
              className="text-6xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + (index * 2),
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {layer.icon}
            </motion.div>

            <div>
              <h3 className="text-3xl font-bold mb-2">
                {layer.content}
              </h3>
              <p className="text-text-secondary font-mono text-sm">
                Depth: {layer.depth.toFixed(1)} • Layer {layer.id}
              </p>
            </div>
          </div>

          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${layer.depth > 0.5 ? '#3b82f6' : '#22c55e'}, transparent)`,
              opacity: 0.2,
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
