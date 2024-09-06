import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const excludedUrls = [
  '/privacy-policy',
  '/terms-and-conditions',
  '/cancellation-policy',
  '/faq',
  '/404'
];

const ConsentDialog = dynamic(() => import('./ConsentDialog'), {
  loading: () => null
});

export default function CookieConsent() {
  const router = useRouter();
  const [isConsentPopup, setConsentPopup] = useState(false);

  useEffect(() => {
    onRouteChange(window.location.pathname);
    router.events.on('routeChangeComplete', onRouteChange);
    return () => router.events.off('routeChangeComplete', onRouteChange);
  }, [router.events]);

  function onRouteChange(url) {
    const hasConsented = !!localStorage.getItem('has_consented');

    if (!hasConsented && !excludedUrls.includes(url)) {
      const homepageTopSection = document.getElementById('landing-top-section');
      if (homepageTopSection) {
        const intersectionObserver = new IntersectionObserver(
          (entries) => {
            if (!entries[0].isIntersecting) {
              setConsentPopup(true);
              intersectionObserver.disconnect();
            }
          },
          { threshold: [0.8] }
        );
        intersectionObserver.observe(
          document.getElementById('landing-top-section')
        );
      } else {
        setConsentPopup(true);
      }
    } else {
      setConsentPopup(false);
    }
  }

  function onConsent() {
    setConsentPopup(false);
    localStorage.setItem('has_consented', 'true');
  }

  if (!isConsentPopup) return null;

  return <ConsentDialog onConsent={onConsent} />;
}
