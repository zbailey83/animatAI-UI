'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Layers, Sparkles, Type, Compass, CreditCard, MousePointer2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Technical Grid Background */}
            <div className="fixed inset-0 technical-grid pointer-events-none" />

            {/* Theme Toggle */}
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            {/* Animated Glow Orbs */}
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-accent-blue-dim blur-[120px] rounded-full animate-pulse pointer-events-none" />
            <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/10 blur-[120px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

            <main className="relative flex flex-col items-center justify-center px-6 py-24 text-center min-h-screen">
                <div className="relative z-10 space-y-16 max-w-6xl">
                    {/* Logo Badge with Corner Brackets */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="glass-panel corner-brackets p-6 relative">
                            <Sparkles className="text-accent-blue w-12 h-12" strokeWidth={2} />
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
                        >
                            <span className="text-gradient">animatAI</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-card corner-brackets p-6 inline-block"
                        >
                            <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
                                Design Certainty
                            </h2>
                        </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
                    >
                        The final word in{' '}
                        <span className="text-accent-blue font-medium">AI-driven animation architecture</span>.
                        Elite GSAP & Framer Motion schemas for modern pioneers.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="pt-8 flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/library"
                            className="tech-btn-primary px-10 py-5 rounded-xl inline-flex items-center gap-3 text-lg font-medium group"
                        >
                            <span>Explore Library</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={2} size={20} />
                        </Link>

                        <Link
                            href="/portfolio"
                            className="glass-card px-10 py-5 rounded-xl inline-flex items-center gap-3 text-lg font-medium group hover:border-accent-green transition-colors"
                        >
                            <Sparkles className="group-hover:rotate-12 transition-transform" strokeWidth={2} size={20} />
                            <span>Portfolio Showcase</span>
                        </Link>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-24">
                        {[
                            {
                                icon: Zap,
                                title: 'GSAP Mastery',
                                desc: 'Fine-tuned rules for complex sequencing and high-performance scrubbing.'
                            },
                            {
                                icon: Layers,
                                title: 'Motion Flow',
                                desc: 'Declarative schemas for seamless UI transitions and Framer Motion.'
                            },
                            {
                                icon: Sparkles,
                                title: 'AI Native',
                                desc: 'Optimized for Cursor, Windsurf, and Copilot to eliminate hallucinations.'
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + (i * 0.1) }}
                                className="glass-card p-6 space-y-4 text-left group"
                            >
                                <div className="glass-panel p-3 w-fit group-hover:scale-110 transition-transform">
                                    <feature.icon className="text-accent-blue" size={24} strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-bold tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Component Categories Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="pt-32 w-full"
                    >
                        <div className="flex items-center gap-4 mb-12 justify-center">
                            <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent w-full max-w-[100px]" />
                            <span className="text-xs font-mono uppercase tracking-widest text-text-muted">Browse Categories</span>
                            <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent w-full max-w-[100px]" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {[
                                { name: 'Typography', icon: Type, href: '/library/typography', count: '10+' },
                                { name: 'Navigation', icon: Compass, href: '/library/navigation', count: '8+' },
                                { name: 'Pricing', icon: CreditCard, href: '/library/pricing', count: '12+' },
                                { name: 'Scroll', icon: MousePointer2, href: '/library/scroll', count: '15+' },
                                { name: 'Interactions', icon: Cpu, href: '/library/interactions', count: '9+' },
                            ].map((cat, i) => (
                                <Link
                                    key={cat.name}
                                    href={cat.href}
                                    className="group"
                                >
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass-card p-4 h-full flex flex-col items-center justify-center gap-3 text-center hover:border-accent-blue/50 transition-colors"
                                    >
                                        <div className="p-3 rounded-full bg-bg-secondary/50 group-hover:bg-accent-blue/10 transition-colors">
                                            <cat.icon size={20} className="text-text-secondary group-hover:text-accent-blue transition-colors" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-1">{cat.name}</div>
                                            <div className="text-[10px] sm:text-xs text-text-muted font-mono">{cat.count} Components</div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Footer Badge */}
            <div className="fixed bottom-6 left-6">
                <div className="glass-panel px-6 py-3">
                    <p className="font-mono text-xs tracking-wider uppercase text-text-muted">
                        Technical Artifacts
                    </p>
                </div>
            </div>
        </div>
    );
}
