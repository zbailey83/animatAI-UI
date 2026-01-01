"use client";

import { motion } from "framer-motion";

export function DynamicMesh() {
    return (
        <div className="h-48 relative rounded-lg overflow-hidden bg-black">
            {[
                { color: "bg-purple-500", x: "20%", y: "20%" },
                { color: "bg-blue-500", x: "80%", y: "30%" },
                { color: "bg-pink-500", x: "40%", y: "70%" },
                { color: "bg-cyan-500", x: "70%", y: "80%" },
            ].map((blob, index) => (
                <motion.div
                    key={index}
                    className={`absolute w-32 h-32 ${blob.color} rounded-full`}
                    style={{
                        filter: "blur(80px)",
                        left: blob.x,
                        top: blob.y,
                    }}
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -30, 20, 0],
                    }}
                    transition={{
                        duration: 10 + index * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
