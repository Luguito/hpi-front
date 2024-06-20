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
            {
                protocol: 'https',
                hostname: 'dev-code-hki.azurewebsites.net',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'app-hph-it-innoweb-u-sea-02.azurewebsites.net',
                port: '',
            }
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
