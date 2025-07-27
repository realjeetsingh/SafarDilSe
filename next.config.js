/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration to avoid webpack conflicts
  experimental: {
    optimizePackageImports: ['leaflet', 'react-leaflet']
  }
}

module.exports = nextConfig
