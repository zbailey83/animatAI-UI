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
import { Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { horizontalLoop, HorizontalLoopTimeline } from "@/utils/gsapHelpers";

if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

const CATEGORIES = [
    {
        name: 'Typography',
        icon: Type,
        href: '/library/typography',
        count: '10+',
        styles: {
            hoverBorder: 'hover:border-cyan-500/50',
            iconBg: 'group-hover:bg-cyan-500/10',
            iconColor: 'group-hover:text-cyan-500'
        }
    },
    {
        name: 'Navigation',
        icon: Compass,
        href: '/library/navigation',
        count: '8+',
        styles: {
            hoverBorder: 'hover:border-emerald-500/50',
            iconBg: 'group-hover:bg-emerald-500/10',
            iconColor: 'group-hover:text-emerald-500'
        }
    },
    {
        name: 'Pricing',
        icon: CreditCard,
        href: '/library/pricing',
        count: '12+',
        styles: {
            hoverBorder: 'hover:border-violet-500/50',
            iconBg: 'group-hover:bg-violet-500/10',
            iconColor: 'group-hover:text-violet-500'
        }
    },
    {
        name: 'Scroll',
        icon: MousePointer2,
        href: '/library/scroll',
        count: '15+',
        styles: {
            hoverBorder: 'hover:border-amber-500/50',
            iconBg: 'group-hover:bg-amber-500/10',
            iconColor: 'group-hover:text-amber-500'
        }
    },
    {
        name: 'Interactions',
        icon: Cpu,
        href: '/library/interactions',
        count: '9+',
        styles: {
            hoverBorder: 'hover:border-rose-500/50',
            iconBg: 'group-hover:bg-rose-500/10',
            iconColor: 'group-hover:text-rose-500'
        }
    },
];

// Duplicate items to create a seamless loop effect
const ITEMS = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

export function InfiniteCategoryCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loopInstance, setLoopInstance] = useState<HorizontalLoopTimeline | null>(null);

    useGSAP(() => {
        const boxes = gsap.utils.toArray('.category-card') as HTMLElement[];

        const loop = horizontalLoop(boxes, {
            paused: true,
            draggable: true,
            center: true,
            repeat: -1,
            speed: 1.5,
            paddingRight: 24,
            snap: false
        });

        loop.play();
        setLoopInstance(loop);

        // Velocity Tilt Logic
        let lastX = 0;
        let velocity = 0;

        const updateTilt = () => {
            const currentX = gsap.getProperty(boxes[0], "xPercent") as number;
            let delta = currentX - lastX;

            if (Math.abs(delta) > 50) {
                delta = 0;
            }

            velocity += (delta - velocity) * 0.1;

            const tilt = velocity * -5;
            const clampedTilt = Math.max(-10, Math.min(10, tilt));

            gsap.set(".category-card-inner", {
                skewX: clampedTilt,
                rotateZ: clampedTilt * 0.5,
                transformOrigin: "center center"
            });

            lastX = currentX;
        };

        gsap.ticker.add(updateTilt);

        return () => {
            gsap.ticker.remove(updateTilt);
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
        <div
            ref={containerRef}
            className="w-full relative py-12 group"
            onMouseEnter={() => loopInstance?.pause()}
            onMouseLeave={() => loopInstance?.play()}
        >

            {/* Carousel Container */}
            <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing py-4">
                <div className="flex gap-6 w-max px-6">
                    {ITEMS.map((cat, i) => (
                        <div
                            key={`${cat.name}-${i}`}
                            className="category-card flex-shrink-0 w-[240px] md:w-[280px]"
                        >
                            <Link href={cat.href} draggable={false} className="block h-full">
                                <div className={`category-card-inner glass-card p-6 h-[200px] flex flex-col items-center justify-center gap-4 text-center ${cat.styles.hoverBorder} transition-colors select-none`}>
                                    <div className={`p-4 rounded-full bg-bg-secondary/50 ${cat.styles.iconBg} transition-colors`}>
                                        <cat.icon size={32} className={`text-text-secondary ${cat.styles.iconColor} transition-colors`} />
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
