'use client';

import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { Box } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function LibraryPage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 grid-bg pointer-events-none" />

            {/* Noise Texture */}
            <div className="fixed inset-0 noise-texture pointer-events-none" />

            {/* Theme Toggle */}
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <header className="mb-20 text-center space-y-8">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="brutalist-border-thick brutalist-shadow-lg bg-accent-yellow p-4 rotate-3">
                            <Box className="text-border w-12 h-12" strokeWidth={3} />
                        </div>
                    </div>

                    <div className="brutalist-border-thick brutalist-shadow-xl bg-bg-secondary px-8 py-4 inline-block rotate-[-1deg]">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                            ANIMAI LIBRARY
                        </h1>
                    </div>

                    <p className="text-text-secondary max-w-2xl mx-auto text-lg font-bold leading-relaxed">
                        ELITE PROMPTS FOR AI-FIRST DESIGN ENGINEERS.{' '}
                        <span className="inline-block brutalist-border bg-accent-cyan px-2 py-1 text-border text-sm">
                            STOP GUESSING
                        </span>
                        {' '}AND START SHIPPING.
                    </p>
                </header>


                {/* Featured Showcase - Handpicked Elite Components */}
                <section className="mb-32">
                    <div className="mb-12">
                        <div className="brutalist-card p-6 inline-block mb-4">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                                Featured Components
                            </h2>
                        </div>
                        <p className="text-text-muted text-base font-bold uppercase">
                            Live Previews of Our Most Stunning Animations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Only show specific featured components with preview */}
                        {registry.filter(c => [
                            'typo-hero-001',      // Kinetic Typography
                            'nav-dock-012',        // Magnetic Dock
                            'scroll-parallax-033', // 3D Parallax Hero
                            'roi-calc-029',        // ROI Calculator
                            'inter-magnet-041',    // Magnetic Button
                            'inter-mesh-048'       // Dynamic Mesh
                        ].includes(c.id) && c.previewComponent).map((comp) => (
                            <PromptCard key={comp.id} component={comp} />
                        ))}
                    </div>
                </section>


                {/* Category Navigation */}
                <section>
                    <div className="mb-12">
                        <div className="brutalist-card p-6 inline-block mb-4">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                                Browse by Category
                            </h2>
                        </div>
                        <p className="text-text-muted text-base font-bold uppercase">
                            Explore Our Complete Collection
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Typography Card */}
                        <Link href="/library/typography" className="group">
                            <div className="brutalist-card p-8 hover:-translate-y-2 transition-all bg-accent-yellow">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="brutalist-border bg-bg-secondary p-3">
                                        <span className="text-3xl">✍️</span>
                                    </div>
                                    <span className="brutalist-border bg-bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-border">
                                        {registry.filter(c => c.category === 'Typography').length}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-3 text-border">
                                    Typography & Brand
                                </h3>
                                <p className="text-border font-bold text-sm mb-4 uppercase">
                                    Kinetic text effects that define digital identity.
                                </p>
                                <div className="flex items-center gap-2 font-black uppercase text-sm text-border">
                                    Explore <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Navigation Card */}
                        <Link href="/library/navigation" className="group">
                            <div className="brutalist-card p-8 hover:-translate-y-2 transition-all bg-accent-pink">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="brutalist-border bg-bg-secondary p-3">
                                        <span className="text-3xl">🧭</span>
                                    </div>
                                    <span className="brutalist-border bg-bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-border">
                                        {registry.filter(c => c.category === 'Nav').length}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-3 text-border">
                                    Navigation & Layout
                                </h3>
                                <p className="text-border font-bold text-sm mb-4 uppercase">
                                    Interactive menus and structural fluidity.
                                </p>
                                <div className="flex items-center gap-2 font-black uppercase text-sm text-border">
                                    Explore <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Pricing Card */}
                        <Link href="/library/pricing" className="group">
                            <div className="brutalist-card p-8 hover:-translate-y-2 transition-all bg-accent-lime">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="brutalist-border bg-bg-secondary p-3">
                                        <span className="text-3xl">💰</span>
                                    </div>
                                    <span className="brutalist-border bg-bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-border">
                                        {registry.filter(c => c.category === 'Pricing').length}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-3 text-border">
                                    SaaS Conversion
                                </h3>
                                <p className="text-border font-bold text-sm mb-4 uppercase">
                                    High-trust pricing tables and calculators.
                                </p>
                                <div className="flex items-center gap-2 font-black uppercase text-sm text-border">
                                    Explore <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Scroll Card */}
                        <Link href="/library/scroll" className="group">
                            <div className="brutalist-card p-8 hover:-translate-y-2 transition-all bg-accent-cyan">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="brutalist-border bg-bg-secondary p-3">
                                        <span className="text-3xl">📜</span>
                                    </div>
                                    <span className="brutalist-border bg-bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-border">
                                        {registry.filter(c => c.category === 'Scroll').length}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-3 text-border">
                                    Immersive Scroll
                                </h3>
                                <p className="text-border font-bold text-sm mb-4 uppercase">
                                    Scrollytelling experiences that capture attention.
                                </p>
                                <div className="flex items-center gap-2 font-black uppercase text-sm text-border">
                                    Explore <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Interactions Card */}
                        <Link href="/library/interactions" className="group">
                            <div className="brutalist-card p-8 hover:-translate-y-2 transition-all bg-accent-orange">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="brutalist-border bg-bg-secondary p-3">
                                        <span className="text-3xl">✨</span>
                                    </div>
                                    <span className="brutalist-border bg-bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-border">
                                        {registry.filter(c => c.category === 'Interactions').length}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black uppercase mb-3 text-border">
                                    Micro-Interactions
                                </h3>
                                <p className="text-border font-bold text-sm mb-4 uppercase">
                                    The "Secret Sauce" of premium feel.
                                </p>
                                <div className="flex items-center gap-2 font-black uppercase text-sm text-border">
                                    Explore <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Coming Soon Card */}
                        <div className="brutalist-card p-8 bg-bg-tertiary border-dashed">
                            <div className="flex flex-col items-center justify-center h-full text-center py-4">
                                <div className="brutalist-border bg-bg-secondary p-4 mb-4">
                                    <span className="text-3xl text-text-muted">?</span>
                                </div>
                                <h3 className="text-xl font-black uppercase mb-2 text-text-muted">
                                    More Coming Soon
                                </h3>
                                <p className="text-text-muted text-xs font-bold uppercase">
                                    New Categories in Development
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="relative z-10 py-20 border-t-4 border-border text-center">
                <div className="brutalist-border brutalist-shadow bg-bg-secondary px-8 py-4 inline-block">
                    <p className="font-black text-sm uppercase tracking-widest">
                        Built for AI-assisted frontend engineering
                    </p>
                </div>
            </footer>
        </div>
    );
}
