'use client';

import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function LibraryPage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Technical Grid Background */}
            <div className="fixed inset-0 technical-grid pointer-events-none" />

            {/* Theme Toggle */}
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            {/* Glow Orbs */}
            <div className="fixed top-20 left-20 w-96 h-96 bg-accent-blue-dim blur-[100px] rounded-full pointer-events-none" />
            <div className="fixed bottom-20 right-20 w-96 h-96 bg-accent-green/10 blur-[100px] rounded-full pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <header className="mb-20 text-center space-y-8">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="glass-panel corner-brackets p-4">
                            <Sparkles className="text-accent-blue w-10 h-10" strokeWidth={2} />
                        </div>
                    </div>

                    <div className="glass-card corner-brackets px-10 py-6 inline-block">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="text-gradient">AnimAI Library</span>
                        </h1>
                    </div>

                    <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                        Elite prompts for AI-first design engineers.{' '}
                        <span className="text-accent-blue font-medium">Stop guessing</span> and start shipping.
                    </p>
                </header>

                {/* Featured Showcase */}
                <section className="mb-32">
                    <div className="mb-12">
                        <div className="glass-panel p-4 inline-block mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                Featured Components
                            </h2>
                        </div>
                        <p className="text-text-muted text-base">
                            Live previews of our most stunning animations
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {registry.filter(c => [
                            'typo-hero-001',
                            'nav-dock-012',
                            'scroll-parallax-033',
                            'roi-calc-029',
                            'inter-magnet-041',
                            'inter-mesh-048'
                        ].includes(c.id) && c.previewComponent).map((comp) => (
                            <PromptCard key={comp.id} component={comp} />
                        ))}
                    </div>
                </section>

                {/* Category Navigation */}
                <section>
                    <div className="mb-12">
                        <div className="glass-panel p-4 inline-block mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                Browse by Category
                            </h2>
                        </div>
                        <p className="text-text-muted text-base">
                            Explore our complete collection
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Typography Card */}
                        <Link href="/library/typography" className="group">
                            <div className="glass-card corner-brackets p-8 h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="glass-panel p-3">
                                        <span className="text-3xl">✍️</span>
                                    </div>
                                    <span className="glass-panel px-3 py-1 text-xs font-mono uppercase tracking-wider text-text-muted">
                                        {registry.filter(c => c.category === 'Typography').length}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                                    Typography & Brand
                                </h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Kinetic text effects that define digital identity.
                                </p>
                                <div className="flex items-center gap-2 text-accent-blue text-sm font-medium">
                                    Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Navigation Card */}
                        <Link href="/library/navigation" className="group">
                            <div className="glass-card corner-brackets p-8 h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="glass-panel p-3">
                                        <span className="text-3xl">🧭</span>
                                    </div>
                                    <span className="glass-panel px-3 py-1 text-xs font-mono uppercase tracking-wider text-text-muted">
                                        {registry.filter(c => c.category === 'Nav').length}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                                    Navigation & Layout
                                </h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Interactive menus and structural fluidity.
                                </p>
                                <div className="flex items-center gap-2 text-accent-blue text-sm font-medium">
                                    Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Pricing Card */}
                        <Link href="/library/pricing" className="group">
                            <div className="glass-card corner-brackets p-8 h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="glass-panel p-3">
                                        <span className="text-3xl">💰</span>
                                    </div>
                                    <span className="glass-panel px-3 py-1 text-xs font-mono uppercase tracking-wider text-text-muted">
                                        {registry.filter(c => c.category === 'Pricing').length}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                                    SaaS Conversion
                                </h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    High-trust pricing tables and calculators.
                                </p>
                                <div className="flex items-center gap-2 text-accent-blue text-sm font-medium">
                                    Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Scroll Card */}
                        <Link href="/library/scroll" className="group">
                            <div className="glass-card corner-brackets p-8 h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="glass-panel p-3">
                                        <span className="text-3xl">📜</span>
                                    </div>
                                    <span className="glass-panel px-3 py-1 text-xs font-mono uppercase tracking-wider text-text-muted">
                                        {registry.filter(c => c.category === 'Scroll').length}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                                    Immersive Scroll
                                </h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    Scrollytelling experiences that capture attention.
                                </p>
                                <div className="flex items-center gap-2 text-accent-blue text-sm font-medium">
                                    Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Interactions Card */}
                        <Link href="/library/interactions" className="group">
                            <div className="glass-card corner-brackets p-8 h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="glass-panel p-3">
                                        <span className="text-3xl">✨</span>
                                    </div>
                                    <span className="glass-panel px-3 py-1 text-xs font-mono uppercase tracking-wider text-text-muted">
                                        {registry.filter(c => c.category === 'Interactions').length}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                                    Micro-Interactions
                                </h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    The "Secret Sauce" of premium feel.
                                </p>
                                <div className="flex items-center gap-2 text-accent-blue text-sm font-medium">
                                    Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Coming Soon Card */}
                        <div className="glass-card p-8 border-dashed opacity-60">
                            <div className="flex flex-col items-center justify-center h-full text-center py-4">
                                <div className="glass-panel p-4 mb-4">
                                    <span className="text-3xl text-text-muted">?</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-text-muted">
                                    More Coming Soon
                                </h3>
                                <p className="text-text-muted text-xs">
                                    New categories in development
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="relative z-10 py-20 border-t border-border-subtle text-center">
                <div className="glass-panel px-8 py-4 inline-block">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                        Built for AI-assisted frontend engineering
                    </p>
                </div>
            </footer>
        </div>
    );
}
