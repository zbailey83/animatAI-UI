"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Home, Mail, Settings, User, Heart } from 'lucide-react';

export function MagneticDock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <div
            className="flex items-center justify-center p-8 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden min-h-[160px]"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            <div className="flex gap-4 bg-zinc-900/80 backdrop-blur-xl px-4 py-3 rounded-2xl border border-zinc-700/50">
                <DockIcon mouseX={mouseX} Icon={Home} />
                <DockIcon mouseX={mouseX} Icon={Mail} />
                <DockIcon mouseX={mouseX} Icon={Settings} />
                <DockIcon mouseX={mouseX} Icon={User} />
                <DockIcon mouseX={mouseX} Icon={Heart} />
            </div>
        </div>
    );
}

function DockIcon({ mouseX, Icon }: { mouseX: MotionValue<number>, Icon: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { damping: 12, stiffness: 200, mass: 0.1 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="flex items-center justify-center aspect-square rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg"
        >
            <Icon size={20} />
        </motion.div>
    );
}
