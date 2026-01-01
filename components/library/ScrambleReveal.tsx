"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const GLYPHS = "!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function ScrambleReveal() {
    const [displayText, setDisplayText] = useState("");
    const finalText = "DECRYPT";
    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        let iterations = 0;
        const maxIterations = 40;

        intervalRef.current = setInterval(() => {
            setDisplayText(
                finalText
                    .split("")
                    .map((char, index) => {
                        if (index < iterations / 4) {
                            return finalText[index];
                        }
                        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                    })
                    .join("")
            );

            iterations++;
            if (iterations >= maxIterations) {
                clearInterval(intervalRef.current);
                setDisplayText(finalText);
            }
        }, 50);

        return () => clearInterval(intervalRef.current);
    }, [finalText]);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg">
            <div className="text-4xl font-mono font-bold text-cyan-400 tracking-wider">
                {displayText}
            </div>
        </div>
    );
}
