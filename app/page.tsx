'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Layers, Sparkles, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
    const titleText = "ANIMATAI";
    const words = titleText.split('');

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
            rotate: -10,
        },
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 grid-bg pointer-events-none" />

            {/* Noise Texture */}
            <div className="fixed inset-0 noise-texture pointer-events-none" />

            {/* Theme Toggle - Fixed Position */}
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            <main className="relative flex flex-col items-center justify-center px-6 py-24 text-center min-h-screen">
                {/* Floating Geometric Shapes */}
                <motion.div
                    className="absolute top-20 left-10 w-24 h-24 brutalist-border bg-accent-yellow rotate-12"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [12, 20, 12]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-20 w-32 h-32 brutalist-border-thick bg-accent-pink"
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-32 w-20 h-20 brutalist-border bg-accent-cyan -rotate-6"
                    animate={{
                        x: [0, 20, 0],
                        rotate: [-6, 6, -6]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="relative z-10 space-y-16 max-w-6xl">
                    {/* Logo Badge */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="brutalist-border-thick brutalist-shadow-lg bg-accent-lime p-4 rotate-3 hover:rotate-6 transition-transform cursor-pointer">
                            <Box className="text-border w-12 h-12" strokeWidth={3} />
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <div className="space-y-6">
                        <motion.h1
                            className="text-7xl md:text-[12rem] font-black tracking-tighter leading-[0.85] uppercase flex flex-wrap justify-center gap-2 md:gap-4"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {words.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={child}
                                    className="inline-block brutalist-border-thick brutalist-shadow-xl px-4 md:px-8 py-2 md:py-4 bg-accent-yellow hover:bg-accent-pink transition-colors cursor-default"
                                    style={{
                                        display: 'inline-block',
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="brutalist-card p-8 inline-block"
                        >
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
                                DESIGN CERTAINTY
                            </h2>
                        </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-bold leading-relaxed tracking-tight"
                    >
                        THE FINAL WORD IN{' '}
                        <span className="inline-block brutalist-border bg-accent-cyan px-3 py-1 text-border">
                            AI-DRIVEN ANIMATION
                        </span>
                        <br />
                        ELITE GSAP & FRAMER MOTION SCHEMAS
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4, type: "spring" }}
                        className="pt-8"
                    >
                        <Link
                            href="/library"
                            className="brutalist-btn bg-accent-orange hover:bg-accent-lime px-12 py-6 inline-flex items-center gap-4 text-2xl"
                        >
                            <span className="text-border">EXPLORE LIBRARY</span>
                            <ArrowRight className="text-border" strokeWidth={4} size={32} />
                        </Link>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24">
                        {[
                            {
                                icon: Zap,
                                bg: 'bg-accent-yellow',
                                title: 'GSAP MASTERY',
                                desc: 'FINE-TUNED RULES FOR COMPLEX SEQUENCING'
                            },
                            {
                                icon: Layers,
                                bg: 'bg-accent-pink',
                                title: 'MOTION FLOW',
                                desc: 'DECLARATIVE SCHEMAS FOR SEAMLESS UI'
                            },
                            {
                                icon: Sparkles,
                                bg: 'bg-accent-cyan',
                                title: 'AI NATIVE',
                                desc: 'OPTIMIZED FOR CURSOR & WINDSURF'
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6 + (i * 0.1) }}
                                className="brutalist-card p-6 space-y-4 hover:-translate-y-2 transition-transform group cursor-pointer"
                            >
                                <div className={`brutalist-border ${feature.bg} p-4 w-fit group-hover:rotate-12 transition-transform`}>
                                    <feature.icon className="text-border" size={32} strokeWidth={3} />
                                </div>
                                <h3 className="text-xl font-black tracking-tight uppercase text-left">
                                    {feature.title}
                                </h3>
                                <p className="text-text-muted font-bold text-sm text-left uppercase leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer Badge */}
            <div className="fixed bottom-6 left-6">
                <div className="brutalist-border brutalist-shadow bg-bg-secondary px-6 py-3">
                    <p className="font-black text-sm tracking-widest uppercase">
                        NEO BRUTALISM
                    </p>
                </div>
            </div>
        </div>
    );
}
