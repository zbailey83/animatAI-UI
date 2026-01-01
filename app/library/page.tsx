import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { Sparkles } from 'lucide-react';

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

                {/* Featured Showcase - One from each category */}
                <section className="mb-32">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold text-white tracking-tight mb-3">Featured Components</h2>
                        <p className="text-zinc-500 text-lg">Live previews from each category</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Typography Feature */}
                        {registry.filter(c => c.id === 'typo-hero-001').map((comp) => (
                            <PromptCard key={comp.id} component={comp} />
                        ))}
                        {/* Pricing Feature */}
                        {registry.filter(c => c.id === 'roi-calc-029').map((comp) => (
                            <PromptCard key={comp.id} component={comp} />
                        ))}
                        {/* Navigation Feature */}
                        {registry.filter(c => c.id === 'nav-dock-012').map((comp) => (
                            <PromptCard key={comp.id} component={comp} />
                        ))}
                        {/* Scroll Feature */}
                        {registry.filter(c => c.id === 'scroll-parallax-033').map((comp) => (
                            <PromptCard key={comp.id} component={comp} />
                        ))}
                        {/* Interactions Feature */}
                        {registry.filter(c => c.id === 'inter-magnet-041').map((comp) => (
                            <PromptCard key={comp.id} component={comp} />
                        ))}
                    </div>
                </section>

                <div className="space-y-32">
                    {/* Typography Section */}
                    <section>
                        <div className="mb-10 flex items-end justify-between border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Typography & Brand</h2>
                                <p className="text-zinc-500">Kinetic text effects that define digital identity.</p>
                            </div>
                            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                {registry.filter(c => c.category === 'Typography').length} COMPONENTS
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {registry.filter(c => c.category === 'Typography').map((comp) => (
                                <PromptCard key={comp.id} component={comp} />
                            ))}
                        </div>
                    </section>

                    {/* Navigation Section */}
                    <section>
                        <div className="mb-10 flex items-end justify-between border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Navigation & Layout</h2>
                                <p className="text-zinc-500">Interactive menus and structural fluidity.</p>
                            </div>
                            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                {registry.filter(c => c.category === 'Nav').length} COMPONENTS
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {registry.filter(c => c.category === 'Nav').map((comp) => (
                                <PromptCard key={comp.id} component={comp} />
                            ))}
                        </div>
                    </section>

                    {/* Pricing Section */}
                    <section>
                        <div className="mb-10 flex items-end justify-between border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">SaaS Conversion</h2>
                                <p className="text-zinc-500">High-trust pricing tables and calculators.</p>
                            </div>
                            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                {registry.filter(c => c.category === 'Pricing').length} COMPONENTS
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {registry.filter(c => c.category === 'Pricing').map((comp) => (
                                <PromptCard key={comp.id} component={comp} />
                            ))}
                        </div>
                    </section>

                    {/* Scroll Section */}
                    <section>
                        <div className="mb-10 flex items-end justify-between border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Immersive Scroll</h2>
                                <p className="text-zinc-500">Scrollytelling experiences that capture attention.</p>
                            </div>
                            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                {registry.filter(c => c.category === 'Scroll').length} COMPONENTS
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {registry.filter(c => c.category === 'Scroll').map((comp) => (
                                <PromptCard key={comp.id} component={comp} />
                            ))}
                        </div>
                    </section>

                    {/* Interactions Section */}
                    <section>
                        <div className="mb-10 flex items-end justify-between border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Micro-Interactions</h2>
                                <p className="text-zinc-500">The "Secret Sauce" of premium feel.</p>
                            </div>
                            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                                {registry.filter(c => c.category === 'Interactions').length} COMPONENTS
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {registry.filter(c => c.category === 'Interactions').map((comp) => (
                                <PromptCard key={comp.id} component={comp} />
                            ))}
                        </div>
                    </section>

                    {/* Placeholder for "Coming Soon" */}
                    <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-800 border-dashed bg-zinc-900/20 group hover:border-zinc-700 transition-colors h-[200px]">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:scale-110 transition-transform">
                            ?
                        </div>
                        <p className="mt-4 text-zinc-500 font-medium">New schema coming soon</p>
                    </div>
                </div>
            </main>

            <footer className="relative z-10 py-20 border-t border-zinc-900 text-center">
                <p className="text-zinc-600 text-sm">
                    Built for the future of AI-assisted frontend engineering.
                </p>
            </footer>
        </div>
    );
}
