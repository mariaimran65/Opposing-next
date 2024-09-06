const priorities = {
  '/': '1.0',
  '/about': '1.0',
  '/team': '1.0'
};

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URI || 'https://2ndpassport.org',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        ...(process.env.NEXT_PUBLIC_APP_ENV === 'production'
          ? { allow: '/' }
          : { disallow: '/' })
      }
    ]
  },
  transform: async (config, path) => {
    if (path.includes('/blog/page/')) {
      return null;
    }

    const priority =
      priorities[path] ||
      (path.substr(0, 5) === '/blog' ? '0.9' : config.priority);
    return {
      loc: path,
      priority,
      changefreq: config.changefreq,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    };
  }
};
