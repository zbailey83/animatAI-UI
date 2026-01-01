"use client";

import { motion } from "framer-motion";

export function GravityIcons() {
    const icons = ["⚽", "🏀", "🎾"];

    return (
        <div className="h-48 flex items-end justify-center gap-4 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg p-4 relative overflow-hidden">
            {icons.map((icon, i) => (
                <motion.div
                    key={i}
                    className="text-4xl"
                    initial={{ y: -200 }}
                    animate={{
                        y: [null, 0, -20, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        times: [0, 0.7, 0.85, 1],
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                >
                    {icon}
                </motion.div>
            ))}
        </div>
    );
}
