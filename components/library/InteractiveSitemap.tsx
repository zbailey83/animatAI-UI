"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tree = {
    name: "Root",
    children: [
        { name: "Child 1", children: [{ name: "Leaf 1" }, { name: "Leaf 2" }] },
        { name: "Child 2" },
    ],
};

export function InteractiveSitemap() {
    const [expanded, setExpanded] = useState<string[]>(["Root"]);

    const toggleNode = (name: string) => {
        setExpanded((prev) =>
            prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
        );
    };

    return (
        <div className="h-48 overflow-auto bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg p-4">
            <div className="space-y-2">
                <button
                    onClick={() => toggleNode(tree.name)}
                    className="px-3 py-2 bg-indigo-500/20 rounded text-white font-medium w-full text-left"
                >
                    {tree.name}
                </button>
                {expanded.includes(tree.name) && tree.children && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pl-4 space-y-2"
                    >
                        {tree.children.map((child: any, i: number) => (
                            <div key={i}>
                                <button
                                    onClick={() => toggleNode(child.name)}
                                    className="px-3 py-2 bg-purple-500/10 rounded text-zinc-300 text-sm w-full text-left"
                                >
                                    {child.name}
                                </button>
                                {child.children && expanded.includes(child.name) && (
                                    <div className="pl-4 space-y-1 mt-1">
                                        {child.children.map((leaf: any, j: number) => (
                                            <div key={j} className="px-2 py-1 text-zinc-500 text-xs">
                                                {leaf.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
