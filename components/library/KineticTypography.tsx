"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function KineticTypography() {
    const [key, setKey] = React.useState(0);
    const text = "ANIMATE";
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
    };

    return (
        <div
            className="flex flex-col items-center justify-center p-8 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden min-h-[160px] cursor-pointer"
            onMouseEnter={() => setKey(prev => prev + 1)}
        >
            <motion.div
                key={key}
                className="flex overflow-hidden"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={child}
                        className="text-4xl md:text-5xl font-black text-white italic tracking-tighter"
                        style={{ display: 'inline-block', perspective: '1000px' }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
            <motion.p
                key={`subtitle-${key}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-[10px] text-zinc-500 mt-4 tracking-[0.2em] font-medium"
            >
                HOVER TO REPLAY
            </motion.p>
        </div>
    );
}
