// next.config.mjs
const nextConfig = {
    images: {
        domains: ["t.me", "lh3.googleusercontent.com"],
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
        ],
    },
}

export default nextConfig