"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
}

export function MagneticButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { contextSafe } = useGSAP({ scope: buttonRef });

    const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < 100) {
            const strength = (100 - distance) / 100;
            gsap.to(buttonRef.current, {
                x: deltaX * strength * 0.3,
                y: deltaY * strength * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });

    return (
        <div className="flex items-center justify-center p-8 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden min-h-[160px]">
            <button
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/50 transition-shadow"
            >
                Hover Me
            </button>
        </div>
    );
}
