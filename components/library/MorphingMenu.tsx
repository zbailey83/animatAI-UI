"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function MorphingMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 hover:scale-110 transition-transform"
            >
                <motion.div
                    className="w-8 h-0.5 bg-white rounded-full"
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 8 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                    className="w-8 h-0.5 bg-white rounded-full"
                    animate={{
                        opacity: isOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                />
                <motion.div
                    className="w-8 h-0.5 bg-white rounded-full"
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -8 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
            </button>
        </div>
    );
}
