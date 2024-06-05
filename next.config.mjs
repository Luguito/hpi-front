/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/login',
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
