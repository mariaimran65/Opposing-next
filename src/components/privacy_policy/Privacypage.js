import { lazy, Suspense } from 'react';
import LandingPage from '@/layouts/LandingPage';

// Lazy load the PrivacyContent component
const PrivacyContent = lazy(() => import('./PrivacyContent'));

function PrivacyPage() {
  const crumbContent = [
    {
      text: 'Privacy Policy'
    }
  ];

  return (
    <LandingPage
      from="privacy"
      pageKey="privacyPolicy"
      showBreadCrumb
      crumbContent={crumbContent}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <PrivacyContent />
      </Suspense>
    </LandingPage>
  );
}

export default PrivacyPage;
