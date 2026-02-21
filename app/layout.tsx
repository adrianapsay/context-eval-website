import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';

export const metadata: Metadata = {
    title: 'ContextEval',
    description: 'Evaluating LLM Agent Context Policies for ML Experiment Design',
    openGraph: {
        title: 'ContextEval',
        description: 'Evaluating LLM Agent Context Policies for ML Experiment Design',
        url: 'https://adrianapsay.github.io/context-eval-website/',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ContextEval',
        description: 'Evaluating LLM Agent Context Policies for ML Experiment Design',
    }
};

export const viewport: Viewport = {
    maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
        >
            <body className="min-h-[100dvh] bg-gray-50">
                {children}
            </body>
        </html>
    );
}
