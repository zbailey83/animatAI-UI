"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = ["Account", "Profile", "Preferences"];

export function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg p-4">
            <div className="w-full max-w-sm">
                <div className="flex gap-2 mb-4">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`flex-1 h-1 rounded-full transition-colors ${i <= currentStep ? "bg-blue-500" : "bg-zinc-700"
                                }`}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-zinc-900/50 p-4 rounded-lg"
                    >
                        <h3 className="text-white font-bold mb-2">{steps[currentStep]}</h3>
                        <p className="text-zinc-400 text-sm mb-4">Step {currentStep + 1} of {steps.length}</p>
                        <button
                            onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
                            className="px-4 py-2 bg-blue-500 text-white rounded text-sm"
                        >
                            Next
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
