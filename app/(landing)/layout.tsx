import Link from 'next/link';
import { SectionNav } from '@/components/section-nav';

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            {/* Header */}
            <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-sm z-40">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <span className="text-teal-600 font-mono font-bold text-lg">[C]</span>
                        <span className="font-semibold text-lg">ContextEval</span>
                    </div>
                    <nav className="flex items-center gap-4">
                        <SectionNav />
                    </nav>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                    ContextEval — UCSD DSC Capstone
                </div>
            </footer>
        </div>
    );
}
