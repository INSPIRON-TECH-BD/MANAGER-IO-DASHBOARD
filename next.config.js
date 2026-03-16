/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/MANAGER-IO-DASHBOARD' : '',
  assetPrefix: isProd ? '/MANAGER-IO-DASHBOARD/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
