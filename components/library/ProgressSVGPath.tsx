"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProgressSVGPath() {
    const container = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const path = container.current?.querySelector("path");
        const scrollContainer = container.current;
        const triggerElement = content.current;

        if (path && scrollContainer && triggerElement) {
            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerElement,
                    scroller: scrollContainer,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            });
        }
    }, { scope: container });

    return (
        <div
            ref={container}
            className="h-48 relative overflow-y-auto bg-zinc-900/20 rounded-lg [&::-webkit-scrollbar]:hidden"
        >
            <div className="sticky top-0 left-0 p-4 w-full flex justify-center z-10 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 100 100" className="-rotate-90 filter drop-shadow-lg">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                    <path
                        d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div ref={content} className="px-4 space-y-3 pt-32 pb-10">
                <div className="text-center text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2">Scroll To Draw</div>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-12 bg-zinc-800/30 rounded border border-zinc-700/30 w-full" />
                ))}
            </div>
        </div>
    );
}
