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
  async redirects() {
    return [
      {
        source: '/summercamp',
        destination: '/summer-camp',
        permanent: true,
      },
      {
        source: '/summer-camps',
        destination: '/summer-camp',
        permanent: true,
      },
      {
        source: '/camp',
        destination: '/summer-camp',
        permanent: true,
      },
      {
        source: '/jamcamp',
        destination: '/summer-camp',
        permanent: true,
      },
      {
        source: '/jam-camp',
        destination: '/summer-camp',
        permanent: true,
      },
      {
        source: '/charter-school',
        destination: '/charter-schools',
        permanent: true,
      },
      {
        source: '/charterschool',
        destination: '/charter-schools',
        permanent: true,
      },
      {
        source: '/charterschools',
        destination: '/charter-schools',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
