"use client";

import { useEffect, useRef, useState } from "react";

export function ProgressSVGPath() {
    const pathRef = useRef<SVGPathElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!pathRef.current) return;

        const length = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDasharray = `${length}`;
        pathRef.current.style.strokeDashoffset = `${length}`;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + 1;
                if (next > 100) return 0;

                if (pathRef.current) {
                    pathRef.current.style.strokeDashoffset = `${length - (length * next) / 100}`;
                }
                return next;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg">
            <svg width="200" height="100" viewBox="0 0 200 100">
                <path
                    ref={pathRef}
                    d="M 10 50 Q 50 10, 100 50 T 190 50"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
