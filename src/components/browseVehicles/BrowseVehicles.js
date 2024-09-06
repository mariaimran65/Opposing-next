import React from 'react';

import LandingPage from '@/layouts/LandingPage';
import BrowseVehiclesPage from './BrowseVehiclesPage';

function BrowseVehiclesComponent() {
  return (
    <LandingPage>
      <BrowseVehiclesPage />
    </LandingPage>
  );
}

export default BrowseVehiclesComponent;
