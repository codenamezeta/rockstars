/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [96, 160, 180, 320, 640, 750, 828, 1080, 1200], // Custom sizes
    imageSizes: [16, 32, 48, 64, 96], // Smaller increments
    formats: ['image/webp', 'image/avif'], // Modern formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
