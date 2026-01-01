"use client";

export function HorizontalCanvasScroll() {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    return (
        <div className="h-48 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 rounded-lg overflow-x-auto">
            <div className="flex gap-4 p-4 w-max">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="min-w-[200px] h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-xl"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
