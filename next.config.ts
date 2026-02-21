import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        ppr: false,
        clientSegmentCache: false,
    },
    distDir: 'out',
    output: "export",
    trailingSlash: true,
    basePath: "/context-eval-website",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
