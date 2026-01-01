"use client";

export function TextPathFollower() {
    return (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
            <svg width="300" height="100" viewBox="0 0 300 100">
                <defs>
                    <path
                        id="curve"
                        d="M 10 50 Q 100 10, 150 50 T 290 50"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                    />
                </defs>
                <use href="#curve" />
                <text fill="#10b981" fontSize="14" fontWeight="bold">
                    <textPath href="#curve" startOffset="0%">
                        <animate attributeName="startOffset" from="0%" to="100%" dur="5s" repeatCount="indefinite" />
                        Following the path...
                    </textPath>
                </text>
            </svg>
        </div>
    );
}
