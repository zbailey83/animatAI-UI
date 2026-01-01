"use client";

import { motion } from "framer-motion";

export function HighlightReveal() {
    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-lg">
            <div className="relative inline-block">
                <span className="text-3xl font-bold text-white relative z-10">
                    HIGHLIGHT
                </span>
                <motion.div
                    className="absolute bottom-0 left-0 h-3 bg-yellow-400/50 -z-0"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}
