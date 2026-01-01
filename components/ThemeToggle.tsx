'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <button className="w-16 h-16 brutalist-btn bg-bg-secondary" aria-label="Toggle theme">
                <div className="w-6 h-6" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="brutalist-btn bg-accent-yellow hover:bg-accent-pink px-6 py-4 flex items-center gap-3 group relative overflow-hidden"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="relative z-10 flex items-center gap-2">
                {theme === 'light' ? (
                    <>
                        <Moon className="w-6 h-6 text-border" strokeWidth={3} />
                        <span className="font-black text-sm tracking-wider text-border hidden sm:inline">
                            DARK
                        </span>
                    </>
                ) : (
                    <>
                        <Sun className="w-6 h-6 text-border" strokeWidth={3} />
                        <span className="font-black text-sm tracking-wider text-border hidden sm:inline">
                            LIGHT
                        </span>
                    </>
                )}
            </div>
        </button>
    );
}
