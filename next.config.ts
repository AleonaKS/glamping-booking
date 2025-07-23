import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  serverExternalPackages: ['@prisma/client', 'prisma'],
  typescript: {
    ignoreBuildErrors: true
  }
}

export default nextConfig



// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     output: 'standalone',
// };

// export default nextConfig;
// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   output: 'standalone', // Для production
// // };

// // module.exports = nextConfig;
