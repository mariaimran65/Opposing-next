import { lazy, Suspense } from 'react';
import { BreadcrumbJsonLd } from 'next-seo';
import LandingPage from '@/layouts/LandingPage';
import { BASE_URI } from '../../../config';

const TermsOfServicesContent = lazy(() => import('./TermsOfServicesContent'));

function TermsOfServicesPage() {
  const crumbContent = [
    {
      text: 'Terms & Conditions'
    }
  ];
  return (
    <LandingPage
      from="terms"
      pageKey="termsOfService"
      showBreadCrumb
      crumbContent={crumbContent}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <TermsOfServicesContent />
      </Suspense>
      <BreadcrumbJsonLd
        itemListElements={[
          { position: 1, name: 'Home', item: BASE_URI },
          {
            position: 2,
            name: 'Terms and Conditions',
            item: `${BASE_URI}/terms-and-conditions`
          }
        ]}
      />
    </LandingPage>
  );
}

export default TermsOfServicesPage;
