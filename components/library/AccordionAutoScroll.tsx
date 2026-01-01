"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = ["Item 1", "Item 2", "Item 3"];

export function AccordionAutoScroll() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <div className="h-48 overflow-auto bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-lg p-4">
            <div className="space-y-2">
                {items.map((item, i) => (
                    <div key={i} className="border border-zinc-700 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setExpandedId(expandedId === i ? null : i)}
                            className="w-full p-3 text-left text-white font-medium hover:bg-zinc-800/50 transition-colors"
                        >
                            {item}
                        </button>
                        <AnimatePresence>
                            {expandedId === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-3 text-zinc-400 text-sm">
                                        Content for {item}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
