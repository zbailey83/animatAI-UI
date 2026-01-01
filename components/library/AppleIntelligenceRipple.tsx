"use client";

import { motion } from "framer-motion";

export function AppleIntelligenceRipple() {
    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-lg">
            <motion.div
                className="relative w-32 h-16 rounded-xl flex items-center justify-center overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
            >
                <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-white font-bold text-sm z-10">AI Ripple</span>
            </motion.div>
        </div>
    );
}
