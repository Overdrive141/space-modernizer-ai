/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["upcdn.io", "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Overdrive141",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
