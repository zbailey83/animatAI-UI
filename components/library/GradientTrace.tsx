"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
}

export function GradientTrace() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const svg = container.current?.querySelector("#svg-stage");
        const path = container.current?.querySelector("path");

        if (svg && path) {
            // Get the total length of the path
            // We cast to SVGPathElement to satisfy TS
            const length = (path as SVGPathElement).getTotalLength();

            // Set initial states
            gsap.set(svg, { opacity: 1 }); // Make SVG visible
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 1 // Ensure path is visible if it inherited 0
            });

            // Animate the drawing
            gsap.to(path, {
                strokeDashoffset: 0,
                duration: 2.5,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true,
                repeatDelay: 0.5
            });
        }
    }, { scope: container });

    return (
        <div ref={container} className="flex items-center justify-center p-8 glass-card aspect-square">
            <div className="w-full max-w-[200px]">
                <svg
                    id="svg-stage"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1 -1 103 103"
                    fill="none"
                    strokeWidth="2.2"
                    opacity="0"
                    className="w-full h-full overflow-visible"
                >
                    <defs>
                        <linearGradient id="grad-1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2" stopColor="rgb(255, 135, 9)"></stop>
                            <stop offset="0.8" stopColor="rgb(247, 189, 248)"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        stroke="url(#grad-1)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M50.5 50.5h50v50s-19.2 1.3-37.2-16.7S56 35.4 35.5 15.5C18.5-1 .5.5.5.5v50h50s25.6-.6 38-18 12-32 12-32h-50v100H.5S.2 80.7 11.8 68.2 40 49.7 50.5 50.5Z"
                    />
                </svg>
            </div>
        </div>
    );
}
