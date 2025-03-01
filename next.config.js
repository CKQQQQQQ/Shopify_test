/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
    unoptimized: true,
  },
  basePath: '/Shopify_test',
}

module.exports = nextConfig 