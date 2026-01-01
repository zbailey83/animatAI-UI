"use client";

import { motion } from "framer-motion";

export function PulsePricing() {
    return (
        <div className="h-48 flex items-center justify-center gap-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg p-4">
            {["Basic", "Pro", "Elite"].map((tier, index) => (
                <motion.div
                    key={tier}
                    className="relative flex flex-col items-center justify-center w-24 h-32 bg-zinc-900/80 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            background: `conic-gradient(from 0deg, transparent, ${index === 1 ? "#8b5cf6" : "#6366f1"
                                }, transparent)`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-[2px] bg-zinc-900 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-xs text-zinc-400 mb-1">{tier}</div>
                        <div className="text-lg font-bold text-white">${(index + 1) * 9}</div>
                        <div className="text-[10px] text-zinc-500">/mo</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
