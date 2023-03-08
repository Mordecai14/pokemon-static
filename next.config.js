/** @type {import('next').NextConfig} */
const withPwa = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = withPwa;
