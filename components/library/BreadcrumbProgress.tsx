"use client";

import { motion } from "framer-motion";

export function BreadcrumbProgress() {
    const steps = [
        { label: "Start", completed: true },
        { label: "Middle", completed: true },
        { label: "End", completed: false },
    ];

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
                {steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <motion.div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step.completed ? "bg-cyan-500 text-white" : "bg-zinc-700 text-zinc-400"
                                }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            {i + 1}
                        </motion.div>
                        {i < steps.length - 1 && (
                            <div className="w-12 h-0.5 bg-zinc-700 relative overflow-hidden">
                                {step.completed && (
                                    <motion.div
                                        className="absolute inset-0 bg-cyan-500"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: i * 0.2 + 0.2 }}
                                        style={{ transformOrigin: "left" }}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
