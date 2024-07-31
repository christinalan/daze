// import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_ROOT: "http://0.0.0.0:8787",
        // doesn't work
        TESTFLIGHT_URL: "https://testflight.apple.com/join/3J8k9Z5g",
    },
    async headers() {
        return [
            {
                // Matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: ["GET", "OPTIONS", "PATCH", "DELETE", "POST", "PUT"].join(","),
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: [
                            "X-CSRF-Token",
                            "X-Requested-With",
                            "Accept",
                            "Accept-Version",
                            "Content-Length",
                            "Content-MD5",
                            "Content-Type",
                            "Date",
                            "X-Api-Version",
                        ].join(", "),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
