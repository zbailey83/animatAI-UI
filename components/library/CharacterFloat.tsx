"use client";

import { motion } from "framer-motion";

export function CharacterFloat() {
    const text = "FLOAT";
    const letters = text.split("");

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-sky-900/20 to-blue-900/20 rounded-lg">
            <div className="flex gap-1">
                {letters.map((letter, i) => (
                    <motion.span
                        key={i}
                        className="text-4xl font-bold text-sky-400 inline-block"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
