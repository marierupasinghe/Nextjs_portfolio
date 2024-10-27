/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true // Disable the Image Optimization API
    }
  };
  
  module.exports = nextConfig;
  