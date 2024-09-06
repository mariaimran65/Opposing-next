import React from 'react';

import LandingPage from '@/layouts/LandingPage';
import BrowsePartsPage from './PartsPage';

function BrowsePartsComponent() {
  return (
    <LandingPage title>
      <BrowsePartsPage />
    </LandingPage>
  );
}

export default BrowsePartsComponent;
