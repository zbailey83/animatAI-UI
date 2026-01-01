"use client";

import React, { useRef, useState, useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP, TextPlugin);
}

export function ROICalculatorPreview() {
    const container = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState(5000); // Monthly spending
    const savingsRef = useRef<HTMLSpanElement>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    const annualSavings = useMemo(() => value * 0.35 * 12, [value]);

    // Initialize on mount
    useEffect(() => {
        if (savingsRef.current && !isInitialized) {
            savingsRef.current.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            }).format(annualSavings);

            // Initialize bar chart on first load
            gsap.set(".bar-growth", {
                scaleY: value / 10000,
                transformOrigin: "bottom"
            });

            setIsInitialized(true);
        }
    }, [annualSavings, isInitialized, value]);

    useGSAP(() => {
        if (!isInitialized) return;

        // Animate the savings number
        gsap.to(savingsRef.current, {
            duration: 0.5,
            innerText: annualSavings,
            snap: { innerText: 1 },
            onUpdate: function () {
                if (savingsRef.current) {
                    savingsRef.current.innerHTML = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0
                    }).format(Number(savingsRef.current.innerText));
                }
            },
            ease: "power2.out"
        });

        // Animate the bar chart
        gsap.to(".bar-growth", {
            scaleY: value / 10000,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
            transformOrigin: "bottom"
        });
    }, { dependencies: [annualSavings, isInitialized], scope: container });

    return (
        <div ref={container} className="flex flex-col gap-6 p-6 bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl">
            <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Monthly Spend</h4>
                <div className="flex justify-between items-end">
                    <span className="text-3xl font-black text-white italic tracking-tighter">
                        ${value.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                        35% SAVINGS
                    </span>
                </div>
                <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
                />
            </div>

            <div className="flex items-center gap-6 h-32 pt-4">
                {/* Simple SVG Bar Chart */}
                <div className="flex-grow flex items-end justify-around gap-2 h-full bg-zinc-900/50 rounded-lg p-3 border border-zinc-800/50">
                    {[0.4, 0.6, 0.8, 1.0].map((m, i) => (
                        <div key={i} className="relative w-full group">
                            <div
                                className="bar-growth w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-sm shadow-lg shadow-indigo-500/20"
                                style={{ height: '100%', transform: `scaleY(0)` }}
                            />
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-zinc-500 font-mono">
                                M{i + 1}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-end text-right min-w-[140px]">
                    <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Est. Annual ROI</h4>
                    <span ref={savingsRef} className="text-2xl font-black text-indigo-400 tracking-tighter tabular-nums leading-none">
                        $0
                    </span>
                    <p className="text-[9px] text-zinc-600 mt-1 max-w-[100px]">Based on standard enterprise license</p>
                </div>
            </div>
        </div>
    );
}
