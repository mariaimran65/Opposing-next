export const BASE_URI =
  process.env.NEXT_PUBLIC_BASE_URI || 'http://localhost:3000';

export const GOCUSTOMER_APP_URI =
  process.env.NEXT_PUBLIC_GOCUSTOMER_APP || 'http://localhost:3979';

export const API_URI =
  process.env.NEXT_PUBLIC_API_URI || 'http://localhost:5001/api/graphql';

export const SENTRY_DSN =
  process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
