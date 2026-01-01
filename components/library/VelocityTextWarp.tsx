"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function VelocityTextWarp() {
    const textRef = useRef<HTMLDivElement>(null);
    const velocity = useRef(0);
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (!textRef.current) return;

        const updateVelocity = () => {
            const currentScrollY = window.scrollY;
            velocity.current = (currentScrollY - lastScrollY.current) * 0.05;
            lastScrollY.current = currentScrollY;

            if (textRef.current) {
                gsap.to(textRef.current, {
                    skewX: gsap.utils.clamp(-5, 5, velocity.current),
                    scaleY: gsap.utils.clamp(0.95, 1.05, 1 + Math.abs(velocity.current) * 0.01),
                    duration: 0.3,
                    ease: "power2.out"
                });
            }

            velocity.current *= 0.9; // Decay
        };

        const interval = setInterval(updateVelocity, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-lg overflow-hidden">
            <div ref={textRef} className="text-4xl font-bold text-white" style={{ transformOrigin: "center" }}>
                VELOCITY
            </div>
        </div>
    );
}
