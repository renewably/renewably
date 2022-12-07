/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'standalone',
  experimental: {
    outputStandalone: false,
  },
}

module.exports = nextConfig
