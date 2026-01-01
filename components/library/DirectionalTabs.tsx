"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "About", "Work", "Contact"];

export function DirectionalTabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-lg">
            <div className="relative flex gap-2 bg-zinc-900/50 p-1 rounded-lg">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(index)}
                        className="relative px-4 py-2 text-sm font-medium text-white z-10 transition-colors"
                        style={{ color: activeTab === index ? "#000" : "#fff" }}
                    >
                        {tab}
                    </button>
                ))}
                <motion.div
                    className="absolute top-1 bottom-1 bg-white rounded-md"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        left: `calc(${activeTab * 25}% + 4px)`,
                        width: `calc(25% - 8px)`,
                    }}
                />
            </div>
        </div>
    );
}
