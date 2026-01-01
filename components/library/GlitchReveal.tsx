"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function GlitchReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const layers = containerRef.current.querySelectorAll(".glitch-layer");

        const glitchAnimation = gsap.timeline({ repeat: -1, repeatDelay: 2 });

        glitchAnimation
            .to(layers[1], { x: -2, duration: 0.05, ease: "none" })
            .to(layers[2], { x: 2, duration: 0.05, ease: "none" }, "<")
            .to(layers[1], { x: 2, duration: 0.05, ease: "none" })
            .to(layers[2], { x: -2, duration: 0.05, ease: "none" }, "<")
            .to(layers, { x: 0, duration: 0.05, ease: "none" });

        return () => {
            glitchAnimation.kill();
        };
    }, []);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg overflow-hidden relative">
            <div ref={containerRef} className="relative">
                <div className="glitch-layer text-4xl font-bold text-white">GLITCH</div>
                <div className="glitch-layer text-4xl font-bold text-cyan-400 absolute top-0 left-0 opacity-70 mix-blend-screen">
                    GLITCH
                </div>
                <div className="glitch-layer text-4xl font-bold text-pink-400 absolute top-0 left-0 opacity-70 mix-blend-screen">
                    GLITCH
                </div>
            </div>
        </div>
    );
}
