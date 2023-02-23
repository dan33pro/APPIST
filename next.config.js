/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa') ({
  dest: 'public',
  include: ['production'],
  register: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
