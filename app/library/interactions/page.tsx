'use client';

import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function InteractionsPage() {
    const interactionComponents = registry.filter(c => c.category === 'Interactions');

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="fixed inset-0 technical-grid pointer-events-none" />

            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            <div className="fixed top-20 right-20 w-96 h-96 bg-accent-blue-dim blur-[100px] rounded-full pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <Link
                    href="/library"
                    className="tech-btn inline-flex items-center gap-2 mb-12 px-6 py-3 rounded-lg"
                >
                    <ArrowLeft size={18} strokeWidth={2} />
                    <span className="font-medium">Back to Library</span>
                </Link>

                <header className="mb-16">
                    <div className="glass-card corner-brackets p-6 inline-block mb-6">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Micro-Interactions
                        </h1>
                    </div>
                    <p className="text-text-secondary text-lg max-w-2xl mb-6">
                        The "Secret Sauce" of Premium Feel. Magnetic buttons, glassmorphism, and particle systems.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="glass-panel px-6 py-2 text-sm font-mono uppercase tracking-wider">
                            {interactionComponents.length} Components
                        </span>
                        <div className="h-px w-16 bg-accent-blue" />
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interactionComponents.map((comp) => (
                        <PromptCard key={comp.id} component={comp} />
                    ))}
                </div>
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
