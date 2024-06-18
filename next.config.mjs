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
