"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-zinc-900/20 to-slate-900/20 rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-400 text-sm font-mono hover:bg-zinc-700 transition-colors"
            >
                ⌘ K
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-md bg-zinc-900 rounded-xl border border-zinc-700 shadow-2xl z-50 overflow-hidden"
                        >
                            <input
                                type="text"
                                placeholder="Type a command..."
                                className="w-full px-4 py-3 bg-transparent text-white outline-none"
                                autoFocus
                            />
                            <div className="border-t border-zinc-800 p-2">
                                {["New File", "Open...", "Search"].map((cmd) => (
                                    <div
                                        key={cmd}
                                        className="px-3 py-2 hover:bg-zinc-800 rounded text-sm text-zinc-400 cursor-pointer"
                                    >
                                        {cmd}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
