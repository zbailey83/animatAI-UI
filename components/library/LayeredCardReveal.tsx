"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LayeredCardReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const cards = containerRef.current.querySelectorAll(".card");

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { yPercent: 100 },
                {
                    yPercent: 0,
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "power2.out",
                }
            );
        });
    }, []);

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg overflow-hidden p-4">
            <div ref={containerRef} className="relative w-full max-w-xs h-40">
                {[1, 2, 3].map((num) => (
                    <div
                        key={num}
                        className="card absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-xl flex items-center justify-center text-white font-bold text-2xl"
                        style={{
                            zIndex: num,
                            transform: `translateY(${(num - 1) * 10}px)`,
                        }}
                    >
                        Card {num}
                    </div>
                ))}
            </div>
        </div>
    );
}
