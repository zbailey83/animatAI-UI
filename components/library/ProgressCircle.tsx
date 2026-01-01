"use client";

import { useEffect, useState } from "react";

export function ProgressCircle() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
            <svg width="80" height="80">
                <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    fill="none"
                    stroke="#27272a"
                    strokeWidth="6"
                />
                <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                />
                <text
                    x="40"
                    y="45"
                    textAnchor="middle"
                    className="text-sm font-bold fill-white"
                >
                    {progress}%
                </text>
            </svg>
        </div>
    );
}
