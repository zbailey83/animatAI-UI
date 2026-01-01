"use client";

import { useEffect, useState } from "react";

export function TypewriterDeluxe() {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "Type with style...";

    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(typeInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
            <div className="text-2xl font-mono text-emerald-400">
                {displayText}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
            </div>
        </div>
    );
}
