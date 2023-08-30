const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  eslint: {
    // Warning: ignore will enable build to complete even if it has ESLint errors
    ignoreDuringBuilds: true,
  },
  serverRuntimeConfig: {
    LOCAL_URL: "http://localhost:3000",
    NEXT_PUBLIC_VERCEL_URL: "https://mojodojo.vercel.app"
  },
  publicRuntimeConfig: {
    staticFolder: "/static"
  },
};

module.exports = nextConfig
