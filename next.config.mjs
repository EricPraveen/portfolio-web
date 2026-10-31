/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-images-2.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'medium.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/skills', destination: '/#skills', permanent: true },
      { source: '/education', destination: '/#education', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/work', destination: '/#projects', permanent: true },
      { source: '/blog', destination: '/#blog', permanent: true },
      { source: '/articles', destination: '/#blog', permanent: true },
      { source: '/field', destination: '/#blog', permanent: true },
      { source: '/credentials', destination: '/#blog', permanent: true },
    ];
  },
};

export default nextConfig;
