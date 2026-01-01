"use client";

import { useState } from "react";
import { motion, useDragControls } from "framer-motion";

export function ElasticDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const dragControls = useDragControls();

    return (
        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-lg overflow-hidden relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg z-20"
            >
                {isOpen ? "Close" : "Open"} Drawer
            </button>

            <motion.div
                className="absolute right-0 top-0 bottom-0 w-48 bg-zinc-900 border-l border-purple-500/30 shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                    if (info.offset.x > 100) setIsOpen(false);
                }}
            >
                <div className="p-4">
                    <h3 className="text-white font-bold mb-2">Drawer</h3>
                    <p className="text-zinc-400 text-sm">Elastic snap-back</p>
                </div>
            </motion.div>
        </div>
    );
}
