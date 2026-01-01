'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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

    if (!mounted) {
        return (
            <button className="tech-btn px-4 py-3 rounded-lg" aria-label="Toggle theme">
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="tech-btn px-4 py-3 rounded-lg flex items-center gap-2 group relative"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="relative z-10 flex items-center gap-2">
                {theme === 'light' ? (
                    <>
                        <Moon className="w-5 h-5" strokeWidth={2} />
                        <span className="font-medium text-sm hidden sm:inline">Dark</span>
                    </>
                ) : (
                    <>
                        <Sun className="w-5 h-5" strokeWidth={2} />
                        <span className="font-medium text-sm hidden sm:inline">Light</span>
                    </>
                )}
            </div>
        </button>
    );
}
