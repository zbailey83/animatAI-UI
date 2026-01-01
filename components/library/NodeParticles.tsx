"use client";

import { useRef, useEffect } from "react";

export function NodeParticles() {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            particlesRef.current.forEach((particle) => {
                if (!particle) return;
                const particleRect = particle.getBoundingClientRect();
                const particleX = particleRect.left - rect.left + particleRect.width / 2;
                const particleY = particleRect.top - rect.top + particleRect.height / 2;

                const dx = particleX - mouseX;
                const dy = particleY - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const moveX = (dx / distance) * force * 30;
                    const moveY = (dy / distance) * force * 30;

                    particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    particle.style.transform = "translate(0, 0)";
                }
            });
        };

        containerRef.current?.addEventListener("mousemove", handleMouseMove);
        const container = containerRef.current;

        return () => {
            container?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden relative cursor-none"
        >
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-4 p-4">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) particlesRef.current[i] = el;
                        }}
                        className="w-4 h-4 bg-pink-500 rounded-full transition-transform duration-200"
                    />
                ))}
            </div>
        </div>
    );
}
