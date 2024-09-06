/* eslint-disable import/no-extraneous-dependencies */

const cdnDomains = [
  'images.ctfassets.net',
  'pixabay.com',
  'www.youtube.com',
  'hips.hearstapps.com',
  's3.us-east-1.wasabisys.com',
  'opposingcylinders.com'
];

const configureNextjs = () => {
  const bundleAnalyzer =
    process.env.ANALYZE === 'true' &&
    require('@next/bundle-analyzer')({ enabled: true })({});

  const headers = async function () {
    return [
      {
        source: '/:all*(svg|jpg|png|mp4|js|me)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate'
          }
        ]
      }
    ];
  };

  return {
    reactStrictMode: true,
    headers,
    images: { domains: cdnDomains },
    ...bundleAnalyzer,
    swcMinify: true,
    experimental: {
      serverActions: true
    }
  };
};

module.exports = configureNextjs;

// module.exports = {
//   images: {
//     domains: ['hips.hearstapps.com', 'img.youtube.com', 'pixabay.com']
//   }
// };
