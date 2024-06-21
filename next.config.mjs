// next.config.mjs
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "t.me",
                port: "",
                pathname: "/u/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/a/**",
            },
            {
                protocol: "https",
                hostname: "connector.ai",
                port: "",
                pathname: "/**",
            },
        ],
    },
}

export default nextConfig