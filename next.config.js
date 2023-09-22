/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:1337','127.0.0.1:1337'],
  },
}

module.exports = nextConfig
