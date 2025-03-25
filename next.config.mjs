/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: "/test-task-for-veel",
        assetPrefix: "/test-task-for-veel/",
      }
    : {}),
};

export default nextConfig;
