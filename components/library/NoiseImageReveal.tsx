"use client";

import { motion } from "framer-motion";

export function NoiseImageReveal() {
    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-slate-900/20 to-zinc-900/20 rounded-lg overflow-hidden relative">
            <svg width="0" height="0">
                <filter id="noise-reveal">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.5"
                        numOctaves="3"
                        result="noise"
                    />
                    <feColorMatrix
                        in="noise"
                        type="saturate"
                        values="0"
                    />
                    <feComponentTransfer>
                        <feFuncA type="table" tableValues="0 1" />
                    </feComponentTransfer>
                </filter>
            </svg>

            <div className="relative">
                <div className="w-48 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
                <motion.div
                    className="absolute inset-0 bg-zinc-900 rounded-lg"
                    style={{ filter: "url(#noise-reveal)" }}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
            </div>
        </div>
    );
}
