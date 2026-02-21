import Link from 'next/link';

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            {/* Header */}
            <header className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full border-2 border-orange-500" />
                        <span className="font-semibold text-lg">ContextEval</span>
                    </div>
                    <nav className="flex items-center gap-4">
                        <Link
                            href="https://github.com/juliamsjung/context-eval"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            GitHub
                        </Link>
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
                    This website is adapted from the template by{' '}
                    <Link
                        href="https://vercel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700"
                    >
                        Vercel
                    </Link>
                </div>
            </footer>
        </div>
    );
}
