"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function GlassmorphGlare() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);

    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg p-4">
            <motion.div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative w-48 h-32 rounded-xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20"
                style={{
                    background: springX.get
                        ? `radial-gradient(circle at ${springX.get()}% ${springY.get()}%, rgba(255,255,255,0.3), transparent 50%)`
                        : undefined,
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-bold">GLASS</div>
                </div>
            </motion.div>
        </div>
    );
}
