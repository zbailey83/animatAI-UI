"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SlotMachineReveal() {
    const [value, setValue] = useState(0);
    const targetValue = 42;

    useEffect(() => {
        const timer = setTimeout(() => setValue(targetValue), 500);
        return () => clearTimeout(timer);
    }, []);

    const digits = targetValue.toString().split("");

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-yellow-900/20 to-amber-900/20 rounded-lg">
            <div className="flex gap-2">
                {digits.map((digit, i) => (
                    <div key={i} className="w-12 h-16 bg-zinc-900 rounded-lg overflow-hidden relative">
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-start"
                            initial={{ y: 0 }}
                            animate={{ y: `-${parseInt(digit) * 64}px` }}
                            transition={{
                                duration: 1 + i * 0.2,
                                ease: [0.68, -0.55, 0.265, 1.55],
                            }}
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <div key={num} className="h-16 flex items-center justify-center text-2xl font-bold text-yellow-400">
                                    {num}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
