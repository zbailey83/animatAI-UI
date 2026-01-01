"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const prices = { USD: 99, EUR: 89, GBP: 79 };

export function CurrencyToggle() {
    const [currency, setCurrency] = useState<keyof typeof prices>("USD");

    const symbols = { USD: "$", EUR: "€", GBP: "£" };

    return (
        <div className="h-32 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-lg">
            <div className="flex gap-2">
                {(Object.keys(prices) as Array<keyof typeof prices>).map((curr) => (
                    <button
                        key={curr}
                        onClick={() => setCurrency(curr)}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                            currency === curr ? "bg-emerald-500 text-white" : "bg-zinc-800 text-zinc-400"
                        }`}
                    >
                        {curr}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-1 text-3xl font-bold text-white">
                <span>{symbols[currency]}</span>
                <motion.span
                    key={currency}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {prices[currency]}
                </motion.span>
                <span className="text-lg text-zinc-500">/mo</span>
            </div>
        </div>
    );
}
