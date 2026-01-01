'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Layers, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

export default function Home() {
    const titleText = "DESIGN CERTAINTY";
    const words = titleText.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-hidden">
            {/* Grain Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <main className="relative flex flex-col items-center justify-center px-6 py-24 text-center min-h-screen">
                {/* Animated Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-700" />

                <div className="relative z-10 space-y-12 max-w-5xl">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40 rotate-3">
                            <Sparkles className="text-white" size={24} />
                        </div>
                        <span className="text-2xl font-black tracking-tighter uppercase italic">animatAI</span>
                    </div>

                    <div className="space-y-4">
                        <motion.h1
                            className="text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8] italic uppercase flex flex-col items-center"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {words.map((word, wordIndex) => (
                                <motion.div
                                    key={wordIndex}
                                    className="flex overflow-hidden"
                                    style={{
                                        perspective: '1000px',
                                    }}
                                >
                                    {word.split('').map((letter, letterIndex) => (
                                        <motion.span
                                            key={letterIndex}
                                            variants={child}
                                            className={wordIndex === 1
                                                ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-purple-400"
                                                : ""
                                            }
                                            style={{
                                                display: 'inline-block',
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            ))}
                        </motion.h1>
                    </div>

                    <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
                        The final word in <span className="text-white font-medium">AI-driven animation architecture</span>.
                        Elite GSAP & Framer Motion schemas for modern pioneers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
                        <Link
                            href="/library"
                            className="group relative flex items-center gap-3 bg-white text-black px-10 py-5 rounded-3xl font-black text-xl hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            EXPLORE LIBRARY
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-32 mt-32 border-t border-zinc-900/50">
                        {[
                            { icon: Zap, color: 'text-indigo-500', title: 'GSAP Mastery', desc: 'Fine-tuned rules for complex sequencing and high-performance scrubbing.' },
                            { icon: Layers, color: 'text-purple-500', title: 'Motion Flow', desc: 'Declarative animation schemas for seamless UI transitions and Framer Motion.' },
                            { icon: Sparkles, color: 'text-amber-500', title: 'AI Native', desc: 'Optimized for Cursor, Windsurf, and Copilot to eliminate hallucinations.' }
                        ].map((feature, i) => (
                            <div key={i} className="text-left space-y-4 group">
                                <div className={cn("p-3 rounded-2xl bg-zinc-900 w-fit transition-transform group-hover:-rotate-6 duration-300", feature.color)}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                                <p className="text-zinc-500 text-base leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
