"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function VideoPeek() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg relative">
            {isExpanded && (
                <motion.div
                    layoutId="video"
                    className="fixed inset-0 z-50 bg-black flex items-center justify-center"
                    onClick={() => setIsExpanded(false)}
                >
                    <div className="text-white text-2xl">Video Playing...</div>
                </motion.div>
            )}

            <motion.div
                layoutId="video"
                onClick={() => setIsExpanded(true)}
                className="w-40 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg cursor-pointer flex items-center justify-center"
            >
                <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-2" />
            </motion.div>
        </div>
    );
}
