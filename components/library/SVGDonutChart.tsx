"use client";

import { useEffect, useRef } from "react";

export function SVGDonutChart() {
    const segments = [
        { value: 40, color: "#8b5cf6", label: "Purple" },
        { value: 30, color: "#06b6d4", label: "Cyan" },
        { value: 30, color: "#ec4899", label: "Pink" },
    ];

    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    let currentOffset = 0;

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-slate-900/20 to-zinc-900/20 rounded-lg">
            <svg width="120" height="120" viewBox="0 0 120 120">
                {segments.map((segment, index) => {
                    const segmentLength = (segment.value / 100) * circumference;
                    const offset = currentOffset;
                    currentOffset += segmentLength;

                    return (
                        <circle
                            key={index}
                            cx="60"
                            cy="60"
                            r={radius}
                            fill="none"
                            stroke={segment.color}
                            strokeWidth="20"
                            strokeDasharray={`${segmentLength} ${circumference}`}
                            strokeDashoffset={-offset}
                            transform="rotate(-90 60 60)"
                            opacity="0"
                            style={{
                                animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
                            }}
                        />
                    );
                })}
            </svg>
            <style jsx>{`
                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
