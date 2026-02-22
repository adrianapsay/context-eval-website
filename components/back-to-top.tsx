'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-lg
        hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300 cursor-pointer
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
