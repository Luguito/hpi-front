/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hki.blob.core.windows.net',
                port: '',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/token',
                destination: 'http://20.29.41.168:8000/api/authorize/login',
            },
            {
                source: '/get-image',
                destination: 'http://20.29.41.168:8000/api/authorize/login',
            },
        ]
    },
    // i18n: {
    //     locales: ['en-US', 'es-MX', 'zh_Hans_HK'],
    //     defaultLocale: 'en-US',
    //     domains: [
    //         {
    //             domain: 'localhost',
    //             defaultLocale: 'en-US',
    //         }
    //     ]
    // } 
};

export default nextConfig;
