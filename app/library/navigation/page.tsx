import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NavigationPage() {
    const navComponents = registry.filter(c => c.category === 'Nav');

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Background radial glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                {/* Back Navigation */}
                <Link
                    href="/library"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Library
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                        Navigation & Layout
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        Interactive menus and structural fluidity. From magnetic docks to morphing menu icons.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                            {navComponents.length} COMPONENTS
                        </span>
                        <div className="h-1 w-12 bg-orange-500/30 rounded-full" />
                    </div>
                </header>

                {/* Components Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {navComponents.map((comp) => (
                        <PromptCard key={comp.id} component={comp} />
                    ))}
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
