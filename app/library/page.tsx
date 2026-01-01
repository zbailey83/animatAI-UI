import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function LibraryPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Background radial glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <header className="mb-20 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
                        <Sparkles size={12} />
                        The AI Design Bible
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
                        ANIMAI <span className="text-zinc-600">LIBRARY</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Elite prompts for AI-first design engineers. Stop guessing and start shipping high-performance GSAP and Framer Motion components with architectural certainty.
                    </p>
                </header>

                {/* Featured Showcase - Handpicked Elite Components */}
                <section className="mb-32">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold text-white tracking-tight mb-3">Featured Components</h2>
                        <p className="text-zinc-500 text-lg">Live previews of our most stunning animations</p>
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
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold text-white tracking-tight mb-3">Browse by Category</h2>
                        <p className="text-zinc-500 text-lg">Explore our complete collection organized by use case</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Typography Card */}
                        <Link href="/library/typography" className="group">
                            <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all hover:border-indigo-500/50 hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                                            <span className="text-2xl">✍️</span>
                                        </div>
                                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                            {registry.filter(c => c.category === 'Typography').length} components
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Typography & Brand</h3>
                                    <p className="text-zinc-500 text-sm">
                                        Kinetic text effects that define digital identity.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-indigo-400 text-sm font-medium">
                                        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Navigation Card */}
                        <Link href="/library/navigation" className="group">
                            <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all hover:border-orange-500/50 hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                            <span className="text-2xl">🧭</span>
                                        </div>
                                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                            {registry.filter(c => c.category === 'Nav').length} components
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Navigation & Layout</h3>
                                    <p className="text-zinc-500 text-sm">
                                        Interactive menus and structural fluidity.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-orange-400 text-sm font-medium">
                                        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Pricing Card */}
                        <Link href="/library/pricing" className="group">
                            <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all hover:border-green-500/50 hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                                            <span className="text-2xl">💰</span>
                                        </div>
                                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                            {registry.filter(c => c.category === 'Pricing').length} components
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">SaaS Conversion</h3>
                                    <p className="text-zinc-500 text-sm">
                                        High-trust pricing tables and calculators.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-green-400 text-sm font-medium">
                                        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Scroll Card */}
                        <Link href="/library/scroll" className="group">
                            <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all hover:border-blue-500/50 hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                            <span className="text-2xl">📜</span>
                                        </div>
                                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                            {registry.filter(c => c.category === 'Scroll').length} components
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Immersive Scroll</h3>
                                    <p className="text-zinc-500 text-sm">
                                        Scrollytelling experiences that capture attention.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium">
                                        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Interactions Card */}
                        <Link href="/library/interactions" className="group">
                            <div className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all hover:border-pink-500/50 hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
                                            <span className="text-2xl">✨</span>
                                        </div>
                                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                            {registry.filter(c => c.category === 'Interactions').length} components
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Micro-Interactions</h3>
                                    <p className="text-zinc-500 text-sm">
                                        The "Secret Sauce" of premium feel.
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-pink-400 text-sm font-medium">
                                        Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Coming Soon Card */}
                        <div className="relative p-8 rounded-2xl border border-zinc-800 border-dashed bg-zinc-900/20">
                            <div className="flex flex-col items-center justify-center h-full text-center py-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 text-2xl mb-4">
                                    ?
                                </div>
                                <h3 className="text-lg font-bold text-zinc-600 mb-1">More Coming Soon</h3>
                                <p className="text-zinc-700 text-xs">New categories in development</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="relative z-10 py-20 border-t border-zinc-900 text-center">
                <p className="text-zinc-600 text-sm">
                    Built for the future of AI-assisted frontend engineering.
                </p>
            </footer>
        </div>
    );
}
