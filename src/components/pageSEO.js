import { NextSeo } from 'next-seo';

import SEO_DATA from '@/constants/seo';

function PageSEO(props) {
  const { pageKey, pageNumber } = props || {};
  if (!pageKey || !SEO_DATA || !SEO_DATA[pageKey]) return;

  const pageMetaInfo = SEO_DATA[pageKey];

  return (
    <NextSeo
      title={
        pageMetaInfo.title +
        (!!pageNumber && pageNumber > 1 ? ` - page ${String(pageNumber)}` : '')
      }
      description={
        pageMetaInfo.description +
        (!!pageNumber && pageNumber > 1 ? ` - page ${String(pageNumber)}` : '')
      }
      canonical={
        pageMetaInfo.url +
        (!!pageNumber && pageNumber > 1 ? `/page/${String(pageNumber)}` : '')
      }
      openGraph={{
        type: 'website',
        url:
          pageMetaInfo.url +
          (!!pageNumber && pageNumber > 1 ? `/page/${String(pageNumber)}` : ''),
        title: pageMetaInfo.title,
        description: pageMetaInfo.description,
        images: [
          {
            width: 850,
            height: 600,
            url: pageMetaInfo.cover,
            alt: pageMetaInfo.title
          }
        ]
      }}
    />
  );
}

export default PageSEO;
