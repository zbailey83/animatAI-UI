"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SharedLayoutBento() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const items = [
        { id: 1, title: "Project A", color: "from-blue-500 to-cyan-500" },
        { id: 2, title: "Project B", color: "from-purple-500 to-pink-500" },
        { id: 3, title: "Project C", color: "from-orange-500 to-red-500" },
        { id: 4, title: "Project D", color: "from-green-500 to-emerald-500" },
    ];

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-slate-900/20 to-zinc-900/20 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        className={`relative rounded-lg bg-gradient-to-br ${item.color} p-4 cursor-pointer ${expandedId === item.id ? "col-span-2 row-span-2" : ""
                            }`}
                        layout
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <motion.h3 className="text-white font-bold text-sm" layout>
                            {item.title}
                        </motion.h3>
                        <AnimatePresence>
                            {expandedId === item.id && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-white/80 text-xs mt-2"
                                >
                                    Expanded content for {item.title}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
