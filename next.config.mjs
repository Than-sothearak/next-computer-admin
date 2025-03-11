/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: {
    bodySizeLimit: "15mb", // Increase limit to 15 MB
  },
};

export default nextConfig;