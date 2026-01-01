"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    { title: "Feature 1", description: "Amazing feature" },
    { title: "Feature 2", description: "Incredible feature" },
    { title: "Feature 3", description: "Outstanding feature" },
];

export function StickyFeatureSpotlight() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="h-48 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg p-4 flex gap-4">
            <div className="flex-1 space-y-2 overflow-y-auto">
                {features.map((feature, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-full text-left p-3 rounded transition-colors ${i === activeIndex ? "bg-cyan-500/20 text-white" : "text-zinc-500"
                            }`}
                    >
                        <div className="font-bold text-sm">{feature.title}</div>
                    </button>
                ))}
            </div>
            <div className="flex-1 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
                    >
                        {activeIndex + 1}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
