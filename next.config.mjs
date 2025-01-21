/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://192.168.0.201:8080/safer/:path*', // Local backend server
        },
        {
          source: '/api-image/:path*',
          destination: 'https://safer.deltawy.com/:path*', // Image server
        },
      ];
    },
  };
  
  export default nextConfig;
  