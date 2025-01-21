module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets1.ignimgs.com', // Specify each domain individually
        port: '',
        pathname: '/**',  // This matches any path under this domain
      },
      {
        protocol: 'https',
        hostname: 'pics.craiyon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
        pathname: '/**',
      },
      
    ],
  },
}
