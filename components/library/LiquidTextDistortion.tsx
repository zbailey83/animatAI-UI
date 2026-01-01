"use client";

import { useRef } from "react";

export function LiquidTextDistortion() {
    const textRef = useRef<HTMLDivElement>(null);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-teal-900/20 to-cyan-900/20 rounded-lg overflow-hidden">
            <svg width="0" height="0">
                <filter id="liquid-filter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.01 0.03"
                        numOctaves="3"
                        result="turbulence"
                    >
                        <animate
                            attributeName="baseFrequency"
                            dur="3s"
                            values="0.01 0.03;0.03 0.01;0.01 0.03"
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="turbulence"
                        scale="10"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>
            <div
                ref={textRef}
                className="text-4xl font-bold text-cyan-400"
                style={{ filter: "url(#liquid-filter)" }}
            >
                LIQUID
            </div>
        </div>
    );
}
