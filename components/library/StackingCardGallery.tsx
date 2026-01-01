"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function StackingCardGallery() {
    const [isSpread, setIsSpread] = useState(false);

    const cards = [
        { id: 1, color: "from-red-500 to-orange-500" },
        { id: 2, color: "from-blue-500 to-cyan-500" },
        { id: 3, color: "from-purple-500 to-pink-500" },
    ];

    return (
        <div
            className="h-48 flex items-center justify-center bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-lg"
            onMouseEnter={() => setIsSpread(true)}
            onMouseLeave={() => setIsSpread(false)}
        >
            <div className="relative w-48 h-32">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className={`absolute w-full h-full bg-gradient-to-br ${card.color} rounded-lg shadow-xl flex items-center justify-center text-white font-bold`}
                        initial={{ rotate: 0, x: 0, y: 0 }}
                        animate={
                            isSpread
                                ? {
                                    rotate: (index - 1) * 15,
                                    x: (index - 1) * 40,
                                    y: 0,
                                }
                                : {
                                    rotate: 0,
                                    x: 0,
                                    y: index * 10,
                                }
                        }
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        style={{ zIndex: isSpread ? cards.length - index : index }}
                    >
                        {card.id}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
