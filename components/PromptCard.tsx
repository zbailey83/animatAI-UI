"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentSchema } from '@/data/types';
import { compilePrompt } from '@/utils/prompt-compiler';
import { copyToClipboard } from '@/utils/clipboard';
import { cn } from '@/utils/cn';
import { Check, Copy, Code, Zap, Sparkles, Layers } from 'lucide-react';

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
        Basic: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
        Intermediate: 'text-blue-400 border-blue-400/20 bg-blue-400/10',
        Advanced: 'text-amber-400 border-amber-400/20 bg-amber-400/10',
        Elite: 'text-rose-400 border-rose-400/20 bg-rose-400/10',
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col h-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/10"
        >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-6">
                    <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border backdrop-blur-xl",
                        difficultyColors[component.difficulty]
                    )}>
                        {component.difficulty}
                    </span>
                    <div className="flex gap-2">
                        <span className="p-2 rounded-xl bg-zinc-800/80 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-all duration-300">
                            {component.engine === 'GSAP' ? <Zap size={16} /> : <Layers size={16} />}
                        </span>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300 tracking-tight">
                    {component.title}
                </h3>

                {component.previewComponent && (
                    <div className="mb-8 relative group/preview">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover/preview:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 bg-black/20">
                            {component.previewComponent}
                        </div>
                    </div>
                )}

                <p className="text-sm text-zinc-400 mb-8 line-clamp-3 leading-relaxed">
                    {component.intent}
                </p>

                <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {component.features.map((feature, i) => (
                            <span key={i} className="text-[10px] text-zinc-500 bg-zinc-800/30 px-3 py-1.5 rounded-lg border border-zinc-700/30 backdrop-blur-sm">
                                {feature}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-zinc-800/50">
                        <button
                            onClick={handleCopy}
                            className="flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-100 transition-all duration-300 py-3.5 rounded-2xl font-bold text-sm active:scale-95 shadow-lg shadow-white/5"
                        >
                            {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
                            {copied ? 'Copied' : 'Copy Schema'}
                        </button>
                        <button
                            onClick={() => setShowPrompt(!showPrompt)}
                            className="px-4 flex items-center justify-center bg-zinc-800/50 text-white hover:bg-zinc-700/50 transition-all duration-300 rounded-2xl border border-zinc-700/50 backdrop-blur-xl"
                            title="Preview Prompt"
                        >
                            <Code size={20} />
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
                        className="overflow-hidden bg-black/40 backdrop-blur-sm border-t border-zinc-800"
                    >
                        <div className="p-4">
                            <pre className="text-[10px] text-zinc-500 font-mono whitespace-pre-wrap leading-relaxed">
                                {compilePrompt(component)}
                            </pre>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
