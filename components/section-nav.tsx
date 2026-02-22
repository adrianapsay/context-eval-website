'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
    { label: 'Abstract', id: 'abstract' },
    { label: 'Introduction', id: 'introduction' },
    { label: 'Related Works', id: 'related-works' },
    { label: 'Methodology', id: 'methodology' },
    { label: 'Results', id: 'results' },
    { label: 'Analysis & Discussion', id: 'analysis' },
    { label: 'Conclusion', id: 'conclusion' },
    { label: 'Code & Resources', id: 'code-resources' },
    { label: 'Citation', id: 'citation' },
];

export function SectionNav() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const scrollTo = (id: string) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
            >
                Sections
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 z-50">
                    {sections.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                            {s.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
