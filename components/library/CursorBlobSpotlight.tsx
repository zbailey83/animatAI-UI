"use client";

import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export function CursorBlobSpotlight() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="h-48 relative bg-black rounded-lg overflow-hidden cursor-none"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20" />
            <motion.div
                className="absolute w-32 h-32 rounded-full bg-white"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    mixBlendMode: "difference",
                    filter: "blur(20px)",
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                REVEAL
            </div>
        </div>
    );
}
