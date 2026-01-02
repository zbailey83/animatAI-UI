'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Neural Interface',
    category: 'AI/ML',
    description: 'Real-time brain-computer interface visualization',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Quantum Dashboard',
    category: 'Data Viz',
    description: 'Multi-dimensional data exploration platform',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Holographic UI',
    category: 'AR/VR',
    description: 'Spatial computing interface design system',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Sonic Visualizer',
    category: 'Audio',
    description: 'Real-time audio frequency analysis tool',
    color: 'from-orange-500 to-red-500'
  }
];

export default function MagneticCardGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-bg-app py-24 px-6 overflow-hidden"
    >
      {/* Technical Grid */}
      <div className="absolute inset-0 technical-grid opacity-30" />

      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
          )
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Hover to experience magnetic interaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <MagneticCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredCard === project.id}
              onHover={() => setHoveredCard(project.id)}
              onLeave={() => setHoveredCard(null)}
              mouseX={smoothMouseX}
              mouseY={smoothMouseY}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface MagneticCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  mouseX: any;
  mouseY: any;
}

function MagneticCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  mouseX,
  mouseY
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCardPosition({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    });
  }, []);

  // Calculate magnetic effect
  const magneticX = useTransform(mouseX, (x: number) => {
    if (!isHovered) return 0;
    const cardCenterX = cardPosition.x + cardPosition.width / 2;
    const distance = x - (cardCenterX - cardPosition.x);
    return Math.max(-20, Math.min(20, distance * 0.1));
  });

  const magneticY = useTransform(mouseY, (y: number) => {
    if (!isHovered) return 0;
    const cardCenterY = cardPosition.y + cardPosition.height / 2;
    const distance = y - (cardCenterY - cardPosition.y);
    return Math.max(-20, Math.min(20, distance * 0.1));
  });

  const rotateX = useTransform(mouseY, (y: number) => {
    if (!isHovered) return 0;
    const cardCenterY = cardPosition.y + cardPosition.height / 2;
    const distance = y - (cardCenterY - cardPosition.y);
    return Math.max(-15, Math.min(15, -distance * 0.02));
  });

  const rotateY = useTransform(mouseX, (x: number) => {
    if (!isHovered) return 0;
    const cardCenterX = cardPosition.x + cardPosition.width / 2;
    const distance = x - (cardCenterX - cardPosition.x);
    return Math.max(-15, Math.min(15, distance * 0.02));
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        x: magneticX,
        y: magneticY,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      className="group cursor-pointer"
    >
      <div className="glass-card p-8 h-full relative overflow-hidden">
        {/* Corner Brackets */}
        <div className="corner-brackets" />

        {/* Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          style={{ transform: 'translateZ(20px)' }}
        />

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
          <motion.div
            initial={false}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="mb-4"
          >
            <span className="font-mono text-xs text-accent-blue tracking-wider uppercase">
              {project.category}
            </span>
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          <motion.div
            initial={false}
            animate={{ x: isHovered ? 10 : 0 }}
            className="flex items-center gap-2 text-accent-blue font-medium"
          >
            <span>View Project</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="group-hover:translate-x-2 transition-transform"
            >
              <path
                d="M4 10h12m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={isHovered ? {
            backgroundPosition: ['0% 0%', '100% 100%']
          } : {}}
          transition={{ duration: 1.5, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}
