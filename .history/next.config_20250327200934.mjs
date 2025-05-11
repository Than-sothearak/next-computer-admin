/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thearak-next-computer.s3.ap-southeast-1.amazonaws.com',
      
      },
      {
        protocol: 'https',
        hostname: 'thearak-next-ecommerce.s3.ap-southeast-1.amazonaws.com',
        pathname: '/uploads/**',
      
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      
      },
    ],
  },
};

export default nextConfig;
