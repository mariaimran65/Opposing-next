export function shouldEnableAnalytics() {
  const ANALYTICS_ENV = ['production', 'staging'];
  return ANALYTICS_ENV.includes(process.env.NEXT_PUBLIC_APP_ENV);
}

export function getArticleURL(slug) {
  if (!slug) return null;
  return `/blog/${slug}`;
}
