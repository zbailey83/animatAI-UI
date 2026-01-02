'use client';

import { motion } from 'framer-motion';
import MagneticCardGallery from '@/components/portfolio/MagneticCardGallery';
import KineticTypographyReveal from '@/components/portfolio/KineticTypographyReveal';
import ParallaxScrollScene from '@/components/portfolio/ParallaxScrollScene';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen bg-bg-app">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] glass-panel border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-2 hover:border-accent-blue transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="tech-btn-primary px-6 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2"
            >
              <span>View Code</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="inline-block glass-panel px-4 py-2 mb-6"
          >
            <p className="font-mono text-xs text-accent-blue tracking-wider uppercase">
              Portfolio Showcase
            </p>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Jaw-Dropping</span>
            <br />
            Animation Blocks
          </h1>

          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
            Three production-ready animation components showcasing the power of{' '}
            <span className="text-accent-blue font-medium">GSAP</span> and{' '}
            <span className="text-accent-green font-medium">Framer Motion</span>.
            Built with animatAI architecture.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#magnetic-cards"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="tech-btn-primary px-8 py-4 rounded-xl font-medium"
            >
              Explore Blocks
            </motion.a>
            <motion.a
              href="#technical-specs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 rounded-xl font-medium hover:border-accent-blue transition-colors"
            >
              Technical Specs
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Block 1: Magnetic Card Gallery */}
      <section id="magnetic-cards" className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <BlockHeader
            number="01"
            title="Magnetic 3D Card Gallery"
            description="Interactive cards with magnetic cursor tracking, 3D transforms, and smooth GSAP follow animations"
            tags={['Framer Motion', 'GSAP', '3D Transforms', 'Magnetic Effect']}
          />
        </div>
        <MagneticCardGallery />
      </section>

      {/* Block 2: Kinetic Typography */}
      <section id="kinetic-typography" className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <BlockHeader
            number="02"
            title="Kinetic Typography Reveal"
            description="Text particles that explode and reform using GSAP timeline sequences with elastic easing"
            tags={['GSAP Timeline', 'Particle System', 'Elastic Easing', 'Interactive']}
          />
        </div>
        <KineticTypographyReveal />
      </section>

      {/* Block 3: Parallax Scroll Scene */}
      <section id="parallax-scroll" className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <BlockHeader
            number="03"
            title="Parallax Scroll Scene"
            description="Multi-layer depth scrolling with GSAP ScrollTrigger and smooth parallax effects"
            tags={['GSAP ScrollTrigger', 'Parallax', 'Scroll Animations', 'Multi-layer']}
          />
        </div>
        <ParallaxScrollScene />
      </section>

      {/* Technical Specs */}
      <section id="technical-specs" className="relative py-24 px-6">
        <div className="absolute inset-0 technical-grid opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Technical Architecture</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Built with modern animation libraries and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'GSAP Integration',
                items: [
                  'ScrollTrigger for scroll-based animations',
                  'Timeline sequences for complex choreography',
                  'Elastic and custom easing functions',
                  'High-performance scrubbing'
                ]
              },
              {
                title: 'Framer Motion',
                items: [
                  'useScroll for parallax effects',
                  'useTransform for value mapping',
                  'useSpring for smooth physics',
                  'Motion components for declarative animations'
                ]
              },
              {
                title: 'Performance',
                items: [
                  'GPU-accelerated transforms',
                  'RequestAnimationFrame optimization',
                  'Lazy loading and code splitting',
                  'Minimal re-renders with React hooks'
                ]
              },
              {
                title: 'Design System',
                items: [
                  'Technical Artifacts theme',
                  'Glassmorphism effects',
                  'Corner bracket components',
                  'Consistent color tokens'
                ]
              }
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent-blue">
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-accent-green mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-secondary mb-4">
            Built with <span className="text-gradient font-bold">animatAI</span>
          </p>
          <p className="font-mono text-xs text-text-muted tracking-wider uppercase">
            GSAP × Framer Motion × Technical Artifacts
          </p>
        </div>
      </footer>
    </div>
  );
}

interface BlockHeaderProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

function BlockHeader({ number, title, description, tags }: BlockHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-start gap-6">
        <div className="glass-panel px-6 py-3 corner-brackets">
          <span className="font-mono text-3xl font-bold text-accent-blue">
            {number}
          </span>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            {title}
          </h2>
          <p className="text-text-secondary text-lg mb-4 max-w-3xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="glass-panel px-3 py-1 text-xs font-mono tracking-wider text-accent-blue"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
