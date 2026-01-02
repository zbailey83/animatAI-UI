"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
    Type,
    Compass,
    CreditCard,
    MousePointer2,
    Cpu,
    ArrowLeft,
    ArrowRight
} from "lucide-react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "@/utils/gsapHelpers";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

const CATEGORIES = [
    { name: 'Typography', icon: Type, href: '/library/typography', count: '10+' },
    { name: 'Navigation', icon: Compass, href: '/library/navigation', count: '8+' },
    { name: 'Pricing', icon: CreditCard, href: '/library/pricing', count: '12+' },
    { name: 'Scroll', icon: MousePointer2, href: '/library/scroll', count: '15+' },
    { name: 'Interactions', icon: Cpu, href: '/library/interactions', count: '9+' },
];

// Duplicate items to create a seamless loop effect
const ITEMS = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

export function InfiniteCategoryCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loopInstance, setLoopInstance] = useState<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        const boxes = gsap.utils.toArray('.category-card');

        const loop = horizontalLoop(boxes, {
            paused: true, // Start paused or playing? Usually playing.
            draggable: true,
            center: true,
            repeat: -1,
            speed: 1.5,
            paddingRight: 24, // Matches gap-6 (24px)
            snap: false // Snap can be tricky without inertia plugin, disable for smoother free-scroll feeling or set to 1 for generic snapping
        });

        // Start playing
        loop.play();

        setLoopInstance(loop);

        return () => {
            // Cleanup if needed, though gsap.context handles most
            if (loop.draggable) loop.draggable.kill();
            loop.kill();
        }

    }, { scope: containerRef });

    const handlePrev = () => {
        loopInstance?.prev();
    };

    const handleNext = () => {
        loopInstance?.next();
    };

    return (
        <div ref={containerRef} className="w-full relative py-12 group">

            {/* Carousel Container */}
            <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing py-4">
                <div className="flex gap-6 w-max px-6">
                    {ITEMS.map((cat, i) => (
                        <div
                            key={`${cat.name}-${i}`}
                            className="category-card flex-shrink-0 w-[240px] md:w-[280px]"
                        >
                            <Link href={cat.href} draggable={false} className="block h-full">
                                <div className="glass-card p-6 h-[200px] flex flex-col items-center justify-center gap-4 text-center hover:border-accent-blue/50 transition-colors select-none">
                                    <div className="p-4 rounded-full bg-bg-secondary/50 group-hover:bg-accent-blue/10 transition-colors">
                                        <cat.icon size={32} className="text-text-secondary group-hover:text-accent-blue transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">{cat.name}</h3>
                                        <p className="text-sm text-text-muted font-mono">{cat.count} Components</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Visible on hover or mobile) */}
            <div className="flex justify-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={handlePrev}
                    className="glass-panel p-3 hover:scale-110 active:scale-95 transition-transform rounded-full hover:text-accent-blue"
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    onClick={handleNext}
                    className="glass-panel p-3 hover:scale-110 active:scale-95 transition-transform rounded-full hover:text-accent-blue"
                >
                    <ArrowRight size={20} />
                </button>
            </div>

        </div>
    );
}
