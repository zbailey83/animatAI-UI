"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const brands = ["GOOGLE", "APPLE", "META", "AMAZON", "TESLA", "NETFLIX"];

export function InfiniteBrandCloud() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const animation = gsap.to(containerRef.current, {
            xPercent: -50,
            duration: 20,
            ease: "none",
            repeat: -1,
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div className="h-32 flex items-center bg-gradient-to-br from-slate-900/20 to-zinc-900/20 rounded-lg overflow-hidden">
            <div ref={containerRef} className="flex gap-8 whitespace-nowrap">
                {[...brands, ...brands].map((brand, index) => (
                    <div
                        key={index}
                        className="text-2xl font-bold text-zinc-600 hover:text-white transition-colors"
                    >
                        {brand}
                    </div>
                ))}
            </div>
        </div>
    );
}
