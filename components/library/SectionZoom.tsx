"use client";

import { motion } from "framer-motion";

export function SectionZoom() {
    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-lg overflow-hidden">
            <motion.div
                className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                ZOOM
            </motion.div>
        </div>
    );
}
