/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'es-MX', 'zh_Hans_HK'],
        defaultLocale: 'en-US',
        domains: [
            {
                domain: 'localhost',
                defaultLocale: 'en-US',
            }
        ]
    }
};

export default nextConfig;
