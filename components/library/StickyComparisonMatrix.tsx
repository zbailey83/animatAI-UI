"use client";

import { useState } from "react";

const tiers = [
    { name: "Basic", features: ["✓ 1 User", "✓ 10 GB", "✗ Support"] },
    { name: "Pro", features: ["✓ 5 Users", "✓ 100 GB", "✓ Support"] },
    { name: "Enterprise", features: ["✓ Unlimited", "✓ 1 TB", "✓ Priority"] },
];

export function StickyComparisonMatrix() {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    return (
        <div className="h-48 overflow-auto bg-gradient-to-br from-zinc-900/20 to-slate-900/20 rounded-lg p-4">
            <table className="w-full text-sm">
                <thead className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm">
                    <tr>
                        <th className="p-2 text-left text-zinc-400">Feature</th>
                        {tiers.map((tier) => (
                            <th key={tier.name} className="p-2 text-center text-white">
                                {tier.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {["Users", "Storage", "Support"].map((feature, i) => (
                        <tr
                            key={i}
                            onMouseEnter={() => setHoveredRow(i)}
                            onMouseLeave={() => setHoveredRow(null)}
                            className={`transition-colors ${hoveredRow === i ? "bg-zinc-800/50" : ""
                                }`}
                        >
                            <td className="p-2 text-zinc-400">{feature}</td>
                            {tiers.map((tier) => (
                                <td key={tier.name} className="p-2 text-center text-zinc-300">
                                    {tier.features[i]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
