import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "sparkle-stay-clean";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  experimental: {
    proxyClientMaxBodySize: "20mb",
  },
};

export default nextConfig;
