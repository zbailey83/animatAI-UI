"use client";

import { motion } from "framer-motion";

export function GrainTransition() {
    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-zinc-900/20 to-slate-900/20 rounded-lg overflow-hidden relative">
            <svg width="0" height="0">
                <filter id="grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        result="noise"
                    >
                        <animate
                            attributeName="seed"
                            from="0"
                            to="100"
                            dur="0.5s"
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feColorMatrix
                        in="noise"
                        type="saturate"
                        values="0"
                        result="desaturatedNoise"
                    />
                    <feComponentTransfer in="desaturatedNoise" result="theNoise">
                        <feFuncA type="table" tableValues="0 0 0.5 0" />
                    </feComponentTransfer>
                    <feBlend in="SourceGraphic" in2="theNoise" mode="multiply" />
                </filter>
            </svg>
            <motion.div
                className="text-3xl font-bold text-white"
                style={{ filter: "url(#grain)" }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                GRAIN
            </motion.div>
        </div>
    );
}
