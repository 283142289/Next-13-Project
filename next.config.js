const nextConfig = {
  images: {//img.ltwebstatic.com/images3_pi/2022/10/31/166718025026a4e035ff0b5608d37493d0aed398e5_thumbnail_405x552.jpg

      domains: ['img.ltwebstatic.com','localhost','www.pexels.com','https://image.tmdb.org','images.pexels.com', "image.tmdb.org", "diz36nn4q02zr.cloudfront.net", "i.ibb.co"],
  },
  pageExtensions: ['jsx', 'js', 'ts', 'mjs'],
  experimental: {
      appDir: true,
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
  webpack: (config) => {
      config.module.rules.push({
          test: /\.js$/,
          include: /node_modules/,
          use: [
              {
                  loader: 'babel-loader',
                  options: {
                      plugins: [
                          [
                              'import',
                              {
                                  libraryName: 'react-icons',
                                  camel2DashComponentName: false,
                              },
                          ],
                      ],
                  },
              },
          ],
      });

      config.resolve.alias['@'] = __dirname + '/app';
      return config;
  },
/*   serverRuntimeConfig: {
    apiPort: 3010,
  },
 */
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
