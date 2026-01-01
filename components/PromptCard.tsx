"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentSchema } from '@/data/types';
import { compilePrompt } from '@/utils/prompt-compiler';
import { copyToClipboard } from '@/utils/clipboard';
import { Check, Copy, Code, Zap, Layers } from 'lucide-react';

interface PromptCardProps {
    component: ComponentSchema;
}

export function PromptCard({ component }: PromptCardProps) {
    const [copied, setCopied] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);

    const handleCopy = async () => {
        const prompt = compilePrompt(component);
        const success = await copyToClipboard(prompt);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const difficultyColors = {
        Basic: 'text-accent-green border-accent-green/20 bg-accent-green/10',
        Intermediate: 'text-accent-blue border-accent-blue/20 bg-accent-blue-dim',
        Advanced: 'text-yellow-500 border-yellow-500/20 bg-yellow-500/10',
        Elite: 'text-accent-red border-accent-red/20 bg-accent-red/10',
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative flex flex-col h-full glass-card"
        >
            <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-6">
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase border ${difficultyColors[component.difficulty]}`}>
                        {component.difficulty}
                    </span>
                    <div className="flex gap-2">
                        <span className="glass-panel p-2 text-text-secondary group-hover:text-accent-blue transition-colors">
                            {component.engine === 'GSAP' ? <Zap size={18} strokeWidth={2} /> : <Layers size={18} strokeWidth={2} />}
                        </span>
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight leading-tight group-hover:text-accent-blue transition-colors">
                    {component.title}
                </h3>

                {component.previewComponent && (
                    <div className="mb-6 relative">
                        <div className="glass-panel p-4 overflow-hidden border-dashed">
                            {component.previewComponent}
                        </div>
                    </div>
                )}

                <p className="text-sm text-text-secondary mb-6 line-clamp-3 leading-relaxed">
                    {component.intent}
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {component.features.map((feature, i) => (
                            <span key={i} className="text-xs text-text-muted bg-bg-surface-hover px-3 py-1.5 rounded-md border border-border-subtle">
                                {feature}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border-subtle">
                        <button
                            onClick={handleCopy}
                            className="flex-1 tech-btn-primary py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
                        >
                            {copied ? <Check size={16} strokeWidth={2} /> : <Copy size={16} strokeWidth={2} />}
                            {copied ? 'Copied!' : 'Copy Schema'}
                        </button>
                        <button
                            onClick={() => setShowPrompt(!showPrompt)}
                            className="tech-btn px-4 py-3 rounded-lg flex items-center justify-center"
                            title="Preview Prompt"
                        >
                            <Code size={18} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showPrompt && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-bg-surface border-t border-border-subtle"
                    >
                        <div className="p-4">
                            <pre className="text-xs text-text-secondary font-mono whitespace-pre-wrap leading-relaxed">
                                {compilePrompt(component)}
                            </pre>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
