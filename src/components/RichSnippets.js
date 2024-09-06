import { OrganizationJsonLd, FAQPageJsonLd } from 'next-seo';

import {
  ORG_NAME,
  ORG_LOGO,
  ORG_WEB_URL,
  ORG_TEL_NO,
  ORG_ADDRESS,
  ORG_TWITTER_URL,
  ORG_INSTAGRAM_URL,
  ORG_FACEBOOK_URL,
  ORG_LINKEDIN_URL
} from '@/constants/organization';

export function OrgRichSnippet() {
  return (
    <OrganizationJsonLd
      type="Organization"
      name={ORG_NAME}
      logo={ORG_LOGO}
      url={ORG_WEB_URL}
      address={{
        streetAddress: ORG_ADDRESS.address1,
        addressLocality: ORG_ADDRESS.locality,
        addressRegion: ORG_ADDRESS.region,
        postalCode: ORG_ADDRESS.postalCode,
        addressCountry: ORG_ADDRESS.countryShortCode
      }}
      contactPoint={[
        {
          telephone: ORG_TEL_NO,
          contactType: 'customer service',
          availableLanguage: ['English']
        }
      ]}
      sameAs={[
        ORG_TWITTER_URL,
        ORG_INSTAGRAM_URL,
        ORG_FACEBOOK_URL,
        ORG_LINKEDIN_URL
      ]}
    />
  );
}

export function FAQsRichSnippet({ data }) {
  return data && data.length ? <FAQPageJsonLd mainEntity={data} /> : null;
}
