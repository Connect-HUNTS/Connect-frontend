// next.config.mjs
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://104.207.130.38:3000/:path*', // Укажите адрес вашего сервера и путь для проксирования
            },
        ]
    },
};

export default nextConfig;
