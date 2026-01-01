"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function HoldToConfirm() {
    const [progress, setProgress] = useState(0);
    const [isHolding, setIsHolding] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const handleMouseDown = () => {
        setIsHolding(true);
        setIsComplete(false);
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setIsComplete(true);
                setTimeout(() => {
                    setProgress(0);
                    setIsComplete(false);
                }, 1000);
            }
        }, 50);
    };

    const handleMouseUp = () => {
        setIsHolding(false);
        setProgress(0);
    };

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-lg">
            <motion.button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className={`relative px-6 py-3 rounded-lg font-medium overflow-hidden ${isComplete ? "bg-green-500" : "bg-red-500"
                    } text-white`}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className="absolute inset-0 bg-red-700"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                />
                <span className="relative z-10">{isComplete ? "✓ Confirmed" : "Hold to Delete"}</span>
            </motion.button>
        </div>
    );
}
