"use client";

import { motion } from "framer-motion";

const pollData = [
    { option: "Option A", votes: 45 },
    { option: "Option B", votes: 30 },
    { option: "Option C", votes: 25 },
];

export function LivePollBars() {
    const maxVotes = Math.max(...pollData.map((d) => d.votes));

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6">
            <div className="w-full max-w-sm space-y-3">
                {pollData.map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between text-xs text-zinc-400 mb-1">
                            <span>{item.option}</span>
                            <span>{item.votes}%</span>
                        </div>
                        <motion.div
                            className="h-6 bg-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.votes / maxVotes) * 100}%` }}
                            transition={{
                                duration: 1,
                                delay: i * 0.1,
                                ease: [0.68, -0.55, 0.265, 1.55], // Elastic
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
