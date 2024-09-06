import { FAQPageJsonLd } from 'next-seo';

export default function FaqSEO({ data }) {
  return <FAQPageJsonLd mainEntity={data} />;
}
