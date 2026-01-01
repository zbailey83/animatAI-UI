'use client';

import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function NavigationPage() {
    const navComponents = registry.filter(c => c.category === 'Nav');

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="fixed inset-0 grid-bg pointer-events-none" />
            <div className="fixed inset-0 noise-texture pointer-events-none" />

            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <Link
                    href="/library"
                    className="brutalist-btn bg-bg-secondary inline-flex items-center gap-2 mb-12 px-6 py-3 hover:bg-accent-yellow"
                >
                    <ArrowLeft size={20} strokeWidth={3} />
                    <span className="font-black uppercase text-sm">Back to Library</span>
                </Link>

                <header className="mb-16">
                    <div className="brutalist-card p-8 inline-block mb-6 rotate-[-1deg] bg-accent-orange">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-border">
                            Navigation & Layout
                        </h1>
                    </div>
                    <p className="text-text-secondary text-lg font-bold uppercase max-w-2xl mb-6">
                        Interactive menus and structural fluidity. From magnetic docks to morphing menu icons.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="brutalist-border brutalist-shadow bg-bg-secondary px-6 py-3 text-sm font-black uppercase tracking-widest">
                            {navComponents.length} Components
                        </span>
                        <div className="brutalist-border bg-accent-pink h-2 w-20" />
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {navComponents.map((comp) => (
                        <PromptCard key={comp.id} component={comp} />
                    ))}
                </div>
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
