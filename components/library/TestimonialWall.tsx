"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TestimonialWall() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), {
        stiffness: 150,
        damping: 20,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const testimonials = [
        { name: "John D.", text: "Amazing!" },
        { name: "Sarah M.", text: "Love it!" },
        { name: "Mike R.", text: "Perfect!" },
    ];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="h-48 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-lg p-4"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="grid grid-cols-3 gap-3 w-full max-w-md"
                style={{ rotateX, rotateY }}
            >
                {testimonials.map((testimonial, i) => (
                    <div
                        key={i}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                    >
                        <p className="text-xs text-white mb-1">{testimonial.text}</p>
                        <p className="text-[10px] text-zinc-500">— {testimonial.name}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
