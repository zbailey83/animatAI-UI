"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export function ParallaxHero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { damping: 20, stiffness: 200 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { damping: 20, stiffness: 200 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    return (
        <div
            className="flex items-center justify-center p-8 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden min-h-[200px]"
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d'
                }}
                className="relative w-full h-full"
            >
                {/* Layer 1 - Background */}
                <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-xl"
                    style={{ translateZ: -50 }}
                />

                {/* Layer 2 - Middle */}
                <motion.div
                    className="absolute inset-4 rounded-xl bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-sm"
                    style={{ translateZ: 0 }}
                />

                {/* Layer 3 - Foreground */}
                <motion.div
                    className="absolute inset-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-2xl"
                    style={{ translateZ: 50 }}
                >
                    3D Parallax
                </motion.div>
            </motion.div>
        </div>
    );
}
