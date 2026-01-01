"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function VariableFontWeight() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const animation = gsap.to(textRef.current, {
            fontVariationSettings: "'wght' 900",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 rounded-lg overflow-hidden">
            <div
                ref={textRef}
                className="text-5xl font-bold text-white"
                style={{
                    fontVariationSettings: "'wght' 100",
                    fontFamily: "system-ui",
                }}
            >
                VARIABLE
            </div>
        </div>
    );
}
