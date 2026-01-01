"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = ["NIKE", "APPLE", "TESLA", "GOOGLE", "META"];

export function TrustTicker() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const animation = gsap.to(containerRef.current, {
            xPercent: -50,
            duration: 15,
            ease: "none",
            repeat: -1,
        });

        const handleMouseEnter = () => animation.timeScale(0.2);
        const handleMouseLeave = () => animation.timeScale(1);

        const container = containerRef.current;
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            animation.kill();
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="h-32 flex items-center bg-gradient-to-br from-gray-900/20 to-zinc-900/20 rounded-lg overflow-hidden">
            <div ref={containerRef} className="flex gap-12 whitespace-nowrap">
                {[...logos, ...logos].map((logo, i) => (
                    <div key={i} className="text-xl font-bold text-zinc-600">
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
}
