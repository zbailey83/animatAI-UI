"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActionOrb() {
    const [isExpanded, setIsExpanded] = useState(false);

    const actions = [
        { icon: "📝", label: "Note" },
        { icon: "📷", label: "Photo" },
        { icon: "📍", label: "Pin" },
    ];

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-lg">
            <div className="relative">
                <AnimatePresence>
                    {isExpanded &&
                        actions.map((action, i) => {
                            const angle = (i * 360) / actions.length - 90;
                            const x = Math.cos((angle * Math.PI) / 180) * 60;
                            const y = Math.sin((angle * Math.PI) / 180) * 60;

                            return (
                                <motion.button
                                    key={i}
                                    className="absolute w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-xl shadow-lg"
                                    initial={{ scale: 0, x: 0, y: 0 }}
                                    animate={{ scale: 1, x, y }}
                                    exit={{ scale: 0, x: 0, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        delay: i * 0.1,
                                        stiffness: 300,
                                    }}
                                    style={{ left: "-24px", top: "-24px" }}
                                >
                                    {action.icon}
                                </motion.button>
                            );
                        })}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-2xl shadow-xl"
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                >
                    +
                </motion.button>
            </div>
        </div>
    );
}
