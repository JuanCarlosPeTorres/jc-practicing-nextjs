/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/suppliers",
        destination: `${process.env.API_URL}/suppliers`,
      },
    ];
  },
};

export default nextConfig;
