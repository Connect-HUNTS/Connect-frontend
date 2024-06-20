// next.config.mjs
const nextConfig = {
    images: {
        domains: ["t.me"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "t.me",
                port: "",
                pathname: "/u/**",
            },
        ],
    },
}

export default nextConfig