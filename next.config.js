/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {
        hostname:"i.pinimg.com",
      }
    ]
  }
}

module.exports = nextConfig
