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
        Basic: 'bg-success',
        Intermediate: 'bg-info',
        Advanced: 'bg-warning',
        Elite: 'bg-error',
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative flex flex-col h-full brutalist-card hover:-translate-y-2 transition-all duration-300"
        >
            <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-6">
                    <span className={`brutalist-border px-4 py-2 text-xs font-black tracking-widest uppercase text-border ${difficultyColors[component.difficulty]}`}>
                        {component.difficulty}
                    </span>
                    <div className="flex gap-2">
                        <span className="brutalist-border bg-bg-tertiary p-3 text-text-primary">
                            {component.engine === 'GSAP' ? <Zap size={20} strokeWidth={3} /> : <Layers size={20} strokeWidth={3} />}
                        </span>
                    </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tight leading-tight">
                    {component.title}
                </h3>

                {component.previewComponent && (
                    <div className="mb-8 relative">
                        <div className="brutalist-border bg-bg-primary p-4 overflow-hidden">
                            {component.previewComponent}
                        </div>
                    </div>
                )}

                <p className="text-sm text-text-secondary font-bold uppercase mb-8 line-clamp-3 leading-relaxed">
                    {component.intent}
                </p>

                <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {component.features.map((feature, i) => (
                            <span key={i} className="text-xs font-black uppercase text-border bg-accent-yellow brutalist-border px-3 py-2">
                                {feature}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 pt-6 border-t-4 border-border">
                        <button
                            onClick={handleCopy}
                            className="flex-1 brutalist-btn bg-accent-lime text-border flex items-center justify-center gap-2 py-4 text-sm"
                        >
                            {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} strokeWidth={3} />}
                            {copied ? 'COPIED!' : 'COPY SCHEMA'}
                        </button>
                        <button
                            onClick={() => setShowPrompt(!showPrompt)}
                            className="brutalist-btn bg-accent-cyan px-6 flex items-center justify-center text-border"
                            title="Preview Prompt"
                        >
                            <Code size={22} strokeWidth={3} />
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
                        className="overflow-hidden bg-bg-tertiary border-t-4 border-border"
                    >
                        <div className="p-6">
                            <pre className="text-xs text-text-secondary font-mono whitespace-pre-wrap leading-relaxed font-bold">
                                {compilePrompt(component)}
                            </pre>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
