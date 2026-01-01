"use client";

import { motion } from "framer-motion";

const text = "STAGGER";

export function StaggeredSplitText() {
    const letters = text.split("");

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-rose-900/20 to-pink-900/20 rounded-lg">
            <div className="flex gap-1">
                {letters.map((letter, i) => (
                    <motion.span
                        key={i}
                        className="text-4xl font-bold text-white inline-block"
                        initial={{ y: 20, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{
                            delay: i * 0.05,
                            type: "spring",
                            stiffness: 200,
                        }}
                        style={{ transformOrigin: "bottom" }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
